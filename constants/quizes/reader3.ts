export const quizNatalia1 = {
  id: '9dcceb17-1189-42fxx9-815e-natalia1',
  title: "Natalka i jej wymarzony smok - część pierwsza",
  synopsis: "Cześć mali odkrywcy! Czy pamiętacie historię Natalki i jej wielkiej miłości do smoków? Sprawdźmy, czy uważnie słuchaliście tej magicznej opowieści! Rozwiążcie quiz i przypomnijcie sobie tę niezwykłą przygodę!",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/start_1.mp3',
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
      text: "O czym śniła Natalka na początku historii?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/1_1.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_1.png", // fota natalki i smoka
      type: "text",
      answerType: "single",
      options: [
        "O lataniu na smoku nad rzeką",
        "O zabawie z pluszowym smokiem",
        "O wizycie w sklepie z zabawkami",
        "O filmie o smokach"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🐉 Natalka rzeczywiście śniła o locie na smoku nad rzeką!",
      incorrectFeedback: "Przypomnij sobie początek historii. Co śniło się Natalce, zanim zadzwonił budzik?",
      explanation: "Natalka we śnie leciała na grzbiecie smoka nad rzeką, a w zęby wpadały jej muszki",
      points: 1
    },
    {
      id: 2,
      text: "Co mama obiecała Natalce w zamian za dobre świadectwo?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/1_2.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Prawdziwego smoka",
        "Wycieczkę do kina",
        "Nową pluszową zabawkę",
        "Wizytę w zoo"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🎓 Mama obiecała Natalce prawdziwego smoka za dobre oceny!",
      incorrectFeedback: "Pomyśl, jaką nagrodę mama obiecała Natalce za dobre wyniki w szkole?",
      explanation: "Mama obiecała Natalce prawdziwego smoka, jeśli jej świadectwo będzie tak dobre jak zawsze",
      points: 1
    },
    {
      id: 3,
      text: "Gdzie rodzice zabrali Natalkę po otrzymaniu świadectwa?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/1_3.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Do cukierni, a potem do sklepu zoologicznego",
        "Do kina na film o smokach",
        "Do sklepu z zabawkami",
        "Do parku rozrywki"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🍰 Najpierw poszli do cukierni, a potem do sklepu zoologicznego!",
      incorrectFeedback: "Przypomnij sobie, gdzie Natalka poszła z rodzicami świętować dobre oceny?",
      explanation: "Po otrzymaniu świadectwa rodzice zabrali Natalkę najpierw do cukierni na tort i ciasteczka",
      points: 1
    },
    {
      id: 4,
      text: "Jakie zwierzątko okazało się być 'smokiem' Natalki?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/1_4.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_4.png", // fota tego potwora
      type: "text",
      answerType: "single",
      options: [
        "Aksolotl",
        "Jaszczurka",
        "Rybka",
        "Salamandra"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Dokładnie tak! 🦎 To był aksolotl - wodny 'smok' z Meksyku!",
      incorrectFeedback: "Spróbuj jeszcze raz! Jak nazywało się zwierzątko podobne do smoka?",
      explanation: "Natalka dostała aksolotla - różowego płaza z Meksyku, który wyglądał jak mały smok",
      points: 1
    },
    {
      id: 5,
      text: "Co Natalka odkryła dzięki tej przygodzie?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/1_5.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Że czasami dzieją się małe cuda",
        "Że smoki nie istnieją",
        "Że nie lubi zwierząt wodnych",
        "Że woli pluszowe zabawki"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! ✨ Natalka odkryła, że czasem dzieją się małe cuda!",
      incorrectFeedback: "Pomyśl, czego Natalka nauczyła się z tej przygody?",
      explanation: "Natalka odkryła, że największe marzenia mogą się spełnić i czasami dzieją się małe cuda",
      points: 1
    }
  ]
};

