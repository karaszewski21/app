import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Platform, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { Fragment, useEffect, useState } from 'react';
import { printouts } from '@/constants/printouts';
import * as Print from 'expo-print';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import BookButton from '@/components/buttons/BookButton';
import useBuyBook from '@/hooks/useBuyBook';
import BuyBookView from '@/components/common/BuyBookView';
import { OptionsBook } from '@/model/book';
import { Image } from 'expo-image';

const PrintoutsStack = createStackNavigator();
const { height: HEIGHT_SCREEN } = Dimensions.get('window');

export default function PrintoutsStackScreen({route}:any) {
  return (
    <PrintoutsStack.Navigator>
      <PrintoutsStack.Screen name="PrintoutsDetails" component={PrintoutsScreen} options={{headerShown: false}} initialParams={route.params} />
    </PrintoutsStack.Navigator>
  );
}

interface PrintFile {
  name: string;
  fileUrl: string
}

interface Printer {
  name: string;
  url: string
}

const PrintoutsScreen = ({route, navigation }:any) => { 
  const book = route.params.book
  const { ids } = route.params.resource;
  const options = book.content.options as OptionsBook;
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book)
  const isLock = book && book.isLock;
  const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);
  const height = useSharedValue(0);

  const printoutsList = printouts.filter(element => ids.includes(element.id))

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  const print = async (item: PrintFile) => {

    if (Platform.OS === 'ios' && !selectedPrinter) {
      Alert.alert('Wybierz drukarkę')
      return;
    }  

    await Print.printAsync({
      html: html(item.fileUrl),
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const html = (url: string) => {
   
    return `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          </head>
          <body style="text-align: center;">
            <img src="${url}" style="width: 100vw; height: 99vh;"/>
          </body>
        </html>
      `
  }

  const renderFileItem = (item:any) => { 
    return(
    <TouchableOpacity 
      key={item.name}  
      onPress={() =>print(item)}  
      disabled={isLock}
      style={styles.tileItem}
      >
        <Image style={styles.image} source={{uri: item.fileUrl}} contentFit='cover' placeholder={require('@/assets/gifs/loader.gif')}></Image>
    </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      { Platform.OS === 'ios' && (
         <Fragment>
           <View style={styles.spacer} />
           <Button title="Select printer" onPress={selectPrinter} />
           <View style={styles.spacer} />
           {selectedPrinter ? (
             <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text>
           ) : undefined}
         </Fragment>
       ) }
      <ScrollView>
        <View style={styles.tilesContainer}>
            {printoutsList.map(book => (
              renderFileItem(book)
            ))}
        </View>
      </ScrollView>
       { book && book.isLock &&
        <Animated.View  style={{...styles.overlayContainer,height}}>
          <Overlay opacity={0.6} style={styles.overlay}>
            <BookButton 
                title="Kup teraz"
                onPress={() => onSelectBookPress(book)}
                leftIconName="book-open-page-variant"
                backgroundColor="#c45c48"
                textColor="#fff"
                customStyles={{
                  container: { borderWidth: 1, borderColor: '#c83c45' },
                  title: { fontSize: 20 },
                  }}
                />
          </Overlay> 
        </Animated.View>
      }
      { buyBookModal &&
          <Overlay opacity={0.3} style={{top: 0}}>
            <BuyBookView 
                book={selectedBook}
                textColor={options.textColor}
                backgroundColor={options.backgroundColor}
                bgColorButton={options.bgColorButton}
                onSubmit={(s) => buyBookPress(s)}
                onClose={() => setBuyBookModal(false)}
                />
          </Overlay> 
      }
    </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      padding: 10,
      paddingBottom: 50
    },
    tilesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    tileItem: {
      width: 170, 
      height: 250,
      borderRadius: 15,
      marginBottom: 15,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    spacer: {
      height: 8,
    },
    printer: {
      textAlign: 'center',
    },
    overlayContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    overlay: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    }
  });