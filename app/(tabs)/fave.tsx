import { StyleSheet, Text, TouchableOpacity, FlatList, View, NativeScrollPoint} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFavorite from '@/hooks/useFavorite';
import Banner from '@/components/common/Banner';
import { useCallback, useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, withSpring } from 'react-native-reanimated';
import { BANNER_HEIGHT } from '@/constants/Common';
import ListFaveItem from '@/components/common/ListFaveItem';
import ReaderStackScreen from '@/app/screens/reader';
import AudioPlayScreen from '@/app/screens/audio_play';
import BookStackScreen from '@/app/screens/book';
import { AudioPlay, Book, Reader } from '@/model';

const FaveStack = createStackNavigator();

export default function FunStackScreen() {
  return (
    <FaveStack.Navigator>
      <FaveStack.Screen name="FaveDetails" component={FaveScreen} options={{headerShown: false}}/>
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
  const [ratingModal, setRatingModal]= useState(false);
  const {favorites, isFavorite, addFavorite, removeFavorite } = useFavorite();

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

  return (
    <SafeAreaView style={styles.container}>
      <Banner imageUrl="https://goldfish.fra1.digitaloceanspaces.com/books/amp/index.png" hidden={hiddenBanner}/>
      <FlatList
        data={favorites}
        renderItem={({ item }) => {
          return <ListFaveItem
            props={{
              ...item,
              imageUrl: item.gallery[0],
              onPress: () => onNavigate(item),
              onRatingPress: () => setRatingModal(true),
              onRemovePress: () => removeFavorite(item.id),
            }}
          />
          }
        }
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
    paddingBottom: 60
  },
  listContent: {
    padding: 16,
    paddingTop: BANNER_HEIGHT
  }
});
