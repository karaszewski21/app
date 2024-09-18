import { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet,Image, Button, Dimensions } from 'react-native';
import Animated, { cancelAnimation, Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Video, ResizeMode} from 'expo-av';

const { width: SCREEN_WIDTH, height } = Dimensions.get('window');
const WIDTH = SCREEN_WIDTH - 100

export default function SquareStory({ stories }:any) { 
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<{[key: string]: Video | null}>({});

  const pageIndex = useSharedValue(0);

  const goToNextStory = useCallback(() => {
    if (Math.floor(pageIndex.value) < stories.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      pageIndex.value = withTiming(Math.floor(pageIndex.value + 1), {
        duration: 500,
      });
    } 

  }, [pageIndex]);

  const goToPrevStory = useCallback(() => {
    if (Math.floor(pageIndex.value) > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      pageIndex.value = withTiming(Math.floor(pageIndex.value - 1), {
        duration: 300,
      });
    }
  }, [pageIndex]);

  const tapGesture = Gesture.Tap()
    .runOnJS(true)
    .onStart((e) => {
      if (e.x < SCREEN_WIDTH / 1.5) {
        goToNextStory();
      } else {
        goToPrevStory();
      }
      });

    useEffect(() => {
      const currentStory = stories[currentIndex];
      if (currentStory && currentStory.type === 'video') {
        const videoRef = videoRefs.current[currentIndex];
        if (videoRef) {
          videoRef.stopAsync()
            .then(() => videoRef.playFromPositionAsync(0))
            .catch(error => console.error('Error playing video:', error));
        }
      }
    }, [currentIndex]);
  
    const onPlaybackStatusUpdate = (index: number) => (status: any) => {
      if (status.isLoaded && !status.isPlaying && index === currentIndex) {
        videoRefs.current[index]?.playAsync();
      }
    };

  return(
      <GestureDetector gesture={tapGesture}>
        <View style={styles.content}>
          {stories.map((story: any, index: any) => (
            <Stories key={index} pageColor={'black'} pageIndex={pageIndex} index={index}>
              {story.type === 'image' ? (
                <Image
                  source={{ uri: story.url }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode={ResizeMode.COVER}
                />
              ) : (
                <Video
                  ref={(ref) => (videoRefs.current[index] = ref)}
                  source={{ uri: story.url }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode={ResizeMode.COVER}
                  shouldPlay={index === currentIndex}
                  isLooping={false}
                  isMuted={false}
                  onPlaybackStatusUpdate={onPlaybackStatusUpdate(index)}
                />
              )}
            </Stories>
          ))}
          <ProgressBar totalStories={stories.length} currentIndex={currentIndex} />
        </View>
      </GestureDetector>
    ) 
  }

  const ProgressBar = ({ totalStories, currentIndex }: any) => {
    return (
      <View style={styles.progressContainer}>
        {Array.from({ length: totalStories }).map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.progressDot, 
              index === currentIndex && styles.activeProgressDot
            ]}
          />
        ))}
      </View>
    );
  };

  const Stories = ({ pageColor, index, pageIndex, children } : any) => {
    const anim = useAnimatedStyle(() => ({
      transform: [
        {
          perspective: SCREEN_WIDTH * 5.5,
        },
        {
          rotateY: `${interpolate(
            pageIndex.value,
            [index - 1, index, index + 1],
            [90, 0, -90]
          )}deg`,
        },
      ],
    }));
    return (
      <Animated.View
        style={[
          {
            zIndex: 100 - index,
            width: WIDTH,
            position: 'absolute',
            aspectRatio: 9 / 16,
            backgroundColor: pageColor,
            backfaceVisibility: 'hidden',
            borderRadius: 10,
            transformOrigin: ['50%', '50%', -WIDTH / 2],
            overflow: 'hidden',
          },
          anim,
        ]}
      >
        {children}
      </Animated.View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    progressDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      marginHorizontal: 4,
    },
    activeProgressDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'white',
    },
  });