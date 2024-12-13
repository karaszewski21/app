import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { BANNER_HEIGHT, FILTER_HEIGHT } from '@/constants/Common';
import Banner from '@/components/common/Banner';
import Filter from '@/components/common/Filter';
import { AgeGroup, AudioPlay, Reader } from '@/model';
import useRating from '@/hooks/useRating';

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
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const {ratingModal, product, setRatingModal, onRatingPress, onSelectProductPress } = useRating();
  const animatedValue = useSharedValue(0);
  const [ hiddenBanner, setHiddenBanner] = useState<boolean>(false);
  const [selectedAgeGroup, setAgeGroup] = useState<AgeGroup>();
  const [readerList, setReaders] = useState<Reader[]>();
  const [audiPlayList, setAudioPlays] = useState<AudioPlay[]>();

  const readerListRef = useRef<FlatList>(null);
  const playerListRef = useRef<FlatList>(null);


  useEffect(() => {
    if (selectedAgeGroup && selectedAgeGroup.id !== 6) {
      setReaders(readers.filter(reader => reader.ageGroupId === selectedAgeGroup.id));
      setAudioPlays(players.filter(player => player.ageGroupId === selectedAgeGroup.id))
    } else {
      setReaders(readers);
      setAudioPlays(players);
    }
  }, [selectedAgeGroup]) 

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

  const favoriteReaderPress = (item: Reader) => {
    const isFav = isFavorite(item.id);
    if (!isFav) {
      addFavorite(item) 
    } else {
      removeFavorite(item.id)
    }
  }

  const favoritePlayerPress = (item: AudioPlay) => {
    const isFav = isFavorite(item.id);
    if (!isFav) {
      addFavorite(item) 
    } else {
      removeFavorite(item.id)
    }
  }

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
            onPress: () => navigateTo === 'ReaderDetails' ? navigation.navigate('ReaderDetails', { reader: item }) : navigation.navigate('AudioPlay', { audioplay: item }),
            onRatingPress: () => onSelectProductPress(item),
            isFavorite: isFavorite(item.id),
            onFavoritePress:() => navigateTo === 'ReaderDetails' ? favoriteReaderPress(item) : favoritePlayerPress(item) 
          }}
        />
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContent}
      onScroll={({nativeEvent: {contentOffset}}) => scrollList(contentOffset)}
    />
  )

  const onFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setHiddenBanner(false)

    setTimeout(() => {
      const currentListRef = filter === 'reader' ? readerListRef : playerListRef;
      if (currentListRef.current) {
        currentListRef.current.scrollToOffset({ offset: 0, animated: true });
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Banner imageUrl="https://goldfish.fra1.digitaloceanspaces.com/banerbook2.png" hidden={hiddenBanner}/>
        <Filter hidden={hiddenBanner} onOptionSelect={setAgeGroup} reset={true}/>
        <FilterButtons activeFilter={activeFilter} onFilterChange={onFilterChange} hidden={hiddenBanner}/>
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          <View style={styles.flatListWrapper}>
            {renderFlatList(readerList, 'ReaderDetails',readerListRef)}
          </View>
          <View style={styles.flatListWrapper}>
            {renderFlatList(audiPlayList, 'AudioPlay', playerListRef)}
          </View>
        </Animated.View>
        {  ratingModal &&
            <Overlay opacity={0.3}>
              <RatingView
                  title={activeFilter === 'reader' ? 'Oceń czytankę' : 'Oceń słuchowisko'}
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
    width: width * 2,
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
    backgroundColor: '#3498db'
  }
});