import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Button, Platform, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { prints } from '@/constants/Print';
import * as Print from 'expo-print';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';

const PrintoutsStack = createStackNavigator();

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
  const params = route.params;
  const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);
  const height = useSharedValue(0);

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(400);
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
            <img
              src="${url}" style="width: 90vw; height: 95vh;" />
          </body>
        </html>
      `
  }

  const renderFileItem = ({item}: any) => { 
    return(
    <TouchableOpacity 
      style={styles.item}
      onPress={() =>print(item)}
      disabled={params?.book && params.book.isLock ? true : false}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri: item.fileUrl }} style={styles.image}/>
    </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      { Platform.OS === 'ios' && (
         <>
           <View style={styles.spacer} />
           <Button title="Select printer" onPress={selectPrinter} />
           <View style={styles.spacer} />
           {selectedPrinter ? (
             <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text>
           ) : undefined}
         </>
       ) }
      <FlatList
        data={prints}
        renderItem={renderFileItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
       { params?.book && params.book.isLock &&
        <Animated.View  style={{...styles.overlayContainer,height}}>
          <Overlay opacity={0.6} style={styles.overlay}>
            <FunnyButton props={{title:'kup', onPress:()=> {console.log('--->buy')}, icon: ''}}></FunnyButton>
            <FunnyButton props={{title:'odblokuj', onPress:()=> {console.log('--->loout')}, icon: ''}}></FunnyButton>
          </Overlay> 
        </Animated.View>
      }
    </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    contentContainer: {
      padding: 20,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: '#333',
    },
    listContent: {
      padding: 16,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
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
      bottom: 0,
    },
    overlay: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    }
  });