export const quizNatalia2 = {
  id: '9dcceb17-1189-42fxx9-815e-quizNatalia2',
  title: "Natalka i jej wymarzony smok - część druga",
  synopsis: "Cześć mali odkrywcy! Czy pamiętacie historię Natalki i jej wielkiej miłości do smoków? Sprawdźmy, czy uważnie słuchaliście tej magicznej opowieści! Rozwiążcie quiz i przypomnijcie sobie tę niezwykłą przygodę!",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/start_1.mp3',
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
      text: "Co Natalka miała w swoim pokoju?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/2_1.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Kołdrę w różowe smoki",
        "Pluszowego kota",
        "Obrazek z księżniczką",
        "Kolekcję lalek"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🛏️ Natalka rzeczywiście miała kołdrę w różowe smoki!",
      incorrectFeedback: "Przypomnij sobie, jak wyglądał pokój Natalki zaraz po przebudzeniu?",
      explanation: "Natalka miała w swoim pokoju kołdrę w różowe smoki, a także wiele innych smoczych przedmiotów",
      points: 1
    },
    {
      id: 2,
      text: "Kto pierwszy przywitał rodzinę w sklepie zoologicznym?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/2_2.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Papuga mówiąca - Dzień dobrrrry",
        "Sprzedawca",
        "Szczekający pies",
        "Mały chomik"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Doskonale! 🦜 To papuga pierwsza powiedziała 'Dzień dobrrrry'!",
      incorrectFeedback: "Przypomnij sobie, kto jako pierwszy przywitał ich w sklepie?",
      explanation: "Gdy weszli do sklepu zoologicznego, jako pierwsza przywitała ich papuga swoim skrzekiem",
      points: 1
    },
    {
      id: 3,
      text: "Jak wyglądał 'smok' Natalki?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/2_3.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_4.png", // fota tego potwora
      type: "text",
      answerType: "single",
      options: [
        "Był różowawy z delikatnymi kolcami", 
        "Był zielony i łuskowaty",
        "Miał długi ogon",
        "Był niebieski i błyszczący"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🦎 Aksolotl był różowawy i miał delikatne kolce!",
      incorrectFeedback: "Spróbuj przypomnieć sobie, jak wyglądał aksolotl w akwarium?",
      explanation: "Aksolotl Natalki był różowawy i miał delikatne smocze kolce wokół twarzyczki",
      points: 1
    },
    {
      id: 4,
      text: "Co miała Natalka na swoim tornistrze?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/2_4.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Dwa smoki ziejące ogniem",
        "Kolorowe motyle",
        "Jednorożce i gwiazdy",
        "Samochody wyścigowe"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🎒 Na tornistrze Natalki były smoki ziejące ogniem!",
      incorrectFeedback: "Przypomnij sobie, co było narysowane na tornistrze Natalki?",
      explanation: "Natalka miała tornister, na którym były narysowane dwa smoki ziejące ogniem",
      points: 1
    },
    {
      id: 5,
      text: "Co Natalka dostała razem ze swoim nowym 'smokiem'?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/2_5.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Karmę dla płazów i książkę o aksolotlach",
        "Zabawki do akwarium",
        "Specjalny smycz",
        "Zestaw do pielęgnacji"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 📚 Natalka dostała karmę i książkę o opiece nad aksolotlem!",
      incorrectFeedback: "Przypomnij sobie, co rodzice kupili wraz z aksolotlem?",
      explanation: "Wraz z aksolotlem Natalka dostała karmę dla płazów i książkę o tym, jak dbać o aksolotla",
      points: 1
    }
  ]
};

