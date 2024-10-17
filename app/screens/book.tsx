import React, { Fragment, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import AudiobooksScreen from '@/app/screens/resources/audiobooks'
import QuizesScreen from '@/app/screens/resources/quizes'
import PrintoutsScreen from '@/app/screens/resources/printouts'
import VoiceQuizesScreen from '@/app/screens/resources/voice_quizes'
import LangsStack from '@/app/screens/resources/langs'

import BookWrapper from '@/components/common/BookWrapper';
import SquareButton from '@/components/common/SquareButton';
import BookButton from '@/components/buttons/BookButton';
import { Resource } from '@/model';

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
  const resources = book.resource as Resource[];

  return (
    <SafeAreaView style={styles.container}>
      <BookWrapper props={book}>
        <BookButton 
          title="Kup teraz"
          onPress={() => navigation.navigate('ReaderText')}
          leftIconName="book-open-page-variant"
          backgroundColor="#c45c48"
          textColor="#fff"
          customStyles={{
            container: { borderWidth: 1, borderColor: '#c83c45' },
            title: { fontSize: 20 },
            }}
          />
        <BookButton 
          title="Odblokuj książkę"
          onPress={() => navigation.navigate('ReaderFlipper')}
          leftIconName="image"
          backgroundColor="#f5d066"
          textColor="#000"
          customStyles={{
            container: { borderWidth: 1, borderColor: '#f5d066' },
            title: { fontSize: 20 },
            }}
          />
        <View style={styles.buttons}>
            {
              resources.map((element, index) => 
              <Fragment key={index}>
                { element.type === 'quiz' &&  
                  <SquareButton key={element.type} props={{title: 'quizy', icon: 'text', backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('Quizes', {book, resource: element}) }}>
                    <Image source={require('@/assets/icons/quiz.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }
                
                { element.type === 'audiobook' &&
                  <SquareButton  key={element.type} props={{title: 'audiobooki', icon: 'add', backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('AudioBooks', {book, resource: element}) }}>
                    <Image source={require('@/assets/icons/audiobook.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }

                { element.type === 'printouts' && 
                  <SquareButton  key={element.type} props={{title: 'drukowanki', icon: 'print',  backgroundColor: '#55b1be', color: '#fff', navigate: () =>  navigation.navigate('Printouts', {book, resource: element}) }}>
                    <Image source={require('@/assets/icons/print.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }

                { element.type === 'voice_quiz' && 
                  <SquareButton  key={element.type} props={{title: 'słuchaj i odpowiadaj', icon: 'add',  backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('VoiceQuizes', {book, resource: element}) }}>
                    <Image source={require('@/assets/quizvoice.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }

                { element.type === 'english' && 
                  <SquareButton  key={element.type} props={{title: 'angielski', icon: 'flag', backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('Langs', {book, resource: element}) }}>
                    <Image source={require('@/assets/icons/eng.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }
              </Fragment>
              )
            }
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