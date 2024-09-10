import { Slot, Stack } from 'expo-router';
import { SessionProvider } from '@/context/authContext';
import { PlayerModalProvider } from '@/context/playerModalContext';
import { NotificationProvider } from '@/context/notificationContext';
import { TabsScreenContextProvider } from '@/context/tabContext';

export default function Root() {
  return (
      <SessionProvider>
        <NotificationProvider>
          <TabsScreenContextProvider>
            <PlayerModalProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
              </Stack>
            </PlayerModalProvider>
          </TabsScreenContextProvider>
        </NotificationProvider>
      </SessionProvider>
  );
}