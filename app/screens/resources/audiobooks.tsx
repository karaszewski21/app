import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { audiobooks } from '@/constants/audiobooks';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { usePlayerModal } from '@/context/playerModalContext';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';
import SquareButton from '@/components/common/SquareButton';
import BookButton from '@/components/buttons/BookButton';
import useBuyBook from '@/hooks/useBuyBook';
import BuyBookView from '@/components/common/BuyBookView';
import BarcodeScanned from '@/components/common/BarcodeScanned';
import { OptionsBook } from '@/model/book';
import { Image } from 'expo-image';

const AudioBooksStack = createStackNavigator();
const { height: HEIGHT_SCREEN } = Dimensions.get('window');

export default function AudioBooksStackScreen({route}:any) {
  return (
    <AudioBooksStack.Navigator>
      <AudioBooksStack.Screen name="AudiobooksDetails" component={AudiobooksScreen} options={{headerShown: false}} initialParams={route.params} />
    </AudioBooksStack.Navigator>
  );
}

const AudiobooksScreen = ({ route, navigation }:any) => { 
  const book = route.params.book
  const { ids, bannerUrl } = route.params.resource;
  const options = book.content.options as OptionsBook;
  const isLock = book && book.isLock;
  const height = useSharedValue(0);
  const { openPlayer } = usePlayerModal();
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  const versions = audiobooks.filter(element => ids.includes(element.id))
  
  const openAudioBookItem = (version: any) => {
      openPlayer({
        title: version.title,
        fileUrl: version.audioFile,
        imageUrl: version.imageUrl
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bookDetailsContainer}>
            <Image style={styles.image} source={{uri: bannerUrl}} contentFit='cover' placeholder={require('@/assets/gifs/loader.gif')}></Image>
        </View>
        <View style={styles.listContent}>
          { versions.map((item: any, index) =>
            <SquareButton key={index} props={{title: '', disabled: isLock, icon: 'text', backgroundColor: item.options.backgroundColor, navigate: () => openAudioBookItem(item)}}>
               { item.type === undefined && 
                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                   <Text style={[styles.tileTitle, {color: item.options.textColor}]}>{item.name}</Text>
                </View>
              }
               { item.type === 'image' && 
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.tileTitle, {color: item.options.textColor}]} numberOfLines={3}>{item.name}</Text>
                  <Image source={{ uri: item.imageUrl }} style={{width: 70, height: 70, marginBottom: -15 }} contentFit='cover' placeholder={require('@/assets/gifs/loader.gif')} transition={2000}/>
                </View>
              }
              { item.type === 'pl' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={[styles.tileTitle, {color: item.options.textColor}]} numberOfLines={2}>{item.name}</Text>
                  <Image source={require('@/assets/icons/pl.png')} style={{width: 50, height: 50, marginBottom: 5}} contentFit='contain'/>
                  {/* <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: item.options.textPlayColor}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} contentFit='contain'/> 
                  </View>  */}
                </View>
              }
               { item.type === 'nute' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={[styles.tileTitle, {color: item.options.textColor}]} numberOfLines={2}>{item.name}</Text>
                  <Image source={require('@/assets/icons/nuta-icon.png')} style={{width: 50, height: 50, marginBottom: 5}} contentFit='contain'/>
                  {/* <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: item.options.textPlayColor}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} contentFit='contain'/> 
                  </View>  */}
                </View>
              }
              { item.type === 'eng' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={[styles.tileTitle, {color: item.options.textColor}]} numberOfLines={2}>{item.name}</Text>
                  <Image source={require('@/assets/icons/eng-flag.png')} style={{width: 50, height: 50, marginBottom: 5}} contentFit='contain'/>
                  {/* <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: item.options.textPlayColor}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} contentFit='contain'/> 
                  </View>  */}
                </View>}
              { item.type === 'pl-eng' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={[styles.tileTitle, {color: item.options.textColor}]}>{item.name}</Text>
                  <Image source={require('@/assets/icons/pl-eng.png')} style={{width: 50, height: 50, marginBottom: 5}} contentFit='contain'/>
                  {/* <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: item.options.textPlayColor}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} contentFit='contain'/> 
                  </View>  */}
                </View>
              }
            </SquareButton>)
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
          <Overlay opacity={0.3}>
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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      paddingBottom: 50
    },
    bookDetailsContainer: {
      marginHorizontal: 10,
      borderRadius: 15,
    },
    tileTitle: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic',
      marginBottom: 5
    },
    tilePlayContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    listContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    image: {
      height: 130,
      width: '100%',
      borderRadius: 15,
    },
    scannerContainer: {
      height: '80%'
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1
    },
    overlayContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    overlay: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    }
  });