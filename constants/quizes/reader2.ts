export const quizCoo1 = {
  id: '9dcceb17-1189-42fxx9-815e-Coo1',
  title: "Bohaterska Ciuchcia: Przygoda na Torach - część pierwsza",
  synopsis: "Quiz sprawdza zrozumienie głównych wydarzeń opowiadania, od początków Ciuchci w zajezdni, przez jej trudne chwile, aż po triumfalny powrót jako bohatera podczas burzy.",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1.mp3',
  totalQuestions: 5,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
  sendMailScore: false,
  options: {
    textColor: '#000',
    backgroundColor: '#9f9c6b',
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
      text: "Dlaczego Ciuchcia trafiła do zajezdni?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1_1.mp3",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/image/1_1.png", // fotas w zajezdni
      type: "text",
      answerType: "single",
      options: [
        "Była zbyt wolna i przestarzała",
        "Była zepsuta",
        "Skończyło się jej paliwo",
        "Miała wypadek"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🚂 Ciuchcia rzeczywiście trafiła do zajezdni, bo była zbyt wolna jak na współczesne czasy.",
      incorrectFeedback: "Przypomnij sobie początek historii. Co było powodem zastąpienia Ciuchci nowoczesnymi pociągami?",
      explanation: "Ciuchcia była bardzo wolna i nie pasowała do współczesnych czasów, gdzie wszyscy żyją szybciej.",
      points: 1
      },
      {
      id: 2,
      text: "Kto jako jedyny troszczył się o Ciuchcię w zajezdni?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1_2.mp3",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/image/1_2.png", // fota mech
      type: "text",
      answerType: "single",
      options: [
        "Stary mechanik",
        "Młody maszynista",
        "Zawiadowca stacji",
        "Grupa dzieci"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🔧 To właśnie stary mechanik pamiętał piękne chwile spędzone z Ciuchcią!",
      incorrectFeedback: "Pomyśl jeszcze raz, kto odwiedzał Ciuchcię codziennie po pracy?",
      explanation: "Stary mechanik jako dziecko jeździł Ciuchcią i dlatego jako jedyny o nią dbał.",
      points: 1
      },
      {
      id: 3,
      text: "Co spowodowało, że nowoczesne pociągi nie mogły wyjechać z zajezdni?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1_3.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Zerwane przewody elektryczne",
        "Zamknięte bramy zajezdni",
        "Brak maszynistów",
        "Awaria silników"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Dokładnie tak! ⚡ Burza zerwała przewody elektryczne, unieruchamiając nowoczesne pociągi.",
      incorrectFeedback: "Przypomnij sobie, co wydarzyło się podczas burzy i dlaczego szybkie pociągi nie mogły ruszyć.",
      explanation: "Podczas burzy drzewa zerwały przewody elektryczne, bez których nowoczesne pociągi nie mogły działać.",
      points: 1
      },
      {
      id: 4,
      text: "Jaką misję wykonała Ciuchcia podczas burzy?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1_4.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Przywiozła elektryków do naprawy przewodów",
        "Rozwoziła dzieci do szkół",
        "Gasiła pożar w lesie",
        "Dowoziła żywność do miasta"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Znakomicie! 🚉 Ciuchcia przywiozła elektryków, którzy naprawili przewody!",
      incorrectFeedback: "Pomyśl, po co Ciuchcia pojechała na górkę między dolinami?",
      explanation: "Ciuchcia pojechała po elektryków do zakładu na górce, którzy następnie naprawili przewody elektryczne.",
      points: 1
      },
      {
      id: 5,
      text: "Jak zakończyła się historia Ciuchci?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1_5.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Zaczęła wozić rodziny na wycieczki w weekendy",
        "Została zezłomowana",
        "Trafiła do muzeum kolejnictwa",
        "Została przemalowana na nowo"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🎉 Ciuchcia rzeczywiście znalazła nowe zadanie - wożenie rodzin na wycieczki!",
      incorrectFeedback: "Przypomnij sobie ostatni fragment historii. Co postanowili pracownicy kolei?",
      explanation: "Pracownicy kolei zdecydowali, że Ciuchcia będzie woziła rodziny na wycieczki w każdy weekend starą trasą.",
      points: 1
      }
  ]
};

export const quizCoo2 = {
  id: '9dcceb17-1189-42fxx9-815e-Coo2',
  title: "Bohaterska Ciuchcia: Przygoda na Torach - część druga",
  synopsis: "Quiz sprawdza zrozumienie głównych wydarzeń opowiadania, od początków Ciuchci w zajezdni, przez jej trudne chwile, aż po triumfalny powrót jako bohatera podczas burzy.",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/1.mp3',
  totalQuestions: 5,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
  sendMailScore: false,
  options: {
    textColor: '#000',
    backgroundColor: '#9f9c6b',
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
      text: "Co robiła Ciuchcia zanim trafiła do zajezdni?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/2_1.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Woziła ludzi na górskie wycieczki",
        "Dostarczała węgiel do fabryk",
        "Przewoziła towary",
        "Obsługiwała linię miejską"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🏔️ Ciuchcia rzeczywiście woziła rodziny na górskie wycieczki!",
      incorrectFeedback: "Przypomnij sobie początek historii. Jakie były główne zadania Ciuchci?",
      explanation: "Ciuchcia woziła rodziny na górskie wycieczki, pozwalając im podziwiać piękne widoki podczas wolnej jazdy.",
      points: 1
      },
      {
      id: 2,
      text: "Jaki był stosunek nowoczesnych pociągów do Ciuchci?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/2_2.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Wyśmiewały się z niej",
        "Ignorowały ją",
        "Pomagały jej",
        "Zaprzyjaźniły się z nią"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Dokładnie tak! 😢 Nowoczesne pociągi rzeczywiście wyśmiewały się ze starej Ciuchci.",
      incorrectFeedback: "Przypomnij sobie, jak nowoczesne pociągi traktowały Ciuchcię na początku historii.",
      explanation: "Nowoczesne pociągi wyśmiewały się z Ciuchci, nazywając ją niepotrzebną i przestarzałą.",
      points: 1
      },
      {
      id: 3,
      text: "Co stary mechanik robił dla Ciuchci w zajezdni?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/2_3.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Oliwił jej elementy",
        "Przemalował ją",
        "Wymieniał części",
        "Mył ją codziennie"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🔧 Stary mechanik rzeczywiście oliwił rdzewiejące elementy Ciuchci!",
      incorrectFeedback: "Przypomnij sobie, jakie czynności wykonywał stary mechanik, by zadbać o Ciuchcię.",
      explanation: "Stary mechanik oliwił rdzewiejące elementy Ciuchci, by utrzymać ją w dobrym stanie.",
      points: 1
      },
      {
      id: 4,
      text: "Jak Ciuchcia poradziła sobie z przeszkodami na torach podczas burzy?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/2_4.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Spychała je z drogi",
        "Omijała je",
        "Czekała na pomoc",
        "Wzywała służby ratunkowe"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 💪 Ciuchcia rzeczywiście sama spychała przeszkody z torów!",
      incorrectFeedback: "Przypomnij sobie, jak Ciuchcia radziła sobie z połamanymi gałęziami na torach.",
      explanation: "Ciuchcia bez większego wysiłku spychała z drogi połamane gałęzie i zwalone drzewa.",
      points: 1
      },
      {
      id: 5,
      text: "Jak zmieniło się zachowanie nowoczesnych pociągów wobec Ciuchci po burzy?",
      audioUrl: "https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/audio/2_5.mp3",
      image: null,
      type: "text",
      answerType: "single",
      options: [
        "Przeprosiły ją i podziękowały",
        "Nadal ją ignorowały",
        "Zazdrościły jej sławy",
        "Próbowały ją naśladować"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🤝 Nowoczesne pociągi rzeczywiście przeprosiły Ciuchcię i doceniły jej pomoc!",
      incorrectFeedback: "Przypomnij sobie, jak zmieniło się nastawienie nowoczesnych pociągów po tym, jak Ciuchcia im pomogła.",
      explanation: "Nowoczesne pociągi przeprosiły Ciuchcię i podziękowały jej za pomoc, obiecując, że już nigdy nie będą się z niej śmiać.",
      points: 1
      }
  ]
};