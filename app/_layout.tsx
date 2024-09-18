import { Slot, Stack } from 'expo-router';
import { SessionProvider } from '@/context/authContext';
import { PlayerModalProvider } from '@/context/playerModalContext';
import { NotificationProvider } from '@/context/notificationContext';
import { TabsScreenContextProvider } from '@/context/tabContext';
import { GlobalModalProvider } from '@/context/globalModalContext';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Root() {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}
  return (
 
        <SessionProvider>
          <NotificationProvider>
            <TabsScreenContextProvider>
              <PlayerModalProvider>
                <GlobalModalProvider>
        
                    <Stack>
                      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                      <Stack.Screen name="index" options={{ headerShown: false }} />
                    </Stack>

                </GlobalModalProvider>
              </PlayerModalProvider>
            </TabsScreenContextProvider>
          </NotificationProvider>
        </SessionProvider>
 
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});