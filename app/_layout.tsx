import { Slot, Stack } from 'expo-router';
import { SessionProvider } from '@/context/authContext';
import { PlayerModalProvider } from '@/context/playerModalContext';

export default function Root() {
  return (
      <SessionProvider>
        <PlayerModalProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </PlayerModalProvider>
      </SessionProvider>
  );
}