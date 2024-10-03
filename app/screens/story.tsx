import { useTabsScreen } from '@/context/tabContext';
import { useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import * as FileSystem from 'expo-file-system';
import Story from '@/components/instagram/Story';

const CACHE_FOLDER = 'story_videos';


export default function StoryScreen({route, navigation }:any) { 
  const { id, videoCache } = route.params
  const { hiddenTabs, showTabs} = useTabsScreen();
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    hiddenTabs()
    return () => {
      showTabs() 
    }
  }, []);


  useEffect(() => {
    const loadVideos = async () => {
      const cacheDir = `${FileSystem.documentDirectory}${CACHE_FOLDER}/${id}/`;
      try {
        const cacheContents = await FileSystem.readDirectoryAsync(cacheDir);
        const videoPaths = cacheContents.map(fileName => `${cacheDir}${fileName}`);
        setVideos(videoPaths);
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };
    loadVideos();
  },[])

  return(
    <SafeAreaView style={styles.container}>
        {/* <Story
          data={data}
          duration={10}
        /> */}
    </SafeAreaView>
    ) 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });