import { ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Quiz from '@/components/quiz/Quiz'
import { quizes } from '@/constants/quizes';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import SquareButton from '@/components/common/SquareButton';
import ListWrapper from '@/components/common/ListWrapper';
import BookButton from '@/components/buttons/BookButton';
import BuyBookView from '@/components/common/BuyBookView';
import useBuyBook from '@/hooks/useBuyBook';
import { OptionsBook } from '@/model/book';
import { Image } from 'expo-image';

const QuizesStack = createStackNavigator();
const { height: HEIGHT_SCREEN } = Dimensions.get('window');

export default function QuizesStackScreen({route}:any) {
  return (
    <QuizesStack.Navigator>
      <QuizesStack.Screen name="QuizesDetails" component={QuizesScreen} options={{headerShown: false}} initialParams={route.params} />
      <QuizesStack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}} />
    </QuizesStack.Navigator>
  );
}

const QuizesScreen = ({route, navigation }:any) => { 
  const book = route.params.book
  const { ids, bannerUrl } = route.params.resource;
  const options = book.content.options as OptionsBook;
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book);

  const isLock = book && book.isLock;
  const height = useSharedValue(0);
  const quizList = quizes.filter(element => ids.includes(element.id))

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(HEIGHT_SCREEN);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bookDetailsContainer}>
          <Image style={styles.image} source={{uri: bannerUrl}} contentFit='cover' placeholder={require('@/assets/gifs/loader.gif')}></Image>
        </View>
        <View style={styles.listContent}>
          { quizList.map((item: any, index) =>
              <SquareButton 
                key={index} 
                props={
                  { title: item.title, 
                    disabled: isLock, 
                    icon: 'text', 
                    backgroundColor: item.options.backgroundColor, 
                    color: item.options.textColor, 
                    navigate: () => navigation.navigate('Quiz', {quiz: item})}} 
              />
            )
          }
        </View>
      </ScrollView>
      { isLock &&
          <Animated.View  style={{...styles.overlayContainer,height}}>
            <Overlay opacity={0.3} style={styles.overlay}>
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

  const QuizScreen = ({route, navigation }:any) => { 
    const { hiddenTabs, showTabs} = useTabsScreen();
    const { quiz } = route.params;

    useEffect(() => {
      hiddenTabs()
      return () => {
        showTabs() 
      }
    }, []);
  
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Quiz quizData={quiz} theme={quiz.theme}/>
        </ScrollView>
      </SafeAreaView>  
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 50
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%',
    },
    bookDetailsContainer: {
      marginHorizontal: 10,
      borderRadius: 15,
    },
    image: {
      height: 130,
      width: '100%',
      borderRadius: 15,
    },
    rankingContainer: {
      padding: 20,
    },
    ranking: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    tileTitle: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    listContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    stepContainer: {
      marginTop: 5,
    },
    step: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
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