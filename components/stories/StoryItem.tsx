import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';
import * as FileSystem from 'expo-file-system';

interface VideoCache {
    id: string;
    uri: string;
}

interface VideoItem {
  props: {
    id: string;
    thumbnailUrl: string;
    videos: string[],
    onPress: () => void,
    getVideos: () => VideoCache[]
  }  
}

const CACHE_FOLDER = 'story_videos';
const MAX_CACHE_AGE = 10000; // 7 days in milliseconds

function StoryItem({ props }: VideoItem) {
  const [videoItems, setVideoItems] = useState<VideoCache[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);

  const cleanCache = useCallback(async () => {
    const cacheDir = `${FileSystem.documentDirectory}${CACHE_FOLDER}/`;
    const cacheContents = await FileSystem.readDirectoryAsync(cacheDir);
    const now = new Date().getTime();

    for (const fileName of cacheContents) {
      const filePath = `${cacheDir}${fileName}`;
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      if (fileInfo.exists && fileInfo.modificationTime) {
        const fileAge = now - fileInfo.modificationTime;
        if (fileAge > MAX_CACHE_AGE) {
          await FileSystem.deleteAsync(filePath);
        }
      }
    }
  }, []);

  useEffect(() => {
    const loadVideos = async () => {
      setIsLoading(true);
   
      const cacheDir = `${FileSystem.documentDirectory}${CACHE_FOLDER}/${props.id}/`;
      await FileSystem.makeDirectoryAsync(cacheDir, { intermediates: true });

      const items = await Promise.all(
        props.videos.map(async (url, index) => {
          const filename = `video_${index}.mp4`;
          const fileUri = `${cacheDir}${filename}`;
          const fileInfo = await FileSystem.getInfoAsync(fileUri);

          if (!fileInfo.exists) {
            console.log('downloadAsync', filename);
            await FileSystem.downloadAsync(url, fileUri);
          }
      //    console.log('fileUri', fileUri);
          return { id: `${index}`, uri: fileUri };
        })
      );

      setVideoItems(items);
      setIsLoading(false);
      props.onPress();
    };

    if (shouldLoadVideos) {
      loadVideos();
    }
  }, [shouldLoadVideos]);

  const handlePress = useCallback(() => {
    if (videoItems.length === 0) {
      setShouldLoadVideos(true);
    } else {
      props.onPress();
    }
  }, [videoItems, props.onPress]);

  return (
    <TouchableOpacity 
      style={styles.storyItem}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Image source={{ uri: props.thumbnailUrl }} style={styles.storyImage} />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storyItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 100,
    height: 160,
    borderRadius: 15,
  },
  storyTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
  },
});

export default StoryItem;