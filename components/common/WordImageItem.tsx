import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
    FadeInUp,
  } from 'react-native-reanimated';
  import { Audio } from 'expo-av';

interface VideoPlayerProps {
    text: string;
    colorWord: string;
    colorTranslation: string;
    translation: string
    audioUrl: string;
}

type AudioSentenceContextType = {
    currentSound: Audio.Sound | null;
    playAudio: (audioUrl: string) => Promise<void>;
    stopAndUnloadSound: () => Promise<void>;
};
  
const AudioWordContext = createContext<AudioSentenceContextType | undefined>(undefined);
  
export const AudioWordProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
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
    <AudioWordContext.Provider value={{ currentSound, playAudio, stopAndUnloadSound }}>
      {children}
    </AudioWordContext.Provider>
  );
};

export const useAudioWord = () => {
  const context = useContext(AudioWordContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

const WordImageItem: React.FC<VideoPlayerProps> = ({ text, translation, audioUrl, colorWord, colorTranslation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { playAudio} = useAudioWord();

  useEffect(() => {
    if (isExpanded) {
        playAudio(audioUrl)
    }

  }, [isExpanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <View style={{display: 'flex'}}>
        <TouchableOpacity onPress={() => toggleExpand()}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
      <Animated.View entering={FadeInUp.duration(500)}>
        {isExpanded && (
          <>
            <View style={{display: 'flex'}}>
              <Animated.Text style={[styles.translation, {color: colorTranslation}]}>
                {translation}
              </Animated.Text>
            </View>
          </>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#000',
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    letterSpacing: 0.5,
    marginHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 2
  },
  translation: {
    backgroundColor: '#000',
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 10,
    marginVertical: 2,
    flexWrap: 'wrap',
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 2
  }
});

export default WordImageItem;