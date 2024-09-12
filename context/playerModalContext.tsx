import { useContext, createContext, type PropsWithChildren, useState } from 'react';
import { useStorageState } from '@/hooks/useStorageState';


const PlayerModalContext = createContext<{
  openSmall: () => void;
  openLarge: () => void;
  close: () => void;
  setFile: (file:string) => void;
  isOpenSmall: boolean;
  isOpenLarge: boolean;
  file: string;
}>({
    openSmall: () => null,
    openLarge: () => null,
    close: () => null,
    setFile: () => null,
    isOpenSmall: false, 
    isOpenLarge: false,
    file: ''
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
  const [openSmall, setOpenSmall] = useState(false);
  const [openLarge, setOpenLarge] = useState(false)
  const [file, setFile] = useState('')

  return (
    <PlayerModalContext.Provider
      value={{
        openSmall: () => {
          setOpenSmall(true);
        },
        openLarge: () => {
          setOpenLarge(true);
        },
        close: () => {
          setOpenSmall(false);
          setOpenLarge(false);
        },
        setFile: (file) => {
          setFile(file)
        },
        isOpenSmall: openSmall,
        isOpenLarge: openLarge,
        file: file
      }}>  
      {children}
    </PlayerModalContext.Provider>
  );
}
