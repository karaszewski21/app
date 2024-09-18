import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolate,
  cancelAnimation
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Video, ResizeMode } from 'expo-av';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const STORY_WIDTH = SCREEN_WIDTH;
const IMAGE_DURATION = 3000; // 5 seconds for images

function Stories({ stories }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const progress = useSharedValue(0);
  const context = useSharedValue({ x: 0 });
  const [isPaused, setIsPaused] = useState(false);

  const goToNextStory = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      translateX.value = withSpring(-STORY_WIDTH * (currentIndex + 1), { damping: 50 });
    }
  }, [currentIndex, stories.length, translateX]);

  const goToPrevStory = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      translateX.value = withSpring(-STORY_WIDTH * (currentIndex - 1), { damping: 50 });
    }
  }, [currentIndex, translateX]);

  const startProgress = useCallback(() => {
    if (isPaused) return;

    progress.value = 0;
    const duration = IMAGE_DURATION;
    progress.value = withTiming(1, { duration }, (finished) => {
      if (finished) {
        runOnJS(goToNextStory)();
      }
    });
  }, [progress, goToNextStory, currentIndex, isPaused]);

  const togglePause = useCallback(() => {
      setIsPaused(prev => !prev);
  }, []);


  useEffect(() => {
    startProgress();
    return () => cancelAnimation(progress);
  }, [currentIndex, startProgress]);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      cancelAnimation(progress);
      context.value = { x: translateX.value };
    })
    .onUpdate((e) => {
      translateX.value = Math.min(
        Math.max(e.translationX + context.value.x, -STORY_WIDTH * (stories.length - 1)), 0);
    })
    .onEnd(() => {
      const destination = Math.round(translateX.value / STORY_WIDTH) * STORY_WIDTH;
      translateX.value = withSpring(destination, { damping: 50 });
      const newIndex = Math.abs(Math.round(destination / STORY_WIDTH));
      if (newIndex !== currentIndex) {
        runOnJS(setCurrentIndex)(newIndex);
      } else {
        runOnJS(startProgress)();
      }
    });

  const tapGesture = Gesture.Tap()
    .onStart((e) => {
      if (e.x > SCREEN_WIDTH / 1) {
        runOnJS(goToPrevStory)();
      } else {
        runOnJS(goToNextStory)();
      }
      runOnJS(startProgress)();
    });

  const longPress = Gesture.LongPress()
    .onBegin(() => {
      runOnJS(togglePause)();
    })
    .onEnd(() => {
      runOnJS(togglePause)();
    }); 

  const composedGestures = Gesture.Exclusive(panGesture, tapGesture, longPress);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={{width: '100%', height: '100%'}}>
      <GestureDetector gesture={composedGestures}>
        <View style={styles.container}>
          <View style={styles.progressContainer}>
            {stories.map((_:any, index: any) => (
              <ProgressBar 
                key={index} 
                index={index} 
                currentIndex={currentIndex} 
                progress={progress}
              />
            ))}
          </View>
          <Animated.View style={[styles.storyContainer, animatedStyle]}>
            {stories.map((story: any, index: any) => (
              <Story 
                key={index} 
                story={story} 
                index={index} 
                currentIndex={currentIndex} 
                translateX={translateX}
                isPaused={isPaused}
              />
            ))}
          </Animated.View>
        </View>
      </GestureDetector>
    </View>
  );
}

function ProgressBar({ index, currentIndex, progress }: any) {
  const width = useAnimatedStyle(() => {
    let widthValue = 0;
    if (index < currentIndex) {
      //@ts-ignore
      widthValue = '100%';
    } else if (index === currentIndex) {
      //@ts-ignore
      widthValue = `${interpolate(progress.value, [0, 1], [0, 100], Extrapolate.CLAMP)}%`;
    }
    return { width: widthValue };
  });

  return (
    <View style={styles.progressBar}>
      <Animated.View style={[styles.activeProgress, width]} />
    </View>
  );
}

function Story({ story, index, currentIndex, translateX, isPaused }: any) {
  const videoRefs = useRef<{ [key: string]: Video | null }>({});
  const [videoDuration, setVideoDuration] = useState(0);

  const onVideoLoad = (status: any) => {
    if (status.durationMillis) {
      setVideoDuration(status.durationMillis / 1000);
    }
  };

  useEffect(() => {
    if (story.type === 'video') {
        videoRefs.current[currentIndex]?.stopAsync()
        .then(() => {
          videoRefs.current[currentIndex]?.playFromPositionAsync(0);
        })
    }
  }, [currentIndex, index, story.type]);


  useEffect(() => {
    if (isPaused) {
      if (story.type === 'video') {
        videoRefs.current[currentIndex]?.pauseAsync();
      }
    } else {
      if (story.type === 'video') {
        videoRefs.current[currentIndex]?.playAsync();
      }
    }
  }, [isPaused, currentIndex]);

  return (
    <Animated.View style={[styles.story]}>
      {story.type === 'image' ? (
        <Animated.Image 
          source={{ uri: story.url }} 
          style={styles.storyImage} 
          resizeMode={ResizeMode.COVER}
        />
      ) : (
        <Video
          ref={(ref) => (videoRefs.current[index] = ref)}
          source={{ uri: story.url }}
          style={styles.storyVideo}
          resizeMode={ResizeMode.COVER}
          shouldPlay={index === currentIndex}
          isLooping={false}
          onPlaybackStatusUpdate={onVideoLoad}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  progressContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 10,
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 2,
  },
  activeProgress: {
    height: '100%',
    backgroundColor: 'white',
  },
  storyContainer: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT,
  },
  story: {
    width: STORY_WIDTH,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: '100%',
    height: '100%',
  },
  storyVideo: {
    width: '100%',
    height: '100%',
  },
});

export default Stories;