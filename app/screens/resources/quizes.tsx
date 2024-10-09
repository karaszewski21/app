import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
    { id: '1', title: 'Quiz 1', quiz: quiz},
    { id: '2', title: 'Quiz 2', quiz: quiz2}
  ];

  useEffect(() => {
    height.value = 0
    height.value =  withSpring(400);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContent}>
        { quizList.map((item, index) =>
          <SquareButton key={index} props={{title: item.title, icon: 'text', backgroundColor: '#3498db', navigate: ()=>navigation.navigate('Quiz', {quiz: item.quiz})}}>
            <View style={styles.contentIcons}>
              <Image source={require('@/assets/icons/quiz.png')} style={{width: 50, height: 50}} resizeMode='contain'/>
              <Image source={require('@/assets/icons/quiz.png')} style={{width: 50, height: 50}} resizeMode='contain'/>
            </View>
          </SquareButton>)
        }
      </View>
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
          <View style={styles.contentContainer}>
              <Quiz quizData={quiz} />
          </View>
        </ScrollView>
      </SafeAreaView>  
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      position: 'relative'
    },
    contentContainer: {
      padding: 20,
    },
    listContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    contentIcons: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
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