import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, FlatList, Alert, BackHandler } from 'react-native';
import Quiz from '@/components/quiz/Quiz'
import { quiz, quiz2 } from '@/constants/Quiz';
import { useEffect, useState } from 'react';
import { useTabsScreen } from '@/context/tabContext';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const QuizesStack = createStackNavigator();

export default function QuizesStackScreen() {
  return (
    <QuizesStack.Navigator>
      <QuizesStack.Screen name="QuizesDetails" component={QuizesScreen} options={{headerShown: false}} />
      <QuizesStack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false}} />
    </QuizesStack.Navigator>
  );
}

const QuizesScreen = ({ navigation }:any) => { 

  const quizList = [
    { id: '1', title: 'Quiz 1', quiz: quiz},
    { id: '2', title: 'Quiz 2', quiz: quiz2}
  ];

  const renderQuizItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.quizItem}
      onPress={() => navigation.navigate('Quiz', {quiz: item.quiz})}
    >
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#3498db" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
          <FlatList
            data={quizList}
            renderItem={renderQuizItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
          />
      </View>
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
    },
    contentContainer: {
      padding: 20,
    },
    quizItem: {
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
    quizTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: '#333',
    },
    listContent: {
      padding: 16,
    },
  });