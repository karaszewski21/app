import { Redirect } from 'expo-router';
import { useSession } from '@/context/authContext';
import TabBar  from '@/components/TabBar';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Fragment, useEffect } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { usePlayerModal } from '@/context/playerModalContext';
import { ActivityIndicator, Easing, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './index';
import BooksScreen from './books';
import FavoritesScreen from './fave';
import FunScreen from './fun';
import ProfileScreen from './profile';
import Player from '@/components/player/Player';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const { session } = useSession();
  const translateTabsY = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const { isTabs } = useTabsScreen();
  const { isOpenPlayer, isFullOpenPlayer } = usePlayerModal();

  const animatedTabsStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateTabsY.value)}],
  }));

  const animatedModalStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value)}],
  }));

  useEffect(() => {
    translateTabsY.value = 0;
      if (!isTabs) {
        translateTabsY.value = withSpring(70);
      }

  }, [isTabs]);

  useEffect(() => {
      translateY.value = 0;
      if (isOpenPlayer) {
        translateY.value = withSpring(-120,
          {  
            mass: 1,
            damping: 50,
            stiffness: 100
          }
        );
      }

      if (isFullOpenPlayer) {
        translateY.value = withSpring(-250,
          {  
            mass: 1,
            damping: 50,
            stiffness: 100
          }
        );
      }

  }, [isOpenPlayer, isFullOpenPlayer]);

  if (!session) {
    return (
      <Redirect href="/(auth)/preview" />
    );
  }

  const Loader = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          animation: 'shift'
        }} 
      tabBar={props => 
        <Fragment>
          {  
            isOpenPlayer &&
            <Animated.View style={{...animatedModalStyles, transform: [{translateY: 0}]}}>
              <Player />
            </Animated.View>
          }
          <Animated.View style={{...animatedTabsStyles, transform: [{translateY: 0}]}}>
              <TabBar {...props} /> 
          </Animated.View>
        </Fragment>
        }
      >
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="books"
        component={BooksScreen}
        options={{
          title: 'Książki',
        }}
      />
      <Tab.Screen
        name="fave"
        component={FavoritesScreen}
        options={{
          title: 'Ulubione',
        }}
      />
      <Tab.Screen
        name="fun"
        component={FunScreen}
        options={{
          title: 'Opowieści',
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="profile"
        options={{
          title: 'Profil',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});