export const quizNatalia3 = {
  id: '9dcceb17-1189-42fxx9-815e-quizNatalia3',
  title: "W Poszukiwaniu Smoka - Quiz o Przygodach Natalki 🐉",
  synopsis: `
        Ten quiz sprawdza znajomość uroczej historii o dziewczynce, która marzyła o prawdziwym smoku. Pytania dotyczą jej smoczej kolekcji, wizyty w sklepie zoologicznym oraz niezwykłego prezentu - aksolotla. Idealne dla dzieci i ich rodziców.
      `,
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/3.mp3',
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
      text:  "Wymień 3 miejsca w pokoju Natalki, gdzie można było znaleźć smoki?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/3_1.mp3',
      type: "text",
      answerType: "multiple",
      options: [
        "Na półce",
        "Na łóżku",
        "Na poduszce",
        "W szafie"
      ],
      correctOptionIndex: [0,1,2],
      correctFeedback: "Świetnie! W pokoju Natalki smoki były na półce (figurki), na łóżku (kołdra w smoki) i na poduszce (pluszowa ze smokiem)",
      incorrectFeedback: "Spróbuj jeszcze raz! Przypomnij sobie opis pokoju Natalki z początku opowiadania",
      explanation: "Natalka miała smocze figurki na półce, kołdrę w smoki na łóżku i pluszową poduszkę ze smokiem",
      points: 3
    },
    {
      id: 2,
      text:  "Ciekawę czy wiesz? Jakie cechy aksolotla sprawiają, że przypomina małego smoka?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/3_2.mp3',
      type: "text",
      answerType: "multiple",
      options: [
        "Smocze kolce wokół głowy",
        "Długi ogon",
        "Różowy kolor",
        "Skrzydła"
      ],
      correctOptionIndex: [0,1,2],
      correctFeedback: "Dokładnie! Aksolotl przypomina smoka przez kolce wokół głowy, długi ogon i różowy kolor",
      incorrectFeedback: "Nie do końca - przeczytaj jeszcze raz opis aksolotla w historii",
      explanation: "W opowiadaniu aksolotl został opisany jako różowe stworzenie z delikatnymi smoczymi kolcami wokół głowy i długim ogonem",
      points: 3
    },
    {
      id: 3,
      text: "Jakie zwierzęta Natalka minęła w sklepie zoologicznym zanim dotarła do akwariów?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/3_3.mp3',
      type: "text",
      answerType: "multiple",
      options: [
        "Papugę",
        "Zajączki",
        "Chomiki", 
        "Kotki"
      ],
      correctOptionIndex: [0,1,2],
      correctFeedback: "Brawo! Natalka minęła papugę, która się przywitała, klatki z zajączkami i chomikami",
      incorrectFeedback:"Przeczytaj jeszcze raz fragment o wizycie w sklepie zoologicznym",
      explanation: "W sklepie zoologicznym Natalkę najpierw przywitała papuga, potem minęła klatki z zajączkami i chomikami, zanim dotarła do akwariów",
      points: 3
    },
    {
      id: 4,
      text: "A teraz zagadka: Co dostała Natalka oprócz aksolotla?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/3_4.mp3',
      type: "text",
      answerType: "multiple",
      options: [
        "Karmę dla płazów",
        "Książkę o opiece",
        "Akwarium",
        "Zabawki dla zwierząt"
      ],
      correctOptionIndex: [0,1],
      correctFeedback: "Świetnie! Natalka dostała karmę dla płazów i książkę o tym, jak dbać o aksolotla",
      incorrectFeedback: "Sprawdź końcówkę opowiadania - tam jest informacja o dodatkowych rzeczach w torebce",
      explanation: "W torebeczce Natalka miała karmę dla płazów i książkę o tym, jak dbać o aksolotla - to były niezbędne rzeczy do opieki nad jej nowym pupilem",
      points: 2
    },
    {
      id: 5,
      text: "Teraz trochę o emacjach. W jakich momentach historii Natalka czuła różne emocje?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/quiz/audio/3_5.mp3',
      type: "text",
      answerType: "multiple",
      options: [
        "Radość podczas snu o latającym smoku",
        "Strach przed wejściem do sklepu zoologicznego", 
        "Rozczarowanie gdy szli w stronę sklepu zoologicznego",
        "Złość na rodziców za wizytę w cukierni"
      ],
      correctOptionIndex: [0,1,2],
      correctFeedback: "Dokładnie! Natalka doświadczyła różnych emocji: radości podczas snu, strachu przed sklepem zoologicznym i rozczarowania, gdy nie poszli do sklepu z zabawkami",
      incorrectFeedback: "Przeczytaj historię jeszcze raz, zwracając uwagę na emocje Natalki w różnych momentach",
      explanation: "Historia pokazuje zmienne emocje Natalki: od radości (sen o smoku), przez strach i rozczarowanie (wizyta w sklepie zoologicznym), aż po końcowe szczęście z otrzymania aksolotla",
      points: 3
    }
  ]
};