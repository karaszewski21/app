import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Button, Image, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
} from 'react-native-reanimated';


const pages = ['#E1F3FA', '#308D46', 'red', 'yellow', 'blue'];
const { width } = Dimensions.get('window');

// const width = 200;

const AnimatedPage = ({ pageColor, index, pageIndex, children }: any) => {

  console.log( `${interpolate(
    pageIndex.value,
    [index - 1, index, index + 1],
    [90, 0, -90]
  )}deg`)  

  const anim = useAnimatedStyle(() => ({
    transform: [
    //   {
    //     perspective: width * 3,
    //   },
      {
        rotateY: `${interpolate(
          pageIndex.value,
          [index - 1, index, index + 1],
          [90, 0, -90]
        )}deg`,
      },
    ],
  }));
  return (
    <Animated.View
      style={[
        {
          zIndex: 100 - index,
          width: width - 70,
          position: 'absolute',
          aspectRatio: 9 / 16,
          backgroundColor: pageColor,
          backfaceVisibility: 'hidden',
          borderRadius: 10,
          transformOrigin: ['50%', '50%', -width / 2],
          overflow: 'hidden',
        },
        anim,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default function Cube() {
  const pageIndex = useSharedValue(0);

  const runAnimation = () => {
    // pageIndex.value = 0;
    pageIndex.value = withTiming(Math.floor(pageIndex.value + 1), {
      duration: 500,
    });
  };

  const goBack = () => {
    pageIndex.value = withTiming(Math.floor(pageIndex.value - 1), {
      duration: 300,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <IgStories /> */}

      { ['black','red','green','yellow'].map((story, index) => (
        <AnimatedPage pageColor={story} pageIndex={pageIndex} index={index}>
           <View></View>
        </AnimatedPage>
      ))}

      <View style={{ position: 'absolute', top: 0 }}>
        <Button title="Back" onPress={goBack} />
      </View>
      <View style={{ position: 'absolute', top: 0, left: 30 }}>
        <Button title="Next" onPress={runAnimation} />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});