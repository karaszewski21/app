import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ImageBackground, ActivityIndicator } from 'react-native';
import { usePlayerModal } from '@/context/playerModalContext';
import { useTabsScreen } from '@/context/tabContext';
import * as FileSystem from 'expo-file-system';
import VideoPlayer from './SmallPlayer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Player = () => {
  const { record, closePlayer, openFullPlayer } = usePlayerModal();
  const [file, setFile] = useState<string| null>(null);
  const { showTabs } = useTabsScreen();


  useEffect(() => {
    return () => { 
      showTabs() 
    }
  }, []);

  useEffect(() => {
    const directoryName = FileSystem.documentDirectory + 'audiobooks/';
    const fileName =  `${record?.title.replace(' ','-')}.mp4`;

    const existFile = async () => {
      setFile(null) 

      await FileSystem.makeDirectoryAsync(directoryName, { intermediates: true });
      const files = await FileSystem.readDirectoryAsync(directoryName);

      if (files.includes(fileName)) {
        const fileUri = directoryName + fileName;
        setFile(fileUri);
        
      } else {;
        await downloadFile();
      }
    }  

    const downloadFile = async () => {
        try {  
            const downloadResumable = FileSystem.createDownloadResumable(record?.fileUrl ?? '', directoryName + fileName);
            const file = await downloadResumable.downloadAsync();   
            if (file) {
                console.log('Finished downloading to ', file.uri);
                setFile(file.uri) 
            }   
        } catch (error) {
            console.error(error);
        }    
    }

    existFile();

  }, [record]);

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      { file &&  <VideoPlayer url={file}/> }  
    </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    borderRadius: 15,
    width: '100%',
    height: '100%',
    zIndex: 100
  }
});

export default Player;