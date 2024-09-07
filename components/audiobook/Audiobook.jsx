import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const Audiobook = ({ audiobook }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function playSound() {
    const path = `@/assets/${audiobook.versions[currentChapterIndex].audioFile}`
    console.log("--->path",path)
    const { sound } = await Audio.Sound.createAsync(require('@/assets/test.mp3'),{shouldPlay: true});
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(undefined);
      setIsPlaying(false);
    }
  }

  async function playNextChapter() {
    await stopSound();
    if (currentChapterIndex < audiobook.versions.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      playSound();
    }
  }

  async function playPreviousChapter() {
    await stopSound();
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      playSound();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{audiobook.title}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={playPreviousChapter} style={styles.button}>
          <Text>Poprzedni</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? pauseSound : playSound} style={styles.button}>
          <Text>{isPlaying ? 'Pauza' : 'Odtwórz'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={playNextChapter} style={styles.button}>
          <Text>Następny</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chapterTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
});

export default Audiobook;