import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import BookStackScreen from '@/app/screens/book';
import NewsScreen from '@/app/screens/news';
import StoryScreen from '@/app/screens/story';
import ReaderStackScreen from '@/app/screens/reader';
import AgeStackScreen from '@/app/screens/age';
import StoryItem from '@/components/stories/StoryItem';
import { books } from '@/constants/Books';
import { readers } from '@/constants/Readers';
import { stories } from '@/constants/Stories';

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
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen 
          name="Story" 
          component={StoryScreen}
          options={{
            headerShown: false
          }}
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

  const ages = [
    { id: '1', title: 'Mały bobek', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Średnik bobke', image: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Duży bobke', image: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Szkolniak', image: 'https://via.placeholder.com/100' },
  ];


  const renderStoryItem = ({item}:any) => { 
    const { id, videosCache } = item;
    return(
      <StoryItem props={{...item, onPress: () => { navigation.navigate('Story', { id, videosCache })}}}/>
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
      onPress={() => navigation.navigate('BookDetails', { book })}
    >
      <Image source={{ uri: book.gallery[0] }} style={styles.bookImage} />
    </TouchableOpacity>
  );

  const renderReaderItem = (book: any) => (
    <TouchableOpacity 
      key={book.id} 
      style={styles.bookItem}
      onPress={() => navigation.navigate('ReaderDetails', { id: book.id, title: book.title })}
    >
      <Image source={{ uri: book.gallery[0] }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{book.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('News')}
            >
              <Image 
                source={{uri: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png'}} 
                style={styles.logo}
              />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Witaj Patryk Karaszewski</Text>
        </View>


        <View style={styles.mainTile}>
     
        <FlatList
          horizontal
          data={stories}
          renderItem={renderStoryItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.storyList}
        />
        </View>

        <Text style={styles.sectionTitle}>Zacznij tutaj</Text>
        <FlatList
          horizontal
          data={ages}
          renderItem={renderFilterByAgeItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          // style={styles.storyList}
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
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  content: {
    flex: 1,
    padding: 10,
  },
  mainTile: {
    backgroundColor: '#374f69',
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  mainTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
 backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

    storyList: {
    width: 250,
    paddingTop: 16,
    paddingBottom: 16
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50', // Możesz dostosować kolor tła
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Dla cienia na Androidzie
    shadowColor: '#000', // Dla cienia na iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden', // Zapewnia, że logo nie wyjdzie poza okrągły kształt przycisku
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 30, // Ten sam borderRadius co przycisk
    resizeMode: 'cover', // Zmienione z 'contain' na 'cover' dla lepszego efektu
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
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