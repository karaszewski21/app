export const wamp = {
  id: '9dcceb17-1189-42fxx9-815e-46b5988d1sdba111',
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

export const wamp2 = {
  id: 'fb15337b-43e5-414e-b4cb-d59f81370f1edd',
  title: "Leśne Zgadywanki z Mamą i Tatą",
  synopsis: "Kochani rodzice! 🌳 Oto quiz, który możecie rozwiązać razem z waszym maluchem. Przeczytajcie pytania na głos, zachęćcie dziecko do zabawy w odgłosy zwierząt i wspólnie poszukajcie odpowiedzi. Każde zadanie to okazja do rozmowy i przytulania! 🤗",
  totalQuestions: 6,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
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
        buttonBgColor: '#007bff',
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
        progressBarBgColor: "#9de1f6",
        // Tekst wyniku
        scoreTextColor: '#FFFFFF',
        // Timer
        timerTextColor: '#3f3b27',
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

export const wamp3 = {
  id: 'fb15x337b-43e5-41ccx4e-b4cb-d59f8137d0f1edd',
  title: "Magiczny Quiz o Starym Dębie",
  synopsis: "Zapraszamy do zabawy w leśne zgadywanki. Poznajmy razem wszystkich mieszkańców starego dębu!",
  totalQuestions: 6,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
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
        buttonBgColor: '#007bff',
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
        progressBarBgColor: "#9de1f6",
        // Tekst wyniku
        scoreTextColor: '#FFFFFF',
        // Timer
        timerTextColor: '#3f3b27',
    }
  },
  questions: [
    {
      id: 1,
      text: "Kto lubi śpiewać piosenki na gałęziach dębu?",
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/birds.png",
      answerType: "single",
      options: [
        "Wesołe turkawki",
        "Małe misie",
        "Pracowite wiewiórki",
        "Zielone żabki"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Hurra! 🎵 Turkawki rzeczywiście lubią śpiewać piękne piosenki! Czy potrafisz naśladować ich śpiew?",
      incorrectFeedback: "Posłuchaj uważnie... Kto wydaje dźwięki wysoko na gałęziach? 🎵",
      explanation: "Turkawki mieszkają w koronie dębu i umilają wszystkim czas swoim śpiewem. Może spróbujecie razem zaśpiewać?",
      points: 10
    },
    {
      id: 2,
      text: "Co robią małe niedźwiadki przy drzewie?",
      type: "text",
      answerType: "single",
      options: [
        "Jedzą słodkie owoce",
        "Budują domek",
        "Czytają książkę",
        "Malują obrazek"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Mniam mniam! 🍎 Misie uwielbiają leśne przysmaki! A jakie owoce ty lubisz najbardziej?",
      incorrectFeedback: "Zajrzyj do tekstu jeszcze raz - co misie trzymają w łapkach? 🐻",
      explanation: "Małe niedźwiadki znalazły pyszne leśne owoce i razem je zjadają. Może wspólnie nazwiecie owoce, które można znaleźć w lesie?",
      points: 10
    },
    {
      id: 3,
      text: "Kto gra zwierzątkom kołysankę do snu?",
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/grasshopper.png",
      answerType: "single",
      options: [
        "Koniki polne",
        "Sowy",
        "Wróbelki",
        "Motylki"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Tak! 🦗 Koniki polne grają piękną muzyczę! Czy słyszysz ich cichutką melodię?",
      incorrectFeedback: "Wsłuchaj się w wieczorne dźwięki lasu... Kto gra muzykę w trawie? 🎵",
      explanation: "Koniki polne grają cichutką muzykę, która pomaga wszystkim zasnąć. Spróbujmy razem posłuchać, jak grają koniki polne!",
      points: 10
    },
    {
      id: 4,
      text: "Gdzie mieszkają wiewiórki? Spróbuj pokazać rączkami ich mały domek!",
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/tree_hollow.png",
      answerType: "single",
      options: [
        "W przytulnej dziupli",
        "W gniazdku z patyków",
        "Pod zielonymi liśćmi",
        "W norce pod ziemią"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🐿️ Dziupla to ich mały domek! Pokażmy razem, jak wiewiórka wchodzi do swojej dziupli i zwija się w kłębuszek do snu!",
      incorrectFeedback: "Spójrz na drzewo uważnie... Wiewiórki lubią spać wysoko, w małym, przytulnym domku w drzewie! Może razem go poszukamy? 🏠",
      explanation: "Wiewiórki mają swój przytulny domek w dziupli drzewa. To ich bezpieczne miejsce, gdzie mogą się zwinąć w mały kłębuszek i słodko zasnąć. Spróbujcie razem pokazać, jak wiewiórka: \n1. Wspina się po drzewie (ruch rączkami do góry)\n2. Wchodzi do dziupli (można zrobić kółko z rąk)\n3. Zwija się do snu (przytulić się i zwinąć w kłębuszek)",
      points: 10
    },
    {
      id: 5,
      text: "Co robi stary dąb, gdy wieje wietrzyk? Pobawmy się w drzewo!",
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/oak_wind.png",
      answerType: "single",
      options: [
        "Kołysze się jak łódka",
        "Stoi prosto jak żołnierz",
        "Skacze do góry",
        "Tańczy w kółko"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🌳 Dąb delikatnie się kołysze! Wstańmy i pobujajmy się razem jak gałęzie na wietrze! Szu, szu, szu...",
      incorrectFeedback: "Posłuchaj szumu wiatru... Jak myślisz, co robi drzewo, gdy wieje wiatr? Może wstaniemy i spróbujemy pokazać? 🍃",
      explanation: "Gdy wieje wietrzyk, stary dąb kołysze się delikatnie jak łódka na morzu. Pobawmy się w drzewo!\n1. Stańmy prosto jak pień drzewa (nogi to korzenie)\n2. Podnieśmy ręce wysoko (to nasze gałęzie)\n3. Kołyszmy się powoli na boki (szu, szu, szu)\n4. Poruszajmy paluszkami jak listkami\nA teraz wyobraźmy sobie, że jesteśmy małym drzewkiem, które rośnie: przykucnijmy i powoli wstańmy, rozwijając ręce-gałęzie!",
      points: 10
    }
  ]
};

export const wamp4 = {
  id: 'fb15337b-43e5-6d90714e-b4cb-d59f81sd7d0f1edd',
  title: "Zabawy pod Starym Dębem - quiz z ruchem i dźwiękiem!",
  synopsis: "Hej, hej! Zapraszamy do magicznego lasu! 🌲 Będę Waszym przewodnikiem i będę czytać wszystkie pytania. Słuchajcie uważnie moich wskazówek i dźwięków lasu! Razem z rodzicami będziemy się bawić, ruszać i naśladować leśne zwierzątka. Kliknijcie głośniczek przy każdym pytaniu! 🔊 Gotowi na przygodę? To zaczynamy! 🎈",
  totalQuestions: 6,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
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
        buttonBgColor: '#007bff',
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
      text: "Nadszedł poranek! Jak witają się ptaszki mieszkające w dębie? Spróbuj naśladować ich głosy!",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/morning_birds.mp3',
      // W audio: poranny śpiew ptaków w tle podczas czytania pytania
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/morning_birds.png",
      answerType: "single",
      options: [
        "Gruchają cichutko: gru, gru",
        "Szczekają: hau, hau",
        "Miauczą: miau, miau",
        "Ryczą: wrr, wrr"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🕊️ Posłuchaj, jak gruchają turkawki i spróbuj powtórzyć! [odgłos gruchania]",
      // W audio: autentyczne gruchanie turkawek jako wzór do naśladowania
      incorrectFeedback: "Posłuchaj uważnie... [odgłos gruchania turkawek] Czy słyszysz, jak śpiewają ptaszki?",
      explanation: "Turkawki witają każdy dzień swoim łagodnym gruchaniem. Zabawa: \n1. Najpierw posłuchaj ptasich głosów\n2. Spróbuj powtórzyć\n3. A teraz poleć jak ptaszek!",
      points: 10
    },
    {
      id: 2,
      text: "Pora na śniadanie! Pobawmy się w wiewiórki szukające przysmaków. Co zbierają wiewiórki w lesie?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/squirrel_sounds.mp3',
      // W audio: szelest liści i odgłosy wiewiórek w tle
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/squirrel_food.png",
      answerType: "single",
      options: [
        "Orzeszki i żołędzie",
        "Lody i ciastka",
        "Marchewki i buraki",
        "Zabawki i piłki"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🌰 [dźwięk spadających żołędzi] Słyszysz, jak spadają żołędzie? Czas na poszukiwania!",
      incorrectFeedback: "Posłuchaj... [dźwięk rozgryzania orzeszka] Co to za dźwięk? Co jedzą wiewiórki?",
      explanation: "Wiewiórki zbierają orzeszki i żołędzie na zimę. Kiedy znajdziesz skarb, możesz zastukać jak spadający żołądź: stuk, stuk!",
      points: 10
    },
    {
      id: 3,
      text: "Niedźwiadki chcą się pobawić! Jak chodzą misie? Pokaż i wydaj dźwięk!",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/bear_steps.mp3',
      // W audio: ciężkie kroki niedźwiadka i delikatne mruczenie
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/bear_cubs.png",
      answerType: "single",
      options: [
        "Człapią powoli: tup, tup",
        "Biegną szybko: pędem!",
        "Skaczą wysoko: hop, hop",
        "Pełzają cicho: sss..."
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🐻 [dźwięk kroków misia] Słyszysz, jak miś tupie? Spróbuj tak samo!",
      incorrectFeedback: "Posłuchaj kroków misia... [powolne tupanie] Jak on chodzi?",
      explanation: "Niedźwiadki chodzą powoli i ciężko. Przy każdym kroku słychać: TUP! TUP! TUP!",
      points: 10
    },
    {
      id: 4,
      text: "Nadchodzi wieczór i koniki polne dają koncert! Jak możemy zagrać jak one?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/cricket_sound.mp3',
      // W audio: prawdziwe odgłosy koników polnych jako inspiracja
      type: "text",
      answerType: "single",
      options: [
        "Pocierając dłońmi",
        "Tupiąc nogami",
        "Klaszcząc głośno",
        "Podskakując wysoko"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🦗 [muzyka koników polnych] Teraz ty spróbuj tak zagrać!",
      incorrectFeedback: "Posłuchaj wieczornej muzyki... [dźwięk koników polnych] Jak możemy ją naśladować?",
      explanation: "Koniki polne grają, pocierając skrzydełkami. Najpierw posłuchaj ich muzyki, a potem spróbuj zagrać tak samo!",
      points: 10
    },
    {
      id: 5,
      text: "Pora spać! Wszyscy mieszkańcy dębu idą do swoich domków. Pokażmy, jak zwierzątka zasypiają!",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/audio/night_sounds.mp3',
      // W audio: delikatny szum deszczu, ciche odgłosy nocnego lasu
      type: "image",
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_quiz/sleeping_animals.png",
      answerType: "single",
      options: [
        "Zwijają się w kłębuszek",
        "Stoją na jednej nodze",
        "Skaczą do góry",
        "Biegają w kółko"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 😴 [kojący szum deszczu i ciche odgłosy lasu] Słuchaj kołysanki lasu...",
      incorrectFeedback: "Posłuchaj wieczornych dźwięków... [szum deszczu] Czy to nie dobry czas na sen?",
      explanation: "Wsłuchaj się w szum deszczu i ciche odgłosy lasu. To najlepsza kołysanka dla wszystkich leśnych mieszkańców!",
      points: 10
    }
  ]
};