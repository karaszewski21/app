import AccordionItem from '@/components/common/AccordionItem';
import { AudioSentenceProvider } from '@/components/common/SentenceItem';
import { useTabsScreen } from '@/context/tabContext';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const LangChapterScreen = ({ route, navigation } : any) => {
    const resource = route.params.resource;
    const { showTabs, hiddenTabs } = useTabsScreen();
    
    useEffect(()=> {
      hiddenTabs()
      return () => { showTabs() }
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <AudioSentenceProvider>
                {
                  resource.content.map((element: any, index: number) => 
                      <AccordionItem key={index} item={element} index={index}/>
                  )
                }
            </AudioSentenceProvider>
          </ScrollView>
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  export default LangChapterScreen;