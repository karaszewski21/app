import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export default function Record() {
    const [sound, setSound] = useState<Audio.Sound>();
    const [recording, setRecording] = useState<Audio.Recording>();
    const [permissionResponse, requestPermission] = Audio.usePermissions();

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
    }, [sound]);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('@/assets/test.mp3'));
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function stopSound() {
        if (!sound) return;
        await sound.stopAsync()
    }
    
   

  async function startRecording() {
    try {
      if (permissionResponse && permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');

    if (recording) {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({allowsRecordingIOS: false});
        const uri = recording.getURI(); 
        console.log('Recording stopped and stored at', uri);

        if (!uri) return;

        const fileName = `recording-${Date.now()}.caf`;
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
        await FileSystem.moveAsync({from: uri,to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`});

          // This is for simply playing the sound back
        const playbackObject = new Audio.Sound();
        await playbackObject.loadAsync({ uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}` });
        await playbackObject.playAsync();
    }
  }

  async function readFilesContent() {
    try {
      const folderUri = FileSystem.documentDirectory + 'recordings/';
      const files = await FileSystem.readDirectoryAsync(folderUri);
  
      for (const file of files) {
        const fileUri = folderUri + file;
        const content = await FileSystem.readAsStringAsync(fileUri);
        console.log(`Content of ${fileUri}`);
      }
    } catch (error) {
      console.error('Error reading files:', error);
    }
  }
  

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    <Text>-------</Text>
    <Button
        title='List file'
        onPress={readFilesContent}
      />
    <Text>-------</Text>
    <Button title="Play Sound" onPress={playSound} />
    <Text>-------</Text>
    <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
