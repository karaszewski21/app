import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { audiobooks } from '@/constants/audiobooks';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { usePlayerModal } from '@/context/playerModalContext';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';
import SquareButton from '@/components/common/SquareButton';
import BookButton from '@/components/buttons/BookButton';

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

  const isLock = book && book.isLock;
  const height = useSharedValue(0);
  const { openPlayer } = usePlayerModal()

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  const versions = audiobooks.filter(element => ids.includes(element.id))
  
  const openAudioBookItem = (version: any) => {
      openPlayer({
        title: version.type,
        fileUrl: version.audioFile,
        imageUrl: version.imageUrl
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bookDetailsContainer}>
          <Text style={styles.title}>Audiobooki</Text>
          <Image style={styles.image} source={{ uri: bannerUrl }}></Image>
        </View>
        <View style={styles.listContent}>
          { versions.map((item, index) =>
            <SquareButton key={index} props={{title: '', disabled: isLock, icon: 'text', backgroundColor: '#55b1be', navigate: () => openAudioBookItem(item)}}>
              { item.type === 'pl' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.tileTitle}>{item.name}</Text>
                  <Image source={require('@/assets/icons/pl.png')} style={{width: 60, height: 60, marginBottom: 5}} resizeMode='contain'/>
                  <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: '#fff'}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} resizeMode='contain'/> 
                  </View> 
                </View>
              }
              { item.type === 'eng' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.tileTitle}>{item.name}</Text>
                  <Image source={require('@/assets/icons/eng-flag.png')} style={{width: 60, height: 60, marginBottom: 5}} resizeMode='contain'/>
                  <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: '#fff'}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} resizeMode='contain'/> 
                  </View> 
                </View>}
              { item.type === 'pl-eng' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.tileTitle}>{item.name}</Text>
                  <Image source={require('@/assets/icons/pl-eng.png')} style={{width: 60, height: 60, marginBottom: 5}} resizeMode='contain'/>
                  <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: '#fff'}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} resizeMode='contain'/> 
                  </View> 
                </View>
              }
            </SquareButton>)
          }
        </View>
        { isLock &&
          <Animated.View  style={{...styles.overlayContainer,height}}>
            <Overlay opacity={0.3} style={styles.overlay}>
              <BookButton 
                  title="Kup teraz"
                  onPress={() => console.log}
                  leftIconName="book-open-page-variant"
                  backgroundColor="#c45c48"
                  textColor="#fff"
                  customStyles={{
                    container: { borderWidth: 1, borderColor: '#c83c45' },
                    title: { fontSize: 20 },
                    }}
                  />
                <BookButton 
                  title="Odblokuj książkę"
                  onPress={() => console.log}
                  leftIconName="image"
                  backgroundColor="#f5d066"
                  textColor="#000"
                  customStyles={{
                    container: { borderWidth: 1, borderColor: '#f5d066' },
                    title: { fontSize: 20 },
                    }}
                  />
            </Overlay> 
          </Animated.View>
        }
      </ScrollView>
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
      margin: 10,
    },
    title: {
      fontSize: 28,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    tileTitle: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
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
      top: 0,
    },
    overlay: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    }
  });