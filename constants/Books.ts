import { BookContent, ProductType } from "@/model";

export const books = [
  {
    id: '362d5de4-691d-4cc5-9d0b-52195009d988',
    type: 'book' as ProductType,
    ageGroupId: 5,
    indexType: 'image',
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.webp',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page5.webp',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page4.webp',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page3.webp',
    ],
    title: "Einstein. Niezwykła mysia podróż przez czasoprzestrzeń",
    description: `A co, jeśli słynne teorie Einsteina powstały dopiero po spotkaniu wynalazcy z pewną myszką?
                  Czy nie byłaby to odpowiedź na pytanie, jakim cudem pracownik szwajcarskiego urzędu patentowego wywrócił do góry nogami zasady fizyki oraz nasze wyobrażenie o przestrzeni i czasie?`,
    isLock: false,
    rating: 4.5, 
    reviewCount: 17,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/background2.webp',
        textColor: '#fff',
        tileColor: '#797f50',
        backgroundColor: '#797f50',
        bgColorButton: '#fff'
      },
    } as BookContent,
    resource: [
      {
        type: 'quiz',
        ids: ['a1b2c3d4-5678-9101-Einstein', 'b2c3d4e5-6789-1011-Einstein2', 'b2c3d4e5-6789-1011-quizEinstein3'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/baner_quiz.webp',
      },
      {
        type: 'printouts',
        ids: ['f564c212-e491-40f9-b197-einstein1', 'f564c212-e491-40f9-b197-einstein2'],
        bannerUrl: '',
      },
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f-einstain'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/baner_voice.webp',
      },
      {
        type: 'english',
        ids: ['622sds59199fc9fEinsten1', 'a40bcbb9-871a-43db-ba87-Einstain2'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/baner_eng.webp',
      },
    ]
},
{
  id: '37a179c4-df70-4b14-84b5-e78580b97166',
  type: 'book' as ProductType,
  ageGroupId: 5,
  indexType: 'image',
  indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/index.webp',
  gallery: [ 
    'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/gallery/cover.webp',
    'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/gallery/1.webp',
  ],
  title: "LATO w dolinie tumilu",
  description: `Hurra, nadeszło lato!  Dzieci z Doliny Tumilu wyjeżdżają na wakacje nad morze!
                Ale... Jak tu się powstrzymać od kupowania WSZYSTKIEGO, co by się chciało? Czy to wstyd nie umieć pływać? I dlaczego trzeba smarować się kremem i nosić czapkę, skoro słońce tak pięknie świeci? 
                Ktoś się zgubi na ulicy, ktoś nie założy kółka do pływania, ktoś nauczy się doceniać to, co ma... Dzieci odkryją, co robić, by wakacje były wspaniałe, radosne i BEZPIECZNE`,
  isLock: false,
  rating: 5, 
  reviewCount: 23,
  content: {
    options: {
      backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/background.webp',
      textColor: '#fff',
      tileColor: '#ac295c',
      bgColorButton: '#000'
    },
  } as BookContent,
  resource: [
    {
      type: 'quiz',
      ids: ['b2c3d4e5-6789-1011-Tumilu', 'a1b2c3d4-5678-9101-Tumilu'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/baner_quiz.webp',
    },
    {
      type: 'audiobook',
      ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b-tumilu'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/baner-audio.webp',
    },
    {
      type: 'printouts',
      ids: ['f564c212-e491-40f9-b197-88eb6a45b4de-tumilu'],
      bannerUrl: '',
    },
    {
      type: 'voice_quiz',
      ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f-tumilu', 'a40bcbb9-871a-43db-ba87-622sds59199fc9f-tumilu2'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/baner_voice.webp',
    },
    {
      type: 'english',
      ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9fTumilu', 'a40bcbb9-871a-43db-ba87-622sds59199fgfgffTumilu2', 'a40bcbb9-871a-43db-ba87-imageTumilu', 'a40bcbb9-871a-43db-ba87-imageTumilu2'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/baner_eng.webp',
    },
  ]
},
{
  id: '362d5de4-691d-4cc5-9d0b-52195009deee988',
  type: 'book' as ProductType,
  ageGroupId: 5,
  indexType: 'image',
  indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/index.webp',
  gallery: [ 
    'https://goldfish.fra1.digitaloceanspaces.com/books/sam/cover.webp',
  ],
  title: "Obchodzimy Boże Narodzenie",
  description: "Szukasz prezentu na święta albo mikołajki, który rozwinie zainteresowania dziecka, ale też sprawi mu mnóstwo frajdy? Książka „Obchodzimy Boże Narodzenie” to strzał w dziesiątkę - niezależnie od tego, w co (i czy) wierzymy. Mnóstwo wiedzy o tradycjach świątecznych podanej w lekki sposób i w otoczeniu realistycznych ilustracji.",
  isLock: true,
  rating: 5, 
  reviewCount: 22,
  content: {
    options: {
      backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/background1.webp',
      textColor: '#3f251d',
      tileColor: '#d10c07',
      bgColorButton: '#000'
    },
  } as BookContent,
  resource: [
    {
      type: 'quiz',
      ids: ['a1b2c3d4-5678-9101-Sam', 'b2c3d4e5-6789-1011-Sam2'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_quiz.webp',
    },
    {
      type: 'audiobook',
      ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b-sam', 'bc6de1ad-de39-44d0-97fa-6bac2301e92b-sam2'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_audio.webp',
    },
    {
      type: 'voice_quiz',
      ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f-sam'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_voice.png',
    },
  ]
},
{
  id: '37a179c4-df70-4b14-84b5-e7ddsd8580b97166',
  type: 'book' as ProductType,
  ageGroupId: 5,
  indexType: 'image',
  indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/index.webp',
  gallery: [ 
    'https://goldfish.fra1.digitaloceanspaces.com/books/mis/cover.webp'
  ],
  title: "Miś Expertuś Oszczędza",
  description: `Poznaj Misia Expertusia, który uczy się, że oszczędzanie może być dziecinnie łatwe. Może też być jednocześnie zabawą i nauką, które zaangażują całą rodzinę.`,
  isLock: true,
  rating: 4, 
  reviewCount: 9,
  content: {
    options: {
      backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/background.png',
      textColor: '#fff',
      tileColor: '#cbac35',
      bgColorButton: '#000',
      backgroundColor: '#d7a617'
    },
  } as BookContent,
  resource: [
    {
      type: 'quiz',
      ids: ['b2c3d4e5-6789-1011-mis2', 'a1b2c3d4-5678-9101-Mis'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/baner_quiz.webp',
    },
    {
      type: 'audiobook',
      ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b-mis'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/baner_audio.webp',
    },
    {
      type: 'printouts',
      ids: ['f564c212-e491-40f9-b197-mis1', 'f564c212-e491-40f9-b197-mis2'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_audio.webp',
    },
  ]
},
  {
    id: '362d5de4-691d-4cc5-9d0b-52195009d988wamp',
    type: 'book' as ProductType,
    ageGroupId: 5,
    indexType: 'image',
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/7.png',
    ],
    title: "Wielki atlas małych przyjemności",
    description: "O pięknych, darmowych przyjemnostkach dnia codziennego. Czyli o rzeczach, których czasem nie doceniamy lub o których zapomnieliśmy, że możemy się nimi cieszyć tak po prostu…",
    isLock: true,
    rating: 4, 
    reviewCount: 18,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/bacground.png',
        textColor: '#fff',
        tileColor: '#6f6e45',
        backgroundColor: '#4c788a',
        bgColorButton: '#000'
      },
    } as BookContent,
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42fxx9-815e-46b5988d1sdba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15x337b-43e5-41ccx4e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6d90714e-b4cb-d59f81sd7d0f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_quiz.webp',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_audio.webp',
      },
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f', 'a40bcbb9-871a-43db-ba87-622sdsfdf59199fc9f', 'a40bcbb9-871a-43db-ba87-622fdfsds59199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_audio.webp',
      }
    ]
},
];