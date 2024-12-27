import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, GestureResponderEvent, Image } from 'react-native';
import Animated, { 
    useSharedValue, 
    FadeInUp,
  } from 'react-native-reanimated';
  import { Audio } from 'expo-av';
import { VocabularyModal } from './VocabularyModal';
import { Word } from '@/model/reader';
import { Pressable } from 'react-native-gesture-handler';
interface VideoPlayerProps {
    text: string;
    translation: string
    audioUrl: string;
    vocabulary: any[]
    getTranslationHeightView?: (height: number) => void;
    handleWord?: (word:Word, options: { x: number, y: number }) => void;
    widthTextContent?: number;
}

type AudioSentenceContextType = {
    currentSound: Audio.Sound | null;
    selectedWord: Word | null;
    setCurrentSound: (currentSound: Audio.Sound | null) => void;
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
    <AudioSentenceContext.Provider value={{ currentSound, isModalVisible, selectedWord, setCurrentSound, setIsModalVisible, setWord, playAudio, stopAndUnloadSound }}>
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

const SentenceItem: React.FC<VideoPlayerProps> = ({ text, translation, audioUrl, vocabulary, handleWord, getTranslationHeightView, widthTextContent }) => {
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

  const handleWordPress = (word: Word, event: GestureResponderEvent) => {
    setWord(word);
    setIsModalVisible(true);
    const x = event.nativeEvent.locationX + event.nativeEvent.pageX;
    handleWord && handleWord(word, {x: x, y: event.nativeEvent.pageY})
  };

  const renderText = () => {
      if (!vocabulary?.length) return <Text style={[styles.text, {width: widthTextContent}]}>{text}</Text>;

      const words = vocabulary.map(v => v.word);
      const pattern = new RegExp(`(${words.map(word => 
        word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).join('|')})`, 'gi');

      try {
      const parts = text.split(pattern);
      
      return (
        <Text style={[styles.text, {width: widthTextContent}]}>
          { parts.map((part, index) => {
            const matchedWord = vocabulary.find(v => 
              v.word.toLowerCase() === part.toLowerCase()
            );


            if (matchedWord) {
              return (
                <Text key={index} onPress={(event) => handleWordPress(matchedWord, event)} style={{ fontSize: 22, color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline'}}>{part}</Text>
              );
            }
            return <Text key={index}>{part}</Text>;
          })}
        </Text>
      );
    } catch (error) {
        console.log('-->error', error)
    }
  };

  return (
    <View style={styles.sentenceContainer}>
        <View style={styles.rowContainer}>
          <Pressable style={styles.playButton} onPress={() => playAudio(audioUrl)}>
            <MaterialCommunityIcons 
                name={'play-circle-outline'} 
                size={22} 
                color="#FFFFFF" 
            />
          </Pressable>
          
          { renderText() }
    
          <Pressable style={styles.expandButton} onPress={()  => setIsExpanded(!isExpanded)}>
              <Image source={require('@/assets/icons/lang.png')} style={{width: 25, height: 35, resizeMode: 'contain'}}/>
          </Pressable>
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
    display: 'flex',
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