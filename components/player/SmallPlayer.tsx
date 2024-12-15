import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePlayerModal } from '@/context/playerModalContext';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEventListener } from 'expo';
import { Slider } from "native-base";
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

interface VideoPlayerProps {
  url: string,
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [showMore, setShowMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const { record, closePlayer, openFullPlayer } = usePlayerModal();

  const height = useSharedValue(0);

  const player = useVideoPlayer(url, player => {
    player.timeUpdateEventInterval = 0.5;
    player.play();
    setIsPlaying(true);
    console.log('-->duration',player.duration)    
    player.bufferOptions = {
      ...player.bufferOptions,
      preferredForwardBufferDuration: 5,
      prioritizeTimeOverSizeThreshold: true
    } 
  });

  useEventListener(player, 'playingChange', ({ isPlaying }) => {
    setIsPlaying(isPlaying);
  });

  useEventListener(player, 'timeUpdate', ({ currentTime }) => {
      if (isPlaying) {
        setDuration(player.duration);
        setCurrentTime((currentTime / duration) * 100);
      }
  });

  const handleUpMore = () => {
    setShowMore(true);
    openFullPlayer(true);
    height.value = withSpring(450, 
      {  
        mass: 1,
        damping: 100,
        stiffness: 200
      }
    );
  };

  const handleDownMore = () => {
    setShowMore(false);
    openFullPlayer(false);
    height.value = withSpring(0, 
      {  
        mass: 1,
        damping: 100,
        stiffness: 200
      }
    );
  };

  const formatTime = useCallback((timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [currentTime]);

  const onStart = (value: number) => {
    player.pause();
  };

  const onStop = async (value: number) => {
    // Przeliczenie wartości suwaka na docelowy czas wideo
    const newTime = (value / 100) * duration;
  
    // Obliczenie różnicy czasu (względne przesunięcie)
    const timeDifference = newTime - currentTime;

    // Użycie seekBy do przesunięcia o różnicę czasu
    player.seekBy(timeDifference); // Przesunięcie względem aktualnego czasu
  
    player.play();
    setIsPlaying(true);
  
    // Aktualizacja bieżącego czasu
    setCurrentTime(newTime);
  };
  
  const onSlidingComplete = () => {
    setCurrentTime(0);
  };

  const onPlayPause = useCallback(async () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying])

  const skipBackward = async () => {
    player.seekBy(-15);
  };

  const skipForward = async () => {
    player.seekBy(15);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const tap = Gesture.Tap()
  .onBegin(() => {
    console.log('-->start')
  })
  .onStart(() => {
    console.log('-->start')
  })

  return (
      <>
        <GestureDetector gesture={tap}>  
          <Animated.View style={{...animatedStyle}}>
            <ImageBackground style={[styles.background]}>
              { showMore && 
                <View style={styles.videoContainer}>
                  <TouchableOpacity style={{width: 30, height: 30}}  onPress={handleDownMore}>
                    <MaterialCommunityIcons name={"chevron-down-circle"} size={30} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{width: 30, height: 30}} onPress={closePlayer}>
                    <MaterialCommunityIcons name="close-circle" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>    
              }
              <VideoView style={[{ width: 300, marginTop: -200}, showMore ? { height: 200} : { height: 0}]} player={player} nativeControls={false}/>
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
                  <Text style={styles.timeText} numberOfLines={1}>{formatTime(currentTime)}</Text>
                  <View style={{flex: 1, justifyContent: 'center', marginTop: -50}}> 
                    <View style={{width: 300}}>
                      <Slider 
                        size="md"
                        defaultValue={0} 
                        minValue={0} 
                        value={currentTime}
                        maxValue={100} 
                        onChange={(v) => {onStart(v)}}
                        onChangeEnd={(v) => onStop(v)} 
                        >
                      <Slider.Track>
                        <Slider.FilledTrack bg="#b17c08"/>
                      </Slider.Track>
                      <Slider.Thumb  bg="#b17c08"/>
                      </Slider>
                    </View>
                  </View>
                </View>
              }
            </ImageBackground>
          </Animated.View>
        </GestureDetector>
        { !showMore && 
          <View style={{height: 100, width: '95%'}}>
            <TouchableOpacity style={styles.playerContainer} onPress={handleUpMore}>
              <View style={styles.headerPlayerContainer}>
                  <Image source={{ uri: record?.imageUrl }} style={styles.image} />
                  <Text style={styles.titlePlayer} numberOfLines={1}>{record?.title}</Text>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={handleUpMore}>
                      <MaterialCommunityIcons name={"chevron-up-circle"} size={30} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={closePlayer}>
                      <MaterialCommunityIcons name="close-circle" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.sliderPlayerContainer}> 
                <View style={{width: 250, marginTop:10, marginLeft: 10}}>
                  <Slider 
                    size="sm"
                    colorScheme="#b17c08"
                    defaultValue={0} 
                    minValue={0} 
                    value={currentTime}
                    maxValue={100} 
                    onChange={(v) => {onStart(v)}}
                    onChangeEnd={(v) => onStop(v)} 
                    >
                  <Slider.Track>
                    <Slider.FilledTrack bg="#b17c08"/>
                  </Slider.Track>
                  <Slider.Thumb  bg="#b17c08"/>
                  </Slider>
                </View>
                <TouchableOpacity style={styles.playButton} onPress={onPlayPause}>
                  <MaterialCommunityIcons 
                    name={isPlaying ? 'pause' : 'play'} 
                    size={24} 
                    color="#FFFFFF" 
                  />
              </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        }
      </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '95%',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.85)'
  },

  // PLAYER
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.85)',
    borderRadius: 15,
  },

  headerPlayerContainer: {
    position: 'relative',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    padding: 5
  },

  sliderPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },

  titlePlayer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    width: '60%',
    marginLeft: 15,
    marginTop: 15
  },

  playButton: {
    backgroundColor: '#b17c08',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
    
  },

  // VIDEO
  videoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: 5,
    paddingRight: 10
  },

  videoControlsContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  titleVideo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    width: '100%',
    textAlign: 'center'
  },

  videoPlayButton: {
    backgroundColor: '#b17c08',
    borderRadius: 15,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },

  controlsRow: {    
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20
  },

  skipButton: {
    backgroundColor: '#b17c08',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10
  },

  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b17c08',
    marginTop: -20
  
  },
});

export default VideoPlayer;