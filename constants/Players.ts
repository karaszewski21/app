import { LangType, ProductType, ReaderContent } from "@/model";
import { ReaderPage } from "@/model/reader";

export const players = [
  {
    id: '5fa869da-166d-45cc-da57d-36dda0a181b56',
    type: 'audio_play' as ProductType,
    ageGroupId: 3,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/gallery/1.png',
    ],
    title: "Słuchowisko do zrobienia",
    description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
    rating: 4, 
    reviewCount: 120,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/background.png',
        textColor: '#fff',
        tileColor: '#91654d',
        text: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 5 min',
          textColor: '#fff',
          backgroundColor: '#3f3b27',
        },
        image: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 5 min',
          textColor: '#000',
          backgroundColor: '#8e7f67',
        },
        english: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 10 min',
          textColor: '#000',
          backgroundColor: '#7d2d11',
        }
      },
      text: [
        {
          type: 'cover',
          title: '',
          image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/index.png'
        },
        {
          type: 'content',
          paragraphs: [
              {
                type: 'text',
                text: `W ciemnym gęstym lesie rósł sobie pewien naprawdę stary dąb. Nikt nie wie dokładnie, 
                      jak długo tam był, przeżył jednak wiele pokoleń i pamiętał naprawdę sporo. 
                      Często wspominał wszystko, co działo się wokół niego przez
                      ten bardzo długi czas.`
              },
              {
                type: 'text',
                text: `Jego potężna korona tworzyła bowiem doskonałe
                      schronienie przed deszczem, który padał na jego ogromne liście. Jego
                      gałęzie przypominały szeroko otwarte ramiona, przygarniające z miłością
                      wszystkich małych mieszkańców lasu.`
              },
              {
                type: 'text',
                text: `W bujnej koronie dębu zamieszkała rodzina turkawek. Swym pięknym
                      śpiewem tworzą przyjacielską atmosferę i żyją w prawdziwej harmonii ze
                      starym dębem. Informują przy okazji wszystkich wokół, że stary dąb jest
                      bezpieczną przystanią, w której panuje błogość i spokój. Dla małych
                      turkawek stał się on swego rodzaju oazą, w której mogą bez obaw złożyć jaja
                      w małym gniazdku i przymknąć oczy, by nabrać nowych sił.`
              },
              {
                type: 'text',
                text: `Na pewno będą
                      tam mieć piękne sny o tym, jak pewnego dnia ich małe turkaweczki rozłożą
                      wreszcie skrzydła i polecą w górę ze swoimi rodzicami. Wzlecą ponad
                      chmury i wyruszą w pełną przygód drogę tam, gdzie kończy się ziemia, a
                      zaczyna morze, które delikatnie uderza falami o skalisty brzeg.`
              }
            ]
        },
        {
          type: 'content',
          paragraphs: [
              {
                type: 'text',
                text: `W bujnej koronie dębu zamieszkała rodzina turkawek. Swym pięknym
                      śpiewem tworzą przyjacielską atmosferę i żyją w prawdziwej harmonii ze
                      starym dębem. Informują przy okazji wszystkich wokół, że stary dąb jest
                      bezpieczną przystanią, w której panuje błogość i spokój.`
              },
              {
                type: 'text',
                text: `Dla małych turkawek stał się on swego rodzaju oazą, w której mogą bez obaw złożyć jaja
                      w małym gniazdku i przymknąć oczy, by nabrać nowych sił. Na pewno będą
                      tam mieć piękne sny o tym, jak pewnego dnia ich małe turkaweczki rozłożą
                      wreszcie skrzydła i polecą w górę ze swoimi rodzicami.`
              },
              {
                type: 'text',
                text: `Wzlecą ponad chmury i wyruszą w pełną przygód drogę tam, gdzie kończy się ziemia, a
                      zaczyna morze, które delikatnie uderza falami o skalisty brzeg.`
              },
              {
                type: 'text',
                text: `Na dole, przy pniu dębu, urzędują zaś dwa młode niedźwiedzie, które na
                      chwilę zniknęły mamie z oczu. Dąb obserwuje w milczeniu małe,
                      niegramotne niedźwiadki i przypatruje się, jak beztrosko pożywiają się
                      świeżymi owocami lasu.`
              }
            ]
        },
        {
          type: 'content',
          paragraphs: [
              {
                type: 'text',
                text: `Ich delikatna woń powoli wznosi się pomiędzy liście
                      i nawet stary dąb, gdyby mógł, wciągnąłby głęboko ich zapach. Jego liście
                      cichutko szumią i w końcu nawet ono samo, potężne drzewo, delikatnie
                      przymyka oczy. Wietrzyk smaga czule rozgałęzioną koronę, która przechyla
                      się z boku na bok jak łódka na szerokim morzu, a wraz z nią powoli huśtają
                      się wszyscy mieszkańcy drzewa.`
              },
              {
                type: 'text',
                text: `A gdy wokół już zupełnie się ściemniło, usnęły również małe misie, które od
                      dawna odpoczywały ze swoją mamą w ciepłej i bezpiecznej jamie. Wtedy
                      znów spadł ulewny deszcz. Pomaga on usnąć wszystkim leśnym
                      zwierzątkom, by rano zbudziły się wypoczęte i pełne energii.`
              },
              {
                type: 'text',
                text: `Jeszcze tylko
                      chwila i wszyscy mieszkańcy lasu pójdą spać spokojnym snem. Dąb jest
                      wdzięczny za każdy kolejny dzień, w trakcie którego mógł być schronieniem
                      dla leśnych stworzeń. On sam też jest już zmęczony, cieszy się więc, że może
                      w końcu odpocząć`
              }
            ]
        },
        {
          type: 'end',
          title: 'Dobranoc!',
          subtitle: 'Brawo! Świetnie ci poszło!'
        }
      ] as ReaderPage[],

      image: [
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/3.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/4.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/5.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/6.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/7.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/8.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/9.png',
      ],

      english: {}
    } as ReaderContent,
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/quiz-baner.png',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b', '8161eb39-7ab7-4186-b7fd-0f43b54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/audiobook-baner.png',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
      },
    ]
  },
  {
    id: '5fa869da-166d-45cc-a57d-36ddads0a181b56',
    type: 'audio_play' as ProductType,
    ageGroupId: 3,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/gallery/1.png',
    ],
    title: "Słuchowisko do zrobienia",
    description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
    rating: 4, 
    reviewCount: 120,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/background.png',
        textColor: '#fff',
        tileColor: '#91654d',
        text: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 5 min',
          textColor: '#fff',
          backgroundColor: '#3f3b27',
        },
        image: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 5 min',
          textColor: '#000',
          backgroundColor: '#8e7f67',
        },
        english: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 10 min',
          textColor: '#000',
          backgroundColor: '#7d2d11',
        }
      },
      text: [
        {
          type: 'cover',
          title: '',
          image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/index.png'
        },
        {
          type: 'content',
          paragraphs: [
              {
                type: 'text',
                text: `W ciemnym gęstym lesie rósł sobie pewien naprawdę stary dąb. Nikt nie wie dokładnie, 
                      jak długo tam był, przeżył jednak wiele pokoleń i pamiętał naprawdę sporo. 
                      Często wspominał wszystko, co działo się wokół niego przez
                      ten bardzo długi czas.`
              },
              {
                type: 'text',
                text: `Jego potężna korona tworzyła bowiem doskonałe
                      schronienie przed deszczem, który padał na jego ogromne liście. Jego
                      gałęzie przypominały szeroko otwarte ramiona, przygarniające z miłością
                      wszystkich małych mieszkańców lasu.`
              },
              {
                type: 'text',
                text: `W bujnej koronie dębu zamieszkała rodzina turkawek. Swym pięknym
                      śpiewem tworzą przyjacielską atmosferę i żyją w prawdziwej harmonii ze
                      starym dębem. Informują przy okazji wszystkich wokół, że stary dąb jest
                      bezpieczną przystanią, w której panuje błogość i spokój. Dla małych
                      turkawek stał się on swego rodzaju oazą, w której mogą bez obaw złożyć jaja
                      w małym gniazdku i przymknąć oczy, by nabrać nowych sił.`
              },
              {
                type: 'text',
                text: `Na pewno będą
                      tam mieć piękne sny o tym, jak pewnego dnia ich małe turkaweczki rozłożą
                      wreszcie skrzydła i polecą w górę ze swoimi rodzicami. Wzlecą ponad
                      chmury i wyruszą w pełną przygód drogę tam, gdzie kończy się ziemia, a
                      zaczyna morze, które delikatnie uderza falami o skalisty brzeg.`
              }
            ]
        },
        {
          type: 'content',
          paragraphs: [
              {
                type: 'text',
                text: `W bujnej koronie dębu zamieszkała rodzina turkawek. Swym pięknym
                      śpiewem tworzą przyjacielską atmosferę i żyją w prawdziwej harmonii ze
                      starym dębem. Informują przy okazji wszystkich wokół, że stary dąb jest
                      bezpieczną przystanią, w której panuje błogość i spokój.`
              },
              {
                type: 'text',
                text: `Dla małych turkawek stał się on swego rodzaju oazą, w której mogą bez obaw złożyć jaja
                      w małym gniazdku i przymknąć oczy, by nabrać nowych sił. Na pewno będą
                      tam mieć piękne sny o tym, jak pewnego dnia ich małe turkaweczki rozłożą
                      wreszcie skrzydła i polecą w górę ze swoimi rodzicami.`
              },
              {
                type: 'text',
                text: `Wzlecą ponad chmury i wyruszą w pełną przygód drogę tam, gdzie kończy się ziemia, a
                      zaczyna morze, które delikatnie uderza falami o skalisty brzeg.`
              },
              {
                type: 'text',
                text: `Na dole, przy pniu dębu, urzędują zaś dwa młode niedźwiedzie, które na
                      chwilę zniknęły mamie z oczu. Dąb obserwuje w milczeniu małe,
                      niegramotne niedźwiadki i przypatruje się, jak beztrosko pożywiają się
                      świeżymi owocami lasu.`
              }
            ]
        },
        {
          type: 'content',
          paragraphs: [
              {
                type: 'text',
                text: `Ich delikatna woń powoli wznosi się pomiędzy liście
                      i nawet stary dąb, gdyby mógł, wciągnąłby głęboko ich zapach. Jego liście
                      cichutko szumią i w końcu nawet ono samo, potężne drzewo, delikatnie
                      przymyka oczy. Wietrzyk smaga czule rozgałęzioną koronę, która przechyla
                      się z boku na bok jak łódka na szerokim morzu, a wraz z nią powoli huśtają
                      się wszyscy mieszkańcy drzewa.`
              },
              {
                type: 'text',
                text: `A gdy wokół już zupełnie się ściemniło, usnęły również małe misie, które od
                      dawna odpoczywały ze swoją mamą w ciepłej i bezpiecznej jamie. Wtedy
                      znów spadł ulewny deszcz. Pomaga on usnąć wszystkim leśnym
                      zwierzątkom, by rano zbudziły się wypoczęte i pełne energii.`
              },
              {
                type: 'text',
                text: `Jeszcze tylko
                      chwila i wszyscy mieszkańcy lasu pójdą spać spokojnym snem. Dąb jest
                      wdzięczny za każdy kolejny dzień, w trakcie którego mógł być schronieniem
                      dla leśnych stworzeń. On sam też jest już zmęczony, cieszy się więc, że może
                      w końcu odpocząć`
              }
            ]
        },
        {
          type: 'end',
          title: 'Dobranoc!',
          subtitle: 'Brawo! Świetnie ci poszło!'
        }
      ] as ReaderPage[],

      image: [
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/3.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/4.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/5.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/6.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/7.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/8.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/9.png',
      ],

      english: {}
    } as ReaderContent,
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/quiz-baner.png',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b', '8161eb39-7ab7-4186-b7fd-0f43b54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/audiobook-baner.png',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
      },
    ]
  },
  ];