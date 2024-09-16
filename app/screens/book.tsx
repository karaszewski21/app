import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AudiobooksScreen from '@/app/screens/resources/audiobooks'
import QuizesScreen from '@/app/screens/resources/quizes'
import { SafeAreaView } from "react-native-safe-area-context";
import BookWrapper from '@/components/common/BookWrapper';
import SquareButton from '@/components/common/SquareButton';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';

const BookStack = createStackNavigator();

export default function BookStackScreen({route}:any) {
  return (
    <BookStack.Navigator>
      <BookStack.Screen 
        name="Details" 
        component={BookScreen} 
        options={{headerShown: false}} 
        initialParams={route.params}
      />
      <BookStack.Screen name="Quizes" component={QuizesScreen} options={{headerShown: false}} />
      <BookStack.Screen name="AudioBooks" component={AudiobooksScreen} options={{headerShown: false}}/>
    </BookStack.Navigator>
  );
}

const BookScreen = ({ route, navigation }:any) => {
  const { book } = route.params;


  const height = useSharedValue(0);

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(200);


  }, []);

  const buy = () => {
    console.log('buy book')
  }


  return (
    <SafeAreaView style={styles.container}>
      <BookWrapper props={book}>
        <View style={styles.buttons}>
          <SquareButton props={{title: 'Quiz', icon: 'text', bookId: '', navigate: () =>  navigation.navigate('Quizes') }}></SquareButton>
          <SquareButton props={{title: 'AudioBooks', icon: 'add', bookId: '', navigate: () => navigation.navigate('AudioBooks')}}></SquareButton>
        </View>
      </BookWrapper>
      {  book.isLock &&
        <Animated.View  style={{...styles.overlayContainer,height}}>
            <Overlay opacity={0.6} style={styles.overlay}>
                <FunnyButton props={{title:'kup',onPress:buy, icon: ''}}></FunnyButton>
                <FunnyButton props={{title:'odblokuj',onPress:buy, icon: ''}}></FunnyButton>
            </Overlay> 
        </Animated.View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
 
  },
  overlay: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  }
});