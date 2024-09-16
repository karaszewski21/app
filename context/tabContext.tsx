import React, { createContext, useState, useContext } from 'react';

const TabsScreenContext = createContext<{
    showTabs: () => void;
    hiddenTabs: () => void;
    isTabs: boolean;
  }>({
    showTabs: () => null,
    hiddenTabs: () => null,
    isTabs: true
  });

export const useTabsScreen= () => useContext(TabsScreenContext);

export const TabsScreenContextProvider = ({ children }: any) => {
    const [isTabs, setTabs] = useState<boolean>(true);

    return (
        <TabsScreenContext.Provider 
        value={{
            isTabs,
            showTabs: () => setTabs(true),
            hiddenTabs: () => setTabs(false)
        }}
        >
        {children}
        </TabsScreenContext.Provider>
    );
};