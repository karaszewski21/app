export const quizOld = {
    id: '9dcceb17-1189-42f9-815e-quizOld',
    title: "Leśne Przygody ze Starym Dębem - część pierwsza",
    synopsis: "Cześć, mali odkrywcy! 🌳 Zapraszamy was do magicznego świata starego dębu i jego przyjaciół. Poznajcie wszystkich mieszkańców tego wyjątkowego drzewa i sprawdźcie, czy pamiętacie, kto gdzie mieszka i co robi w lesie!",
    audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1.mp3',
    totalQuestions: 6,
    checkAutoAnswer: false,
    timer: false,
    duration: 30, // 10 minut
    previousButton: true,
    sendMailScore: false,
    options: {
      textColor: '#000',
      backgroundColor: '#91654d',
    },
    theme: {
      welcomeTheme: {
          // Tekst
          textColor: '#000',

          //Tło
          backgroundScreen: '#91654d',

          // Przycisk
          buttonBgColor: '#3f3b27',
          buttonTextColor: '#FFFFFF',
          buttonBorderColor: '#3f3b27',
      },
      quizTheme: {
          // Tekst
          textColor: '#fff',
          // Przyciski poprzednie i następny i powtórz quiz
          buttonBgColor: '#2d455a',
          buttonTextColor: '#FFFFFF',
          buttonBorderColor: '#0056b3',
          // Opcje odpowiedzi
          optionBgColor: '#91654d',
          optionTextColor: '#000',
          optionBorderColor: '#91654d',
          optionSelectedBgColor: 'green',
          // Prawidłowe/nieprawidłowe odpowiedzi
          correctColor: '#4CAF50',
          incorrectColor: '#f44336',
          // Progress bar
          progressBarBgColor: "#2d455a",
          // Tekst wyniku
          scoreTextColor: '#FFFFFF',
          // Timer
          timerTextColor: '#3f3b27',
      }
    },
    questions: [
      {
        id: 1,
        text: "Kto mieszka w koronie dębu?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1_1.mp3',
        image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/image/1_1.png",
        type: "text",
        answerType: "single",
        options: [
          "Turkawki",
          "Misie",
          "Wiewiórki",
          "Króliki"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Brawo! To prawda, w koronie dębu mieszkają turkawki! 🎉",
        incorrectFeedback: "Spróbuj jeszcze raz! Pomyśl o ptaszkach, które śpiewają w koronie drzewa 🐦",
        explanation: "W koronie dębu mieszka rodzina turkawek. One pięknie śpiewają i tworzą przyjazną atmosferę w lesie.",
        points: 1
      },
      {
        id: 2,
        text: "Gdzie śpią małe wiewiórki?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1_2.mp3',
        type: "text",
        image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/image/1_2.png",
        answerType: "single",
        options: [
          "W dziupli",
          "Na gałęziach",
          "Pod liśćmi",
          "W norce",
        ],
        correctOptionIndex: 1,
        correctFeedback: "Świetnie! Wiewiórki rzeczywiście śpią w dziupli! 🎉",
        incorrectFeedback: "Spróbuj jeszcze raz! Pomyśl o bezpiecznym miejscu w drzewie 🐿️",
        explanation: "Wiewiórki układają się do snu w małej dziupli, gdzie jest im ciepło i bezpiecznie.",
        points: 1
      },
      {
        id: 3,
        text: "Kto śpi przy pniu dębu?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1_3.mp3',
        type: "text",
        image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/image/1_3.png", 
        answerType: "single",
        options: [
          "Misie",
          "Zające",
          "Jeżyki",
          "Lisy"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Wspaniale! To właśnie misie odpoczywają przy pniu! 🎉",
        incorrectFeedback: "Spróbuj jeszcze raz! Pomyśl o dużych, futrzastych zwierzątkach 🐻",
        explanation: "Przy pniu dębu śpią dwa małe niedźwiadki razem ze swoją mamą w ciepłej i bezpiecznej jamie.",
        points: 1
      },
      {
        id: 4,
        text: "Co robią wiewiórki w ciągu dnia?",
        type: "text",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1_4.mp3',
        answerType: "single",
        options: [
          "Śpią cały dzień",
          "Bawią się i szukają jedzenia",
          "Siedzą tylko na jednej gałęzi",
          "Pływają w jeziorze"
        ],
        correctOptionIndex: 1,
        correctFeedback: "Doskonale! Wiewiórki są bardzo aktywne w ciągu dnia! 🎉",
        incorrectFeedback: "Spróbuj jeszcze raz! Pomyśl co lubią robić wesołe wiewiórki 🐿️",
        explanation: "Wiewiórki przez cały dzień skaczą z drzewa na drzewo, szukają jedzenia i bawią się w berka.",
        points: 1
      },
      {
        id: 5,
        text: "Kto gra kołysankę na dobranoc?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1_5.mp3',
        type: "text",
        answerType: "single",
        options: [
          "Koniki polne",
          "Ptaszki",
          "Misie",
          "Wiewiórki"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Brawo! To koniki polne grają kołysankę! 🎉",
        incorrectFeedback: "Spróbuj jeszcze raz! Pomyśl o małych muzykantach w trawie 🦗",
        explanation: "Koniki polne w oddali grają kołysankę na dobranoc wszystkim mieszkańcom lasu.",
        points: 1
      }
    ]
};
  
export const quizOld2 = {
  id: '9dcceb17-1189-42f9-815e-quizOld2',
  title: "Leśne Przygody ze Starym Dębem - część druga",
  synopsis: "Cześć, mali odkrywcy! 🌳 Zapraszamy was do magicznego świata starego dębu i jego przyjaciół. Poznajcie wszystkich mieszkańców tego wyjątkowego drzewa i sprawdźcie, czy pamiętacie, kto gdzie mieszka i co robi w lesie!",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/1.mp3',
  totalQuestions: 6,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
  sendMailScore: false,
  options: {
    textColor: '#000',
    backgroundColor: '#91654d',
  },
  theme: {
    welcomeTheme: {
        // Tekst
        textColor: '#000',

        //Tło
        backgroundScreen: '#91654d',

        // Przycisk
        buttonBgColor: '#3f3b27',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#3f3b27',
    },
    quizTheme: {
        // Tekst
        textColor: '#fff',
        // Przyciski poprzednie i następny i powtórz quiz
        buttonBgColor: '#2d455a',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#0056b3',
        // Opcje odpowiedzi
        optionBgColor: '#91654d',
        optionTextColor: '#000',
        optionBorderColor: '#91654d',
        optionSelectedBgColor: 'green',
        // Prawidłowe/nieprawidłowe odpowiedzi
        correctColor: '#4CAF50',
        incorrectColor: '#f44336',
        // Progress bar
        progressBarBgColor: "#2d455a",
        // Tekst wyniku
        scoreTextColor: '#FFFFFF',
        // Timer
        timerTextColor: '#3f3b27',
    }
  },
  questions: [
    {
      id: 1,
      text: "Kto obserwował młode niedźwiadki przy pniu dębu?",
      type: "text",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/2_1.mp3',
      image: null,
      answerType: "single",
      options: [
        "Stary dąb",
        "Mama niedźwiedzica",
        "Wiewiórki",
        "Turkawki"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! To stary dąb obserwował niedźwiadki.",
      incorrectFeedback: "Przeczytaj jeszcze raz, kto przyglądał się małym niedźwiadkom.",
      explanation: "Dąb obserwował w milczeniu małe niedźwiadki, które pożywiały się owocami lasu.",
      points: 1
      },
      {
      id: 2,
      text: "O czym śniły turkawki?",
      audioUrl:'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/2_2.mp3',
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "O locie nad morze",
        "O budowie gniazda",
        "O zbieraniu pokarmu",
        "O deszczu"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! Turkawki śniły o locie nad morze ze swoimi małymi.",
      incorrectFeedback: "Przypomnij sobie marzenia turkawek o przyszłości ich piskląt.",
      explanation: "Turkawki śniły o tym, jak ich małe wzlecą ponad chmury i polecą tam, gdzie kończy się ziemia, a zaczyna morze.",
      points: 1
      },
      {
      id: 3,
      text: "Co robiły niedźwiadki pod dębem? ",
      audioUrl:'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/2_3.mp3',
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Jadły owoce",
        "Spały",
        "Bawiły się",
        "Piły wodę"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! Niedźwiadki zajadały się świeżymi owocami lasu.",
      incorrectFeedback: "Spójrz jeszcze raz na tekst i sprawdź, co robiły niedźwiadki przy pniu dębu.",
      explanation: "Dąb obserwował małe niedźwiadki, które beztrosko pożywiały się świeżymi owocami lasu.",
      points: 1
      },
      {
      id: 4,
      text: "Co grały koniki polne?",
      audioUrl:'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/2_4.mp3',
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Kołysankę",
        "Marsz",
        "Piosenkę o lesie",
        "Melodię o wiośnie"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! Koniki polne grały kołysankę na dobranoc.",
      incorrectFeedback: "Posłuchaj jeszcze raz, jaką melodię grały koniki polne wieczorem.",
      explanation: "Wiewiórki nasłuchiwały, jak koniki polne w oddali grają im kołysankę na dobranoc.",
      points: 1
      },
      {
      id: 5,
      text: "O czym śniły wiewiórki?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/2_5.mp3',
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "O zabawie na gałęziach",
        "O zbieraniu orzechów",
        "O budowie gniazda",
        "O spotkaniu z przyjaciółmi"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! Wiewiórki śniły o wspólnej zabawie na gałęziach.",
      incorrectFeedback: "Przypomnij sobie sny wiewiórek w ich kolorowej krainie snów.",
      explanation: "Wiewiórki śniły o tym, jak razem bawią się na gałęziach i skaczą z jednej na drugą.",
      points: 1
      }
  ]
};
