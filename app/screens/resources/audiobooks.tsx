import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { audiobook } from '@/constants/Audiobook';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { usePlayerModal } from '@/context/playerModalContext';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';
import SquareButton from '@/components/common/SquareButton';

const AudioBooksStack = createStackNavigator();

export default function AudioBooksStackScreen({route}:any) {
  return (
    <AudioBooksStack.Navigator>
      <AudioBooksStack.Screen name="AudiobooksDetails" component={AudiobooksScreen} options={{headerShown: false}} initialParams={route.params} />
    </AudioBooksStack.Navigator>
  );
}

const AudiobooksScreen = ({route, navigation }:any) => { 
  const params = route.params;
  const height = useSharedValue(0);
  const { openPlayer } = usePlayerModal()

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(400);
  }, []);

  const versions = audiobook.versions
  
  const openAudioBookItem = (version: any) => {
      openPlayer({
        title: version.type,
        fileUrl: version.audioFile,
        imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg'
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bookDetailsContainer}>
          <Text style={styles.title}>Audiobooki</Text>
          <Image style={styles.image} source={{ uri: audiobook.image }}></Image>
        </View>
        <View style={styles.listContent}>
          { versions.map((item, index) =>
            <SquareButton key={index} props={{title: '', icon: 'text', backgroundColor: '#55b1be', navigate: () => openAudioBookItem(item)}}>
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
              { item.type === 'uk' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.tileTitle}>{item.name}</Text>
                  <Image source={require('@/assets/icons/uk.png')} style={{width: 60, height: 60, marginBottom: 5}} resizeMode='contain'/>
                  <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: '#fff'}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} resizeMode='contain'/> 
                  </View> 
                </View>}
              { item.type === 'pl-uk' && 
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.tileTitle}>{item.name}</Text>
                  <Image source={require('@/assets/icons/pl-uk.png')} style={{width: 60, height: 60, marginBottom: 5}} resizeMode='contain'/>
                  <View style={styles.tilePlayContent}>
                    <Text style={{...styles.tileTitle, marginRight: 5, color: '#fff'}}>słuchaj</Text>
                    <Image source={require('@/assets/icons/play.png')} style={{width: 20, height: 20}} resizeMode='contain'/> 
                  </View> 
                </View>
              }
            </SquareButton>)
          }
        </View>
        { params?.book && params.book.isLock &&
          <Animated.View  style={{...styles.overlayContainer,height}}>
            <Overlay opacity={0.6} style={styles.overlay}>
              <FunnyButton props={{title:'kup', onPress:()=> {console.log('--->buy')}, icon: ''}}></FunnyButton>
              <FunnyButton props={{title:'odblokuj', onPress:()=> {console.log('--->loout')}, icon: ''}}></FunnyButton>
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
      bottom: 0,
    },
    overlay: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    }
  });