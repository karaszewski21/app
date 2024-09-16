import { ScrollView, View, StyleSheet, useWindowDimensions,Image, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import PageFlipper from '@/components/reader/reader-flipper';
import { SafeAreaView } from "react-native-safe-area-context";

const ReaderFlipperScreen = ({ navigation }:any) => { 
  const { showTabs, hiddenTabs } = useTabsScreen();
  const {height, width} = useWindowDimensions()

  useEffect(()=> {
    hiddenTabs()
    return () => { showTabs() }
  }, [])
  
  const pageUrls = [
    'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg',
    'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_0.jpg',
    'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish/Leonardo_Phoenix_Physical_AttributesMediumsized_goldfish_with_1.jpg',
    'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish/Leonardo_Phoenix_Physical_AttributesMediumsized_goldfish_with_0.jpg',
    'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish/Leonardo_Phoenix_Physical_AttributesMediumsized_goldfish_with_2.jpg',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{width,height}}>
        <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => navigation.navigate('Details')}
          >
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <PageFlipper
              data={pageUrls}
              pageSize={{
                height: height, // the size of the images I plan to render (used simply to calculate ratio)
                width: width,
              }}
              portrait={true}
              renderPage={(data) => <Image source={{ uri: data }} style={{ height: '100%', width: '100%' }} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flexGrow: 1,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 20,
    },
  });

  export default ReaderFlipperScreen;