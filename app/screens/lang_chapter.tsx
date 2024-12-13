import AccordionItem from '@/components/common/AccordionItem';
import { AudioSentenceProvider, useAudioSentence } from '@/components/common/SentenceItem';
import { VocabularyModal } from '@/components/common/VocabularyModal';
import { useTabsScreen } from '@/context/tabContext';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import uuid from 'react-native-uuid';

const { width: WIDTH, height } = Dimensions.get('window');

const LangChapterScreen = ({ route, navigation } : any) => {
    const resource = route.params.resource;
    const { showTabs, hiddenTabs } = useTabsScreen();
    const translateY = useSharedValue<number>(500);
   // const { playAudio } = useAudioSentence();
    const uniqueKey = useMemo(() => uuid.v4(), []);
    const [xxx, setXXX] = useState<any | null >()

    useEffect(()=> {
      hiddenTabs()
      return () => { 
        showTabs();
       // translateY.value = 500
      }
    }, [])

    // useEffect(() => {
    //   console.log('-->xxx', xxx)
    //   translateY.value = 0;
    //     if (xxx) {
    //       translateY.value = withSpring(-(WIDTH + 200),
    //         {  
    //           mass: 1,
    //           damping: 50,
    //           stiffness: 100
    //         }
    //       );
    //     } else {
    //       translateY.value = withSpring(500,
    //         {  
    //           mass: 1,
    //           damping: 50,
    //           stiffness: 100
    //         }
    //       );
    //     }
  
    // }, [xxx]);

    // const show = (word: any) => {
    //   console.log(word)
    // }

    console.log('-->render componentr')

    const animatedModalStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(translateY.value)}],
    }));
    
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {
              resource.content.map((element: any, index: number) =>  {
                  console.log('index',index);
                 return element && <AccordionItem key={`${uniqueKey}${index}`} item={element} index={index} handleWord={setXXX}/>
              }
              )
            }
            {/* <Animated.View style={{...animatedModalStyles}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <VocabularyModal
                      word={xxx ?? {} as any}
                      onClose={() => translateY.value = 500}
                      onMarkAsKnown={(word) => {
                        console.log('Marked as known:', word);
                        translateY.value = 500
                      }}
                      onMarkToLearn={(word) => {
                        console.log('Marked to learn:', word);
                        translateY.value = 500
                      }}
                      playAudio={(url) => console.log(url)}
                    />
                 </View>
              </Animated.View> */}
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