import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import uuid from 'react-native-uuid';
import { isAnswerCorrect } from './component/Utils';
import WelcomeScreen from './component/Welcome';
import SendMail from './component/SendMail';
import QuizPlayer from './component/QuizPlayer';
import { ImageModal } from './component/ImageModal';
import { Image } from 'expo-image';

const defaultTheme = {
  // Tekst
  textColor: '#FFFFFF',
  
  // Przyciski poprzednie i następny i powtórz quiz
  buttonBgColor: 'black',
  buttonTextColor: '#FFFFFF',
  buttonBorderColor: '#0056b3',
  
  // Opcje odpowiedzi
  optionBgColor: 'red',
  optionTextColor: '#FFFFFF',
  optionBorderColor: '#0056b3',
  optionSelectedBgColor: 'black',
  
  // Prawidłowe/nieprawidłowe odpowiedzi
  correctColor: '#4CAF50',
  incorrectColor: '#f44336',
  
  // Progress bar
  progressBarBgColor: 'green',

  // Tekst wyniku
  scoreTextColor: '#FFFFFF',

  // Timewr
  timerTextColor: '#FFFFFF',
};

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Quiz = ({ quizData, theme = {}}: any) => {
  const currentTheme = { ...defaultTheme, ...theme.quizTheme };
  // Stan komponentu
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [answerChecked, setAnswerChecked] = useState<any>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(quizData.duration || 0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const timerRef = useRef<any>(null);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [screen, setScreen] = useState<string>('welcome');

  // Efekt do obsługi timera
  useEffect(() => {
    if (quizData.timer && timeRemaining > 0 && !isTimerPaused && !showResult) {
      // @ts-ignore
      timerRef.current = setInterval(() => {
        setTimeRemaining((prevTime: any) => {
          if (prevTime <= 1) {
            // @ts-ignore
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
        <Text style={styles.errorText}>Nie można załadować danych quizu.</Text>
    );
  }

  /**
   * Obsługa wyboru opcji przez użytkownika
   * @param {number} optionIndex - Indeks wybranej opcji
   */
  const handleOptionSelect = (optionIndex: number) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    let newSelectedOptions:any = {...selectedOptions};

    console.log('====',newSelectedOptions[currentQuestionIndex])

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

      checkAnswer(newSelectedOptions[currentQuestionIndex], currentQuestionIndex)
  };

  /**
   * Sprawdzenie odpowiedzi i aktualizacja wyniku
   * @param {Array} options - Wybrane opcje
   */
  const checkAnswer = (options:[], questionIndex: number) => {
    const currentQuestion = quizData.questions[questionIndex];
    let newSelectedOptions: any = {...selectedOptions};

    if (isAnswerCorrect(quizData, options, questionIndex)) {
      setScore(prevScore => prevScore + (quizData.questions[questionIndex].points || 0));
    }

    if (!quizData.checkAutoAnswer) return;

    if (currentQuestion.answerType === 'multiple') {
      const selectedOptionsIndex = newSelectedOptions[questionIndex];

      if(!selectedOptionsIndex) return;

      const correctOptionIndexes = quizData.questions[questionIndex].correctOptionIndex;

      if (correctOptionIndexes.length === selectedOptionsIndex.length) {
          setAnswerChecked((prev:any) => ({...prev, [questionIndex]: true}));
      }

    } else {
      setAnswerChecked((prev:any)  => ({...prev, [questionIndex]: true}));
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
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const renderProgressBar = () => { 
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    
    return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar,{ width: `${progress}%` , backgroundColor: currentTheme.progressBarBgColor}]} />
    </View>) 
  };

  const getOptionStyle = (index: number) => {
    let optionButton = {...styles.optionButton, backgroundColor: currentTheme.optionBgColor};

    if (!answerChecked[currentQuestionIndex]) return optionButton;
    
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answerType === 'multiple' 
      ? currentQuestion.correctOptionIndex.includes(index)
      : currentQuestion.correctOptionIndex === index;
  
    if (isCorrect) {
      return [optionButton, styles.correctOption];
    } else if (selectedOptions[currentQuestionIndex] && selectedOptions[currentQuestionIndex].includes(index)) {
      return [optionButton, styles.incorrectOption];
    }

    return optionButton
  };

    // Dodaj funkcję otwierającą modal
    const handleImagePress = (imageUri: string) => {
      setSelectedImage(imageUri);
      setIsImageModalVisible(true);
    };

   /**
   * Renderowanie pojedynczej opcji odpowiedzi
   * @param {string} option - Treść opcji
   * @param {number} index - Indeks opcji
   */
  const renderOption = (option: string, index: number) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const optionStyle = getOptionStyle(index);
    const isSelected = (selectedOptions[currentQuestionIndex] || []).includes(index);

    if (currentQuestion.type === 'image') {
      return (
        <TouchableOpacity
          key={uuid.v4() as string}
          style={[styles.imageOptionContainer, optionStyle, isSelected && {...styles.selectedOption, borderColor: currentTheme.optionSelectedBgColor, borderWidth: 2}]}
          onPress={() => handleOptionSelect(index)}
          disabled={answerChecked[currentQuestionIndex]}
        >
          <Image source={{ uri: option }} style={styles.optionImage} contentFit='contain' placeholder={require('@/assets/gifs/loader.gif')}/>
          <TouchableOpacity 
            style={styles.zoomButton}
            onPress={() => handleImagePress(option)}
          >
            <Text style={styles.zoomButtonText}>🔍</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={uuid.v4() as string}
          style={[{...optionStyle, padding: 16 }, isSelected && {...styles.selectedOption, backgroundColor: currentTheme.optionSelectedBgColor}]}
          onPress={() => handleOptionSelect(index)}
          disabled={answerChecked[currentQuestionIndex]}
        >
          <Text style={[styles.optionText, { color: currentTheme.optionTextColor }]}>{option}</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderLabelCountAnswer = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    
      if (currentQuestion.answerType === 'multiple') {
        return `Wybierz ${currentQuestion.correctOptionIndex.length} poprawne odpowiedzi`
      } else {
        return 'Wybierz jedną poprawną odpowiedź'
      }
    
  };

/**
 * Renderowanie aktualnego pytania
 */
const renderQuestion = () => {
  const currentQuestion = quizData.questions[currentQuestionIndex];
    return (
      <View style={{ flex: 1, display: 'flex' }}>
        <ScrollView>
          <Text style={[styles.questionText, {color: currentTheme.textColor}]}>{currentQuestion.text}</Text>
          <Text style={[styles.questionTypeLabel,{color: currentTheme.textColor}]}>
            { renderLabelCountAnswer() }
          </Text>
          {currentQuestion.image && (
            <View>
              <Image source={{ uri: currentQuestion.image }} style={styles.questionImage} contentFit='contain' placeholder={require('@/assets/gifs/loader.gif')} transition={2000}/>
              <TouchableOpacity 
                style={styles.zoomButton}
                onPress={() => handleImagePress(currentQuestion.image)}
              >
                <Text style={styles.zoomButtonText}>🔍</Text>
              </TouchableOpacity>
            </View>
   
          )}
          {currentQuestion.video && (
            <Video
              source={{ uri: currentQuestion.video }}
              style={styles.questionVideo}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
            />
          )}
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option: string, index: number) => renderOption(option, index))}
          </View>
          
        </ScrollView>
        <View style={styles.navigationContainer}>
            {  quizData.previousButton && 
                <TouchableOpacity 
                  style={[styles.navButton, currentQuestionIndex === 0 || isTimerPaused ? styles.disabledButton : null, { backgroundColor: currentTheme.buttonBgColor }]}  
                  onPress={handlePrevQuestion} 
                  disabled={currentQuestionIndex === 0 || isTimerPaused}
                >
                  <Text style={[styles.navButtonText, { color: currentTheme.buttonTextColor }]}>Poprzednie</Text>
                </TouchableOpacity>
            }

            { currentQuestion.audioUrl &&  <QuizPlayer audioUrl={currentQuestion.audioUrl}/> }

            <TouchableOpacity 
              style={[styles.navButton, isTimerPaused ? styles.disabledButton : null, { backgroundColor: currentTheme.buttonBgColor }]} 
              onPress={handleNextQuestion} 
              disabled={selectedOptions.length === 0 || isTimerPaused}
              >
              <Text style={[styles.navButtonText, { color: currentTheme.buttonTextColor }]}>
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
    <Text style={[styles.resultText, {color: currentTheme.textColor}]}>Quiz zakończony!</Text>
    <Text style={[styles.scoreText, {color: currentTheme.scoreTextColor}]}>
      Twój wynik: {score} / {quizData.questions.reduce((acc: any, q: any) => acc + (q.points || 0), 0)}
    </Text>
    
    <Text style={[styles.answersHeader,{color: currentTheme.textColor}]}>Poprawne odpowiedzi:</Text>

    { quizData.questions.map((question: any, index: number) =>  {
      let isCorrect;

      if (question.answerType === 'multiple') {

         if (selectedOptions[index] === undefined) {
            isCorrect = false;
         } else {
            const correctOptions = question.correctOptionIndex.sort((a: number, b: number) => a - b);
            const selected = selectedOptions[index] ?? selectedOptions[index].sort((a: number, b: number) => a - b);
            isCorrect = correctOptions.length === selected.length &&  correctOptions.every((value: number, i: number) => value === selected[i]);
         } 
      }

      if (question.answerType === 'single') {
          isCorrect = selectedOptions[index] == question.correctOptionIndex 
      }

      return (
        <View key={index} style={[styles.questionResult, !isCorrect ? {borderColor: '#db2c2c', borderWidth: 4} : {}]}>
          <Text style={styles.questionText}>{index + 1}. {question.text}</Text>

          { isCorrect ? 
              <></> 
              : 
              <View>
                  {
                    selectedOptions[index] === undefined ?
                      <Text style={styles.incorrectAnswerText}>Brak odpowiedzi</Text> 
                      : 
                      <View>
                          { question.type === 'text' ?
                              <>
                                { question.answerType === 'single' &&  <Text style={styles.incorrectAnswerText}>Zła odpowiedź: {question.options[selectedOptions[index]]}</Text>}
                                { question.answerType === 'multiple' &&  <Text style={styles.incorrectAnswerText}>Zostały podane złe odpowiedzi</Text>}
                              </> 
                          :  <View>
                              <Text style={styles.incorrectAnswerText}>Zła odpowiedź:</Text>
                              <Image source={{ uri: question.options[selectedOptions[index]]}} style={styles.questionImage} contentFit='cover' placeholder={{ blurhash }}/>
                            </View>
                          }
                      </View>
                  }    
              </View> 
          }

          { question.answerType === 'multiple' ? (
            <View>
              <Text style={styles.correctAnswerText}>Poprawna odpowiedź:</Text>
              {question.correctOptionIndex.map((correctIndex: number) => (
                <Text key={correctIndex} style={[styles.answerText, { color: '#48BB78'}]}>
                  • {question.options[correctIndex]}
                </Text>
              ))}
            </View>
          ) : (
            <View>
              { question.type === 'text' ?
                <Text style={styles.correctAnswerText}>
                  Poprawna odpowiedź: {question.options[question.correctOptionIndex]}
                </Text>
              :  <View>
                  <Text style={styles.correctAnswerText}>
                    Poprawna odpowiedź:
                  </Text>
                  <Image source={{ uri: question.options[question.correctOptionIndex]}} style={styles.questionImage} contentFit='cover' placeholder={{ blurhash }}/>
                </View>
              }
            </View>
          )}
          
          {question.explanation && (
            <Text style={styles.explanationText}>
              Wyjaśnienie: {question.explanation}
            </Text>
          )}
        </View>)
      }
    )}
    
      <TouchableOpacity style={[styles.repeatButton, { backgroundColor: currentTheme.buttonBgColor}]} onPress={resetQuiz}>
        <Text style={[styles.repeatButtonText, { color: currentTheme.buttonTextColor }]}>Powtórz quiz</Text>
      </TouchableOpacity>
  </ScrollView>
);

const renderTimer = () => {

  return (
    <View style={styles.timerContainer}>
      <Text style={[styles.timerText,{color: currentTheme.textColor}]}>Czas: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</Text>
      <TouchableOpacity style={[styles.timerPauseButton, { backgroundColor: currentTheme.buttonBgColor}]} onPress={() => setIsTimerPaused(!isTimerPaused)}> 
        <Text style={[styles.timerTextButton, { color: currentTheme.buttonTextColor }]}>{isTimerPaused ? 'Wznów' : 'Pauza'}</Text>
      </TouchableOpacity> 
    </View>
  )
}

// Główny render komponentu
return (
  <>
      { screen === 'welcome' ? ( 
            <WelcomeScreen 
              title={quizData.title || 'Quiz'} 
              imageUrl={quizData.imageUrl}
              synopsis={quizData.synopsis} 
              audioUrl={quizData.audioUrl}
              onStartPress={() => setScreen('quiz')} 
              theme={theme.welcomeTheme}
              onImagePress={() => handleImagePress(quizData.imageUrl)}
            />
        ) : (
        <>
          <View style={{ flex: 1, padding: 15 }}>
            {renderProgressBar()}
            {!showResult && quizData.timer && renderTimer()}
            {!showResult ? renderQuestion() : quizData.sendMailScore ? <SendMail/> : renderResult()}
          </View>
        </>
        )
      }

    <ImageModal 
      isVisible={isImageModalVisible}
      imageUri={selectedImage}
      onClose={() => setIsImageModalVisible(false)}
    />
  </>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',  
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timerPauseButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  timerTextButton: {
    color: '#3182CE',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },

  selectedOption: {
    backgroundColor: '#e6f7ff',
    borderColor: '#1890ff',
  },

  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  synopsis: {
    marginBottom: 20,
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
    marginBottom: 10,
    borderRadius: 15,
  },
  questionVideo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  optionButton: {
    display: 'flex',
    height: 120,
    width: '47%', // slightly less than 50% to account for gap
    aspectRatio: 1, // makes it square
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  imageOptionContainer: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 0,
  },
  optionImage: {
    width: '100%',
    height: '100%',
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
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
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#3182CE',
    borderRadius: 25,
    minWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: '#E2E8F0',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  resultContainer: {
    flex: 1,
    padding: 20,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 24,
    color: '#3182CE',
    textAlign: 'center',
    marginBottom: 30,
  },
  answersHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 15,
  },
  questionResult: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 12,
    textAlign: 'left'
  },

  correctAnswerText: {
    fontSize: 15,
    color: '#48BB78',
    marginTop: 8,
    marginBottom: 8,
  },

  incorrectAnswerText: {
    fontSize: 15,
    color: '#db2c2c',
    marginTop: 8,
    marginBottom: 8,
  },

  answerText: {
    fontSize: 14,
    color: '#4A5568',
    marginLeft: 16,
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 14,
    color: '#718096',
    fontStyle: 'italic',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },

  repeatButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3182CE',
  },
  repeatButtonText: {
    color: '#3182CE',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  zoomButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  zoomButtonText: {
    fontSize: 16,
  }
});

export default Quiz;