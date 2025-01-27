import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import SentenceItem, { AudioSentenceProvider } from './SentenceItem';
import { Word } from '@/model/reader';

const { width: WIDTH, height } = Dimensions.get('window');
interface VocabularyItem {
  word: string;
  translation: string;
  audioUrl: string;
}

interface AccordionItem {
  title: string;
  subTitle: string;
  imageUrl: string;
  paragraphs: [{
    text: string;
    translation: string;
    audioUrl: string;
    vocabulary: VocabularyItem[];
  }]
}

interface AccordionItemProps {
  item: AccordionItem;
  index: number;
  handleWord?: (word: Word, options: { x: number, y: number }) => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, handleWord, index }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [totalTranslationHeight, setTotalTranslationHeight] = useState<number>(0);
  const height = useSharedValue(0);
  const translationHeight = useSharedValue(0);

  useEffect(() => {
    if (expanded) {

      height.value = withTiming(1, {
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    });

    } else {
      height.value = withTiming(0, {
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });

      translationHeight.value = withTiming(0, {
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  }, [expanded]);


  useEffect(() => {
    if (totalTranslationHeight) {
      translationHeight.value = withTiming(totalTranslationHeight, {
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } 

  }, [totalTranslationHeight])

  const translationHeightView = (h: number) => {
    setTotalTranslationHeight((el) => el + h)
  } 

  const toggleExpand = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  
  const containerStyle = useAnimatedStyle(() => {
    const baseHeight = interpolate(height.value, [0, 1], [0, 400]);
    return {
      maxHeight: Math.max(baseHeight, baseHeight + translationHeight.value),
      opacity: Math.max(baseHeight, baseHeight + translationHeight.value),
    };
  });

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <View style={styles.headerContent}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[containerStyle]}>
        { expanded && 
            item.paragraphs.map((element, index) => {
              const cleanText = element.text.replace(/\s+/g, ' ').trim();
              return (
                <View key={index} style={{ marginBottom: 20 }}>
                  <SentenceItem 
                      text={cleanText} 
                      widthTextContent={WIDTH - 90} 
                      translation={element.translation} 
                      audioUrl={element.audioUrl} 
                      vocabulary={element.vocabulary} 
                      handleWord={(word, options) => handleWord && handleWord(word,options)} 
                      getTranslationHeightView={translationHeightView}
                  />
                </View>)
            })
        }
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  accordionItem: {
    backgroundColor: '#000',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  titleContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  subtitle: {
    fontSize: 22,
    color: '#fff',
    marginTop: 2,
  },
  // translation: {
  //   fontSize: 20,
  //   color: '#fff',
  //   lineHeight: 24,
  //   textAlign: 'justify',
  //   letterSpacing: 0.5,
  //   marginHorizontal: 20,
  //   marginVertical: 10
  // }
});

export default AccordionItem;