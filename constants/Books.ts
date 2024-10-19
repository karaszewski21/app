import { ProductType } from "@/model";

export const books = [
  {
    id: '362d5de4-691d-4cc5-9d0b-52195009d988',
    type: 'book' as ProductType,
    ageGroupId: 5,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/amp/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/amp/page1.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/amp/page2.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/amp/page3.png'
    ],
    title: "Wielki atlas małych przyjemności",
    description: "O pięknych, darmowych przyjemnostkach dnia codziennego. Czyli o rzeczach, których czasem nie doceniamy lub o których zapomnieliśmy, że możemy się nimi cieszyć tak po prostu…",
    isLock: false,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: '37a179c4-df70-4b14-84b5-e78580b97166',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/page1.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/page2.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/page3.png'
    ],
    title: "Einstein. Niezwykła mysia podróż przez czasoprzestrzeń",
    description: `A co, jeśli słynne teorie Einsteina powstały dopiero po spotkaniu wynalazcy z pewną myszką?
                  Czy nie byłaby to odpowiedź na pytanie, jakim cudem pracownik szwajcarskiego urzędu patentowego wywrócił do góry nogami zasady fizyki oraz nasze wyobrażenie o przestrzeni i czasie?`,
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: '7fb7fe03-fcf3-4dc7-a093-ef45d60e985b',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_2.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
    ],
    title: "Tytuł książki 3",
    description: "Opis książki ",
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: 'a3118f6e-a4b6-426f-88b7-f934b63a29b4',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
    ],
    title: "Tytuł książki 5",
    description: "Opis książki ",
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: 'a3118f6e-a4b6-42dd,6f-88b7-f934b63a29b4',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
    ],
    title: "Tytuł książki 5",
    description: "Opis książki ",
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: 'a3118f6e-a4b6-4ds6f-88b7-f934b63a29b4',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
    ],
    title: "Tytuł książki 5",
    description: "Opis książki ",
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: 'a311fd8f6e-a4b6-4ds6f-88b7-f934b63a29b4',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
    ],
    title: "Tytuł książki 5",
    description: "Opis książki ",
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  },
  {
    id: 'a3118fdf6e-a4b6-4ds6f-88b7-f934b63a29b4',
    type: 'book' as ProductType,
    ageGroupId: 0,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
    ],
    title: "Tytuł książki 5",
    description: "Opis książki ",
    isLock: true,
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
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-62259199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
      },
    ]
  }

  // {
  //   id: 'd8e2f118-7621-4ac9-8720-92d67560b515',
  //   type: 'book' as ProductType,
  //   ageGroupId: 1,
  //   indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
  //   gallery: [ 
  //     'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
  //   ],
  //   title: "Tytuł książki 5",
  //   description: "Opis książki ",
  //   isLock: false,
  //   rating: 3.5, 
  //   reviewCount: 85,
  // },
  // {
  //   id: '1a4f652b-5752-4373-8f8d-7d44ba7f85b9',
  //   type: 'book' as ProductType,
  //   ageGroupId: 2,
  //   indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
  //   gallery: [ 
  //     'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
  //   ],
  //   title: "Tytuł książki 5",
  //   description: "Opis książki ",
  //   isLock: false,
  //   rating: 3.5, 
  //   reviewCount: 85,
  // },
  // {
  //   id: '960a641f-8a7b-4464-b77f-2f0595496758',
  //   type: 'book' as ProductType,
  //   ageGroupId: 1,
  //   indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
  //   gallery: [ 
  //     'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
  //   ],
  //   title: "Tytuł książki 5",
  //   description: "Opis książki ",
  //   isLock: false,
  //   rating: 3.5, 
  //   reviewCount: 85,
  // },
  // {
  //   id: '1dfc2be8-590b-4294-af3c-eb5b151e80bd',
  //   type: 'book' as ProductType,
  //   ageGroupId: 1,
  //   indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
  //   gallery: [ 
  //     'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
  //   ],
  //   title: "Tytuł książki 5",
  //   description: "Opis książki ",
  //   isLock: false,
  //   rating: 3.5, 
  //   reviewCount: 85,
  // },
  // {
  //   id: '58eda3e7-5bcc-4f1d-aa10-338c3059c463',
  //   type: 'book' as ProductType,
  //   ageGroupId: 1,
  //   indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
  //   gallery: [ 
  //     'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
  //   ],
  //   title: "Tytuł książki 5",
  //   description: "Opis książki ",
  //   isLock: false,
  //   rating: 3.5, 
  //   reviewCount: 85,
  // },
  // {
  //   id: '3a79aec4-dff4-482f-8197-8f9d4455ffd8',
  //   type: 'book' as ProductType,
  //   ageGroupId: 1,
  //   indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
  //   gallery: [ 
  //     'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
  //     'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
  //   ],
  //   title: "Tytuł książki 5",
  //   description: "Opis książki ",
  //   isLock: false,
  //   rating: 3.5, 
  //   reviewCount: 85,
  // }
];