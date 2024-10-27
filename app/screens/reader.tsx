import React, { Fragment, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ScrollView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
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
import { ReaderContent, Resource } from '@/model';
import { OptionsReader } from '@/model/reader';

const ReaderStack = createStackNavigator();

export default function ReaderStackScreen({route}:any) {
  const { reader } = route.params;
  const options = reader.content.options as OptionsReader;
  return (
    <ImageBackground source={{uri:options.backgroundUrl}}  style={styles.rootContainer} resizeMode='cover'>
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
    </ImageBackground>
  );
}

const ReaderScreen = ({ route, navigation }:any) => {
  const { reader } = route.params;
  const resources = reader.resource as Resource[];
  const content = reader.content as ReaderContent;
  const options = reader.content.options as OptionsReader;

  const [contentData, setContentData] = useState<ReaderContent | null>(null);

  useEffect(() => {
    setContentData(reader.content as ReaderContent);
    return () => {
      setContentData(null);
    };
  }, [reader]);

  // Zabezpieczenie przed renderowaniem przed załadowaniem danych
  if (!contentData) {
    return null; // lub loading spinner
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BookWrapper props={{...reader, textColor: options.textColor}}>
            <ReaderButton 
               props={{
                title: options.text.title,
                subtitle: options.text.subTitle, 
                onPress:() => navigation.navigate('ReaderText', { content: content.text}),
                backgroundColor: options.text.backgroundColor,
                textColor: options.text.textColor
             }}
            >
              <Image source={require('@/assets/icons/book.png')} style={{width: 50, height: 50}} resizeMode='contain'/> 
            </ReaderButton>
            <ReaderButton 
               props={{
                title: options.image.title,
                subtitle: options.image.subTitle,
                onPress:() =>navigation.navigate('ReaderFlipper', { content: contentData.image}),
                backgroundColor: options.image.backgroundColor,
                textColor: options.image.textColor
             }}
            >
              <Image source={require('@/assets/icons/book-image.png')} style={{width: 50, height: 50}} resizeMode='contain'/> 
            </ReaderButton>
            <ReaderButton 
               props={{
                title: options.english.title,
                subtitle: options.english.subTitle,
                onPress:() => navigation.navigate('ReaderFlipper'),
                backgroundColor: options.english.backgroundColor,
                textColor: options.english.textColor
             }}
            >
              <Image source={require('@/assets/icons/eng-flag.png')} style={{width: 50, height: 50}} resizeMode='contain'/> 
            </ReaderButton>
          <View style={styles.buttons}>
            {
              resources.map((element, index) => 
              <Fragment key={index}>
                { element.type === 'quiz' &&  
                  <SquareButton key={element.type} props={{title: 'quizy', icon: 'text', backgroundColor: options.tileColor, color: '#fff', navigate: () => navigation.navigate('Quizes', { book:reader, resource: element}) }}>
                    <Image source={require('@/assets/icons/quiz.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }
                
                { element.type === 'audiobook' &&
                  <SquareButton  key={element.type} props={{title: 'audiobooki', icon: 'add', backgroundColor: options.tileColor, color: '#fff', navigate: () => navigation.navigate('AudioBooks', {book:reader, resource: element}) }}>
                    <Image source={require('@/assets/icons/audiobook.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }

                { element.type === 'printouts' && 
                  <SquareButton  key={element.type} props={{title: 'drukowanki', icon: 'print',  backgroundColor:options.tileColor, color: '#fff', navigate: () =>  navigation.navigate('Printouts', {book:reader, resource: element}) }}>
                    <Image source={require('@/assets/icons/print.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }
              </Fragment>
              )
            }
          </View>
        </BookWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },
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