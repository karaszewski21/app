import { ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Quiz from '@/components/quiz/Quiz'
import { quiz, quiz2 } from '@/constants/Quiz';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Overlay from '@/components/Overlay';
import FunnyButton from '@/components/common/FunnyButton';
import SquareButton from '@/components/common/SquareButton';
import ListWrapper from '@/components/common/ListWrapper';

const QuizesStack = createStackNavigator();

export default function QuizesStackScreen({route}:any) {
  return (
    <QuizesStack.Navigator>
      <QuizesStack.Screen name="QuizesDetails" component={QuizesScreen} options={{headerShown: false}} initialParams={route.params} />
      <QuizesStack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}} />
    </QuizesStack.Navigator>
  );
}

const QuizesScreen = ({route, navigation }:any) => { 
  const params = route.params;
  const height = useSharedValue(0);

  const quizList = [
    { id: '1', title: 'Nowy', quiz: quiz, type: 'child'},
    { id: '2', title: 'Nowy', quiz: quiz2, type: 'parent'},
    { id: '3', title: 'Nowy', quiz: quiz, type: 'helpchild'},
    { id: '4', title: 'Nowy', quiz: quiz2, type: 'child'},
  ];

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(400);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bookDetailsContainer}>
        <Text style={styles.title}>Quizy</Text>
          <Image style={styles.image} source={{uri: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png'}}></Image>
        </View>
        <View style={styles.listContent}>
          { quizList.map((item, index) =>
            <SquareButton key={index} props={{title: item.title, icon: 'text', backgroundColor: '#55b1be', color: 'green',  navigate: ()=>navigation.navigate('Quiz', {quiz: item.quiz})}}>
              <Text style={styles.tileTitle}>Wiosna</Text>
                { item.type === 'child' &&  <Image source={require('@/assets/icons/child.png')} style={{width: 70, height: 70}} resizeMode='contain'/> }
                { item.type === 'parent' &&  <Image source={require('@/assets/icons/parent.png')} style={{width: 70, height: 70}} resizeMode='contain'/> }
                { item.type === 'helpchild' &&  <Image source={require('@/assets/icons/helpchild.png')} style={{width: 70, height: 70}} resizeMode='contain'/> }
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
        { params?.book && params.book.isLock &&
          <Animated.View  style={{...styles.overlayContainer,height}}>
            <Overlay opacity={0.6} style={styles.overlay}>
              <FunnyButton props={{title:'kup', onPress:()=> {console.log('--->buy')}, icon: ''}}></FunnyButton>
              <FunnyButton props={{title:'odblokuj', onPress:()=> {console.log('--->loout')}, icon: ''}}></FunnyButton>
            </Overlay> 
          </Animated.View>
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
   //   height: '100%',
   //   position: 'relative'
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
      bottom: 0,
    },
    overlay: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    }
  });