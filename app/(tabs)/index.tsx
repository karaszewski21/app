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

  const stories = [
    { id: '1', title: 'Historia 1', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_0.jpg' },
    { id: '2', title: 'Historia 2', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_2.jpg' },
    { id: '3', title: 'Historia 3', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Physical_AttributesMediumsized_goldfish_with_1.jpg' },
    { id: '4', title: 'Historia 4', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg' },
    { id: '5', title: 'Historia 5', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg' },
    { id: '6', title: 'Historia 6', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg' },
  ];

  const ages = [
    { id: '1', title: 'Mały bobek', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Średnik bobke', image: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Duży bobke', image: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Szkolniak', image: 'https://via.placeholder.com/100' },
  ];

  const books = [
    {
      id: '1',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 1",
      description: "Opis książki ",
      isLock: true,
    },
    {
      id: '2',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      isLock: true,
    },
    {
      id: '3',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_2.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      isLock: false,
    },
    {
      id: '4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      isLock: false,
    }
  ];

  const readers = [
    { id: '1', title: 'Czytaka 1', image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg' },
    { id: '2', title: 'Czytaka 2', image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg' },
    { id: '3', title: 'Czytaka 3', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_2.jpg' },
    { id: '4', title: 'Czytaka 4', image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg' },
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
      <Image source={{ uri: book.image }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{book.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
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