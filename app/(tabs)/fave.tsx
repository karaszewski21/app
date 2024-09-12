import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, ScrollView} from 'react-native';
import Quiz from '@/components/quiz/Quiz'
//import { quiz } from '@/constants/Quiz';
import { quiz } from '@/constants/QuizVoice';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FaveScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Quiz quizData={quiz}/> */}
          {/* <SpokenQuiz quiz={quiz}></SpokenQuiz> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}