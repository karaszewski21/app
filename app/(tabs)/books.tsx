import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BookScreen from '@/app/screens/book';
import ListItem from '@/components/common/ListItem';

const BooksStack = createStackNavigator();

export default function BooksStackScreen() {

  return (
    <BooksStack.Navigator>
      <BooksStack.Screen name="Books" component={BooksScreen} options={{headerShown: false}}/>
      <BooksStack.Screen name="Book" component={BookScreen} options={{headerShown: false}}/>
    </BooksStack.Navigator>
  );
}

const BooksScreen = ({ navigation }:any) => {

  const books = [
    {
      id: '1',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 1",
      description: "Opis książki ",
      isLock: false,
    },
    {
      id: '2',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      isLock: false,
    }
  ];

  const popupRating = () => {

  }
  
  const renderItem = ({ item }: any) => {
     const { } = item; 
    
    
    return(
    <ListItem props={{
        title: item.title,
        imageUrl: item.gallery[0],
        onRatingPress:popupRating,
        onPress: () => navigation.navigate('Book', { book: item }),
        rating: 4,
        reviewCount: 4
      }}
    />) 
  }

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
