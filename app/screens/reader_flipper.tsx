import { ScrollView, View, StyleSheet, useWindowDimensions,Image, TouchableOpacity, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import PageFlipper from '@/components/reader/reader-flipper';
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

const ReaderFlipperScreen = ({route, navigation }:any) => { 
  const { showTabs, hiddenTabs } = useTabsScreen();
  const {content: pages} = route.params;

  useEffect(()=> {
    hiddenTabs()
    return () => { showTabs() }
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <View  style={{ flex: 1 }}>
        <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => navigation.navigate('Details')}
          >
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <PageFlipper
              data={pages}
              pageSize={{
                height: height, // the size of the images I plan to render (used simply to calculate ratio)
                width: width,
              }}
              portrait={true}
              renderPage={(data) => 
              <View style={{ flex: 1, width: '100%', height: height}}>
                <Image 
                  source={{ uri: data }} 
                  style={{ 
                    flex: 1,
                    width: width,
                    height: height,
                    backgroundColor: 'black'
                  }} 
                  resizeMode='stretch'
                />
            </View>}
          />
        </View>
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