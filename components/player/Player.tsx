import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ImageBackground, ActivityIndicator } from 'react-native';
import { usePlayerModal } from '@/context/playerModalContext';
import { useTabsScreen } from '@/context/tabContext';
import * as FileSystem from 'expo-file-system';
import VideoPlayer from './SmallPlayer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const videos = [
  {
    name: 'puss_in_boot',
    file: require('@/assets/video/Puss_in_Boots.mp4')
  },
  {
    name: 'ugly_duck',
    file: require('@/assets/video/Ugly_Duck.mp4'),
  },
  {
    name: 'natalia_eng',
    file: require('@/assets/video/natalia_eng.mp4'),
  },
  {
    name: 'natalia_pl',
    file: require('@/assets/video/natalia_pl.mp4'),
  },
  {
    name: 'Old_Ouk_Eng',
    file: require('@/assets/video/Old_Ouk_Eng.mp4'),
  },
  {
    name: 'Old_Ouk_Pl',
    file: require('@/assets/video/Old_Ouk_Pl.mp4'),
  },
  {
    name: 'train_eng',
    file: require('@/assets/video/train_eng.mp4'),
  },
  {
    name: 'train_pl',
    file: require('@/assets/video/train_pl.mp4'),
  },
  {
    name: 'zosia_eng',
    file: require('@/assets/video/zosia_eng.mp4'),
  },
  {
    name: 'zosia_pl',
    file: require('@/assets/video/zosia_pl.mp4'),
  },
  {
    name: 'tumilu_quiz_pl',
    file: require('@/assets/video/tumilu_quiz_pl.mp4'),
  }
]

const Player = () => {
  const { record, closePlayer, openFullPlayer } = usePlayerModal();
  const [file, setFile] = useState<string| null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const { showTabs } = useTabsScreen();

  const callback = (downloadProgress: any)=> {
    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
  };
  
  useEffect(() => {
    return () => { 
      showTabs() 
    }
  }, []);

   useEffect(() => {
      if (record?.fileUrl) {
          setFile(videos.find(el => el.name === record?.fileUrl)?.file)
      }
  }, [record])

  // useEffect(() => {
  //   console.log('-->progress', downloadProgress)
  // }, [downloadProgress])

  // useEffect(() => {
  //   const directoryName = FileSystem.cacheDirectory + 'audiobooks/';
  //   const fileName =  `${record?.title.replace(' ','-')}.mp4`;

  //   const existFile = async () => {
  //     setFile(null) 

  //     await FileSystem.makeDirectoryAsync(directoryName, { intermediates: true });
  //     const files = await FileSystem.readDirectoryAsync(directoryName);

  //     if (files.includes(fileName)) {
  //       const fileUri = directoryName + fileName;
  //       setFile(fileUri);
        
  //     } else {;
  //       await downloadFile();
  //     }
  //   }  

  //   const downloadFile = async () => {
  //       try {  
  //           const downloadResumable = FileSystem.createDownloadResumable(record?.fileUrl ?? '', directoryName+fileName,{},callback);
  //           const file = await downloadResumable.downloadAsync();   
  //           if (file) {
  //               console.log('Finished downloading to ', file.uri);
  //               setFile(file.uri) 
  //           }   
  //       } catch (error) {
  //           console.error(error);
  //       }    
  //   }

  //   existFile();

  // }, [record]);

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      { file && <VideoPlayer url={file}/> }  
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