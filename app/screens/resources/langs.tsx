import { View, Text, TouchableOpacity, StyleSheet,FlatList, LayoutRectangle, Alert, Modal, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {  Fragment, useEffect} from 'react';
import { Ionicons, } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { useAnimatedStyle, useSharedValue,withSpring, } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import { OptionsBook } from '@/model/book';
import useBuyBook from '@/hooks/useBuyBook';
import BookButton from '@/components/buttons/BookButton';
import BuyBookView from '@/components/common/BuyBookView';
import SquareButton from '@/components/common/SquareButton';
import { english } from '@/constants/english';
import LangChapterScreen from '../lang_chapter';
import LangImageScreen from '../lang_image';


const LangsStack = createStackNavigator();
const { height: HEIGHT_SCREEN } = Dimensions.get('window');

export default function VoiceQuizesStackScreen({route}:any) {
  return (
    <LangsStack.Navigator>
      <LangsStack.Screen name="LangsDetails" component={LangsScreen} options={{headerShown: false}} initialParams={route.params} />
      <LangsStack.Screen name="Lang" component={LangScreen} options={{headerShown: false}} />
      <LangsStack.Screen name="LangChapter" component={LangChapterScreen} options={{headerShown: false}} />
      <LangsStack.Screen name="LangImage" component={LangImageScreen} options={{headerShown: false}} />
    </LangsStack.Navigator>
  );
}

const LangsScreen = ({route, navigation }:any) => { 
  const book = route.params.book
  const { ids, bannerUrl } = route.params.resource;
  const options = book.content.options as OptionsBook;
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book);

  const isLock = book && book.isLock;
  const height = useSharedValue(0);

  const elements = english.filter(element => ids.includes(element.id))

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bookDetailsContainer}>
          <Image style={styles.image} source={{uri: bannerUrl}}></Image>
        </View>
        <View style={styles.listContent}>
          {
              elements.map((element, index) => 
              <Fragment key={index}>
                { element.type === 'chapter' &&  
                  <SquareButton key={element.type} props={{title: element.title, icon: 'text', backgroundColor: options.tileColor, color: '#fff', navigate: () => navigation.navigate('LangChapter', {book, resource: element}) }}>
                    <Image source={require('@/assets/icons/quiz.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }
                
                { element.type === 'image' &&
                  <SquareButton  key={element.type} props={{title: element.title, icon: 'add', backgroundColor: options.tileColor, color: '#fff', navigate: () => navigation.navigate('LangImage', {book, resource: element}) }}>
                    <Image source={require('@/assets/icons/audiobook.png')} style={{width: 90, height: 90,}} resizeMode='contain'/>
                  </SquareButton>
                }
              </Fragment>
              )
            }
        </View>
      </ScrollView>
      { isLock &&
          <Animated.View  style={{...styles.overlayContainer,height}}>
            <Overlay opacity={0.3} style={styles.overlay}>
              <BookButton 
                title="Kup teraz"
                onPress={() => onSelectBookPress(book)}
                leftIconName="book-open-page-variant"
                backgroundColor="#c45c48"
                textColor="#fff"
                customStyles={{
                  container: { borderWidth: 1, borderColor: '#c83c45' },
                  title: { fontSize: 20 },
                  }}
                />
            </Overlay> 
          </Animated.View>
        }
        { buyBookModal &&
          <Overlay opacity={0.3} style={{top: 0}}>
            <BuyBookView 
              book={selectedBook}
              textColor={options.textColor}
              backgroundColor={options.backgroundColor}
              bgColorButton={options.bgColorButton}
              onSubmit={(s) => buyBookPress(s)}
              onClose={() => setBuyBookModal(false)}
              />
           </Overlay> 
        }
    </SafeAreaView>
    )
  }

  const LangScreen = () => { 
  

    return (
      <SafeAreaView style={styles.container}>
         
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%'
    },
    bookDetailsContainer: {
      margin: 10,
    },
    listContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    image: {
      height: 200,
      width: '100%',
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    overlayContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    overlay: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    }
  });