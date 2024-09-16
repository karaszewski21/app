import { useContext, createContext, type PropsWithChildren, useState } from 'react';

const PlayerModalContext = createContext<{
  openPlayer: () => void;
  closePlayer: () => void;
  setFile: (file:string) => void;
  isOpenPlayer: boolean;
  file: string;
}>({
    openPlayer: () => null,
    closePlayer: () => null,
    setFile: () => null,
    isOpenPlayer: false, 
    file: '',
});

// This hook can be used to access the user info.
export function usePlayerModal() {
  const value = useContext(PlayerModalContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <PlayerModalProvider />');
    }
  }

  return value;
}

export function PlayerModalProvider({ children }: PropsWithChildren) {
  const [openPlayer, setOpenPlayer] = useState(false);
  const [file, setFile] = useState('');

  return (
    <PlayerModalContext.Provider
      value={{
        openPlayer: () => {
          setOpenPlayer(true);
        },
        closePlayer: () => {
          setOpenPlayer(false);
        },
        setFile: (file) => {
          setFile(file)
        },
        isOpenPlayer: openPlayer,
        file: file,
      }}>  
      {children}
    </PlayerModalContext.Provider>
  );
}
