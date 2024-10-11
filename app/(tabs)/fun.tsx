import React, { useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, NativeScrollPoint} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import ListItem from '@/components/common/ListItem';
import Overlay from '@/components/Overlay';
import RatingView from '@/components/common/RatingView';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, withSpring } from 'react-native-reanimated';
import useFavorite from '@/hooks/useFavorite';
import { readers } from '@/constants/Readers';
import { players } from '@/constants/Players';
import { BANNER_HEIGHT } from '@/constants/Common';
import Banner from '@/components/common/Banner';
import Filter from '@/components/common/Filter';

const FunStack = createStackNavigator();
const { width } = Dimensions.get('window');

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

const FilterButtons = ({ activeFilter, onFilterChange, hidden }: any) => {
  const filterTranslateY = useSharedValue<number>(0);

  const filterAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: filterTranslateY.value }],
  }));

  if (hidden) {
    filterTranslateY.value = withSpring(-100);
  } else {
    filterTranslateY.value = withSpring(0);
  }   
  
  return (
    <Animated.View style={[styles.filterContainer, filterAnimatedStyle, {transform: [{translateY: 0}]}]}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => onFilterChange('reader')}
        >
          <Text style={[styles.filterText,activeFilter === 'reader' && styles.activeFilter]}>Czytanki</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onFilterChange('play')}
        >
          <Text style={[styles.filterText,activeFilter === 'play' && styles.activeFilter]}>Słuchowiska</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const FunScreen = ({ navigation }:any) => {
  const [activeFilter, setActiveFilter] = useState('reader');
  const [ratingModal, setRatingModal]= useState(false);
  const animatedValue = useSharedValue(0);
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const [ hiddenBanner, setHiddenBanner] = useState<boolean>(false)

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

  const scrollList =  useCallback(({x, y}: NativeScrollPoint) => {
    if (y >= BANNER_HEIGHT) {
      setHiddenBanner(true)
    } else {
      setHiddenBanner(false)
    }
  }, [])

  const renderFlatList = useCallback((data: any, navigateTo: any) => (
    <FlatList
      data={data}
      renderItem={({ item }) => (
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
      )}
      keyExtractor={item => item.id}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      onScroll={({nativeEvent: {contentOffset}}) => scrollList(contentOffset)}
    />
  ),[hiddenBanner])

  const handleRatingPress = (bookId: number) => {
    setRatingModal(false)
    console.log(`Naciśnięto ocenę książki o id: ${bookId}`);
  };

  const onFilterChange = (filter: string) => {
    setHiddenBanner(false)
    setActiveFilter(filter)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Banner imageUrl="https://goldfish.fra1.digitaloceanspaces.com/books/amp/index.png" hidden={hiddenBanner}/>
      <Filter hidden={hiddenBanner}/>
      <FilterButtons activeFilter={activeFilter} onFilterChange={onFilterChange} hidden={hiddenBanner}/>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <View style={styles.flatListWrapper}>
          {renderFlatList(readers, 'ReaderDetails')}
        </View>
        <View style={styles.flatListWrapper}>
          {renderFlatList(players, 'AudioPlay')}
        </View>
      </Animated.View>
      {  ratingModal &&
          <Overlay opacity={0.3}>
            <RatingView 
                bookTitle='test' 
                onSubmit={(s,r) => handleRatingPress(s)}
                onClose={() => setRatingModal(false)}
                />
          </Overlay> 
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },

  filterContainer: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    height: BANNER_HEIGHT,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  animatedContainer: {
    flexDirection: 'row',
    width: width * 3,
  },
  flatListWrapper: {
    width,
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
  listContent: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: BANNER_HEIGHT + 40,
  },
  modal: {
    height: 200,
    width: 300,
    backgroundColor: '#3498db'
  }
});