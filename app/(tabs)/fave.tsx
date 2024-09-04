import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, ScrollView} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Quiz from '@/components/quiz/Quiz'
import { ThemedText } from '@/components/ThemedText';
import { quiz } from '@/constants/Quiz';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FaveScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Quiz quizData={quiz}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}