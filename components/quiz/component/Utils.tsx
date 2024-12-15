  /**
   * Sprawdzenie, czy wybrana odpowiedź jest poprawna
   * @param {Array} options - Wybrane opcje
   * @returns {boolean} - Czy odpowiedź jest poprawna
   */
  
export const isAnswerCorrect = (quizData: any, options: any,questionIndex: any) => {
    const currentQuestion = quizData.questions[questionIndex];

    console.log('--->currentQuestion', currentQuestion, options)

    if (currentQuestion.answerType === 'multiple') {
      return JSON.stringify(options.sort()) === JSON.stringify(currentQuestion.correctOptionIndex.sort());
    } else {
      return options[0] === currentQuestion.correctOptionIndex;
    }
};
