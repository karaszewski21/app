import React, { useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import ListItem from '@/components/common/ListItem';
import Overlay from '@/components/Overlay';
import RatingView from '@/components/common/RatingView';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import useFavorite from '@/hooks/useFavorite';
import { readers } from '@/constants/Readers';
import { players } from '@/constants/Players';

const FunStack = createStackNavigator();

export default function FunStackScreen() {
  return (
    <FunStack.Navigator>
      <FunStack.Screen name="FunDetails" component={FunScreen} options={{headerShown: false}}/>
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

const { width } = Dimensions.get('window');

const FunScreen = ({ navigation }:any) => {
  const [activeFilter, setActiveFilter] = useState('reader');
  const [ratingModal, setRatingModal]= useState(false);
  const animatedValue = useSharedValue(0);
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();


  useEffect(() => {
    animatedValue.value = withTiming(activeFilter === 'reader' ? 0 : 1,{ duration: 300 });
  }, [activeFilter]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedValue.value,
      [0, 1, 2],
      [0, -width, -width * 2]
    );
    return {
      transform: [{ translateX }],
    };
  });

  const favoriteReaderPress = (id: string) => {
    const isFav = isFavorite(id);
    if (!isFav) {
      addFavorite({id, type: 'reader'}) 
    } else {
      removeFavorite(id)
    }
  }

  const favoritePlayerPress = (id: string) => {
    const isFav = isFavorite(id);
    if (!isFav) {
      addFavorite({id, type: 'player'}) 
    } else {
      removeFavorite(id)
    }
  }

  const renderFlatList = (data: any, navigateTo: any) => (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.bookItemContainer}>
          <ListItem
            props={{
              ...item,
              imageUrl: item.gallery[0],
              onPress: () => navigation.navigate(navigateTo),
              onRatingPress: () => setRatingModal(true),
              isFavorite: isFavorite(item.id),
              onFavoritePress:() => navigateTo === 'ReaderDetails' ? favoriteReaderPress(item.id) : favoritePlayerPress(item.id) 
            }}
          />
        </View>
      )}
      keyExtractor={item => item.id}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  );


  const handleRatingPress = (bookId: number) => {
    setRatingModal(false)
    console.log(`Naciśnięto ocenę książki o id: ${bookId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <Text>Select filter</Text>

          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <View style={styles.flatListWrapper}>
              {renderFlatList(readers, 'ReaderDetails')}
            </View>
            <View style={styles.flatListWrapper}>
              {renderFlatList(players, 'AudioPlay')}
            </View>
          </Animated.View>

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
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },

  animatedContainer: {
    flexDirection: 'row',
    width: width * 3,
  },
  flatListWrapper: {
    width,
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