import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  FadeInLeft,
} from 'react-native-reanimated';

interface Question {
  id: number;
  text: string;
}

interface AnimatedQuestionCardProps {
  currentQuestion: Question | null;
  totalQuestions: number;
  textColor: string
}

const AnimatedQuestionCard: React.FC<AnimatedQuestionCardProps> = ({ 
  currentQuestion,
  totalQuestions,
  textColor
}) => {
  return (
    <View style={styles.questionContainer}>
      <Animated.View entering={FadeInLeft.duration(1000)}>
        {currentQuestion && (
          <>
            <Animated.Text style={[styles.questionText, { color: textColor }]}>
              {currentQuestion.text}
            </Animated.Text>
          </>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  questionNumber: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  questionText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AnimatedQuestionCard;