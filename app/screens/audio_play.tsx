import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import AudiobooksScreen from '@/app/screens/resources/audiobooks'
import QuizesScreen from '@/app/screens/resources/quizes'
import BookWrapper from '@/components/common/BookWrapper';
import SquareButton from '@/components/common/SquareButton';

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
    </AudioPlayStack.Navigator>
  );
}

const AudioPlayScreen = ({ route, navigation }:any) => {
  const { title } = route.params

  const audiplay = {
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg'
    ],
    title: "Tytuł Słuchowska",
    description: "Opis Słuchowska"
  }

  return (
    <SafeAreaView style={styles.container}>
      <BookWrapper props={audiplay}>
        <Text>Play słuchowsko</Text>
        <View style={styles.buttons}>
          <SquareButton props={{title: 'Quiz', icon: 'text', bookId: '', navigate: () =>  navigation.navigate('Quizes') }}></SquareButton>
        </View>
      </BookWrapper>
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