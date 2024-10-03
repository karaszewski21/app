import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import AudiobooksScreen from '@/app/screens/resources/audiobooks'
import QuizesScreen from '@/app/screens/resources/quizes'
import PrintoutsScreen from '@/app/screens/resources/printouts'
import VoiceQuizesScreen from '@/app/screens/resources/voice_quizes'
import LangsStack from '@/app/screens/resources/langs'

import BookWrapper from '@/components/common/BookWrapper';
import SquareButton from '@/components/common/SquareButton';
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
      <BookStack.Screen name="Printouts" component={PrintoutsScreen} options={{headerShown: false}}/>
      <BookStack.Screen name="VoiceQuizes" component={VoiceQuizesScreen} options={{headerShown: false}}/>
      <BookStack.Screen name="Langs" component={LangsStack} options={{headerShown: false}}/>
    </BookStack.Navigator>
  );
}

const BookScreen = ({ route, navigation }:any) => {
  const { book } = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <BookWrapper props={book}>
        <FunnyButton props={{title:'kup',onPress: () => console.log('--->buy'), icon: ''}}></FunnyButton>
        <FunnyButton props={{title:'odblokuj',onPress: () => console.log('--->odblokuj'), icon: ''}}></FunnyButton>
        <View style={styles.buttons}>
          <SquareButton props={{title: 'Quiz', icon: 'text', navigate: () =>  navigation.navigate('Quizes', { book }) }}></SquareButton>
          <SquareButton props={{title: 'AudioBooks', icon: 'add', navigate: () => navigation.navigate('AudioBooks', { book }) }}></SquareButton>
          <SquareButton props={{title: 'Wydruki', icon: 'print', navigate: () =>  navigation.navigate('Printouts', { book }) }}></SquareButton>
          <SquareButton props={{title: 'Quiz głosowy', icon: 'add', navigate: () => navigation.navigate('VoiceQuizes', { book }) }}></SquareButton>
          <SquareButton props={{title: 'Angalski', icon: 'flag', navigate: () => navigation.navigate('Langs', { book }) }}></SquareButton>
        </View>
      </BookWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});