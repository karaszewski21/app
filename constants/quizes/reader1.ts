export const quiz = {
    id: '9dcceb17-1189-42f9-815e-46b5988d1ba111',
    title: "Leśne Przygody ze Starym Dębem",
    synopsis: "Cześć, mali odkrywcy! 🌳 Zapraszamy was do magicznego świata starego dębu i jego przyjaciół. Poznajcie wszystkich mieszkańców tego wyjątkowego drzewa i sprawdźcie, czy pamiętacie, kto gdzie mieszka i co robi w lesie! Za każdą dobrą odpowiedź czeka na was gwiazdka! ⭐",
    audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/quiz_1_1.mp3',
    totalQuestions: 6,
    checkAutoAnswer: false,
    timer: false,
    duration: 30, // 10 minut
    previousButton: true,
    sendMailScore: false,
    options: {
      textColor: 'red',
      backgroundColor: '#c3d5e1',
    },
    theme: {
      welcomeTheme: {
          // Tekst
          textColor: '#000',

          //Tło
          backgroundScreen: 'red',

          // Przycisk
          buttonBgColor: '#007bff',
          buttonTextColor: '#FFFFFF',
          buttonBorderColor: '#0056b3',
      },
      quizTheme: {
            // Tekst
          textColor: '#fff',
            // Przyciski poprzednie i następny i powtórz quiz
          buttonBgColor: '#007bff',
          buttonTextColor: '#FFFFFF',
          buttonBorderColor: '#0056b3',
          // Opcje odpowiedzi
          optionBgColor: 'red',
          optionTextColor: 'pink',
          optionBorderColor: 'black',
          optionSelectedBgColor: 'black',
          // Prawidłowe/nieprawidłowe odpowiedzi
          correctColor: '#4CAF50',
          incorrectColor: '#f44336',
          // Progress bar
          progressBarBgColor: "#9de1f6",
          // Tekst wyniku
          scoreTextColor: '#FFFFFF',
          // Timer
          timerTextColor: '#FFFFFF',
      }
    },
    questions: [
      {
        id: 1,
        text: "Kto mieszka w koronie dębu?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/quiz_1_1.mp3',
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
        points: 10
      },
      {
        id: 2,
        text: "Gdzie śpią małe wiewiórki?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/quiz_1_2.mp3',
        type: "image",
        image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/squirrels.png",
        answerType: "single",
        options: [
          "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/turtle.png",
          "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/turtle.png",
          "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/turtle.png",
          "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/turtle.png",
        ],
        correctOptionIndex: 1,
        correctFeedback: "Świetnie! Wiewiórki rzeczywiście śpią w dziupli! 🎉",
        incorrectFeedback: "Spróbuj jeszcze raz! Pomyśl o bezpiecznym miejscu w drzewie 🐿️",
        explanation: "Wiewiórki układają się do snu w małej dziupli, gdzie jest im ciepło i bezpiecznie.",
        points: 10
      },
      {
        id: 3,
        text: "Kto śpi przy pniu dębu?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/quiz_1_2.mp3',
        type: "text",
        image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/squirrels.png",
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
        points: 10
      },
      {
        id: 4,
        text: "Co robią wiewiórki w ciągu dnia?",
        type: "text",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/quiz_1_2.mp3',
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
        points: 10
      },
      {
        id: 5,
        text: "Kto gra kołysankę na dobranoc?",
        audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/quiz_1_2.mp3',
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
        points: 10
      }
    ]
  };
  
  export const quiz2 = {
    id: 'fb15337b-43e5-414e-b4cb-d59f81370f1edd',
    title: "Leśne Zgadywanki z Mamą i Tatą",
    synopsis: "Kochani rodzice! 🌳 Oto quiz, który możecie rozwiązać razem z waszym maluchem. Przeczytajcie pytania na głos, zachęćcie dziecko do zabawy w odgłosy zwierząt i wspólnie poszukajcie odpowiedzi. Każde zadanie to okazja do rozmowy i przytulania! 🤗",
    progressBarColor: "#9de1f6",
    totalQuestions: 6,
    checkAutoAnswer: false,
    timer: true,
    duration: 30, // 10 minut
    previousButton: true,
    options: {
      backgroundColor: '#c3d5e1',
    },
    theme: {
      welcomeTheme: {
          textColor: 'red', 
          buttonBgColor: 'green', 
          buttonTextColor: 'blue'
      },
      quizTheme: {
            // Tekst
          textColor: '#fff',
            // Przyciski poprzednie i następny i powtórz quiz
          buttonBgColor: '#007bff',
          buttonTextColor: '#FFFFFF',
          buttonBorderColor: '#0056b3',
          // Opcje odpowiedzi
          optionBgColor: 'red',
          optionTextColor: 'pink',
          optionBorderColor: 'black',
          optionSelectedBgColor: 'black',
          // Prawidłowe/nieprawidłowe odpowiedzi
          correctColor: '#4CAF50',
          incorrectColor: '#f44336',
          // Progress bar
          progressBarBgColor: "#9de1f6",
          // Tekst wyniku
          scoreTextColor: '#FFFFFF',
          // Timer
          timerTextColor: '#FFFFFF',
      }
    },
    questions: [
      {
        id: 1,
        text: "Pokaż razem z mamą/tatą, jak szumią liście starego dębu na wietrze. A teraz odpowiedz - kiedy dąb najbardziej szumi?",
        type: "text",
        image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/cover.png",
        answerType: "single",
        options: [
          "Gdy wieje wietrzyk",
          "Gdy świeci słońce",
          "Gdy pada deszcz",
          "Gdy jest noc"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Wspaniale! Szumieliście jak prawdziwe drzewo! 🌳",
        incorrectFeedback: "Poszumcie jeszcze raz jak drzewo i posłuchajcie kiedy to się dzieje! 🍃",
        explanation: "Liście dębu szumią najgłośniej, gdy wieje wiatr. Możemy wtedy usłyszeć ich piękną melodię.",
        points: 10
      },
      {
        id: 2,
        text: "Zróbcie razem gniazdko dla turkawek z poduszek i koców. Potem powiedz - co turkawki robią w swoim gniazdku?",
        type: "text",
        answerType: "single",
        options: [
          "Gotują obiad",
          "Składają jajka i śpią",
          "Grają w piłkę",
          "Czytają książki"
        ],
        correctOptionIndex: 1,
        correctFeedback: "Brawo! Wasze gniazdko jest idealne dla turkawek! 🐦",
        incorrectFeedback: "Spójrzcie na wasze przytulne gniazdko i pomyślcie, co ptaszki w nim robią 🥚",
        explanation: "Turkawki w gniazdku składają jajka i odpoczywają, żeby nabrać sił na nowy dzień.",
        points: 10
      },
      {
        id: 3,
        text: "Pobawcie się w małe niedźwiadki - pochodzcie na czworaka i pomryczcie. A teraz powiedzcie - co jedzą misie przy starym dębie?",
        type: "text",
        answerType: "single",
        options: [
          "Świeże owoce lasu",
          "Kanapki z miodem",
          "Pizzę",
          "Lody"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Świetnie! Jesteście wspaniałymi niedźwiadkami! 🐻",
        incorrectFeedback: "Pomryczcie jeszcze troszkę i pomyślcie, co można znaleźć w lesie do jedzenia! 🍓",
        explanation: "Małe niedźwiadki jedzą świeże owoce, które znajdują w lesie przy starym dębie.",
        points: 10
      },
      {
        id: 4,
        text: "Zamknijcie oczy i posłuchajcie - rodzic naśladuje odgłos deszczu (może stukać palcami o stół). Co robi deszcz w lesie?",
        type: "text",
        answerType: "single",
        options: [
          "Pomaga zwierzątkom zasnąć",
          "Tańczy z niedźwiedziami",
          "Gra w piłkę",
          "Śpiewa piosenki"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Dokładnie tak! Deszcz to najlepsza kołysanka! 🌧️",
        incorrectFeedback: "Posłuchajcie jeszcze raz tego kojącego dźwięku deszczu 💫",
        explanation: "Deszcz pomaga wszystkim mieszkańcom lasu spokojnie zasnąć, by rano wstali wypoczęci.",
        points: 10
      },
      {
        id: 5,
        text: "Przytulcie się mocno jak małe wiewiórki w dziupli. A teraz powiedzcie - o czym śnią wiewiórki?",
        type: "text",
        answerType: "single",
        options: [
          "O skakaniu po gałęziach",
          "O lataniu samolotem",
          "O pływaniu w morzu",
          "O jeździe na rowerze"
        ],
        correctOptionIndex: 0,
        correctFeedback: "Wspaniale! Przytulanie i marzenia to coś pięknego! 🤗",
        incorrectFeedback: "Przytulcie się jeszcze mocniej i pomyślcie, co wiewiórki najbardziej lubią robić! 🐿️",
        explanation: "Wiewiórki śnią o swoich radosnych zabawach na gałęziach drzew, gdzie mogą skakać i bawić się razem.",
        points: 10
      }
    ]
  };