import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
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
      <View>
        <Text>{audiobook.title}</Text>
        <Image source={{ uri: audiobook.image }} style={styles.image}/>
      </View>
      <View style={styles.listContent}>
        { versions.map((item, index) =>
          <SquareButton key={index} props={{title: item.type, icon: 'text', backgroundColor: '#3498db', navigate: () => openAudioBookItem(item)}}/>)
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
    </SafeAreaView>
  )
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: '#333',
    },
    listContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    image: {
      width: 200,
      height: 200,
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