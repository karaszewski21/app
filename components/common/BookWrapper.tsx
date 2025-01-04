import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import AgeRange from './AgeRange';

interface BookWrapperProps {
  props: {
    ageGroupId: number,
    gallery: string[];
    title: string;
    description: string;
    textColor?: string,
  };
  children?: React.ReactNode;
}

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO =  2 / 3;
const IMAGE_WIDTH = width * 0.6;
const IMAGE_HEIGHT = 200 / ASPECT_RATIO;

const BookWrapper: React.FC<BookWrapperProps> = ({ props, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(newIndex);
          }}
        >
          {props.gallery.map((imageUrl, index) => (
             <View key={index} style={styles.imageWrapper}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          {props.gallery.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex ? styles.paginationDotActive : null,
              ]}
            />
          ))}
        </View>
      <View style={styles.content}>
        <Text style={[styles.title, {color: props.textColor}]}>{props.title}</Text>
        <Text style={[styles.description, {color: props.textColor}]}>{props.description}</Text>
        <AgeRange ageRangeId={props.ageGroupId} textColor={props.textColor}/>
        <View style={styles.contentButtons}>
          {children}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: width,
    height: height * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 4,
    marginBottom: 30,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  content: {
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -50,

  },
  contentButtons: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    textAlign: 'justify',
    color: '#333',
  },
});

export default BookWrapper;