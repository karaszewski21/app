import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Animated, { 
    useAnimatedStyle, 
    withTiming, 
    withSpring,
    useSharedValue, 
    interpolate,
    Easing,
    FadeInUp,
  } from 'react-native-reanimated';
  import { Audio } from 'expo-av';
import { VocabularyModal } from './VocabularyModal';
import { Word } from '@/model/reader';
interface VideoPlayerProps {
    text: string;
    translation: string
    audioUrl: string;
    vocabulary: any[]
    getTranslationHeightView?: (height: number) => void;
    handleWord?: (word:Word) => void
}

type AudioSentenceContextType = {
    currentSound: Audio.Sound | null;
    selectedWord: Word | null;
    setWord: (word: Word) => void;
    isModalVisible: boolean;
    setIsModalVisible: (val: boolean) => void;
    playAudio: (audioUrl: string) => Promise<void>;
    // getTranslationHeightView: (height: number) => number;
    stopAndUnloadSound: () => Promise<void>;
};
  
const AudioSentenceContext = createContext<AudioSentenceContextType | undefined>(undefined);
  
export const AudioSentenceProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const stopAndUnloadSound = async () => {
    if (currentSound) {
      try {
        await currentSound.stopAsync();
        await currentSound.unloadAsync();
        setCurrentSound(null);
      } catch (error) {
        console.log('Error cleaning up sound:', error);
      }
    }
  };

  const playAudio = async (audioUrl: string) => {
    await stopAndUnloadSound();

    const playback = new Audio.Sound();
    await playback.loadAsync({ uri: audioUrl });
    await playback.playAsync();
    setCurrentSound(playback);

  };

  const setWord = (word: Word) => {
    setSelectedWord(word)
  }

  useEffect(() => {
    return () => {
      if (currentSound) {
        currentSound.stopAsync()
          .then(() => currentSound.unloadAsync())
          .catch(error => console.log('Cleanup error:', error));
      }
    };
  }, [currentSound]);


  return (
    <AudioSentenceContext.Provider value={{ currentSound, isModalVisible, selectedWord, setIsModalVisible, setWord, playAudio, stopAndUnloadSound }}>
      {children}
    </AudioSentenceContext.Provider>
  );
};

export const useAudioSentence = () => {
  const context = useContext(AudioSentenceContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

const SentenceItem: React.FC<VideoPlayerProps> = ({ text, translation, audioUrl, vocabulary, handleWord, getTranslationHeightView }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { playAudio, setWord, setIsModalVisible } = useAudioSentence();
  const rotation = useSharedValue(0);
  const height = useSharedValue(0);
  const [translationHeight, setTranslationHeight] = useState(0);

  useEffect(() => {
    if (!isExpanded) {
      if (getTranslationHeightView) getTranslationHeightView(0)
    }

  }, [isExpanded])

  const onTranslationLayout = useCallback((event: any) => {
    const { height } = event.nativeEvent.layout;
    setTranslationHeight(height);

    if (getTranslationHeightView) getTranslationHeightView(height)

  }, [height.value]);

  const handleWordPress = (word: Word) => {
    setWord(word);
    setIsModalVisible(true);
    handleWord && handleWord(word)
  };

  const renderText = () => {

    
      if (!vocabulary?.length) return <Text style={styles.text}>{text}</Text>;
      const words = vocabulary.map(v => v.word);
      const pattern = new RegExp(`(${words.map(word => 
        word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).join('|')})`, 'gi');

      try {
      console.log(pattern)
      const parts = text.split(pattern);
      console.log(parts)
      return (
        <Text style={styles.text}>
          { parts.map((part, index) => {
            const matchedWord = vocabulary.find(v => 
              v.word.toLowerCase() === part.toLowerCase()
            );

            console.log('matchedWord', matchedWord)

            if (matchedWord) {
              return (
                <Text key={index} onPress={() => handleWordPress(matchedWord)} style={{ fontSize: 22, color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline'}}>{part}</Text>
              );
            }
            console.log('part', part)
            return <Text key={index}>{part}</Text>;
          })}
        </Text>
      );
    } catch (error) {
        console.log('-->error', error)
    }
  };


  const startAudio = async () => {
      playAudio(audioUrl)
  }

  const toggleExpand = () => {
    const newValue = !isExpanded;
    setIsExpanded(newValue);
    
    rotation.value = withSpring(newValue ? 1 : 0, {
      damping: 10,
      stiffness: 100
    });
    
    height.value = withTiming(newValue ? 1 : 0, {
      duration: 300,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    });
  };


 const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(rotation.value, [0, 1], [0, 90])}deg`,
        },
      ],
    };
  });

  return (
    <View style={styles.sentenceContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.playButton} onPress={startAudio}>
            <MaterialCommunityIcons 
                name={'play'} 
                size={24} 
                color="#FFFFFF" 
            />
          </TouchableOpacity>
          
          {renderText()}
    
          <TouchableOpacity onPress={toggleExpand}>
            <Animated.View style={arrowStyle}>
                <MaterialCommunityIcons 
                    name={'chevron-up'} 
                    size={24} 
                    color="#FFFFFF" 
                />
            </Animated.View>
          </TouchableOpacity>
        </View>
        
        <Animated.View entering={FadeInUp.duration(1000)}>
          {isExpanded && (
            <>
              <Animated.Text onLayout={onTranslationLayout} style={styles.translation}>
                {translation}
              </Animated.Text>
            </>
          )}
        </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  sentenceContainer: {
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  playButton: {
    width: 20,
  },
  expandButton: {
    width: 20,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'justify',
    letterSpacing: 0.5,
    marginHorizontal: 10,
  },
  translationContainer: {
   // overflow: 'hidden',
  },
  translation: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'justify',
    letterSpacing: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
    flexWrap: 'wrap'
  }
});

export default React.memo(SentenceItem);