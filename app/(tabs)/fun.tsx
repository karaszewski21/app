import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import ListItem from '@/components/common/ListItem';
import Overlay from '@/components/Overlay';
import RatingView from '@/components/common/RatingView';

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

const FilterButtons = ({ activeFilter, onFilterChange }: any) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onFilterChange('reader')}
      >
        <Text style={[styles.filterText,activeFilter === 'reader' && styles.activeFilter]}>Czytanki</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onFilterChange('play')}
      >
        <Text style={[styles.filterText,activeFilter === 'play' && styles.activeFilter]}>Słuchowiska</Text>
      </TouchableOpacity>
    </View>
  );
}

const FunScreen = ({ navigation }:any) => {
  const [activeFilter, setActiveFilter] = useState('reader');
  const [ratingModal, setRatingModal]= useState(false);

  const reader = [
    {
      id: '1',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł Czytanki 1",
      description: "Opis Czytanki",
      rating: 4, 
      reviewCount: 120,
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
      rating: 3.5, 
      reviewCount: 85,
    }
  ];

  const play = [
    {
      id: '1',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł słuchowska 1",
      description: "Opis słuchowska",
      rating: 3.5, 
      reviewCount: 85,
    },
    {
      id: '2',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł słuchowska 2",
      description: "Opis słuchowska ",
      rating: 3.5, 
      reviewCount: 85,
    }
  ];


  const handleRatingPress = (bookId: number) => {
    setRatingModal(false)
    console.log(`Naciśnięto ocenę książki o id: ${bookId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <FlatList
            data={activeFilter === 'reader' ? reader : play}
            renderItem={({ item }) => (
              <View style={styles.bookItemContainer}>
                {
                  activeFilter === 'reader' ? 
                  <ListItem
                  props={
                    {
                    ...item,
                    imageUrl:item.gallery[0],
                    onPress:() => navigation.navigate('ReaderDetails', { title: item.title }),
                    onRatingPress:() =>  setRatingModal(true),
                    }
                  }
                  />
                   :
                  <ListItem
                    props={
                      {
                      ...item,
                      imageUrl:item.gallery[0],
                      onPress:() => navigation.navigate('AudioPlay', { title: item.title }),
                      onRatingPress:() =>  setRatingModal(true),
                      }
                    }
                  />
                }
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
           {  ratingModal &&
            // <Animated.View  style={{...styles.overlayContainer,height}}>
                <Overlay opacity={0.3}>
                  <RatingView 
                      bookTitle='test' 
                      onSubmit={(s,r) => handleRatingPress(s)}
                      onClose={() => setRatingModal(false)}
                      />
                </Overlay> 
            // </Animated.View>
            }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  filterButton: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // borderRadius: 20,
    // backgroundColor: '#e0e0e0',
  },
  activeFilter: {
    color: '#3498db',
  },
  filterText: {
    fontWeight: 'bold',
  },
  bookItemContainer: {
    paddingHorizontal: 10,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  modal: {
    height: 200,
    width: 300,
    backgroundColor: '#3498db'
  }
});