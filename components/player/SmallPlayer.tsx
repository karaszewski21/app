import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { usePlayerModal } from '@/context/playerModalContext';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useTabsScreen } from '@/context/tabContext';

const VideoPlayer = () => {
  const video = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const { record, closePlayer } = usePlayerModal();
  const { showTabs, hiddenTabs } = useTabsScreen();

  const height = useSharedValue(0);

  useEffect(() => {
    return () => { 
      showTabs() 
    }
  }, []);

  useEffect(() => {
    if (record) {
       //@ts-ignore
      video.current?.playAsync();
      setIsPlaying(true);
    }
  }, [record]);

  const handleUpMore = () => {
    setShowMore(true);
    height.value = withSpring(400);
  };

  const handleDownMore = () => {
    setShowMore(false);
    height.value = withSpring(0);
  };

  const formatTime = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const onLoad = (data: any) => {
    const { durationMillis } = data;
    setDuration(durationMillis);
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);

      if (status.didJustFinish) {
          resetVideo()
      }
    }
  };

  const resetVideo = useCallback(async () => {
    if (video.current) {
      //@ts-ignore
      await video.current.setPositionAsync(0);
      //@ts-ignore
      await video.current.pauseAsync();
      setIsPlaying(true);
    }
  }, []);

  const onValueChange = (value: number) => {
    if (video.current) {
      //@ts-ignore
      video.current.setPositionAsync(value);
    }
  };

  const time = useCallback(() => {
    return formatTime(position / 1000)
  }, [position])

  const onSlidingComplete = async (value: number) => {
    if (video.current) {
      //@ts-ignore
      await video.current.setPositionAsync(value);
    }
  };

  const onPlayPause = useCallback(async () => {
    if (video.current) {
      if (isPlaying) {
          //@ts-ignore
        await video.current.pauseAsync();
      } else {
          //@ts-ignore
        await video.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying])

  const skipBackward = async () => {
    if (video.current) {
      //@ts-ignore
      const status = await video.current.getStatusAsync();
      const newPosition = Math.max(0, status.positionMillis - 15000);
      //@ts-ignore
      await video.current.setPositionAsync(newPosition);
    }
  };

  const skipForward = async () => {
    if (video.current) {
      //@ts-ignore
      const status = await video.current.getStatusAsync();
      const newPosition = Math.min(duration, status.positionMillis + 15000);
      //@ts-ignore
      await video.current.setPositionAsync(newPosition);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View style={styles.mainContainer}>
        <Animated.View style={[styles.videoContainer, animatedStyle]}>
          <ImageBackground
            source={require('@/assets/background.jpg')}
            style={styles.bgVideo}
            resizeMode='cover'
            imageStyle={{ borderRadius: 15}}
          >
            { showMore && 
              <View style={styles.videoHeaderContainer}>
                <TouchableOpacity style={styles.expandButton} onPress={handleDownMore}>
                  <MaterialCommunityIcons 
                    name={"chevron-down"} 
                    size={24} 
                    color="#fff" 
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.closeVideo} onPress={closePlayer}>
                  <MaterialCommunityIcons name="close" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            }

            <Video
              ref={video}
              style={[styles.video, showMore ? { height: '50%'} : { height: 0}]}
              source={{
                uri: record?.fileUrl ?? '',
              }}
              useNativeControls={false}
              resizeMode={ResizeMode.CONTAIN}
              isLooping={false}
              onPlaybackStatusUpdate={onPlaybackStatusUpdate}
              onLoad={onLoad}
            />
            { showMore && 
              <View style={styles.videoControlsContainer}>
                <Text style={styles.titleVideo} numberOfLines={1}>{record?.title}</Text>
                <View style={styles.controlsRow}>
                  <TouchableOpacity style={styles.skipButton} onPress={skipBackward}>
                    <MaterialCommunityIcons 
                      name="rewind-15" 
                      size={25}
                      color="#FFFFFF" 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.videoPlayButton} onPress={onPlayPause}>
                    <MaterialCommunityIcons 
                      name={isPlaying ? 'pause' : 'play'} 
                      size={36} 
                      color="#FFFFFF" 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skipButton} onPress={skipForward}>
                    <MaterialCommunityIcons 
                      name="fast-forward-15" 
                      size={25} 
                      color="#FFFFFF" 
                    />
                  </TouchableOpacity>
                </View>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={duration}
                  value={position}
                  minimumTrackTintColor="#e5ae2f"
                  maximumTrackTintColor="#fff"
                  thumbTintColor="#e5ae2f"
                  onValueChange={(value) => onValueChange(value)}
                  onSlidingComplete={onSlidingComplete}
                  />
                <Text style={styles.timeText}>{time()} / {formatTime(duration / 1000)}</Text>
              </View>
            }
          </ImageBackground>
        </Animated.View>

        { !showMore && 
          <TouchableOpacity style={styles.playerContainer}  onPress={handleUpMore}>
              <ImageBackground
                source={require('@/assets/background.jpg')}
                style={styles.bgVideo}
                resizeMode='cover'
                blurRadius={20}
                imageStyle={{ borderRadius: 15}}
              >
              <View style={styles.headerPlayerContainer}>
                  <Image source={{ uri: record?.imageUrl }} style={styles.image} />
                  <View style={{width: '70%'}}>
                    <Text style={styles.titlePlayer} numberOfLines={1}>{record?.title}</Text>
                  </View>
                  <TouchableOpacity style={styles.closePlayer} onPress={closePlayer}>
                    <MaterialCommunityIcons name="close" size={24} color="#fff" />
                  </TouchableOpacity>
              </View>
              <View style={styles.controlsPlayerContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={duration}
                  value={position}
                  minimumTrackTintColor="#e5ae2f"
                  maximumTrackTintColor="#fff"
                  thumbTintColor="#e5ae2f"
                  onValueChange={(value) => onValueChange(value)}
                  onSlidingComplete={onSlidingComplete}
                />
              <TouchableOpacity style={styles.playButton} onPress={onPlayPause}>
                  <MaterialCommunityIcons 
                    name={isPlaying ? 'pause' : 'play'} 
                    size={24} 
                    color="#FFFFFF" 
                  />
              </TouchableOpacity>
            </View>
            </ImageBackground>
          </TouchableOpacity>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 15,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    marginHorizontal: 10,
    paddingVertical: 5,
  },

  // PLAYER
  playerContainer: {
    position: 'relative',
    flexDirection: 'column',
    height: 110,
    width: '100%',
  },

  headerPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  controlsPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },

  titlePlayer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  closePlayer: {
    paddingBottom: 20,
  },

  playButton: {
    position: 'absolute',
    right: 30,
    top:  -10,
    backgroundColor: '#e5ae2f',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgPlayer: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 15
  },


  // VIDEO
  videoContainer: {
    flexDirection: 'column',
    width: '100%',
  },

  videoHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: 40,
    padding: 10
  },

  videoControlsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  titleVideo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15
  },

  videoPlayButton: {
    backgroundColor: '#e5ae2f',
    borderRadius: 15,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeVideo: {
    paddingRight: 20,
  },

  bgVideo: {
    flex: 1,
    resizeMode: 'cover',
  },

  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  skipButton: {
    backgroundColor: '#e5ae2f',
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 20,
  },

  timeText: {
    fontSize: 12,
    color: '#bdc3c7',
  },

  expandButton: {
    paddingLeft: 20,
  },

  video: {
    width: '100%',
  },

  slider: {
   width: '80%',
  },
});

export default VideoPlayer;