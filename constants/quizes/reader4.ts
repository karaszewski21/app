export const quizZosia1 = {
  id: '9dcceb17-1189-42fxx9-815e-46b5988d1sdbaquizZosia1',
  title: "Zosia i jej wielki strach - część pierwsza",
  synopsis: "Cześć mali odkrywcy i drodzy rodzice! Zapraszamy do wyjątkowej zabawy z Zosią! Czy pamiętacie, co się wydarzyło tego niezwykłego poranka? Kto pocieszył Zosię? I jak zakończyła się ta historia? Wspólnie rozwiążcie quiz i przeżyjcie jeszcze raz tę piękną przygodę!",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/start_1.mp3',
  totalQuestions: 5,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
  sendMailScore: false,
  options: {
    textColor: '#fff',
    backgroundColor: '#6b5a6c',
  },
  theme: {
    welcomeTheme: {
        // Tekst
        textColor: '#000',

        //Tło
        backgroundScreen: '#91654d',

        // Przycisk
        buttonBgColor: '#6b5a6c',
        buttonTextColor: '#000',
        buttonBorderColor: '#6b5a6c',
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
      text: "Jak nazywa się ulubiona lalka Zosi?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/quiz_1_1.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_1.webp", // fota lucynki
      type: "text",
      answerType: "single",
      options: [
        "Lucynka",
        "Małgosia",
        "Zuzia",
        "Kasia"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🌟 Lucynka to ulubiona lalka Zosi!",
      incorrectFeedback: "Spróbujmy jeszcze raz!",
      explanation: "Zosia ma lalkę o imieniu Lucynka, którą bardzo kocha i się nią opiekuje",
      points: 1
    },
    {
      id: 2,
      text: "Co obudziło Zosię rano?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/quiz_1_2.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_2.webp", // okno zkaretką
      type: "text",
      answerType: "single",
      options: [
        "Śpiew ptaków",
        "Dźwięk syreny",
        "Płacz kota",
        "Deszcz"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🚑 To właśnie dźwięk syreny karetki obudził Zosię!",
      incorrectFeedback: "Posłuchaj jeszcze raz! Co zrobiło taki głośny dźwięk rano? 🚨",
      explanation: "Rano Zosię obudził dźwięk syreny karetki, która przyjechała po jej mamę",
      points: 1
    },
    {
      id: 3,
      text: "Dlaczego mama Zosi pojechała do szpitala?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/quiz_1_3.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_3.webp", // fota mamy z brzuchem
      type: "text",
      answerType: "single",
      options: [
        "Bo miał urodzić się dzidziuś",
        "Bo była chora",
        "Bo pojechała odwiedzić babcię",
        "Bo była zmęczona"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 👶 Mama pojechała do szpitala, bo miał urodzić się braciszek!",
      incorrectFeedback: "Pomyśl, kogo Zosia miała zobaczyć w szpitalu? 🤱",
      explanation: "W nocy dzidziuś chciał przyjść na świat, więc mama musiała pojechać do szpitala",
      points: 1
    },
    {
      id: 4,
      text: "Co babcia zaproponowała Zosi?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/quiz_1_4.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_4.webp", // fota babci
      type: "text",
      answerType: "single",
      options: [
        "Śniadanie i malowanie",
        "Spanie i zabawę",
        "Czytanie książki",
        "Oglądanie telewizji"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🎨 Babcia zaproponowała śniadanie i namalowanie obrazka!",
      incorrectFeedback: "Pomyśl, co babcia chciała zrobić z Zosią, żeby ją pocieszyć? 🖼️",
      explanation: "Babcia zaproponowała Zosi wspólne śniadanie i namalowanie obrazka dla braciszka",
      points: 1
    },
    {
      id: 5,
      text: "Jaki był braciszek Zosi, gdy go zobaczyła?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/quiz_1_5.mp3',
      image: "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/1_5.webp", // fota mamy i dzidzusia
      type: "text",
      answerType: "single",
      options: [
        "Malutki i śpiący",
        "Duży i płaczący",
        "Głośny i wesoly",
        "Biegający i skaczący"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🤱 Braciszek był malutki i spokojnie spał!",
      incorrectFeedback: "Przypomnij sobie, jak wyglądał braciszek w szpitalu? 👶",
      explanation: "Braciszek Zosi miał zamknięte oczka, spał spokojnie i był tylko troszeczkę większy niż lalki Zosi",
      points: 1
    }
  ]
};

export const quizZosia2 = {
  id: '9dcceb17-1189-42fxx9-815e-46b5988d1sdbaquizZosia2',
  title: "Zosia i jej wielki strach - część druga",
  synopsis: "Cześć mali odkrywcy i drodzy rodzice! Zapraszamy do wyjątkowej zabawy z Zosią! Czy pamiętacie, co się wydarzyło tego niezwykłego poranka? Kto pocieszył Zosię? I jak zakończyła się ta historia? Wspólnie rozwiążcie quiz i przeżyjcie jeszcze raz tę piękną przygodę!",
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/start_1.mp3',
  totalQuestions: 5,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
  sendMailScore: false,
  options: {
    textColor: '#fff',
    backgroundColor: '#6b5a6c',
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
      text: "Co Zosia narysowała na obrazku dla braciszka?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/2_1.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Dzidziusia w wózeczku z uśmiechniętą mamusią",
        "Dom z ogrodem",
        "Kolorową tęczę",
        "Pieska i kotka"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🎨 Zosia narysowała piękny rodzinny obrazek!",
      incorrectFeedback: "Przeczytaj jeszcze raz! Co Zosia narysowała, gdy się uspokoiła? 🖼️",
      explanation: "Gdy Zosia poczuła się lepiej, narysowała dzidziusia w wózeczku z uśmiechniętą mamusią - dokładnie tak, jak później zobaczyła w szpitalu",
      points: 1
    },
    {
      id: 2,
      text: "Co zrobiła Zosia, gdy zobaczyła braciszka w szpitalu?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/2_2.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Przytuliła mamę z radości",
        "Zaczęła płakać",
        "Pobiegła do taty",
        "Zasnęła"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🤗 Zosia była tak szczęśliwa, że przytuliła mamę!",
      incorrectFeedback: "Przypomnij sobie, jak Zosia pokazała swoją radość w szpitalu? ❤️",
      explanation: "Gdy Zosia zobaczyła braciszka, była tak szczęśliwa, że z radości przytuliła mamusię. Wtedy już w ogóle przestała się bać",
      points: 1
    },
    {
      id: 3,
      text: "Jakie włosy ma Zosia?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/2_3.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Kręcone w warkoczach",
        "Proste i krótkie",
        "Długie i rozpuszczone",
        "Związane w kucyk"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Brawo! 🎀 Zosia ma śliczne kręcone włosy, które mama zaplata w warkocze!",
      incorrectFeedback: "Spójrz jeszcze raz! Jaką fryzurę mama robi Zosi z jej kręconych włosów? 💇‍♀️",
      explanation: "Zosia ma kręcone włosy, które jej mama często zaplata w warkocze",
      points: 1
    },
    {
      id: 4,
      text: "Jak babcia pomogła Zosi poczuć się lepiej?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/2_4.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Przytuliła ją i wytłumaczyła co się dzieje",
        "Dała jej cukierka",
        "Włączyła telewizor",
        "Poszła z nią na spacer"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Dokładnie tak! 🤗 Babcia przytuliła Zosię i wszystko jej wytłumaczyła!",
      incorrectFeedback: "Pomyśl jeszcze raz! Co zrobiła babcia, gdy zobaczyła przestraszoną Zosię? 💝",
      explanation: "Kiedy babcia zobaczyła przestraszoną Zosię, przytuliła ją mocno i spokojnie wytłumaczyła, że mama pojechała do szpitala, bo dzidziuś chciał przyjść na świat",
      points: 1
    },
    {
      id: 5,
      text: "Jak Zosia i tata dostali się do szpitala?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/2_5.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Pojechali autobusem",
        "Poszli piechotą",
        "Pojechali karetką",
        "Pojechali samochodem"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Świetnie! 🚌 Zosia z tatą pojechali do szpitala autobusem!",
      incorrectFeedback: "Przypomnij sobie! Czym Zosia z tatą pojechali odwiedzić mamę? 🚍",
      explanation: "Tata z Zosią pojechali do szpitala autobusem, bo ich samochód był u mechanika",
      points: 1
    }
  ]
};

export const quizZosia3 = {
  id: '9dcceb17-1189-42fxx9-815e-46b5988d1sdbaquizZosia3',
  title: "🎭 Przygoda z Emocjami! 🎭",
  synopsis: `
      Drodzy Rodzice!
      Wykorzystajcie historię małej Zosi, by pomóc dziecku zrozumieć i oswoić świat emocji! Ten wyjątkowy quiz to nie tylko pytania i odpowiedzi - to pretekst do przytulania, rozmów o uczuciach i wspólnej zabawy w bezpiecznej, pełnej miłości atmosferze.
      Gotowi na wspólną przygodę? Start! ❤️
      `,
  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/start_3.mp3',
  totalQuestions: 5,
  checkAutoAnswer: false,
  timer: false,
  duration: 30, // 10 minut
  previousButton: true,
  sendMailScore: false,
  options: {
    textColor: '#fff',
    backgroundColor: '#6b5a6c',
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
      text: "Jak czuła się Zosia, gdy zobaczyła karetkę pod domem? \nCzy była przestraszona? \nCzy była radosna i szczęśliwa? \nCzy była spokojna? \nCzy może zaspana?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/3_1.mp3',
      type: "image",
      answerType: "single",
      options: [
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_1_2.webp", //linki do fotek do zuzi
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_1_1.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_1_3.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_1_4.webp"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Dokładnie tak! 😨 Zosia była przestraszona, nie wiedziała co się dzieje z mamusią",
      incorrectFeedback: "Pomyśl, jak Ty byś się czuł/czuła, widząc karetkę pod domem? 🚑",
      explanation: "Zosia bardzo się przestraszyła widząc karetkę, bo wiedziała, że karetki przewożą chorych i rannych",
      points: 1
    },
    {
      id: 2,
      text: "Jak zachowała się babcia, gdy zobaczyła płaczącą Zosię? \nCzy była smutna? \nCzy była spokojna i troskliwa? \nCzy była radosna i szczęśliwa? \nCzy może zdenerwowana?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/3_2.mp3',
      type: "image",
      answerType: "single",
      options: [
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_2_1.webp",  //linki do fotek do babci
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_2_2.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_2_3.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_2_4.webp"
      ],
      correctOptionIndex: 1,
      correctFeedback: "Wspaniale! 🤗 Babcia była spokojna i troskliwa, dzięki temu pomogła Zosi",
      incorrectFeedback: "Przypomnij sobie, jak zachowywała się babcia? Czy krzyczała czy mówiła spokojnie? 💝",
      explanation: "Babcia zachowała spokój, dzięki czemu mogła pocieszyć Zosię i wszystko jej wytłumaczyć",
      points: 1
    },
    {
      id: 3,
      text: "Jaką minę miał tata, gdy zobaczył płaczącą Zosię? \nPoważną, wcale się nie uśmiechnął 😐? \nSzczęśliwą i radosną 😊? \nRoześmianą 😄? \nZłą i krzyczącą 😠?",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/3_3.mp3',
      type: "image",
      answerType: "single",
      options: [
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_3_1.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_3_4.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_3_3.webp",
        "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/image/3_3_2.webp"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🤗 Babcia była spokojna i troskliwa, dzięki temu pomogła Zosi",
      incorrectFeedback: "Przypomnij sobie, jak zachowywała się babcia? Czy krzyczała czy mówiła spokojnie? 💝",
      explanation: "Babcia zachowała spokój, dzięki czemu mogła pocieszyć Zosię i wszystko jej wytłumaczyć",
      points: 1
    },
    {
      id: 4,
      text: "Jak czuła się Zosia, gdy zobaczyła braciszka? \nPokaż minę:\nSzczęśliwa i zachwycona 🥰\nWystraszona 😨\nPłacząca 😢\nObrażona 😠",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/3_4.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Szczęśliwa i zachwycona",
        "Wystraszona",
        "Płacząca",
        "Obrażona"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Przypomnij sobie, czy Zosia ucieszyła się na widok braciszka? 👶",
      incorrectFeedback: "Przypomnij sobie, jak zachowywała się babcia? Czy krzyczała czy mówiła spokojnie? 💝",
      explanation: "Zosia była bardzo szczęśliwa i zachwycona, gdy zobaczyła braciszka. Delikatnie pogłaskała go po policzku i z radości przytuliła mamusię",
      points: 1
    },
    {
      id: 5,
      text: "Jak zmieniły się uczucia Zosi przez cały dzień? \nPokaż miny:\nOd strachu do wielkiej radości 😨→😍\nOd złości do smutku 😠→😢\nOd radości do strachu 😊→😨\nOd smutku do złości 😢→😠",
      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/quiz/audio/3_5.mp3',
      type: "text",
      answerType: "single",
      options: [
        "Od strachu do wielkiej radości",
        "Od złości do smutku",
        "Od radości do strachu",
        "Od smutku do złości"
      ],
      correctOptionIndex: 0,
      correctFeedback: "Wspaniale! 🌟 Najpierw Zosia bardzo się bała, a potem była przeszczęśliwa widząc braciszka!",
      incorrectFeedback: "Przypomnij sobie, jak Zosia czuła się rano, a jak w szpitalu? Pokazać miny razem! 🎭",
      explanation: "Zosia zaczęła dzień przestraszona, ale dzięki babci poczuła się lepiej, a gdy zobaczyła braciszka była już bardzo szczęśliwa",
      points: 1
    }
  ]
};