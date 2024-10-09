import { Redirect, Tabs } from 'expo-router';
import { useSession } from '@/context/authContext';
import TabBar  from '@/components/TabBar';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { usePlayerModal } from '@/context/playerModalContext';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from '@/components/player/SmallPlayer'
import { DefaultTheme, NavigationContainer, DarkTheme  } from '@react-navigation/native';
import { ImageBackground, StyleSheet } from 'react-native';

export const AppStack = createStackNavigator();

export default function TabLayout() {
  const { session } = useSession();
  const translateTabsY = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const { isTabs } = useTabsScreen();
  const { isOpenPlayer } = usePlayerModal();

  const animatedTabsStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateTabsY.value)}],
  }));

  const animatedModalStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value)}],
  }));


  useEffect(() => {
    translateTabsY.value = 0;
      if (!isTabs) {
        translateTabsY.value = withSpring(60);
      }

  }, [isTabs]);


  useEffect(() => {
      translateY.value = 0;
      if (isOpenPlayer) {
        translateY.value = withSpring(-70);
      }

  }, [isOpenPlayer]);


  if (!session) {
    return (
      <Redirect href="/(auth)/preview" />
    );
  }

  const globalTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    background: 'transparent',
    },
  };
  
  return (
    <ImageBackground
      //source={require('@/assets/dark.png')}
      source={require('@/assets/bg3.png')}
      style={styles.rootContainer}
      resizeMode='cover'
    >
      <NavigationContainer independent={true}  theme={globalTheme}>
        <Tabs
          screenOptions={{headerShown: false}} 
          tabBar={props => 
            <>
              {  
                isOpenPlayer &&
                <Animated.View style={{...animatedModalStyles, transform: [{translateY: 0}]}}>
                  <VideoPlayer />
                </Animated.View>
              }
              <Animated.View style={{...animatedTabsStyles, transform: [{translateY: 0}]}}>
                  <TabBar {...props} /> 
              </Animated.View>
            </>
            }
          >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              unmountOnBlur: true
            }}
          />
          <Tabs.Screen
            name="books"
            options={{
              title: 'Książki',
              unmountOnBlur: true
            }}
          />
          <Tabs.Screen
            name="fave"
            options={{
              title: 'Ulubione',
              unmountOnBlur: true
            }}
          />
          <Tabs.Screen
            name="fun"
            options={{
              title: 'Zabawy',
              unmountOnBlur: true
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profil',
              unmountOnBlur: true
            }}
          />
        </Tabs>
        </NavigationContainer>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
   // backgroundColor: '#f3dfbe'
   // backgroundColor: '#f2eee5'
    //backgroundColor :'#7b7b5f'
  },
});