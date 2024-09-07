import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BookScreen from '@/app/screens/book'

const BooksStack = createStackNavigator();

export default function BooksStackScreen() {
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen name="Books" component={BooksScreen} options={{headerShown: true}}/>
      <BooksStack.Screen name="Book" component={BookScreen} options={{headerShown: false}}/>
    </BooksStack.Navigator>
  );
}

const BooksScreen = ({ navigation }:any) => {

  const books = [
    { id: '1', title: 'Książka 1' },
    { id: '2', title: 'Książka 2' },
    { id: '3', title: 'Książka 3' },
    { id: '4', title: 'Książka 4' },
    { id: '5', title: 'Książka 5' },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.bookItem}
      onPress={() => navigation.navigate('Book', { title: item.title})}
    >
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  close: {
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  tile: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  tileText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  closeButton: {
    padding: 10,
    marginRight: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  bookItem: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
