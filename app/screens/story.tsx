import { useTabsScreen } from '@/context/tabContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet,Image, Button, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { cancelAnimation, Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import SquareStory from '@/components/stories/SquareStory';
import Stories from '@/components/stories/Stories';

const { width: SCREEN_WIDTH, height } = Dimensions.get('window');
const WIDTH = SCREEN_WIDTH - 100

export default function StoryScreen({route, navigation }:any) { 
  const { id } = route.params
  const { hiddenTabs, showTabs} = useTabsScreen();

  useEffect(() => {
    hiddenTabs()
    return () => {
      showTabs() 
    }
  }, []);

  const stories = [
    { id: '1', type: 'video', url: 'https://goldfish.fra1.digitaloceanspaces.com/sea.mp4' },
    { id: '2', type: 'image', url: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_2.jpg' },
    { id: '3', type: 'image', url: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Physical_AttributesMediumsized_goldfish_with_1.jpg' },
    { id: '4', type: 'video', url: 'https://goldfish.fra1.digitaloceanspaces.com/1099e297-91c9-4e08-bde8-816ce18edeb4.mp4' },
  ];

  return(
    <SafeAreaView style={styles.container}>
        { id === "1" &&  <SquareStory stories={stories} /> }
        { id === "2" &&  <Stories stories={stories} /> }
    </SafeAreaView>
    ) 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });