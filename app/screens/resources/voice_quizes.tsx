import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import SquareButton from '@/components/common/SquareButton';
import ListWrapper from '@/components/common/ListWrapper';
import { voice_play } from '@/constants/voice_play/wamp';
import BookButton from '@/components/buttons/BookButton';
import useBuyBook from '@/hooks/useBuyBook';
import BuyBookView from '@/components/common/BuyBookView';

const VoiceQuizesStack = createStackNavigator();
const { height: HEIGHT_SCREEN } = Dimensions.get('window');

export default function VoiceQuizesStackScreen({route}:any) {
  return (
    <VoiceQuizesStack.Navigator>
      <VoiceQuizesStack.Screen name="QuizesDetails" component={VoiceQuizesScreen} options={{headerShown: false}} initialParams={route.params} />
      <VoiceQuizesStack.Screen name="VoiceQuiz" component={VoiceQuizScreen} options={{headerShown: false}} />
    </VoiceQuizesStack.Navigator>
  );
}

const VoiceQuizesScreen = ({route, navigation }:any) => { 
  const book = route.params.book
  const { ids, bannerUrl } = route.params.resource;
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book)

  const isLock = book && book.isLock;
  const height = useSharedValue(0);
  const quizList = voice_play.filter(element => ids.includes(element.id))

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.quizVoiceDetailsContainer}>
        <Text style={styles.title}>Słuchaj i odpowiadaj</Text>
          <Image style={styles.image} source={{uri: bannerUrl}}></Image>
        </View>
        <View style={styles.listContent}>
          { quizList.map((item, index) =>
            <SquareButton key={index} props={{title: item.title, disabled: isLock, icon: 'text', backgroundColor: '#55b1be', color: '#fff', navigate: ()=>navigation.navigate('VoiceQuiz', {audio_quiz: item})}}>
              <Image source={require('@/assets/icons/play.png')} style={{width: 80, height: 80}} resizeMode='contain'/>
            </SquareButton>)
          }
        </View>
        <View style={styles.rankingContainer}>
          <ListWrapper props={{title: 'Jak zacząć?'}}>
            <View style={styles.stepContainer}>
              <Text style={styles.step}>1. Wybierz nagranie</Text>
              <Text style={styles.step}>2. Słuchaj uważnie pytania</Text>
              <Text style={styles.step}>3. Odpowiedz pomiędzy</Text>
            </View>
          </ListWrapper>
        </View>
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
                onSubmit={(s) => buyBookPress(s)}
                onClose={() => setBuyBookModal(false)}
                />
            </Overlay> 
        }
      </ScrollView>
    </SafeAreaView>
    )
  }

  const VoiceQuizScreen = ({route, navigation }:any) => { 
    const audio_quiz = route.params.audio_quiz
    console.log('-->audio_quiz',audio_quiz)
    const { hiddenTabs, showTabs} = useTabsScreen();
    const [recording, setRecording] = useState<Audio.Recording>();
    const [permissionResponse, requestPermission] = Audio.usePermissions();

    const volume = useSharedValue(0);
    const scale = useSharedValue(1);

    useEffect(() => {
      hiddenTabs()
      return () => {
        showTabs() 
      }
    }, []);

    useEffect(() => {
        scale.value = withRepeat(
          withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
          -1,
          true
        );
    }, []);

    async function startRecording() {
      try {
        if (permissionResponse && permissionResponse.status !== 'granted') {
          await requestPermission();
        }

        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY,
          (status) => {
            if (status.metering !== undefined) {
              // Normalizujemy wartość metering do zakresu 0-1
              console.log('--->')
              volume.value = withTiming(Math.min(Math.max(status.metering / -160 + 1, 0), 1), {
                duration: 100,
                easing: Easing.inOut(Easing.ease),
              });
            }
          },
          100
        );
        setRecording(recording);

      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  
    async function stopRecording() {

      if (recording) {
          setRecording(undefined);
          await recording.stopAndUnloadAsync();
          await Audio.setAudioModeAsync({allowsRecordingIOS: false});
          const uri = recording.getURI(); 
          console.log('Recording stopped and stored at', uri);
  
          if (!uri) return;
  
          const fileName = `recording-${Date.now()}.caf`;
          await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
          await FileSystem.moveAsync({from: uri,to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`});
  
          const playbackObject = new Audio.Sound();
          await playbackObject.loadAsync({ uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}` });
          await playbackObject.playAsync();
      }
    }

    const toggleRecording = () => {
      if (recording) {
        stopRecording();
      } else {
        startRecording();
      }
    };
  
    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scale.value }],
      };
    });
  
    return (
      <SafeAreaView style={styles.container}>

        { recording && 
          <>
            <Animated.View style={[styles.waveCircle, animatedStyles]} />
            <TouchableOpacity style={styles.micButton} onPress={stopRecording}>
            <MaterialCommunityIcons 
              name={"stop"} 
              size={50} 
              color="#FFFFFF" 
            />
            </TouchableOpacity>
          </>
        }
        { !recording && 
          <>
            <TouchableOpacity style={styles.micButton} onPress={startRecording}>
            <MaterialCommunityIcons 
              name={"play"} 
              size={50} 
              color="#FFFFFF" 
            />
            </TouchableOpacity>
          </>
        }
        <TouchableOpacity style={styles.speakerButton}>
          <MaterialCommunityIcons name="speaker" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </SafeAreaView>  
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tileTitle: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    quizVoiceDetailsContainer: {
      margin: 10,
    },
    title: {
      fontSize: 28,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
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
    rankingContainer: {
      padding: 20,
    },
    ranking: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    listContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    waveCircle: {
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: 'rgba(229, 174, 47, 0.5)',
    },
    micButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#e5ae2f',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    speakerButton: {
      position: 'absolute',
      bottom: 20,
      backgroundColor: '#768570',
      padding: 10,
      borderRadius: 25,
    },
    stepContainer: {
      marginTop: 5,
    },
    step: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
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