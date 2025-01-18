import WordImageItem, { AudioWordProvider } from '@/components/common/WordImageItem';
import { useTabsScreen } from '@/context/tabContext';
import { LangImage } from '@/model/book';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Modal, Dimensions, Text } from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');


const LangImageScreen = ({ route, navigation } : any) => { 
    const resource = route.params.resource;

    const [selectedImage, setSelectedImage] = useState<LangImage | undefined>(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { showTabs, hiddenTabs } = useTabsScreen();

    useEffect(()=> {
      hiddenTabs()
      return () => { showTabs() }
    }, []);

    const renderFileItem = ( item: LangImage ) => { 
      return(
      <TouchableOpacity 
        onPress={() => {
          setSelectedImage(item);
          setIsModalVisible(true);
        }}  
        style={styles.tileItem}
        >
          <Image style={styles.image} source={{ uri: item.thumbnailUrl }} contentFit='cover' placeholder={require('@/assets/gifs/loader.gif')}></Image>
      </TouchableOpacity>
      )
    }

    return (
        <SafeAreaView style={styles.container}>
           <ScrollView>
              <View style={styles.tilesContainer}>
                  {resource.content.map((element: any, index:number) => (
                      <View key={index}>
                          { renderFileItem(element)}
                      </View>
                  ))}
              </View>
          </ScrollView>
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={() => setIsModalVisible(false)}
              >
              <Ionicons name="close" size={15} color="#000" />
              </TouchableOpacity>
              <Image style={styles.fullScreenImage} source={{ uri: selectedImage?.imageUrl }} contentFit='contain' placeholder={require('@/assets/gifs/loader.gif')}></Image>
              <AudioWordProvider>
                { selectedImage?.vocabulary.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.wordContainer,
                        {
                          top: height * (item.position.top / 100),
                          left: width * (item.position.left / 100),
                        },
                      ]}
                    >
                      <WordImageItem key={index} text={item.word} translation={item.translation} audioUrl={item.audioUrl} colorWord={item.colorWord} colorTranslation={item.colorTranslation}/>
                    </View>
                ))}
                </AudioWordProvider>
            </View>
          </Modal>
        </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingBottom: 50
    },
    tilesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    tileItem: {
      width: 120, 
      height: 200,
      borderRadius: 15,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      justifyContent: 'center',
      alignItems: 'center',
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
    fullScreenImage: {
      width: width,
      height: height,
    },
    wordContainer: {
      position: 'absolute',
      alignItems: 'center',
    },
    wordButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: 8,
      borderRadius: 8,
      minWidth: 80,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    selectedWord: {
      backgroundColor: '#e3f2fd',
      borderColor: '#1976d2',
      borderWidth: 2,
    },
    wordText: {
      fontSize: 16,
      color: '#333',
      fontWeight: '500',
    },
  });

  export default LangImageScreen;