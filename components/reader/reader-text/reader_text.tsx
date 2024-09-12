import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get('window');

interface Page {
  text: string;
  image: string | null;
  position?: 'top' | 'center';
}

const ReaderTextSlider = ({ pages }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item, index }: any) =>  {
    return(
        <View style={styles.pageContainer}>
          {item.image && <Image source={{ uri: item.image }} style={styles.image}/>}
          <Text style={styles.pageContent}>{item.text}</Text>
        </View>
      );
  }

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentPage(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={pages}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width,
    height,
   // justifyContent: 'center',
    padding: 10,
  },
  pageContent: {
    fontSize: 18,
    textAlign: 'justify',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
  },
  image: {
    width: 'auto',
    height: width * 0.4,
    resizeMode: 'cover',
  },
});

export default ReaderTextSlider;