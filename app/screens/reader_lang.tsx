import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import ReaderText from '@/components/reader/reader-text/reader_text';
import { SafeAreaView } from "react-native-safe-area-context";
import ReaderLangSlider from '@/components/reader/reader-lang/reader_lang';

const ReaderLangScreen = ({ route, navigation }:any) => { 
  const { showTabs, hiddenTabs } = useTabsScreen();
  const { content: pages} = route.params;

  useEffect(()=> {
    hiddenTabs()
    return () => { showTabs() }
  }, [])
  
  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
        <ReaderLangSlider pages={pages}  onClose={handleClose}/>
    </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    }
  });

  export default ReaderLangScreen;