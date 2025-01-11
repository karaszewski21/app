import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess, Video } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import SquareButton from '@/components/common/SquareButton';
import ListWrapper from '@/components/common/ListWrapper';
import { voice_play } from '@/constants/voice_play';
import BookButton from '@/components/buttons/BookButton';
import useBuyBook from '@/hooks/useBuyBook';
import BuyBookView from '@/components/common/BuyBookView';
import { OptionsBook } from '@/model/book';
import AnimatedQuestionCard from '@/components/quiz/component/AnimatedQuestionCard';
import { VoiceQuiz } from '@/model/quiz';

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
  const options = book.content.options as OptionsBook;
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book)

  const isLock = book && book.isLock;
  const height = useSharedValue(0);
  const quizList = voice_play.filter(element => ids.includes(element.id));


  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.voiceDetailsContainer}>
          <Image style={styles.image} source={{uri: bannerUrl}}></Image>
        </View>
        <View style={styles.listContent}>
          { quizList.map((item, index) =>
            <SquareButton 
              key={index} 
              props={
                { 
                  title: item.title, 
                  disabled: isLock, 
                  icon: 'text', 
                  backgroundColor: item.options.backgroundColor, 
                  color: item.options.textColor, 
                  navigate: () => navigation.navigate('VoiceQuiz', {audio_quiz: item})
                }}>
              <Image source={require('@/assets/icons/play.png')} style={{width: 70, height: 70}} resizeMode='contain'/>
              <Text style={{color:item.options.textColor, fontWeight: 'bold', fontSize: 12}}>{`Czas trwania`}</Text>
              <Text style={{color:item.options.textColor, fontWeight: 'bold', fontSize: 12}}>{`${item.total} min`}</Text>
            </SquareButton>)
          }
        </View>
        <View style={styles.rankingContainer}>
          <ListWrapper props={{title: 'Jak zacząć?', textColor: options.textColor, backgroundColor: options.backgroundColor}}>
            <View style={styles.stepContainer}>
              <Text style={[styles.step, {color: options.textColor}]}>1. Wybierz nagranie</Text>
              <Text style={[styles.step, {color: options.textColor}]}>2. Słuchaj uważnie pytania</Text>
              <Text style={[styles.step, {color: options.textColor}]}>3. Odpowiedz pomiędzy</Text>
            </View>
          </ListWrapper>
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

