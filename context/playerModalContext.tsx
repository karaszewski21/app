import { useContext, createContext, type PropsWithChildren, useState } from 'react';

interface Record {
  title: string;
  imageUrl: string;
  fileUrl: string;
}

const PlayerModalContext = createContext<{
  openPlayer: (record: Record) => void;
  closePlayer: () => void;
  isOpenPlayer: boolean;
  record: Record | null;
}>({
    openPlayer: () => null,
    closePlayer: () => null,
    isOpenPlayer: false, 
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
  const [openPlayer, setOpenPlayer] = useState(false);
  const [record, setRecord] = useState<Record | null>(null);

  return (
    <PlayerModalContext.Provider
      value={{
        openPlayer: (record: Record) => {
          setOpenPlayer(true);
          setRecord(record);
        },
        closePlayer: () => {
          setOpenPlayer(false);
        },
        isOpenPlayer: openPlayer,
        record: record,
      }}>  
      {children}
    </PlayerModalContext.Provider>
  );
}
