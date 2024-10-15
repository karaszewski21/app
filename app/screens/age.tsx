import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { BANNER_HEIGHT } from '@/constants/Common';
import { books } from '@/constants/Books';
import { readers } from '@/constants/Readers';
import Banner from '@/components/common/Banner';
import Filter from '@/components/common/Filter';

const AgeStack = createStackNavigator();

export default function AgeStackScreen() {
  return (
    <AgeStack.Navigator>
      <AgeStack.Screen name="AgeDetails" component={AgeScreen} options={{headerShown: false}}/>
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

const AgeScreen = ({ navigation }:any) => {
  const [activeFilter, setActiveFilter] = useState('book');
  const [ratingModal, setRatingModal]= useState(false);
  const animatedValue = useSharedValue(0);
  const [ hiddenBanner, setHiddenBanner] = useState<boolean>(false);

  const bookListRef = useRef<FlatList>(null);
  const readerListRef = useRef<FlatList>(null);
  const playerListRef = useRef<FlatList>(null);

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

  const scrollList = useCallback(({x, y}: NativeScrollPoint) => {
    setHiddenBanner(y >= BANNER_HEIGHT)
  }, [])

  const renderFlatList = (data: any, navigateTo: any, listRef: React.RefObject<FlatList>) => (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={({ item }) => (
        <ListItem
          props={{
            ...item,
            imageUrl: item.gallery[0],
            onPress: () => navigation.navigate(navigateTo, { 
              [navigateTo === 'BookDetails' ? 'book' : 'title']: 
              navigateTo === 'BookDetails' ? item : item.title 
            }),
            onRatingPress: () => setRatingModal(true),
          }}
        />
      )}
      keyExtractor={item => item.id}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      onScroll={({nativeEvent: {contentOffset}}) => scrollList(contentOffset)}
    />
  );

  const handleRatingPress = (bookId: number) => {
    setRatingModal(false)
    console.log(`Naciśnięto ocenę książki o id: ${bookId}`);
  };

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
      <Banner imageUrl="https://goldfish.fra1.digitaloceanspaces.com/books/amp/index.png" hidden={hiddenBanner}/>
      <Filter hidden={hiddenBanner}/>
      <FilterButtons activeFilter={activeFilter} onFilterChange={onFilterChange} hidden={hiddenBanner}/>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <View style={styles.flatListWrapper}>
          {renderFlatList(books, 'BookDetails', bookListRef)}
        </View>
        <View style={styles.flatListWrapper}>
          {renderFlatList(readers, 'ReaderDetails', readerListRef)}
        </View>
        <View style={styles.flatListWrapper}>
          {renderFlatList(play, 'AudioPlay', playerListRef)}
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
    height: 50,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  animatedContainer: {
    flexDirection: 'row',
    width: width * 3,
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
    marginTop: BANNER_HEIGHT + 40
  },

  modal: {
    height: 200,
    width: 300,
    backgroundColor: '#3498db',
  }
});