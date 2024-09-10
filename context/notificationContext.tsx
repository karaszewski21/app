import React, { createContext, useState, useContext, useEffect } from 'react';
import { LogLevel, NotificationClickEvent, OneSignal } from 'react-native-onesignal';

const NotificationContext = createContext<{
    logout: () => void;
    clearNotifications: () => void;
    notifications: null | NotificationClickEvent;
  }>({
      logout: () => null,
      clearNotifications: () => null,
      notifications: {notification: {} as any, result: {}} 
  });

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: any) => {
    const [notifications, setNotifications] = useState<null | NotificationClickEvent>(null);

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize("5aad46a6-00e8-4d7d-b4f1-48139fd86dda");
    OneSignal.Notifications.requestPermission(true);
    OneSignal.login('karaszewski21@gmail.com')

    useEffect(() => {
        OneSignal.Notifications.addEventListener('click', (event) => {
            const { notification } = event;
            setNotifications(event)
        });
        return () => {
        // Clean up OneSignal listeners if necessary
        };
    }, []);

    const clearNotifications = () => {

    };

    const logout = () => {
        // Remove external_id only
        OneSignal.logout();
    };

    return (
        <NotificationContext.Provider 
        value={{
            notifications,
            clearNotifications,
            logout
        }}
        >
        {children}
        </NotificationContext.Provider>
    );
};