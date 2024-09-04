import { useContext, createContext, type PropsWithChildren, useState } from 'react';
import { useStorageState } from '@/hooks/useStorageState';


const PlayerModalContext = createContext<{
  open: () => void;
  close: () => void;
  isOpen: boolean;
}>({
    open: () => null,
    close: () => null,
    isOpen: false 
});

// This hook can be used to access the user info.
export function useModal() {
  const value = useContext(PlayerModalContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function PlayerModalProvider({ children }: PropsWithChildren) {
  const [state, setSession] = useState(false)

  return (
    <PlayerModalContext.Provider
      value={{
        open: () => {
          setSession(true);
        },
        close: () => {
          setSession(false);
        },
        isOpen: state,
      }}>  
      {children}
    </PlayerModalContext.Provider>
  );
}
