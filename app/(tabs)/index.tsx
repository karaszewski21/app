import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ImageBackground, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import BookStackScreen from '@/app/screens/book';
import NewsScreen from '@/app/screens/news';
import ReaderStackScreen from '@/app/screens/reader';
import AgeStackScreen from '@/app/screens/age';
import { index } from '@/constants/Index';
import Story from '@/components/story/StoryBasic';
import { Book, Reader } from '@/model';
import useAgeGroupsIcon from '@/hooks/useAgeGroupsIcon';
import IndexVideo from '@/components/common/IndexVideo';

const HomeStack = createStackNavigator();

export default function HomeScreenStack() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            detachPreviousScreen: false
          }}
        />
        <HomeStack.Screen 
          name="News" 
          component={NewsScreen}
          options={{
            headerShown: false,
            detachPreviousScreen: false
          }}

        />
        <HomeStack.Screen 
          name="BookDetails" 
          component={BookStackScreen}
          options={{
            headerShown: false,
            detachPreviousScreen: false
          }}
        />
        <HomeStack.Screen 
          name="ReaderDetails" 
          component={ReaderStackScreen}
          options={{
            headerShown: false,
            detachPreviousScreen: false
          }}
        />
        <HomeStack.Screen 
          name="Age" 
          component={AgeStackScreen}
          options={{
            headerShown: false,
            detachPreviousScreen: false
          }}
        />
      </HomeStack.Navigator>
  );
}

const HomeScreen = ({ navigation }: any) => {
  const { ageGroupsIcon } = useAgeGroupsIcon();


  useEffect(() => {
    console.log('-->HomeScreen');

    return () => console.log('-->HomeScreen unmounted');
  }, [])

  const renderStory = () => { 
    return ( 
        <FlatList
          horizontal
          data={index.stories}
          renderItem={({ item, index }: any) => (
            <Story 
              key={index} 
              data={item} 
              duration={item.duration} 
              index={index}
            />
          )}
          keyExtractor={(item: any) => item.user_id.toString()}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={4}
          maxToRenderPerBatch={2}
          windowSize={5}
          removeClippedSubviews={true}
      />
    ) 
  }

  const reanderAgeGroup = () => {
    return (
      <FlatList
        horizontal
        data={index.ageGroups}
        renderItem={({ item } : any) => (
          <TouchableOpacity 
              key={item.id} 
              style={styles.ageGroup}
              onPress={() => navigation.navigate('Age', { ageGroup: item })}  
            >
            <Image source={ageGroupsIcon[item.id]} style={styles.ageImage} />
            <Text style={styles.ageGroupsText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
      />
    )
  }

  const renderBookItem = useCallback((book: Book) => (
    <TouchableOpacity 
      key={book.id} 
      style={[
        styles.tileItem, 
        {
          backgroundColor: book.id === '3' ? '#f5d066' : book.id === '2' ? '#c3d5e1' : '#f5d066'
        }
      ]}
      onPress={() => navigation.navigate('BookDetails', { book })}
    >
      <IndexVideo
        key={`${book.id}-${book.indexUrl}`}
        type={book.indexType ?? ''}
        isLooping={false}
        source={book.indexUrl}
        style={styles.indexUrl}
      />
    </TouchableOpacity>
  ),[]);

  const renderReaderItem = useCallback((reader: Reader) => (
    <TouchableOpacity 
      key={reader.id} 
      style={[
        styles.tileItem, 
        {
          backgroundColor: reader.id === '32' ? '#a5ccba' : reader.id === '44' ? '#c3d5e1' : '#f5d066'
        }
      ]}
      onPress={() => navigation.navigate('ReaderDetails', { reader })}
    >
     <IndexVideo
        key={reader.id}
        type={reader.indexType ?? ''}
        source={reader.indexUrl}
        style={styles.indexUrl}
      />
    </TouchableOpacity>
  ),[]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity 
              style={{width: 60, height: 60}}
              onPress={() => navigation.navigate('News')}
            >
              <Image 
                source={{uri: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png'}} 
                style={{width: '100%', height: '100%', borderRadius: 30}}
              />
          </TouchableOpacity>
          <Text style={[styles.sectionTitle, { fontSize: 18, fontFamily: 'ShantellSans-SemiBoldItalic'}]}>Witaj Patryk Karaszewski</Text>
        </View>
        <View>
            {renderStory()}
        </View>
        <Text style={styles.sectionTitle}>Zacznij tutaj</Text>
        <View>
            {reanderAgeGroup()}
        </View>
        <Text style={styles.sectionTitle}>Najnowsze książki</Text>
        <View style={styles.tilesContainer}>
          {index.books.map(book => (
            renderBookItem(book)
          ))}
        </View>

        <Text style={styles.sectionTitle}>Najnowsze Czytanki</Text>
        <View style={[styles.tilesContainer, {paddingBottom: 80}]}>
          {index.readers.map(reader => (
            renderReaderItem(reader)
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Kolory kafli
// #596744 - zielny
// #c3d5e1 - błekit
// #fefefe - crem
// #f5d066 - zółty
// #a5ccba - mięta jasna

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // paddingBottom: 80
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
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'ShantellSans-SemiBoldItalic'
  },
 
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tileItem: {
    width: 170, 
    height: 170,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // To jest potrzebne dla Androida
  },
  indexUrl: {
    width: 170, 
    height: 170,
    borderRadius: 15,
  },
  ageGroup: {
    flexDirection: 'column',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageGroupsText: {
    fontSize: 12,
    fontFamily: 'ShantellSans-SemiBoldItalic'
  },
  ageImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#c3d5e1',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // To jest potrzebne dla Androida
  },
});