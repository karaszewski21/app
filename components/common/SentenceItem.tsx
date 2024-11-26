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
interface VideoPlayerProps {
    text: string;
    translation: string
    audioUrl: string;
    vocabulary: any[]
    getTranslationHeightView?: (height: number) => void;
}

type AudioSentenceContextType = {
    currentSound: Audio.Sound | null;
    playAudio: (audioUrl: string) => Promise<void>;
    // getTranslationHeightView: (height: number) => number;
    stopAndUnloadSound: () => Promise<void>;
};
  
const AudioSentenceContext = createContext<AudioSentenceContextType | undefined>(undefined);
  
export const AudioSentenceProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);

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
    <AudioSentenceContext.Provider value={{ currentSound, playAudio, stopAndUnloadSound }}>
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

interface Word {
  word: string;
  translation: string;
  audioUrl: string;
}

const SentenceItem: React.FC<VideoPlayerProps> = ({ text, translation, audioUrl, vocabulary, getTranslationHeightView }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { playAudio} = useAudioSentence();
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
    setSelectedWord(word);
    setIsModalVisible(true);
  };

  const renderText = () => {
    if (!vocabulary?.length) return <Text style={styles.text}>{text}</Text>;

    const words = vocabulary.map(v => v.word);
    const pattern = new RegExp(`(${words.map(word => 
      word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    ).join('|')})`, 'gi');

    const parts = text.split(pattern);

    return (
      <Text style={styles.text}>
        {parts.map((part, index) => {
          const matchedWord = vocabulary.find(v => 
            v.word.toLowerCase() === part.toLowerCase()
          );

          if (matchedWord) {
            return (
              <Text key={index} onPress={() => handleWordPress(matchedWord)} style={{ fontSize: 22, color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline'}}>{part}</Text>
            );
          }

          return <Text key={index}>{part}</Text>;
        })}
      </Text>
    );
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

  const containerStyle = useAnimatedStyle(() => {
    return {
      maxHeight: interpolate
      ( height.value, 
        [0, 1], 
        [0, translationHeight + 20] // +20 dla paddingu
      ),
      opacity: height.value,
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

      <VocabularyModal
        word={selectedWord ?? {} as any}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onMarkAsKnown={(word) => {
          console.log('Marked as known:', word);
        }}
        onMarkToLearn={(word) => {
          console.log('Marked to learn:', word);
        }}
        playAudio={(url) => playAudio(url)}
      />
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

export default SentenceItem;