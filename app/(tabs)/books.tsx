import React, { useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, FlatList, NativeScrollPoint } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BookScreen from '@/app/screens/book';
import ListItem from '@/components/common/ListItem';
import useFavorite from '@/hooks/useFavorite';
import { books } from '@/constants/Books';
import Banner from '@/components/common/Banner';
import Filter from '@/components/common/Filter';
import { BANNER_HEIGHT } from '@/constants/Common';
import { Book } from '@/model';

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
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const [ hiddenBanner, setHiddenBanner] = useState<boolean>(false)

  const scrollList = ({x, y}: NativeScrollPoint) => {
    if (y >= BANNER_HEIGHT) {
      setHiddenBanner(true)
    } else {
      setHiddenBanner(false)
    }
  }

  const popupRating = () => {

  }

  const favoriteBookPress = (item: Book) => {
    const isFav = isFavorite(item.id);
    if (!isFav) {
      addFavorite(item) 
    } else {
      removeFavorite(item.id)
    }
  }
  
  const renderItem = ({ item }: any) => {
     const { id } = item; 
    
    return(
      <ListItem props={{
        title: item.title,
        imageUrl: item.gallery[0],
        onRatingPress:popupRating,
        onPress: () => navigation.navigate('Book', { book: item }),
        rating: 4,
        reviewCount: 4,
        isFavorite: isFavorite(id),
        onFavoritePress:() => favoriteBookPress(item)
      }}
      />) 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Banner imageUrl="https://goldfish.fra1.digitaloceanspaces.com/books/amp/index.png" hidden={hiddenBanner}/>
      <Filter hidden={hiddenBanner}/>
      <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          onScroll={({nativeEvent: {contentOffset}}) => scrollList(contentOffset)}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  listContent: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: BANNER_HEIGHT
  },
});
