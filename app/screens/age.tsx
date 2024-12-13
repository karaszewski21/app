import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, NativeScrollPoint} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import ListItem from '@/components/common/ListItem';
import Overlay from '@/components/Overlay';
import RatingView from '@/components/common/RatingView';
import BookStackScreen from '@/app/screens/book';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, withSpring } from 'react-native-reanimated';
import { BANNER_HEIGHT, FILTER_HEIGHT } from '@/constants/Common';
import { books } from '@/constants/Books';
import { readers } from '@/constants/Readers';
import Banner from '@/components/common/Banner';
import Filter from '@/components/common/Filter';
import { players } from '@/constants/Players';
import { Book, Reader, AudioPlay, AgeGroup } from '@/model';
import useFavorite from '@/hooks/useFavorite';
import useRating from '@/hooks/useRating';

const AgeStack = createStackNavigator();

export default function AgeStackScreen({route}:any) {
  return (
    <AgeStack.Navigator>
      <AgeStack.Screen 
          name="AgeDetails" 
          component={AgeScreen} 
          options={{
            headerShown: false
            }}
          initialParams={route.params}
        />
      <AgeStack.Screen 
          name="BookDetails" 
          component={BookStackScreen}
          options={{
            headerShown: false
          }}
        />
      <AgeStack.Screen 
          name="ReaderDetails" 
          component={ReaderStackScreen}
          options={{
            headerShown: false
          }}
        />
      <AgeStack.Screen 
          name="AudioPlay" 
          component={AudioPlayScreen}
          options={{
            headerShown: false
          }}
       />
    </AgeStack.Navigator>
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
            onPress={() => onFilterChange('book')}
        >
          <Text style={[styles.filterText,activeFilter === 'book' && styles.activeFilter]}>Książki</Text>
        </TouchableOpacity>
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

const { width } = Dimensions.get('window');

const AgeScreen = ({ route, navigation }:any) => {
  const ageGroup = route.params.ageGroup;

  const [activeFilter, setActiveFilter] = useState('book');
  const [selectedAgeGroup, setAgeGroup] = useState<AgeGroup>(ageGroup);
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const {ratingModal, product, setRatingModal, onRatingPress, onSelectProductPress } = useRating();
  
  const animatedValue = useSharedValue(0);
  const [ hiddenBanner, setHiddenBanner] = useState<boolean>(false);

  const bookListRef = useRef<FlatList>(null);
  const readerListRef = useRef<FlatList>(null);
  const playerListRef = useRef<FlatList>(null);

  const filteredBooks = useMemo(() => books.filter(book => book.ageGroupId === selectedAgeGroup.id), [selectedAgeGroup]);
  const filteredReaders = useMemo(() => readers.filter(reader => reader.ageGroupId === selectedAgeGroup.id), [selectedAgeGroup]);
  const filteredPlayers = useMemo(() => players.filter(player => player.ageGroupId === selectedAgeGroup.id), [selectedAgeGroup]);

  useEffect(() => {
    animatedValue.value = withTiming(
      activeFilter === 'book' ? 0 : activeFilter === 'reader' ? 1 : 2,
      { duration: 300 }
    );
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

  const scrollList = useCallback(({x, y}: NativeScrollPoint) => {
    setHiddenBanner(y >= BANNER_HEIGHT)
  }, [])

  const favoriteBookPress = (item: Book) => {
    const isFav = isFavorite(item.id);
    if (!isFav) {
      addFavorite(item) 
    } else {
      removeFavorite(item.id)
    }
  }
  

  const renderFlatList = (data: Book[] | Reader[] | AudioPlay[], type: string, listRef: React.RefObject<FlatList>) => {
    return(
      <FlatList
        ref={listRef}
        data={data}
        renderItem={({ item }) => { 
          let navigateTo = '';
          let params = {}
     
          switch (type) {
            case 'book':
              navigateTo = 'BookDetails';
              params = { book: item };
              break;
            case 'reader':
               navigateTo = 'ReaderDetails';
               params = { reader: item }
              break;
            case 'audio_play':
               navigateTo = 'AudioPlay';
               params = { audioplay: item }
              break;
            default:
              break;
          }
        
          return(
          <ListItem
            props={{
              ...item,
              imageUrl: item.gallery[0],
              onPress: () => navigation.navigate(navigateTo, params),
              onRatingPress: () => onSelectProductPress(item),
              isFavorite: isFavorite(item.id),
              onFavoritePress:() => favoriteBookPress(item)
            }}
          />
        )}}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        onScroll={({nativeEvent: {contentOffset}}) => scrollList(contentOffset)}
      />
    );
  }

  const onFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setHiddenBanner(false)

    setTimeout(() => {
      const currentListRef = filter === 'book' ? bookListRef : filter === 'reader' ? readerListRef : playerListRef;
      if (currentListRef.current) {
        currentListRef.current.scrollToOffset({ offset: 0, animated: true });
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Banner imageUrl={selectedAgeGroup.imageUrl} hidden={hiddenBanner}/>
      <Filter hidden={hiddenBanner} onOptionSelect={setAgeGroup}/>
      <FilterButtons activeFilter={activeFilter} onFilterChange={onFilterChange} hidden={hiddenBanner}/>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <View style={styles.flatListWrapper}>
          {renderFlatList(filteredBooks, 'book', bookListRef)}
        </View>
        <View style={styles.flatListWrapper}>
          {renderFlatList(filteredReaders, 'reader', readerListRef)}
        </View>
        <View style={styles.flatListWrapper}>
          {renderFlatList(filteredPlayers, 'audio_play', playerListRef)}
        </View>
      </Animated.View>
        {  ratingModal &&
          <Overlay opacity={0.3}>
            <RatingView 
                title=''
                subTitle={product?.title ?? ''}
                onSubmit={(s,r) => onRatingPress(s)}
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
    paddingBottom: 60
  },

  filterContainer: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    height: 50,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },

  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  animatedContainer: {
    flexDirection: 'row',
    width: width * 3,
    zIndex: 1,
  },

  activeFilter: {
    color: '#3498db',
  },

  filterText: {
    fontWeight: 'bold',
  },

  flatListWrapper: {
    width,
  },

  listContent: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: BANNER_HEIGHT + FILTER_HEIGHT + 40
  },

  modal: {
    height: 200,
    width: 300,
    backgroundColor: '#3498db',
  }
});