import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { usePlayerModal } from '@/context/playerModalContext';
import { SafeAreaView } from "react-native-safe-area-context";
import PrintoutsScreen from '@/app/screens/resources/printouts'
import QuizesScreen from '@/app/screens/resources/quizes'
import BookWrapper from '@/components/common/BookWrapper';
import SquareButton from '@/components/common/SquareButton';
import PlayButton from '@/components/buttons/PlayButton';
import { AudioPlay } from '@/model';

const AudioPlayStack = createStackNavigator();

export default function AudioPlayStackScreen({route}:any) {
  return (
    <AudioPlayStack.Navigator>
      <AudioPlayStack.Screen 
        name="Details" 
        component={AudioPlayScreen}
        options={{headerShown: false}}
        initialParams={route.params}
      />
      <AudioPlayStack.Screen name="Quizes" component={QuizesScreen} options={{headerShown: false}}/>
      <AudioPlayStack.Screen name="Printouts" component={PrintoutsScreen} options={{headerShown: false}}/>
    </AudioPlayStack.Navigator>
  );
}

const AudioPlayScreen = ({ route, navigation } : any) => {
  const audioplay = route.params.audioplay as AudioPlay;
  const { openPlayer } = usePlayerModal();
  const versions = audioplay.versions;


  const openAudio = (version: any) => {
    openPlayer({
      title: version.type,
      fileUrl: version.audioFile,
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg'
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BookWrapper props={audioplay}>
          {
            versions.map((item, index) => 
              <>
                { item.type === 'pl' &&  
                  <PlayButton 
                      key={index}
                      props={{
                      title:"Zacznij słuchać",
                      subtitle:"Czas słuchowiska: 5 min", 
                      onPress:() => openAudio(item),
                      backgroundColor:"#c3d5e1",
                      textColor:"#000"
                    }}
                  >
                    <Image source={require('@/assets/icons/pl.png')} style={{width: 30, height: 30}} resizeMode='contain'/> 
                  </PlayButton>
                }
              { item.type === 'eng' &&
                  <PlayButton 
                    key={index}
                    props={{
                      title:"Zacznij słuchać",
                      subtitle:"Czas słuchowiska: 5 min", 
                      onPress:() => openAudio(item),
                      backgroundColor:"#f5d066",
                      textColor:"#000"
                    }}
                  >
                    <Image source={require('@/assets/icons/uk.png')} style={{width: 30, height: 30}} resizeMode='contain'/> 
                  </PlayButton>
                }
              </>
            )
          }
          <View style={styles.buttons}>
            <SquareButton props={{title: 'quizy', icon: 'quiz', backgroundColor: '#55b1be', color: '#fff', navigate: () => navigation.navigate('Quizes', { book: '' })}}>
              <Image source={require('@/assets/icons/quiz.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
            </SquareButton>
            <SquareButton props={{title: 'drukowanki', icon: 'print',  backgroundColor: '#55b1be', color: '#fff', navigate: () =>  navigation.navigate('Printouts', { book: '' }) }}>
              <Image source={require('@/assets/icons/print.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
            </SquareButton>
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
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  listContent: {
    padding: 16,
  },
  quizItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  backButton: {
    marginLeft: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});