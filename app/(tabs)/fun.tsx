import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import { LinearGradient } from 'expo-linear-gradient'; 

const FunStack = createStackNavigator();

export default function FunStackScreen() {
  return (
    <FunStack.Navigator>
      <FunStack.Screen name="Fun" component={FunScreen} options={{headerShown: false}}/>
      <FunStack.Screen 
          name="ReaderDetails" 
          component={ReaderStackScreen}
          options={{
            headerShown: false
          }}
        />
      <FunStack.Screen 
          name="AudioPlay" 
          component={AudioPlayScreen}
          options={{
            headerShown: false
          }}
       />
    </FunStack.Navigator>
  );
}

const FunScreen = ({ navigation }:any) => {
  const [currentList, setCurrentList] = useState('audiobook');

  const audiobook = [
    { id: '1', title: 'Czytanka 1', author: 'Autor 1', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Czytanka 2', author: 'Autor 2', image: 'https://via.placeholder.com/100' },
    // Dodaj więcej elementów według potrzeb
  ];

  const play = [
    { id: '1', title: 'Słuchowisko 1', author: 'Autor 3', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Słuchowisko 2', author: 'Autor 4', image: 'https://via.placeholder.com/100' },
    // Dodaj więcej elementów według potrzeb
  ];

  const renderReaderItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ReaderDetails', { title: item.title })}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAuthor}>{item.author}</Text>
      </View>
      <Ionicons name="book-outline" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  const renderPlayItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ReaderDetails', { title: item.title })}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAuthor}>{item.author}</Text>
      </View>
      <Ionicons name="headset-outline" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => setCurrentList('audiobook')}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={currentList === 'audiobook' ? ['#4c669f', '#3b5998', '#192f6a'] : ['#666666', '#444444', '#333333']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Czytanki</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setCurrentList('play')}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={currentList === 'play' ? ['#4c669f', '#3b5998', '#192f6a'] : ['#666666', '#444444', '#333333']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Słuchowiska</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <FlatList
        data={currentList === 'audiobook' ? audiobook : play}
        renderItem={currentList === 'audiobook' ? renderReaderItem : renderPlayItem}
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
  scrollView: {
    padding: 10,
  },
  tile: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
    minWidth: 120,
  },
  activeTile: {
    backgroundColor: '#2980b9',
  },
  tileText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemAuthor: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonWrapper: {
    marginHorizontal: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});