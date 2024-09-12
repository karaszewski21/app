import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Zakładam, że używasz Expo
import AudiobookScreen from '@/app/screens/audiobook'
import QuizScreen from '@/app/screens/quiz'
import Header from '@/components/layout/header';
import { SafeAreaView } from "react-native-safe-area-context";

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
      <BookStack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}} />
      <BookStack.Screen name="Audiobook" component={AudiobookScreen} options={{headerShown: false}}/>
    </BookStack.Navigator>
  );
}

const BookScreen = ({ route, navigation }:any) => {
  const { title } = route.params

  const quiz = [
    { id: '1', title: 'Quiz 1' },
    { id: '2', title: 'Quiz 2'}
  ];

  const audiobook = [
    { id: '1', title: 'Audio 1' },
    { id: '2', title: 'Audio 2'}
  ];

  const renderQuizItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.quizItem}
      onPress={() => navigation.navigate('Quiz', { id: item.id, title: item.title })}
    >
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  const renderAudiobookItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.quizItem}
      onPress={() => navigation.navigate('Audiobook', { id: item.id, title: item.title })}
    >
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerSubtitle}>Dostępne quizy</Text>
      </View>
      <FlatList
        data={quiz}
        renderItem={renderQuizItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
       <FlatList
        data={audiobook}
        renderItem={renderAudiobookItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
});