import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const FullScreenPageSlider = ({ pages }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item, index }: any) => (
    <View style={styles.pageContainer}>
      <Text style={styles.pageContent}>{item}</Text>
    </View>
  );

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentPage(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  // const scrollToPage = (pageIndex: any) => {
  //   if (flatListRef && flatListRef.current) {
  //     //@ts-ignore
  //     flatListRef.current.scrollToIndex({ index: pageIndex, animated: true });
  //   }
  // };

  return (
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
      {/* <View style={styles.navigation}>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === 0 && styles.disabledButton]} 
          onPress={() => scrollToPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === pages.length - 1 && styles.disabledButton]} 
          onPress={() => scrollToPage(currentPage + 1)}
          disabled={currentPage === pages.length - 1}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A0A0A0',
  },
});

export default FullScreenPageSlider;