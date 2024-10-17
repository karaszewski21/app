import { View, Text, TouchableOpacity, StyleSheet,FlatList, LayoutRectangle, Alert, Modal, ScrollView, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {  memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { Ionicons, } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { useAnimatedStyle, useSharedValue,withSpring, } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';
import { Gesture, GestureDetector, GestureHandlerRootView, ComposedGesture } from 'react-native-gesture-handler';
import { Audio,  AVPlaybackStatusSuccess } from 'expo-av';


const LangsStack = createStackNavigator();

export default function VoiceQuizesStackScreen({route}:any) {
  return (
    <LangsStack.Navigator>
      <LangsStack.Screen name="LangsDetails" component={LangsScreen} options={{headerShown: false}} initialParams={route.params} />
      <LangsStack.Screen name="Lang" component={LangScreen} options={{headerShown: false}} />
    </LangsStack.Navigator>
  );
}

const LangsScreen = ({route, navigation }:any) => { 
  const params = route.params;
  const height = useSharedValue(0);

  const quizList = [
    { id: '1', title: 'Angielski'},
  ];

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(400);
  }, []);

  const renderVoiceQuizItem = ({ item }: any) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Lang', {quiz: item.quiz})}
      disabled={params?.book && params.book.isLock ? true : false}
    >
      <Text>{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={quizList}
        renderItem={renderVoiceQuizItem}
        keyExtractor={item => item.id}
      />
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

  interface Word {
    text: string;
    audioUrl: string;
    phraseId: number;
    translation?: string;
  }
  
  interface Phrase {
    id: number;
    audioUrl: string;
  }

  const samplePhrases: Phrase[] = [
    { 
      id: 1,
    //  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/english/imvacation.mp3'
    audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/english/testlong.mp3'
    },
    { 
      id: 2,
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/english/ilikeplaysoccer.mp3'
    },
    { 
      id: 3,
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/english/park.mp3'
    },
    { 
      id: 4,
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/english/childrn.mp3'
    },
    { 
      id: 5,
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/english/pickin.mp3'
    },
  ]
  const words: Word[] = [
        { text: 'I', audioUrl: '', phraseId: 1},
        { text: 'am', audioUrl: '', phraseId: 1},
        { text: 'on', audioUrl: '', phraseId: 1},
        { text: 'vacation.',audioUrl: '', phraseId: 1, translation: 'a period of time when someone does not go to work or school but is free to do what they want, such as travel or relax' },
  
        { text: 'I',  audioUrl: '', phraseId: 2},
        { text: 'like', audioUrl: '', phraseId: 2},
        { text: 'to play',   audioUrl: '', phraseId: 2, translation: 'to engage in activity for enjoyment and recreation rather than a serious or practical purpose' },
        { text: 'soccer.', audioUrl: '', phraseId: 2},

        { text: 'The park', audioUrl: '', phraseId: 3},
        { text: 'is', audioUrl: '', phraseId: 3},
        { text: 'busy ', audioUrl: '', phraseId: 3},
        { text: 'today.',audioUrl: '', phraseId: 3},

        { text: 'Children', audioUrl: '', phraseId: 4},
        { text: 'play ', audioUrl: '', phraseId: 4},
        { text: 'the swings.', audioUrl: '', phraseId: 4},

        { text: 'A family', audioUrl: '', phraseId: 5},
        { text: 'has', audioUrl: '', phraseId: 5},
        { text: 'a picnic', audioUrl: '', phraseId: 5},
        { text: 'on', audioUrl: '', phraseId: 5},
        { text: 'on the grass.', audioUrl: '', phraseId: 5},
  ];

  const LangScreen = () => { 
    const [phrases] = useState<Phrase[]>(samplePhrases);
    const [wordLayouts, setWordLayouts] = useState<{ [key: string]: LayoutRectangle & { phraseId: string } }>({});
    const activeIndex = useSharedValue(-1);
    const containerRef = useRef<View>(null);
    const containerLayout = useRef<LayoutRectangle | null>(null);
    const soundsRef = useRef<{ [key: string]: Audio.Sound }>({});
    const soundQueue = useRef([]);
    const isPlayingSound = useRef(false);
    const [currendsound, setCurrentSoud] = useState<Audio.Sound>()

    useEffect(() => {
      const loadSounds = async () => {
        const loadedSounds: { [key: string]: Audio.Sound } = {};
        for (const phrase of phrases) {
          try {
            const { sound } = await Audio.Sound.createAsync(
              { uri: phrase.audioUrl },
              {  
                progressUpdateIntervalMillis: 100,  
                volume: 1.0,
                shouldPlay: false 
              }
            );
            loadedSounds[phrase.id] = sound;
          } catch (error) {
            console.error(`Failed to load sound for phrase ${phrase.id}:`, error);
          }
        }
        soundsRef.current = loadedSounds;
      };
  
      loadSounds();
  
      return () => {
        Object.values(soundsRef.current).forEach(sound => sound.unloadAsync().catch(console.error));
      };
    }, []);

    useEffect(() => {


      console.log('currendsound,',currendsound)

    }, 
    [currendsound])

  
    const onLayoutWord = useCallback((event: LayoutRectangle, index: number, phraseId: number) => {
      setWordLayouts(prev => ({
        ...prev,
        [index]: { ...event, phraseId }
    }));
    }, []);
  
    const onLayoutContainer = useCallback((event: LayoutRectangle) => {
      containerLayout.current = event;
    }, []);

    const playNextSound = async () => {
      console.log('-->runplayNextSound')
      if (soundQueue.current.length > 0 && !isPlayingSound.current) {
    //    isPlayingSound.current = true;
        const phraseId = soundQueue.current.shift();
        //@ts-ignore
        const sound = soundsRef.current[phraseId];

        setCurrentSoud(sound)  

        isPlayingSound.current = false;
        if (sound) {
          try {
            await sound.setPositionAsync(0);
            await sound.playAsync();
            sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatusSuccess) => {
              console.log(status)
            if (status.isLoaded) {
             // console.log(status)
              if (status.didJustFinish) {
                isPlayingSound.current = false;
                playNextSound();
              }
            }

            });
          } catch (error) {
            console.error('Error playing sound:', error);
            isPlayingSound.current = false;
            playNextSound();
          }
        } else {
          isPlayingSound.current = false;
          playNextSound();
        }
      }
    }
  
    const queueSound = useCallback((phraseId: any) => {
      //@ts-ignore
      soundQueue.current.push(phraseId);
      playNextSound();
    }, []);


    const debounce = (func: any, delay: number) => {
      let timeoutId: any;
    
      return (...args: any) => {
        clearTimeout(timeoutId);
    
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };
  
    const debouncedQueueSound = useMemo(() => debounce(queueSound, 50), [queueSound]);
    
    const checkWordUnderTouch = useCallback(async (x: number, y: number) => {
      if (!containerLayout.current) return;
  
      const relativeX = x - containerLayout.current.x;
      const relativeY = y - containerLayout.current.y;

      for (const [index, layout] of Object.entries(wordLayouts)) {
        if (
            relativeX >= layout.x && 
            relativeX <= layout.x + layout.width && 
            relativeY >= layout.y && 
            relativeY <= layout.y + layout.height
        ) {
            activeIndex.value = Number(index);

            debouncedQueueSound(layout.phraseId)
         //   const sound = soundsRef.current[layout.phraseId];
            // if (sound) {
            //     try {
            //         const status = await sound.getStatusAsync();
            //         if (status.isLoaded) {
            //             if (status.isPlaying) {
            //                 await sound.stopAsync();
            //             }
            //             await sound.setPositionAsync(0);
            //             await sound.playAsync();
            //         } 
            //     } catch (error) {
            //         console.error('Error playing sound:', error);
            //     }
            // }
            
            return;
        }
      }
      
      activeIndex.value = -1;
    }, [wordLayouts]);

    const panGesture = Gesture.Pan()
      .runOnJS(true)
      .onBegin((event) => {
        checkWordUnderTouch(event.absoluteX, event.absoluteY);
      })
      .onUpdate((event) => {
        checkWordUnderTouch(event.absoluteX, event.absoluteY);
      })
      .onFinalize(() => {
        activeIndex.value = -1;
      })

    const WordComponent = useCallback(({ word, index }: { word: Word, index: number }) => {
        const { text, phraseId } = word;

        const animatedStyles = useAnimatedStyle(() => ({
          backgroundColor: activeIndex.value === index ? 'rgba(255, 0, 0, 0.5)' : 'transparent',
        }));
    
        return (
          <Animated.Text 
            key={index} 
            onLayout={(event) => onLayoutWord(event.nativeEvent.layout, index, phraseId )}
            style={[styles.word, animatedStyles]}
          > 
            {text}{' '}
          </Animated.Text>
        );
      }, [onLayoutWord]);

    const MemoizedWordComponent = useMemo(() => memo(WordComponent), [WordComponent]);

    return (
      <SafeAreaView style={styles.container}>
          <Image source={{ uri: 'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg'}} style={styles.image}/>
          <GestureDetector gesture={panGesture}>
            <View ref={containerRef} onLayout={(event) => onLayoutContainer(event.nativeEvent.layout)} style={styles.textContainer}>
              { words.map((word, index) => (
                <MemoizedWordComponent key={index} word={word} index={index} />
              ))}
            </View>
          </GestureDetector>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%'
    },
    phraseContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
    },
    gestureContainer: {
      flex: 1,
    },
    textContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      //alignSelf: 'center',
      padding: 10,
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
    word: {
      fontSize: 24,
      margin: 10,
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