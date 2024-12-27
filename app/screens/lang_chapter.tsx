import AccordionItem from '@/components/common/AccordionItem';
import { AudioSentenceProvider, useAudioSentence } from '@/components/common/SentenceItem';
import { VocabularyModal } from '@/components/common/VocabularyModal';
import { useTabsScreen } from '@/context/tabContext';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Text, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import uuid from 'react-native-uuid';

const { width: WIDTH, height } = Dimensions.get('window');

const LangChapterScreen = ({ route, navigation } : any) => {
    const resource = route.params.resource;
    const { showTabs, hiddenTabs } = useTabsScreen();
    const translateY = useSharedValue<number>(500);
    const { playAudio, isModalVisible, setIsModalVisible, setCurrentSound} = useAudioSentence();
    const uniqueKey = useMemo(() => uuid.v4(), []);
    const [word, setWord] = useState<{item: any, options:{ x: number, y: number }} | null>()

    useEffect(()=> {
      hiddenTabs()
      return () => { 
        showTabs();
        setIsModalVisible(false);
        translateY.value = 500;
        setCurrentSound(null);
      }
    }, [])

    useEffect(() => {
        console.log(word)
        if (word) {
          translateY.value = withSpring(-(word.options.x + 200),
            {  
              mass: 1,
              damping: 50,
              stiffness: 100
            }
          );
        } else {
          translateY.value = withSpring(500,
            {  
              mass: 1,
              damping: 50,
              stiffness: 100
            }
          );
        }
  
    }, [word]);

    const animatedModalStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(translateY.value)}],
    }));
    
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {
              resource.content.map((element: any, index: number) =>  {
                 return element && <AccordionItem key={`${uniqueKey}${index}`} item={element} index={index} handleWord={(item,options) => setWord({item, options})}/>
              })
            }
            <Animated.View style={{...animatedModalStyles}}>
              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <VocabularyModal 
                  word={word?.item ?? {} as any} 
                  onClose={() => translateY.value = 500}
                  onMarkAsKnown={(word) => {
                    console.log('Marked as known:', word);
                    translateY.value = 500
                  }}
                  onMarkToLearn={(word) => {
                    console.log('Marked to learn:', word);
                    translateY.value = 500
                  }}
                  playAudio={(url) => playAudio(url)}
                />
              </View>
            </Animated.View>
          </ScrollView>
      </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  export default LangChapterScreen;