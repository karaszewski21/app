import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import BookStackScreen from '@/app/screens/book';
import NewsScreen from '@/app/screens/news';
import StoryScreen from '@/app/screens/story';
import ReaderStackScreen from '@/app/screens/reader';

const HomeStack = createStackNavigator();

export default function HomeScreenStack() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen 
          name="News" 
          component={NewsScreen}
        />
        <HomeStack.Screen 
          name="Story" 
          component={StoryScreen}
        />
        <HomeStack.Screen 
          name="BookDetails" 
          component={BookStackScreen}
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen 
          name="ReaderDetails" 
          component={ReaderStackScreen}
          options={{
            headerShown: false
          }}
        />
      </HomeStack.Navigator>
  );
}

const HomeScreen = ({ navigation }: any) => {
  const top = [
    { id: '1', title: 'Książka 1', image: 'https://via.placeholder.com/150' },
  ];

  const stories = [
    { id: '1', title: 'Historia 1', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Historia 2', image: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Historia 3', image: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Historia 4', image: 'https://via.placeholder.com/100' },
    { id: '5', title: 'Historia 5', image: 'https://via.placeholder.com/100' },
    { id: '6', title: 'Historia 6', image: 'https://via.placeholder.com/100' },
  ];

  const books = [
    { id: '1', title: 'Książka 1', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Książka 2', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Książka 3', image: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Książka 4', image: 'https://via.placeholder.com/150' },
  ];

  const readers = [
    { id: '1', title: 'Czytaka 1', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Czytaka 2', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Czytaka 3', image: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Czytaka 4', image: 'https://via.placeholder.com/150' },
  ];

  const renderTopItem = ({ item } :any) => (
    <TouchableOpacity 
        style={styles.newsButton}
        onPress={() => navigation.navigate('News')}
      >
      <Text style={styles.newsButtonText}>Aktualności</Text>
      <Ionicons name="chevron-forward" size={24} color="#fff" />
    </TouchableOpacity>
  );

  const renderStoryItem = ({ item } :any) => (
    <TouchableOpacity style={styles.storyItem}>
      <Image source={{ uri: item.image }} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderBookItem = (book: any) => (
    <TouchableOpacity 
      key={book.id} 
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetails', { id: book.id, title: book.title })}
    >
      <Image source={{ uri: book.image }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{book.title}</Text>
    </TouchableOpacity>
  );

  const renderReaderItem = (book: any) => (
    <TouchableOpacity 
      key={book.id} 
      style={styles.bookItem}
      onPress={() => navigation.navigate('ReaderDetails', { id: book.id, title: book.title })}
    >
      <Image source={{ uri: book.image }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{book.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          horizontal
          data={top}
          renderItem={renderTopItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.storyList}
        />

        <Text style={styles.sectionTitle}>Historie</Text>
        <FlatList
          horizontal
          data={stories}
          renderItem={renderStoryItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.storyList}
        />

        <Text style={styles.sectionTitle}>Najnowsze książki</Text>
        <View style={styles.booksContainer}>
          {books.map(book => (
            renderBookItem(book)
          ))}
        </View>

        <Text style={styles.sectionTitle}>Najnowsze Czytanki</Text>
        <View style={styles.booksContainer}>
          {readers.map(book => (
            renderReaderItem(book)
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  newsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  newsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  storyList: {
    paddingLeft: 10,
  },
  storyItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 100,
    height: 160,
    borderRadius: 15,
  },
  storyTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  booksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  bookItem: {
    width: '48%',
    marginBottom: 15,
  },
  bookImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  bookTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});