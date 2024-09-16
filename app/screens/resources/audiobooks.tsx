import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native';
import Quiz from '@/components/quiz/Quiz'
import { audiobook } from '@/constants/Audiobook';
import Audiobook from '@/components/audiobook/Audiobook'
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const AudioBooksStack = createStackNavigator();

export default function AudioBooksStackScreen() {
  return (
    <AudioBooksStack.Navigator>
      <AudioBooksStack.Screen name="AudiobooksDetails" component={AudiobooksScreen} options={{headerShown: false}} />
    </AudioBooksStack.Navigator>
  );
}

const AudiobooksScreen = ({ navigation }:any) => { 
  const [currentAudiobook, setCurrentAudiobook] = useState(null)

  const audiobookList = [
    { id: '1', title: 'Audio 1', audiobook: audiobook},
    { id: '2', title: 'Audio 2', audiobook: audiobook}
  ];

  const openAudioBookItem = (quiz:any) => {
      setCurrentAudiobook(quiz)
  }

  const renderAudioBookItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.quizItem}
      onPress={() =>openAudioBookItem(item.quiz)}
    >
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <FlatList
          data={audiobookList}
          renderItem={renderAudioBookItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
    
  )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      padding: 20,
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
    listContent: {
      padding: 16,
    },
  });