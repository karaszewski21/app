import { Slot, Stack } from 'expo-router';
import { SessionProvider } from '@/context/authContext';
import { PlayerModalProvider } from '@/context/playerModalContext';
import { NotificationProvider } from '@/context/notificationContext';
import { TabsScreenContextProvider } from '@/context/tabContext';
import { GlobalModalProvider } from '@/context/globalModalContext';
import { ImageBackground, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { DefaultTheme, NavigationContainer, DarkTheme } from '@react-navigation/native';
import { globalTheme } from '@/constants/Colors';
import { NativeBaseProvider } from "native-base";
import { AudioSentenceProvider } from '@/components/common/SentenceItem';
import { StatusBar } from "expo-status-bar";


export default function Root() {
    const [loaded, error] = useFonts({
      'Chewy': require('@/assets/fonts/Chewy-Regular.ttf'),
      'Dekko': require('@/assets/fonts/Dekko-Regular.ttf'),
      'ShantellSans-SemiBold': require('@/assets/fonts/ShantellSans-SemiBold.ttf'),
      'ShantellSans-SemiBoldItalic': require('@/assets/fonts/ShantellSans-SemiBoldItalic.ttf'),
    });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }

  return (
    <SessionProvider>
       <NativeBaseProvider>
        {/* <NotificationProvider> */}
        <AudioSentenceProvider>
          <TabsScreenContextProvider>
            <PlayerModalProvider>
              <GlobalModalProvider>
                <Stack>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                  <Stack.Screen name="index" options={{ headerShown: false }} />
                  <StatusBar style="light" />
                </Stack>
              </GlobalModalProvider>
            </PlayerModalProvider>
          </TabsScreenContextProvider>
        </AudioSentenceProvider>
        {/* </NotificationProvider> */}
      </NativeBaseProvider>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
