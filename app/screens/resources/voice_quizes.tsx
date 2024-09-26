import { ScrollView, View, Text, TouchableOpacity, StyleSheet,FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Quiz from '@/components/quiz/Quiz'
import { quiz, quiz2 } from '@/constants/Quiz';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

const VoiceQuizesStack = createStackNavigator();

export default function VoiceQuizesStackScreen({route}:any) {
  return (
    <VoiceQuizesStack.Navigator>
      <VoiceQuizesStack.Screen name="QuizesDetails" component={VoiceQuizesScreen} options={{headerShown: false}} initialParams={route.params} />
      <VoiceQuizesStack.Screen name="VoiceQuiz" component={VoiceQuizScreen} options={{headerShown: false}} />
    </VoiceQuizesStack.Navigator>
  );
}

const VoiceQuizesScreen = ({route, navigation }:any) => { 
  const params = route.params;
  const height = useSharedValue(0);

  const quizList = [
    { id: '1', title: 'Quiz głosowy 1', quiz: quiz},
    { id: '2', title: 'Quiz głosowy 2', quiz: quiz2}
  ];

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(400);
  }, []);

  const renderVoiceQuizItem = ({ item }: any) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('VoiceQuiz', {quiz: item.quiz})}
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

  const VoiceQuizScreen = ({route, navigation }:any) => { 
    const { hiddenTabs, showTabs} = useTabsScreen();
    const [recording, setRecording] = useState<Audio.Recording>();
    const [permissionResponse, requestPermission] = Audio.usePermissions();
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

        const { recording } = await Audio.Recording.createAsync();
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
         <Animated.View style={[styles.waveCircle, animatedStyles]} />
          <TouchableOpacity style={styles.micButton} onPress={toggleRecording}>
            <MaterialCommunityIcons 
              name={"microphone"} 
              size={50} 
              color="#FFFFFF" 
            />
          </TouchableOpacity>
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