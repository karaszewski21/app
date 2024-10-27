import { ProductType, ReaderContent } from "@/model";
import { ReaderPage } from "@/model/reader";

export const readers = [
    {
    id: '3333',
    type: 'reader' as ProductType,
    ageGroupId: 3,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index2.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/11.png',
    ],
    title: "Stary dąb",
    description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
    rating: 4, 
    reviewCount: 120,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index.png',
        textColor: '#000',
        tileColor: '#c3d5e1',
        text: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 5 min',
          textColor: '#000',
          backgroundColor: '#c3d5e1',
        },
        image: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 5 min',
          textColor: '#000',
          backgroundColor: '#c3d5e1',
        },
        english: {
          title: 'Zacznij czytać',
          subTitle: 'Czas czytania: 10 min',
          textColor: '#000',
          backgroundColor: '#c3d5e1',
        }
      },
      text: [
        {
          type: 'cover',
          title: 'Stary dąb',
          image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index2.png'
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
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/11.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/21.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/32.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/41.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/52.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/61.png',
        'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/image_reader/71.png'
      ],

      english: {}
    } as ReaderContent,
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/banner.png',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b', '8161eb39-7ab7-4186-b7fd-0f43b54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/banner.png',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
      },
    ]
    },
    {
      id: '5fa869da-166d-45cc-a57d-36dda0a181b3',
      type: 'reader' as ProductType,
      ageGroupId: 1,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: '5edd9000-3681-4ef8-b49b-f9caff040de2',
      type: 'reader' as ProductType,
      ageGroupId: 0, 
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: 'ef675ec5-6a84-4493-91e1-a68881043f93',
      type: 'reader' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: 'c8e30e75-63ec-4b74-965b-447fe64db0ec',
      type: 'reader' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: 'c8e30e75-63ec-4b74-965b-4876fe64db0ec',
      type: 'reader' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: 'c8e30e75-63ec-4b74-965b-4876feh64db0ec',
      type: 'reader' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: 'c8e30e75-63ec-4b74-9h65b-4876fe64db0ec',
      type: 'reader' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: 'c8e30e75-63ec-4b74-965b-487g6fe64db0ec',
      type: 'reader' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł książki 2",
      description: "Opis książki ",
      rating: 3.5, 
      reviewCount: 85,
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'audiobook',
          ids: ['c7d901b9-76c8-40aa-90c6-9658c8facfe0', '8a5eedd6-2a73-46ae-830f-d4940f233c2e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
  ];
