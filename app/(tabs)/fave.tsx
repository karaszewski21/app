import { StyleSheet, Text, TouchableOpacity, FlatList, View, NativeScrollPoint} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFavorite from '@/hooks/useFavorite';
import Banner from '@/components/common/Banner';
import { useCallback, useEffect, useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, withSpring } from 'react-native-reanimated';
import { BANNER_HEIGHT } from '@/constants/Common';
import ListFaveItem from '@/components/common/ListFaveItem';
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import BookStackScreen from '@/app/screens/book';
import { AudioPlay, Book, Reader } from '@/model';
import useRating from '@/hooks/useRating';
import Overlay from '@/components/Overlay';
import RatingView from '@/components/common/RatingView';

const FaveStack = createStackNavigator();

export default function FunStackScreen() {
  return (
    <FaveStack.Navigator
      screenOptions={{detachPreviousScreen: true}}
    >
      <FaveStack.Screen 
          name="FaveDetails" 
          component={FaveScreen} 
          options={{
            headerShown: false,
            detachPreviousScreen: true
          }}
        />
      <FaveStack.Screen 
          name="BookDetails" 
          component={BookStackScreen}
          options={{
            headerShown: false
          }}
        />
      <FaveStack.Screen 
          name="ReaderDetails" 
          component={ReaderStackScreen}
          options={{
            headerShown: false
          }}
        />
      <FaveStack.Screen 
          name="AudioPlay" 
          component={AudioPlayScreen}
          options={{
            headerShown: false
          }}
       />
    </FaveStack.Navigator>
  );
}

const FaveScreen = ({ navigation }:any) => {
  const [hiddenBanner, setHiddenBanner] = useState<boolean>(false);
  const {ratingModal, product, setRatingModal, onRatingPress, onSelectProductPress } = useRating();
  const {favorites, removeFavorite } = useFavorite();

  const scrollList = useCallback(({x, y}: NativeScrollPoint) => {
    setHiddenBanner(y >= BANNER_HEIGHT)
  }, [])

  const onNavigate = (item: Book | Reader | AudioPlay) => {
    switch (item.type) {
      case 'book':
        navigation.navigate('BookDetails', { book: item })
      break;
      case 'reader':
        navigation.navigate('ReaderDetails', { reader: item })
      break;
      case 'audio_play':
        navigation.navigate('AudioPlay', { audioplay: item })
      break;
      default:
        break;
    }
  }

  useEffect(() => {

    console.log('-->fa',favorites)

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Banner imageUrl="https://goldfish.fra1.digitaloceanspaces.com/banerbook2.png" hidden={hiddenBanner}/>
      <FlatList
        data={favorites}
        renderItem={({ item }) => {
          return <ListFaveItem
            props={{
              ...item,
              imageUrl: item.gallery[0],
              onPress: () => onNavigate(item),
              onRatingPress: () => onSelectProductPress(item),
              onRemovePress: () => removeFavorite(item.id),
            }}
          />
          }
        }
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        onScroll={({nativeEvent: {contentOffset}}) => scrollList(contentOffset)}
      />
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
  listContent: {
    padding: 16,
    paddingTop: BANNER_HEIGHT
  }
});
