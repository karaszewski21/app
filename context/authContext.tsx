import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '@/hooks/useStorageState';
import { GoogleSignin, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '62513865915-impf1a6atltu69koftipuuu9ge2o26kj.apps.googleusercontent.com',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signIn();
    const token = await GoogleSignin.getTokens();
    const response = await fetch(`https://1d6c-188-47-110-123.ngrok-free.app/api/auth/google/callback?access_token=${token.accessToken}`);
    const json = await response.json();
    const { jwt } = json;

    return jwt

  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          break;
        case statusCodes.IN_PROGRESS:
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          break;
        default:
      }
    } else {
    }
  }
};

const signOut = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
  } catch (error) {
  
  }
};

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
          const jwt = await signIn()

          if (true) {
            setSession('jwt');
          }
        },
        signOut: async () => {
          await signOut()
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
