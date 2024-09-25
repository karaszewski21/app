import React, { useEffect, useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { usePlayerModal } from '@/context/playerModalContext';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useTabsScreen } from '@/context/tabContext';

const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [showFull, setShowFull] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekPosition, setSeekPosition] = useState(0);

  const { record, closePlayer } = usePlayerModal();
  const { showTabs, hiddenTabs } = useTabsScreen();

  const height = useSharedValue(0);

  useEffect(() => {
    if (showFull) {
      hiddenTabs();
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
    } else {
      showTabs()
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    }
    return () => { 
      showTabs() 
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    }
  }, [showFull]);

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
      setStatus(status);
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    }
  };

  const onSlidingStart = () => {
    setIsSeeking(true);
  };

  const onValueChange = (value: number) => {
    setSeekPosition(value);
    setCurrentTime(value / 1000);
    if (video.current) {
      //@ts-ignore
      video.current.setPositionAsync(value);
    }
  };

  const onSlidingComplete = async (value: number) => {
    setIsSeeking(false);
    if (video.current) {
      //@ts-ignore
      await video.current.setPositionAsync(value);
      setCurrentTime(value / 1000);
    }
  };

  const onPlayPause = async () => {
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
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.videoContainer, animatedStyle]}>
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
              <TouchableOpacity style={styles.videoPlayButton} onPress={onPlayPause}>
                  <MaterialCommunityIcons 
                    name={isPlaying ? 'pause' : 'play'} 
                    size={36} 
                    color="#FFFFFF" 
                  />
              </TouchableOpacity>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={duration}
                value={isSeeking ? seekPosition : position}
                minimumTrackTintColor="#e5ae2f"
                maximumTrackTintColor="#686e7d"
                thumbTintColor="#e5ae2f"
                onSlidingStart={onSlidingStart}
                onValueChange={(value) => onValueChange(value)}
                onSlidingComplete={onSlidingComplete}
                />
              <Text style={styles.timeText}>{formatTime(currentTime)} / {formatTime(duration / 1000)}</Text>
            </View>
          }
      </Animated.View>

      <View>
      { !showMore &&    
        <TouchableOpacity style={styles.playerContainer}  onPress={handleUpMore}>
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
                value={isSeeking ? seekPosition : position}
                minimumTrackTintColor="#e5ae2f"
                maximumTrackTintColor="#686e7d"
                thumbTintColor="#e5ae2f"
                onSlidingStart={onSlidingStart}
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
        </TouchableOpacity>
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: '#63687b',
    borderRadius: 25,
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
    flexDirection: 'column',
    alignItems: 'center',
  },

  headerPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  controlsPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#e5ae2f',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
    height: 40
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
    borderRadius: 25,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  closeVideo: {
    paddingRight: 20,
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