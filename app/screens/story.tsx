import { useTabsScreen } from '@/context/tabContext';
import { useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SquareStory from '@/components/stories/SquareStory';
import Stories from '@/components/stories/Stories';
import * as FileSystem from 'expo-file-system';
import Cube from '@/components/stories/Cube2';
import Story from '@/components/instagram/Story';

const CACHE_FOLDER = 'story_videos';

const data = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Patryk karaszeski',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        story_video: null,
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4',
        story_video:'https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_0.jpg',
        story_video: 'https://goldfish.fra1.digitaloceanspaces.com/videos/6c588ee0-8c8c-408c-94e0-f8f2e3b5db86.mp4',  
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg',
        story_video: null,  
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
];

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
        {/* { id === "1" &&  <SquareStory stories={stories} /> } */}
        {/* { videos && <Stories stories={videos} /> } */}

        <Story
          data={data}
          duration={10}
        />
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