import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Video } from 'expo-av';
import uuid from 'react-native-uuid';

const Quiz = ({ quizData }) => {
  // Stan komponentu
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answerChecked, setAnswerChecked] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(quizData.duration || 0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const timerRef = useRef(null);

  // Efekt do obsługi timera
  useEffect(() => {
    if (quizData.timer && timeRemaining > 0 && !isTimerPaused && !showResult) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setShowResult(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeRemaining, isTimerPaused, showResult]);


  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOptions({});
    setAnswerChecked({});
    setTimeRemaining(quizData.duration || 0);
    setIsTimerPaused(false);
  };


  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Nie można załadować danych quizu.</Text>
      </View>
    );
  }

/**
   * Obsługa wyboru opcji przez użytkownika
   * @param {number} optionIndex - Indeks wybranej opcji
   */
  const handleOptionSelect = (optionIndex) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    let newSelectedOptions = {...selectedOptions};
    
    if (!newSelectedOptions[currentQuestionIndex]) {
      newSelectedOptions[currentQuestionIndex] = [];
    }

    if (currentQuestion.answerType === 'multiple') {
      const index = newSelectedOptions[currentQuestionIndex].indexOf(optionIndex);
      if (index > -1) {
        newSelectedOptions[currentQuestionIndex].splice(index, 1);
      } else {
        newSelectedOptions[currentQuestionIndex].push(optionIndex);
      }
    } else {
      newSelectedOptions[currentQuestionIndex] = [optionIndex];
    }

    setSelectedOptions(newSelectedOptions);

    // do poprawy podgląd buttonówgdy odp jest poprawna
   // if (quizData.checkAutoAnswer) {
      checkAnswer(newSelectedOptions[currentQuestionIndex], currentQuestionIndex);
  //  }
  };

  /**
   * Sprawdzenie, czy wybrana odpowiedź jest poprawna
   * @param {Array} options - Wybrane opcje
   * @returns {boolean} - Czy odpowiedź jest poprawna
   */
  const isAnswerCorrect = (options,questionIndex) => {
    const currentQuestion = quizData.questions[questionIndex];
    if (currentQuestion.answerType === 'multiple') {
      return JSON.stringify(options.sort()) === JSON.stringify(currentQuestion.correctOptionIndexes.sort());
    } else {
      return options[0] === currentQuestion.correctOptionIndex;
    }
  };

  /**
   * Sprawdzenie odpowiedzi i aktualizacja wyniku
   * @param {Array} options - Wybrane opcje
   */
  const checkAnswer = (options,questionIndex) => {
    if (isAnswerCorrect(options, questionIndex)) {
      setScore(prevScore => prevScore + (quizData.questions[questionIndex].points || 0));
    }

    if (quizData.checkAutoAnswer) { 
      setAnswerChecked(prev => ({...prev, [questionIndex]: true}));
    }
  };

  /**
   * Przejście do poprzedniego pytania
   */
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

 /**
   * Przejście do następnego pytania lub zakończenie quizu
   */
  const handleNextQuestion = () => {
    // if (!quizData.checkAutoAnswer) {
    //   checkAnswer(selectedOptions);
    // }

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

    /**
   * Przełączanie pauzy timera
   */
  const toggleTimer = () => {
      setIsTimerPaused(!isTimerPaused);
  };
  
    /**
     * Wysyłanie wyniku quizu na podany adres email
     */
  const sendResultByEmail = () => {
      // TODO: Implementacja wysyłania emaila
      console.log(`Wysyłanie wyniku na adres: ${userEmail}`);
  };
  

  const getOptionStyle = (index) => {
    if (!answerChecked[currentQuestionIndex]) return styles.optionButton;
    
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answerType === 'multiple' 
      ? currentQuestion.correctOptionIndexes.includes(index)
      : currentQuestion.correctOptionIndex === index;
  
    if (isCorrect) {
      return [styles.optionButton, styles.correctOption];
    } else if (selectedOptions[currentQuestionIndex] && selectedOptions[currentQuestionIndex].includes(index)) {
      return [styles.optionButton, styles.incorrectOption];
    }
    return styles.optionButton;
  };

   /**
   * Renderowanie pojedynczej opcji odpowiedzi
   * @param {string} option - Treść opcji
   * @param {number} index - Indeks opcji
   */
   const renderOption = (option, index) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const optionStyle = getOptionStyle(index);

    // const safeOptionStyle = Array.isArray(optionStyle) ? optionStyle : [optionStyle];
    const isSelected = (selectedOptions[currentQuestionIndex] || []).includes(index);

    if (currentQuestion.type === 'image') {
      return (
        <TouchableOpacity
          key={uuid.v4()}
          style={[styles.imageOptionContainer, optionStyle, isSelected && styles.selectedOption]}
          onPress={() => handleOptionSelect(index)}
          disabled={answerChecked[currentQuestionIndex]}
        >
          <Image source={{ uri: option }} style={styles.optionImage} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={uuid.v4()}
          style={[optionStyle, isSelected && styles.selectedOption]}
          onPress={() => handleOptionSelect(index)}
          disabled={answerChecked[currentQuestionIndex]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      );
    }
  };


  /**
   * Renderowanie aktualnego pytania
   */
  const renderQuestion = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];

    return (
      <View>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>
        <Text style={styles.questionTypeLabel}>
          {currentQuestion.answerType === 'multiple' ? 'Wybierz wszystkie poprawne odpowiedzi' : 'Wybierz jedną poprawną odpowiedź'}
        </Text>
        {currentQuestion.image && (
          <Image source={{ uri: currentQuestion.image }} style={styles.questionImage} />
        )}
        {currentQuestion.video && (
          <Video
            source={{ uri: currentQuestion.video }}
            style={styles.questionVideo}
            useNativeControls
            resizeMode="contain"
          />
        )}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => renderOption(option, index))}
        </View>
        <View style={styles.navigationContainer}>
          <TouchableOpacity 
            style={[styles.navButton, currentQuestionIndex === 0 ? styles.disabledButton : null]} 
            onPress={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <Text style={styles.navButtonText}>Poprzednie</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={handleNextQuestion}
            disabled={selectedOptions.length === 0}
          >
            <Text style={styles.navButtonText}>
              {currentQuestionIndex === quizData.questions.length - 1 ? 'Zakończ' : 'Następne'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

/**
   * Renderowanie wyników quizu
   */
const renderResult = () => (
  <ScrollView style={styles.resultContainer}>
    <Text style={styles.resultText}>Quiz zakończony!</Text>
    <Text style={styles.scoreText}>
      Twój wynik: {score} / {quizData.questions.reduce((acc, q) => acc + (q.points || 0), 0)}
    </Text>
    
    <Text style={styles.answersHeader}>Poprawne odpowiedzi:</Text>
    {quizData.questions.map((question, index) => (
      <View key={index} style={styles.questionResult}>
        <Text style={styles.questionText}>{index + 1}. {question.text}</Text>
        
        {question.answerType === 'multiple' ? (
          <View>
            <Text style={styles.correctAnswerText}>Poprawne odpowiedzi:</Text>
            {question.correctOptionIndexes.map((correctIndex) => (
              <Text key={correctIndex} style={styles.answerText}>
                • {question.options[correctIndex]}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={styles.correctAnswerText}>
            Poprawna odpowiedź: {question.options[question.correctOptionIndex]}
          </Text>
        )}
        
        {question.explanation && (
          <Text style={styles.explanationText}>
            Wyjaśnienie: {question.explanation}
          </Text>
        )}
      </View>
    ))}
    
    <View style={styles.emailContainer}>
      <TextInput
        style={styles.emailInput}
        placeholder="Podaj swój adres email"
        value={userEmail}
        onChangeText={setUserEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.sendButton} onPress={sendResultByEmail}>
        <Text style={styles.sendButtonText}>Wyślij wynik na email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.repeatButton} onPress={resetQuiz}>
        <Text style={styles.repeatButtonText}>Powtórz quiz</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

// Główny render komponentu
return (
  <View style={styles.container}>
    <Text style={styles.title}>{quizData.title || 'Quiz'}</Text>
    {quizData.synopsis && <Text style={styles.synopsis}>{quizData.synopsis}</Text>}
    {!showResult && (
      <View style={styles.timerContainer}>
         { quizData.timer &&  
          <>
            <Text style={styles.timerText}>Czas: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</Text>
            <TouchableOpacity style={styles.timerButton} onPress={toggleTimer}> 
              <Text style={styles.timerButtonText}>{isTimerPaused ? 'Wznów' : 'Pauza'}</Text>
            </TouchableOpacity> 
          </> }
      </View>
    )}
    {!showResult ? renderQuestion() : renderResult()}
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  repeatButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  repeatButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: '#e6f7ff', // Jasnoniebieski kolor dla wybranych opcji
    borderColor: '#1890ff',
    borderWidth: 2,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  synopsis: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  questionTypeLabel: {
    fontSize: 14,
    marginBottom: 10,
    fontStyle: 'italic',
    color: '#666',
  },
  questionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  questionVideo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  optionButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  imageOptionContainer: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  optionImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  correctOption: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  incorrectOption: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  unselectedOption: {
    opacity: 0.5,
  },
  optionText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Quiz;