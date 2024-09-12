import { Redirect, Tabs } from 'expo-router';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSession } from '@/context/authContext';
import { usePlayerModal } from '@/context/playerModalContext';
import Player from '@/components/player/VideoPlayer';
import TabBar  from '@/components/TabBar';
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useTabsScreen } from '@/context/tabContext';


export default function TabLayout() {
  const { session, isLoading } = useSession();
  const { isOpenLarge, isOpenSmall, close } = usePlayerModal();
  const { width, height } = useWindowDimensions();
  const heightModal = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const { show, hidden } = useTabsScreen();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value)}],
  }));

  useEffect(() => {
      translateY.value = 0;

      if (isOpenLarge) {
        heightModal.value = withSpring(height - 30);
        hidden();
      }

      if (isOpenSmall) {
        heightModal.value = withSpring(60);
        show();
      }

  }, [isOpenLarge,isOpenSmall])


  const closeModal = () => {
      close();
      show()
  }

  if (!session) {
    return (
      <Redirect href="/(auth)/preview" />
    );
  }
  
  return (
    <>
      <Tabs  tabBar={ props => 
          <>
              { isOpenLarge || isOpenSmall ?
                <SafeAreaView>
                  <Animated.View style={{...animatedStyles, height: heightModal}}>
                      <View style={styles.modalContent}>
                        <View style={{width: '100%'}}>
                          <TouchableOpacity onPress={closeModal}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                            <Text>Modal</Text>
                        </View>
                      </View>
                  </Animated.View>
                </SafeAreaView>
                : null
                }
                <TabBar {...props} />
            </>
            }
            screenOptions={{headerShown: false}}
            >
            <Tabs.Screen
              name="index"
              options={{
                title: 'Home',
              }}
            />
            <Tabs.Screen
              name="books"
              options={{
                title: 'Książki',
              }}
            />
            <Tabs.Screen
              name="fave"
              options={{
                title: 'Ulubione',
              }}
            />
            <Tabs.Screen
              name="fun"
              options={{
                title: 'Zabawy',
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: 'Profil',
              }}
            />
          </Tabs>
    </>
  );
  
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute', 
    transform: [{translateY: 0}],
    flexDirection: 'row',
    backgroundColor: 'green',
    marginHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    zIndex: 10
  }
});
