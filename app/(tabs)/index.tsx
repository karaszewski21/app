import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import BookStackScreen from '@/app/screens/book';
import NewsScreen from '@/app/screens/news';
import StoryScreen from '@/app/screens/story';
import ReaderStackScreen from '@/app/screens/reader';
import AgeStackScreen from '@/app/screens/age';

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
        <HomeStack.Screen 
          name="Age" 
          component={AgeStackScreen}
          options={{
            headerShown: false
          }}
        />
      </HomeStack.Navigator>
  );
}

const HomeScreen = ({ navigation }: any) => {

  const stories = [
    { id: '1', title: 'Historia 1', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Historia 2', image: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Historia 3', image: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Historia 4', image: 'https://via.placeholder.com/100' },
    { id: '5', title: 'Historia 5', image: 'https://via.placeholder.com/100' },
    { id: '6', title: 'Historia 6', image: 'https://via.placeholder.com/100' },
  ];

  const ages = [
    { id: '1', title: 'Mały bobek', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Średnik bobke', image: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Duży bobke', image: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Szkolniak', image: 'https://via.placeholder.com/100' },
  ];

  const books = [
    { id: '1', title: 'Książka 1', image: 'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png' },
    { id: '2', title: 'Książka 2', image: 'https://goldfish.fra1.digitaloceanspaces.com/book_funny/Leonardo_Phoenix_Enchanting_company_logo_the_circular_design_e_1.jpg' },
    { id: '3', title: 'Książka 3', image: 'https://goldfish.fra1.digitaloceanspaces.com/book1.jpg' },
    { id: '4', title: 'Książka 4', image: 'https://via.placeholder.com/150' },
  ];

  const readers = [
    { id: '1', title: 'Czytaka 1', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Czytaka 2', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Czytaka 3', image: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Czytaka 4', image: 'https://via.placeholder.com/150' },
  ];

  const renderStoryItem = ({item}:any) => { 
    return(
      <TouchableOpacity 
        key={item.id} 
        style={styles.storyItem}
        onPress={() => navigation.navigate('Story', { id: item.id, title: item.title })}  
      >
        <Image source={{ uri: item.image }} style={styles.storyImage} />
      </TouchableOpacity>
    ) 
  }

  const renderFilterByAgeItem = ({ item } :any) => (
    <TouchableOpacity 
        key={item.id} 
        style={styles.storyItem}
        onPress={() => navigation.navigate('Age', { id: item.id, title: item.title })}  
      >
        <Image source={{ uri: item.image }} style={styles.ageImage} />
      </TouchableOpacity>
  );

  const renderBookItem = (book: any) => (
    <TouchableOpacity 
      key={book.id} 
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetails', { id: book.id, title: book.title })}
    >
      <Image source={{ uri: book.image }} style={styles.bookImage} />
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
        <View>
          <TouchableOpacity 
            style={styles.newsButton}
            onPress={() => navigation.navigate('News')}
          >
          <Text style={styles.newsButtonText}>Co nowego?</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Historie</Text>
        <FlatList
          horizontal
          data={stories}
          renderItem={renderStoryItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.storyList}
        />

        <Text style={styles.sectionTitle}>Zacznij tutaj</Text>
        <FlatList
          horizontal
          data={ages}
          renderItem={renderFilterByAgeItem}
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
    justifyContent: 'center',
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
  ageImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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