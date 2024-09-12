import { SafeAreaView, ScrollView, View, StyleSheet, useWindowDimensions,Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Zakładam, że używasz Expo
import { quiz } from '@/constants/Quiz';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import ReaderText from '@/components/reader/reader-text/reader_text';

const ReaderTextScreen = ({ navigation }:any) => { 
  const { show, hidden } = useTabsScreen();
  const { width, height } = useWindowDimensions();

  useEffect(()=> {
    hidden()
    return () => { show() }
  }, [])
  
  const pages = [
    {
      text: "Strona 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_and_vibrant_beauty_landscape_featuri_0.jpg",
      position: "top"
    },
    {
      text:  "Strona 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg",
      position: "top"
    },  {
      text:  "Strona 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg",
      position: "center"
    },  {
      text:  "Strona 4: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: null
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{width,height}}>
          <ReaderText pages={pages} />
        </View>
      </ScrollView>
    </SafeAreaView>
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flexGrow: 1,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 20,
    },
  });

  export default ReaderTextScreen;