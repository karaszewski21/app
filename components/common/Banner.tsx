import { BANNER_HEIGHT } from '@/constants/Common';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
  } from 'react-native-reanimated';

interface BannerProps {
  imageUrl: string,
  hidden: boolean
}

const Banner: React.FC<BannerProps> = ({ imageUrl, hidden }) => {
    const bannerTranslateY = useSharedValue<number>(0);

    const bannerAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: bannerTranslateY.value }],
      }));

      if (hidden) {
        bannerTranslateY.value = withSpring(-150);
      } else {
        bannerTranslateY.value = withSpring(0);
      }   

  return (
    <Animated.View style={[styles.bannerContainer, bannerAnimatedStyle, {transform: [{translateY: 0}]}]}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
            source={{ uri: imageUrl }}
            style={styles.headerImage}
            
        />
        </View>
      </View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
    container: {
      paddingLeft: 15,
      paddingRight: 15
    },
    bannerContainer: {
      position: 'absolute',
      top: 20,
      left: 0,
      right: 0,
      height: BANNER_HEIGHT,
      zIndex: 3,
    },
    imageContainer: {
      height: 100,
      marginBottom: 10,
      borderRadius: 15,
      overflow: 'hidden', 
    },
    headerImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    }
  });

export default Banner;