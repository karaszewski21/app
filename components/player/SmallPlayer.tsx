import React, { useEffect, useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { usePlayerModal } from '@/context/playerModalContext';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import * as ScreenOrientation from 'expo-screen-orientation';

const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [full, setFull] = useState(false);
  const { record, closePlayer } = usePlayerModal();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekPosition, setSeekPosition] = useState(0);

  const height = useSharedValue(0);

  useEffect(() => {
    if (record) {
       //@ts-ignore
      video.current?.playAsync();
      setIsPlaying(true);
    }
  }, [record]);

  const handleUpPress = () => {
    setFull(true);
    height.value = withSpring(300);
  };

  const handleDownPress = () => {
    setFull(false);
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
  };

  const onSlidingComplete = async (value: number) => {
    setIsSeeking(false);
    if (video.current) {
      //@ts-ignore
      await video.current.setPositionAsync(value);
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

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.videoContainer, animatedStyle]}>
        <View style={{position: 'relative'}}>
          <Video
            ref={video}
            style={[styles.video, full ? { height: '100%'} : { height: 0}]}
            source={{
              uri: record?.fileUrl ?? '',
            }}
            useNativeControls={false}
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            onLoad={onLoad}
          />
          <TouchableOpacity onPress={changeScreenOrientation} style={styles.fullscreenButton}>
            <MaterialCommunityIcons name="fullscreen" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.expandButton} 
            onPress={handleDownPress}
          >
            <MaterialCommunityIcons 
              name={"chevron-down"} 
              size={24} 
              color="#fff" 
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View >
      <TouchableOpacity style={styles.playerContainer} onPress={handleUpPress}>
          <Image source={{ uri: record?.imageUrl }} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.title} numberOfLines={1}>{record?.title}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={duration}
              value={isSeeking ? seekPosition : position}
              onSlidingStart={onSlidingStart}
              onValueChange={onValueChange}
              onSlidingComplete={onSlidingComplete}
              minimumTrackTintColor="#3498db"
              maximumTrackTintColor="#95a5a6"
              thumbTintColor="#3498db"
            />
            <View style={styles.controlsContainer}>
              <Text style={styles.timeText}>{formatTime(currentTime)} / {formatTime(duration / 1000)}</Text>
              <TouchableOpacity onPress={onPlayPause}>
                <MaterialCommunityIcons 
                  name={isPlaying ? 'pause-circle' : 'play-circle'} 
                  size={36} 
                  color="#3498db" 
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={closePlayer}>
            <MaterialCommunityIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e272e',
  },
  videoContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
  },
  playerContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#bdc3c7',
  },
  fullscreenButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,

  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
  },
  expandButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
  },
});

export default VideoPlayer;