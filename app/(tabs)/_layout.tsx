import { Redirect, Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSession } from '@/context/authContext';
import TabBar  from '@/components/TabBar';
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { useGlobalModal } from '@/context/globalModalContext';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export const AppStack = createStackNavigator();

export default function TabLayout() {
  const { session } = useSession();
  const translateY = useSharedValue<number>(0);
  const { isTabs } = useTabsScreen();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value)}],
  }));

  useEffect(() => {
      translateY.value = 0;
      if (!isTabs) {
        translateY.value = withSpring(60);
      }

  }, [isTabs])


  if (!session) {
    return (
      <Redirect href="/(auth)/preview" />
    );
  }
  
  return (
    <>
      <Tabs  tabBar={ props => 
          <>
              {/* { isOpenModal &&
                  <SafeAreaView>
                    <ScrollView>
                      <Animated.View style={{...animatedStyles, height: heightModal}}>
                
                            <View style={styles.modalContent}>
                              <View style={{width: '100%'}}>
                                {data && <Quiz quizData={data} /> }
                                <TouchableOpacity onPress={closeQuiz}>
                                      <Text>Close</Text>
                                  </TouchableOpacity>
                              </View>
                            </View>
                      
                      </Animated.View>
                    </ScrollView>
                  </SafeAreaView>
              } */}

              {/* { isOpenPlayer &&
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
                } */}
                 <Animated.View style={{...animatedStyles, transform: [{translateY: 0}]}}>
                    <TabBar {...props} />
                 </Animated.View>
            </>
            }
            screenOptions={{headerShown: false}}
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
    </>
  );
  
}

// const styles = StyleSheet.create({
//   modalContent: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     position: 'absolute', 
//     transform: [{translateY: -10}],
//     flexDirection: 'row',
//     backgroundColor: 'green',
//     marginHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 25,
//     borderCurve: 'continuous',
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 10},
//     shadowRadius: 10,
//     shadowOpacity: 0.1,
//     zIndex: 10
//   }
// });
