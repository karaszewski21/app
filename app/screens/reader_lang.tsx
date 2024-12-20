import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import ReaderText from '@/components/reader/reader-text/reader_text';
import { SafeAreaView } from "react-native-safe-area-context";
import ReaderLangSlider from '@/components/reader/reader-lang/reader_lang';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { VocabularyModal } from '@/components/common/VocabularyModal';
import { useAudioSentence } from '@/components/common/SentenceItem';

const { width: WIDTH, height } = Dimensions.get('window');

const ReaderLangScreen = ({ route, navigation }:any) => { 
  const { showTabs, hiddenTabs } = useTabsScreen();
  const { content: pages} = route.params;
  const translateY = useSharedValue<number>(500);
  const { playAudio, selectedWord, setIsModalVisible, isModalVisible } = useAudioSentence();

  useEffect(()=> {
    hiddenTabs()
    return () => { 
      showTabs();
      setIsModalVisible(false);
      translateY.value = 500
    }
  }, [])

  useEffect(() => {
      if (isModalVisible) {
        translateY.value = withSpring(-(WIDTH + 200),
          {  
            mass: 1,
            damping: 50,
            stiffness: 100
          }
        );
      } else {
        translateY.value = withSpring(0,
          {  
            mass: 1,
            damping: 50,
            stiffness: 100
          }
        );
      }

  }, [isModalVisible]);
  
  const handleClose = () => {
    navigation.goBack();
  };

  const animatedModalStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value)}],
  }));

  return (
      <SafeAreaView style={styles.container}>
        <ReaderLangSlider pages={pages}  onClose={handleClose}/>
        <Animated.View style={{...animatedModalStyles}}>
          <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <VocabularyModal
                word={selectedWord ?? {} as any}
                onClose={() => setIsModalVisible(false)}
                onMarkAsKnown={(word) => {
                  console.log('Marked as known:', word);
                  setIsModalVisible(false);
                }}
                onMarkToLearn={(word) => {
                  console.log('Marked to learn:', word);
                  setIsModalVisible(false);
                }}
                playAudio={(url) => playAudio(url)}
              />
           </View>
        </Animated.View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
    }
  });

  export default ReaderLangScreen;