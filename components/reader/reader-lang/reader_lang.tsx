import SentenceItem, { AudioSentenceProvider, useAudioSentence } from '@/components/common/SentenceItem';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');

const ReaderLangSlider = ({ pages, onClose }: any) => {


  const renderCoverPage = (item: any) => {
    return (
      <View style={styles.coverContainer}>
        <View style={styles.coverContent}>
          <Image
            source={{uri: item.image}}
            style={styles.coverImage}
            resizeMode="contain"
          />
          <Text style={styles.coverTitle}>{item.title}</Text>
          <Text style={styles.coverSubtitle}>{item.subtitle}</Text>
        </View>
          
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
              Przejdź w prawo
          </Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </View>
      </View>
    );
  };

  const renderContentPage = (item: any) => {
    const contentPages = pages.filter((page: any) => page.type === 'content');
    const currentContentPage = contentPages.indexOf(item) + 1;
    const totalContentPages = contentPages.length;

    return (
      <View style={styles.pageContainer}>
        <ScrollView style={styles.pageContent}>
            {item.paragraphs.map((paragraph: any, index: number) => {
              switch (paragraph.type) {
                case 'text':
                const cleanText = paragraph.text.replace(/\s+/g, ' ').trim();
                return (
                  <SentenceItem key={index} text={cleanText} translation={paragraph.translation} audioUrl={paragraph.audioUrl} vocabulary={paragraph.vocabulary}/>
                );
                default:
                  return null;
              }
            })}
        </ScrollView>
        <View style={styles.paginationContainer}>
          <Text style={styles.paginationText}>
            {currentContentPage} / {totalContentPages}
          </Text>
        </View>
      </View>
    );
  };

  const renderEndPage = (item: any) => {
    return (
      <View style={styles.endContainer}>
        <View style={styles.endContent}>
          <Text style={styles.endTitle}>{item.title}</Text>
          <Text style={styles.endSubtitle}>{item.subtitle}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.closeButtonText}>Zamknij</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }: any) => {
    switch (item.type) {
      case 'cover':
        return renderCoverPage(item);
      case 'content':
        return renderContentPage(item);
      case 'end':
        return renderEndPage(item);
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={pages}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height: height,
  },
  pageContent: {
    flex: 1,
    fontSize: 18,
    textAlign: 'justify',
  },

  coverContainer: {
    flex: 1,
    width,
    justifyContent: 'space-between',
  },
  coverContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 20,
    borderRadius: 15
  },
  coverTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff'
  },
  coverSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'
  },

  instructionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  instructionText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },

  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.5)', // półprzezroczyste tło
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  
  paragraph: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'justify',
    letterSpacing: 0.5,
    margin: 10
  },
  endContainer: {
    flex: 1,
    width,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  endContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  endSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#b17c08',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: 150,
    marginBottom: 30,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    textAlign: 'center',
  },

  sentenceContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    padding: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  translationContainer: {
    marginTop: 8,
    marginLeft: 48,
    padding: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
});

export default ReaderLangSlider;