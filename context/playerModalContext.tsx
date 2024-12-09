import { useContext, createContext, type PropsWithChildren, useState } from 'react';

interface Record {
  title: string;
  imageUrl: string;
  fileUrl: string;
}

const PlayerModalContext = createContext<{
  openPlayer: (record: Record) => void;
  openFullPlayer: (full: boolean) => void;
  closePlayer: () => void;
  isOpenPlayer: boolean;
  isFullOpenPlayer: boolean;
  record: Record | null;
}>({
    openPlayer: () => null,
    openFullPlayer: () => null,
    closePlayer: () => null,
    isOpenPlayer: false, 
    isFullOpenPlayer: false,
    record: null
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
  const [openPlayer,  setOpenPlayer] = useState(false);
  const [openFullPlayer,  setFullOpenPlayer] = useState(false);
  const [record, setRecord] = useState<Record | null>(null);

  return (
    <PlayerModalContext.Provider
      value={{
        openPlayer: (record: Record) => {
          setOpenPlayer(true);
          setRecord(record);
        },
        openFullPlayer: (full: boolean) => {
          setFullOpenPlayer(full);
        },
        closePlayer: () => {
          setOpenPlayer(false);
          setFullOpenPlayer(false);
        },
        isOpenPlayer: openPlayer,
        isFullOpenPlayer: openFullPlayer,
        record: record,
      }}>  
      {children}
    </PlayerModalContext.Provider>
  );
}
