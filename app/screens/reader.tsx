import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
  const reader = {
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg'
    ],
    title: "Tytuł Czytanki",
    description: "Opis Czytanki"
  }

  return (
    <SafeAreaView style={styles.container}>
      <BookWrapper props={reader}>
          <ReaderButton 
            title="Zacznij czytać"
            subtitle="Czas czytania: 5 min"
            onPress={() => navigation.navigate('ReaderText')}
            leftIconName="book-open-page-variant"
            backgroundColor="#c3d5e1"
            textColor="#000"
            customStyles={{
              container: { borderWidth: 1, borderColor: '#c3d5e1' },
              title: { fontSize: 20 },
              }}
            />
          <ReaderButton 
            title="Zacznij czytać"
            subtitle="Czas czytania: 5 min"
            onPress={() => navigation.navigate('ReaderFlipper')}
            leftIconName="image"
            backgroundColor="#f5d066"
            textColor="#000"
            customStyles={{
              container: { borderWidth: 1, borderColor: '#f5d066' },
              title: { fontSize: 20 },
              }}
            />
          <ReaderButton 
            title="Zacznij czytać"
            subtitle="Czas czytania: 5 min"
            onPress={() => navigation.navigate('ReaderFlipper')}
            leftIconName="flag"
            backgroundColor="#fefefe"
            textColor="#000"
            customStyles={{
              container: { borderWidth: 1, borderColor: '#fefefe' },
              title: { fontSize: 20 },
              }}
          />
        <View style={styles.buttons}>
          <SquareButton props={{title: 'quizy', icon: 'quiz', backgroundColor: '#55b1be', navigate: () => navigation.navigate('Quizes', { book: '' }) }}>
            <Image source={require('@/assets/icons/quiz.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
          </SquareButton>
          <SquareButton props={{title: 'audiobooki', icon: 'audiobooki', backgroundColor: '#55b1be', navigate: () => navigation.navigate('AudioBooks', { book: '' }) }}>
            <Image source={require('@/assets/icons/audiobook.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
          </SquareButton>
          <SquareButton props={{title: 'drukowanki', icon: 'print',  backgroundColor: '#55b1be', navigate: () =>  navigation.navigate('Printouts', { book: '' }) }}>
            <Image source={require('@/assets/icons/print.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
          </SquareButton>
          <SquareButton props={{title: 'english', icon: 'english', backgroundColor: '#55b1be', navigate: () => navigation.navigate('Langs', { book: '' }) }}>
            <Image source={require('@/assets/icons/eng.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
          </SquareButton>
        </View>
      </BookWrapper>
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