import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import AudiobooksScreen from '@/app/screens/resources/audiobooks'
import QuizesScreen from '@/app/screens/resources/quizes'
import ReaderFlipperScreen from '@/app/screens/reader_flipper'
import ReaderTextScreen from '@/app/screens/reader_text'
import BookWrapper from '@/components/common/BookWrapper';
import SquareButton from '@/components/common/SquareButton';
import ReaderButton from '@/components/buttons/ReaderButton';
import PrintoutsScreen from '@/app/screens/resources/printouts'
import VoiceQuizesScreen from '@/app/screens/resources/voice_quizes'

const ReaderStack = createStackNavigator();

export default function ReaderStackScreen({route}:any) {
  return (
    <ReaderStack.Navigator>
      <ReaderStack.Screen 
        name="Details" 
        component={ReaderScreen}
        options={{headerShown: false}}
        initialParams={route.params}
      />
      <ReaderStack.Screen name="Quizes" component={QuizesScreen} options={{headerShown: false}}/>
      <ReaderStack.Screen name="AudioBooks" component={AudiobooksScreen} options={{headerShown: false}}/>
      <ReaderStack.Screen name="Printouts" component={PrintoutsScreen} options={{headerShown: false}}/>
      <ReaderStack.Screen name="VoiceQuizes" component={VoiceQuizesScreen} options={{headerShown: false}}/>
      <ReaderStack.Screen name="ReaderFlipper" component={ReaderFlipperScreen} options={{headerShown: false}}/>
      <ReaderStack.Screen name="ReaderText" component={ReaderTextScreen} options={{headerShown: false}}/>
    </ReaderStack.Navigator>
  );
}

const ReaderScreen = ({ route, navigation }:any) => {
  const { reader } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BookWrapper props={reader}>
            <ReaderButton 
               props={{
                title:"Zacznij czytać",
                subtitle:"Czas czytania: 5 min", 
                onPress:() => navigation.navigate('ReaderText'),
                backgroundColor:"#c3d5e1",
                textColor:"#000"
             }}
            >
              <Image source={require('@/assets/icons/book.png')} style={{width: 50, height: 50}} resizeMode='contain'/> 
            </ReaderButton>
            <ReaderButton 
               props={{
                title:"Zacznij czytać",
                subtitle:"Czas czytania: 5 min", 
                onPress:() =>navigation.navigate('ReaderFlipper'),
                backgroundColor:"#f5d066",
                textColor:"#000"
             }}
            >
              <Image source={require('@/assets/icons/book-image.png')} style={{width: 50, height: 50}} resizeMode='contain'/> 
            </ReaderButton>
            <ReaderButton 
               props={{
                title:"Zacznij czytać",
                subtitle:"Czas czytania: 5 min", 
                onPress:() => navigation.navigate('ReaderFlipper'),
                backgroundColor:"#a5ccba",
                textColor:"#000"
             }}
            >
              <Image source={require('@/assets/icons/uk.png')} style={{width: 50, height: 50}} resizeMode='contain'/> 
            </ReaderButton>
          <View style={styles.buttons}>
            <SquareButton props={{title: 'quizy', icon: 'quiz', backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('Quizes', { book: '' }) }}>
              <Image source={require('@/assets/icons/quiz.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
            </SquareButton>
            <SquareButton props={{title: 'audiobooki', icon: 'audiobooki', backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('AudioBooks', { book: '' }) }}>
              <Image source={require('@/assets/icons/audiobook.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
            </SquareButton>
            <SquareButton props={{title: 'drukowanki', icon: 'print',  backgroundColor: '#55b1be', color: '#fff', navigate: () =>  navigation.navigate('Printouts', { book: '' }) }}>
              <Image source={require('@/assets/icons/print.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
            </SquareButton>
            {/* <SquareButton props={{title: 'english', icon: 'english', backgroundColor: '#55b1be', navigate: () => navigation.navigate('Langs', { book: '' }) }}>
              <Image source={require('@/assets/icons/eng.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
            </SquareButton> */}
          </View>
        </BookWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});