const VoiceQuizScreen = ({route, navigation }:any) => { 
    const audioQuiz = route.params.audio_quiz as VoiceQuiz;
    const { hiddenTabs, showTabs} = useTabsScreen();
    const video = useRef<Video>(null);
    const [permissionResponse, requestPermission] = Audio.usePermissions();
    const [recording, setRecording] = useState<Audio.Recording | null>();
    const [sound, setSound] = useState<Audio.Sound | null>();

    const [currentTime, setCurrentTime] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<{id:number, text:string} | undefined>(undefined);
    const [lastShownQuestion, setLastShownQuestion] = useState<{id:number, text:string} | undefined>(undefined);
    const [analizeRecording, setAnalizeRecording] = useState(false);

    const volume = useSharedValue(0);
    const progressAnimation = useSharedValue(0);

    useEffect(() => {
      hiddenTabs()
      return () => {
        showTabs() 
      }
    }, []);

    useEffect(() => {
      let interval: NodeJS.Timeout | null = null;

      if (recording) {
          interval = setInterval(() => {
            setCurrentTime(prevTime => {
              // Reset po osiągnięciu końca quizu
              if (prevTime >= timeToSeconds(audioQuiz.total)) {
                if(interval) clearInterval(interval);
                return 0;
              }
              return prevTime + 1;
            });
          }, 1000);

          const runAudio = async () => {
            await sound?.unloadAsync();
            await video.current?.loadAsync({uri: audioQuiz.audioUrl}, { progressUpdateIntervalMillis: 1000 } )
            await video.current?.playAsync();
          }

          runAudio()
          .catch((error) => console.log('error runAudio', error))
          
      }

      if (!recording) {
        if(interval) clearInterval(interval);
      }

      return () => {
        const cleanup = async () => {

          if(interval) clearInterval(interval);

          if (recording) {
            try {
              await recording.stopAndUnloadAsync();
              await sound?.unloadAsync();
              await video.current?.unloadAsync();
            } catch (error) {
              console.log('Error cleaning up sound:', error);
            }
          }
        };
        cleanup();
      };
    }, [recording]);

    useEffect(() => {
      if (currentTime) {
        const question = audioQuiz.manifest.find(q => shouldShowQuestion(q, currentTime));
        setCurrentQuestion(question);

        if (question) {
          setLastShownQuestion(question); // Zapisujemy pytanie jako ostatnio pokazane
        }

        progressAnimation.value = withTiming(
          (currentTime / TOTAL_QUIZ_TIME) * 100,
          { duration: 300 }
        );

      }

    }, [currentTime]);

    const startRecording = async () => {
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
              const normalizedVolume = Math.min(Math.max((status.metering + 160) / 160, 0), 1);

              volume.value = withSpring(normalizedVolume, {
                damping: 10,
                stiffness: 100,
                mass: 0.5
              });
            }
          },
          50
        );
        setRecording(recording);

      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }

    const stopRecording = async () => {
        await recording?.stopAndUnloadAsync();
        await video.current?.unloadAsync();
        setRecording(undefined);
        setLastShownQuestion(undefined);
        setCurrentTime(0);
        progressAnimation.value = withTiming(0);
        volume.value = withTiming(0);
    }

    const sendRecording = async () =>  {
      if (recording) {
          console.log('--> pobieramy i wysyłam audio do analizy');
          setAnalizeRecording(true)
  
          // await Audio.setAudioModeAsync({allowsRecordingIOS: false});
          // const uri = recording.getURI(); 
          // if (!uri) return;

          // const fileName = `recording-${Date.now()}.caf`;
          // await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
          // await FileSystem.moveAsync({from: uri,to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`});

          // const playbackObject = new Audio.Sound();
          // await playbackObject.loadAsync({ uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}` });
          // await playbackObject.playAsync();

          const fetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 5000);
          });

          fetch
          .then(async (value) => {
              if (value) {
                await runAudioAnalize()
              }
          })
          .catch()
      }
    }

    const runAudioAnalize = async () => {
        const playback = new Audio.Sound();
        await playback.loadAsync({ uri: audioQuiz.audioUrlResponse});
        await playback.playAsync();
        setSound(playback);
        setAnalizeRecording(false);
        setLastShownQuestion(undefined);
    }

    // Konwersja czasu z formatu "MM:SS" na sekundy
    const timeToSeconds = (timeString: string) => {
      const [minutes, seconds] = timeString.split(':').map(Number);
      return minutes * 60 + seconds;
    };

    const shouldShowQuestion = (questionData: any, currentTimeInSeconds: any) => {
      const startTime = timeToSeconds(questionData.startTime);
      const endTime = timeToSeconds(questionData.endTime);
      const answerStartTime = timeToSeconds(questionData.answerStartTime);
      const answerEndTime = timeToSeconds(questionData.answerEndTime);
      
      // Pokazuj pytanie tylko podczas czytania pytania LUB podczas czasu na odpowiedź
      return (
        (currentTimeInSeconds >= startTime && currentTimeInSeconds <= endTime) ||
        (currentTimeInSeconds >= answerStartTime && currentTimeInSeconds <= answerEndTime)
      );
    };

    const onPlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
      const playbackStatus = status as AVPlaybackStatusSuccess;

      if (playbackStatus.isLoaded) {
      
      }

      if (playbackStatus.didJustFinish) {
        await stopRecording();
        await sendRecording();
        setRecording(undefined);
        setLastShownQuestion(undefined);
      }
    };

    // Tworzymy kilka kręgów z różnymi animacjami
    const createWaveStyles = (delay: number, baseSize: number) => useAnimatedStyle(() => {
      const scaleFactor = 0.8 + (volume.value * 0.5); // Skalowanie bazuje na głośności
      
      return {
        transform: [{ 
          scale: withSpring(scaleFactor, {
            damping: 5,
            stiffness: 80,
            mass: 1
          })
        }],
        opacity: withTiming(
          Math.max(0.1, Math.min(0.6 - (delay / 1000), volume.value)), 
          { duration: 100 }
        ),
        width: baseSize,
        height: baseSize,
        borderRadius: baseSize / 2,
      };
    });

    // Tworzymy style dla różnych rozmiarów kręgów
    const waveStyles = [
      createWaveStyles(0, 200),    // najmniejszy krąg
      createWaveStyles(0, 230),  // średni krąg
      createWaveStyles(0, 250), // największy krąg
    ];

    const TOTAL_QUIZ_TIME = timeToSeconds(audioQuiz.total);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.progressBarContainer}>
            <Animated.View style={[styles.progressBar, { width: `${progressAnimation.value}%`, backgroundColor: audioQuiz.options.progressBackgroundColor }]}/>
        </View>
      
        <View style={styles.contentWrapper}>
          <View style={styles.questionContainer}>
            <View style={styles.questionWrapper}>
              { lastShownQuestion && (
                <Text style={[styles.questionNumber, { color: audioQuiz.options.textColor }]}>
                  Pytanie {lastShownQuestion.id} z {audioQuiz.manifest.length}
                </Text>
              )}
              { currentQuestion && shouldShowQuestion(currentQuestion, currentTime) && (
                  <AnimatedQuestionCard 
                    currentQuestion={currentQuestion}
                    textColor={audioQuiz.options.textColor} 
                    totalQuestions={audioQuiz.manifest.length}
                  />
              )}
               <Video
                  ref={video}
                  style={{ height: 0}}
                  useNativeControls={false}
                  shouldPlay={false}
                  isLooping={false}
                  onPlaybackStatusUpdate={onPlaybackStatusUpdate}
                  />
            </View>
          </View>

          { !analizeRecording && 
             <View style={styles.recordContainer}>
              { recording && 
                <>
                  { waveStyles.map((style, index) => (
                    <Animated.View
                      key={index}
                      style={[styles.waveCircle, style]}
                    />
                  ))}
                  <TouchableOpacity style={[styles.micButton, { backgroundColor: audioQuiz.options.backgroundColor }]} onPress={stopRecording}>
                    <Text style={styles.textButton}>Przerwij</Text>
                  </TouchableOpacity>
                </>
              }
              { !recording &&
                <>
                  <TouchableOpacity style={[styles.micButton, { backgroundColor: audioQuiz.options.backgroundColor }]} onPress={startRecording}>
                    <Text style={[styles.textButton, { color: audioQuiz.options.textColor }]}>Start</Text>
                  </TouchableOpacity>
                </>
              }
            </View>
          }
        
          { analizeRecording && 
            <View style={styles.recordContainer}>
              <Text>Trwa analiza jakaś anuimacja</Text>  
            </View>
          }

          <View style={styles.speakerContainer}>
            <TouchableOpacity style={styles.speakerButton}>
              <MaterialCommunityIcons name="speaker" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

        </View>
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
    contentWrapper: {
      flex: 1,
      justifyContent: 'space-between', // Rozdziela sekcje równomiernie
    },
    questionContainer: {
      height: 200,
      alignItems: 'center',
    },
    questionWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    recordContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    speakerContainer: {
      padding: 20,
      alignItems: 'center',
    },
    // title: {
    //   fontSize: 28,
    //   textAlign: 'center',
    //   fontFamily: 'ShantellSans-SemiBoldItalic'
    // },
    voiceDetailsContainer: {
      marginHorizontal: 10,
      borderRadius: 15,
    },
    image: {
      height: 130,
      width: '100%',
      borderRadius: 15,
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
      width: 200,
      height: 200,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Półprzezroczyste białe tło
      borderWidth: 2,
      borderColor: '#FFFFFF',
      position: 'absolute',
    },
    micButton: {
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: '#e5ae2f',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    textButton: {
      fontSize: 30,
      fontWeight: 'bold',
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
    questionNumber: {
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    questionText: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    phaseText: {
      fontSize: 16,
      color: '#007AFF',
      textAlign: 'center',
      marginTop: 10,
    },
    progressBarContainer: {
      height: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 5,
      overflow: 'hidden',
      width: '100%',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#4CAF50',
      borderRadius: 5,
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