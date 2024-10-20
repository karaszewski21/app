import { ScrollView, View, Text, StyleSheet, Image, Dimensions} from 'react-native';
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
  const { buyBookModal, selectedBook, onSelectBookPress, setBuyBookModal, buyBookPress } = useBuyBook(book)

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
        <Text style={styles.title}>Quizy</Text>
          <Image style={styles.image} source={{uri: bannerUrl}}></Image>
        </View>
        <View style={styles.listContent}>
          { quizList.map((item, index) =>
            <SquareButton key={index} props={{title: '', disabled: isLock, icon: 'text', backgroundColor: '#55b1be', color: 'green', navigate: () => navigation.navigate('Quiz', {quiz: item})}}>
              <Text style={styles.tileTitle}>{item.title}</Text>
                {/* { item.type === 'child' &&  <Image source={require('@/assets/icons/child.png')} style={{width: 70, height: 70}} resizeMode='contain'/> }
                { item.type === 'parent' &&  <Image source={require('@/assets/icons/parent.png')} style={{width: 70, height: 70}} resizeMode='contain'/> }
                { item.type === 'helpchild' &&  <Image source={require('@/assets/icons/helpchild.png')} style={{width: 70, height: 70}} resizeMode='contain'/> } */}
            </SquareButton>)
          }
        </View>
        <View style={styles.rankingContainer}>
          <ListWrapper props={{title: 'Ranking quizów'}}>
            <View style={styles.stepContainer}>
              <Text style={styles.step}>1. Anna K. - 280 pkt</Text>
              <Text style={styles.step}>2. Jan N. - 260 pkt</Text>
              <Text style={styles.step}>3. Ty - 230 pkt</Text>
            </View>
          </ListWrapper>
        </View>
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
              onSubmit={(s) => buyBookPress(s)}
              onClose={() => setBuyBookModal(false)}
              />
           </Overlay> 
        }
      </ScrollView>
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
        <ScrollView>
          <Quiz quizData={quiz} />
        </ScrollView>
      </SafeAreaView>  
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 50
    },
    bookDetailsContainer: {
      margin: 10,
    },
    title: {
      fontSize: 28,
      textAlign: 'center',
      fontFamily: 'ShantellSans-SemiBoldItalic'
    },
    image: {
      height: 200,
      width: '100%',
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