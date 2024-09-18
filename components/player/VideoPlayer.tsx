import { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatusToSet } from 'expo-av';
import { useTabsScreen } from '@/context/tabContext';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from "react-native-safe-area-context";

export default function VideoScreen() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const { hiddenTabs, showTabs } = useTabsScreen();
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [full, setFull] = useState(0);
  const [small, setSmall] = useState(60);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    hiddenTabs();
     //@ts-ignore
    video.current.playAsync()
    return () => { showTabs() }
  }, [])

  const onLoad = (data: any) => {
    const { durationMillis } = data;
    setDuration(durationMillis)
  }

  const seekTo = (value:number) => {
    const newPos = position + value;
    console.log(newPos)
    setPosition(newPos);
  };

  const open = () => {
      setFull(height);
      setSmall(0);
  };

  const close = () => {
      setFull(0)
      setSmall(60);
  };

  const handlePress = () => {
    console.log('Button pressed!');
    // Tutaj możesz dodać własną logikę obsługi przycisku
  };

  return (
    <SafeAreaView>
        <View style={{...styles.smallPlayer,width: width, height:small}}>
            <TouchableOpacity onPress={open}>
              <Image
                source={{uri: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png'}} 
                style={{...styles.image,height:small}}
  
              />
               </TouchableOpacity>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                onSlidingComplete={seekTo}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#666666"
                thumbTintColor="#FFFFFF"
              />
              <Button
              //@ts-ignore
                title={status.isPlaying ? 'Pause' : 'Play'} 
                //@ts-ignore
                onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
              />
          </View>
        <View style={styles.container}>
          <View style={{height: 0}}>
              <Button 
                //@ts-ignore
                title={'Close'} 
                //@ts-ignore
                onPress={close}
                />
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                isLooping={false}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                positionMillis={position}
                onLoad={onLoad}
              />
            <View>

              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                onSlidingComplete={seekTo}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#666666"
                thumbTintColor="#FFFFFF"
              />


              <View style={styles.buttons}>
                <Button 
                  //@ts-ignore
                  title={'Press'} 
                  //@ts-ignore
                  onPress={() => seekTo(-10000)}
                  />
                <Button 
                  //@ts-ignore
                  title={status.isPlaying ? 'Pause' : 'Play'} 
                  //@ts-ignore
                  onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
                  />
                <Button 
                  //@ts-ignore
                  title={'Next'} 
                  //@ts-ignore
                  onPress={() => seekTo(10000)}
                  />
            </View>
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  smallPlayer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 0,
  },
  slider: {
    width: '70%',
    height: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
});
