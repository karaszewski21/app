import React, { createContext, useState, useContext } from 'react';

const TabsScreenContext = createContext<{
    show: () => void;
    hidden: () => void;
    tab: boolean;
  }>({
      show: () => null,
      hidden: () => null,
      tab: true
  });

export const useTabsScreen= () => useContext(TabsScreenContext);

export const TabsScreenContextProvider = ({ children }: any) => {
    const [tab, setTab] = useState<boolean>(true);


    const show = () => {
        setTab(true)
    };

    const hidden = () => {
        setTab(false)
    };

    return (
        <TabsScreenContext.Provider 
        value={{
            tab,
            show,
            hidden
        }}
        >
        {children}
        </TabsScreenContext.Provider>
    );
};