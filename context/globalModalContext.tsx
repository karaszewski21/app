import React, { useContext, createContext, type PropsWithChildren, useState, FunctionComponent } from 'react';

const GlobalModalContext = createContext<{
  openModal: () => void;
  closeModal: () => void;
  setComponent: (data:any) => void;
  isOpenModal: boolean;
  component: null,
  data: null,
}>({
    openModal: () => null,
    closeModal: () => null,
    setComponent: () => null,
    isOpenModal: false,
    component: null,
    data: null
});

// This hook can be used to access the user info.
export function useGlobalModal() {
  const value = useContext(GlobalModalContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <PlayerModalProvider />');
    }
  }

  return value;
}

export function GlobalModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState(null)
  const [data, setData] = useState(null)

  return (
    <GlobalModalContext.Provider
      value={{
        openModal: () => {
            setOpen(true);
        },
        closeModal: () => {
            setOpen(false);
        },
        setComponent: (data) => {
            setData(data)
          //  setComponent(component)
        },
        isOpenModal: open,
        component,
        data
      }}>  
      {children}
    </GlobalModalContext.Provider>
  );
}
