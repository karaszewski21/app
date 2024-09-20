import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

function Stories({ stories }: { stories: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<Video | null>(null);

  const goToNextStory = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  }, [currentIndex, stories.length]);

  const goToPrevStory = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.stopAsync().then(() => {
        videoRef.current?.playFromPositionAsync(0);
      });
    }
  }, [currentIndex]);

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.didJustFinish) {
      goToNextStory();
    }
  };

  const panGesture = Gesture.Pan()
  .runOnJS(true)
  .onEnd((e) => {
    const { translationX, velocityX } = e;
    
    // Zwiększona czułość: reagujemy na mniejsze przesunięcia i prędkości
    if (velocityX > 50 || translationX > WIDTH * 0.2) {
      goToPrevStory();
    } else if (velocityX < -50 || translationX < -WIDTH * 0.2) {
      goToNextStory();
    }
  });

  const tapGesture = Gesture.Tap()
    .runOnJS(true)
    .onBegin((e) => {
      if (e.x < WIDTH / 2) {
        goToNextStory();
      } else {
        goToPrevStory();
      }
  });

  const composedGestures = Gesture.Simultaneous(tapGesture);

  return (
    <GestureDetector gesture={composedGestures}>
    <View style={styles.container}>
        <Video
          ref={videoRef}
          source={{ uri: stories[currentIndex] }}
          style={styles.storyVideo}
          resizeMode={ResizeMode.COVER}
          shouldPlay={true}
          isLooping={false}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
    </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  storyVideo: {
    width: '100%',
    height: '100%',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Stories;