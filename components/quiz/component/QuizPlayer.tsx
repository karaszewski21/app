import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface AudioPlayerProps {
  audioUrl: string;
}

const QuizPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadAndPlaySound = async (url: string) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );

      setSound(newSound);
      setIsPlaying(true);
    } catch (error) {
      console.log('Error loading sound:', error);
      setIsPlaying(false);
    }
  };

  const toggleSound = async () => {
    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.replayAsync();
        }
        setIsPlaying(!isPlaying);
      } else if (audioUrl) {
        await loadAndPlaySound(audioUrl);
      }
    } catch (error) {
      console.log('Error toggling sound:', error);
    }
  };

  // Efekt obsługujący zmianę audioUrl
  useEffect(() => {
    if (audioUrl) {
      loadAndPlaySound(audioUrl);
    }
    
    return () => {
      const cleanup = async () => {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
            setIsPlaying(false);
          } catch (error) {
            console.log('Error cleaning up sound:', error);
          }
        }
      };
      cleanup();
    };
  }, [audioUrl]);

 // Efekt dla obsługi stanu odtwarzania
 useEffect(() => {
  if (sound) {
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && !status.isPlaying && status.didJustFinish) {
        setIsPlaying(false);
      }
    });
  }

  return () => {
    const cleanup = async () => {
      if (sound) {
        try {
          await sound.stopAsync();
          await sound.unloadAsync();
          setIsPlaying(false);
        } catch (error) {
          console.log('Error cleaning up sound:', error);
        }
      }
    };
    cleanup();
  };
}, [sound]);

  return (
    <View style={styles.container}>
      {audioUrl && (
        <TouchableOpacity 
          style={[
            styles.playButton, 
            !isPlaying && styles.playButtonIdle
          ]} 
          onPress={toggleSound}
        >
          <MaterialCommunityIcons 
            name={isPlaying ? 'pause' : 'play'} 
            size={24} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  playButtonIdle: {
    backgroundColor: '#66BB6A', // Nieco jaśniejszy odcień dla stanu idle
  }
});

export default QuizPlayer;