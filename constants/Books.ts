import { BookContent, ProductType } from "@/model";

export const books = [
  {
    id: '362d5de4-691d-4cc5-9d0b-52195009d988',
    type: 'book' as ProductType,
    ageGroupId: 5,
    indexType: 'image',
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/7.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/1.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/2.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/3.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/4.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/6.png'
    ],
    title: "Wielki atlas małych przyjemności",
    description: "O pięknych, darmowych przyjemnostkach dnia codziennego. Czyli o rzeczach, których czasem nie doceniamy lub o których zapomnieliśmy, że możemy się nimi cieszyć tak po prostu…",
    isLock: false,
    rating: 3.5, 
    reviewCount: 85,
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
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
      },
      {
        type: 'voice_quiz',
        ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f', 'a40bcbb9-871a-43db-ba87-622sdsfdf59199fc9f', 'a40bcbb9-871a-43db-ba87-622fdfsds59199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
      },
    ]
  },
  {
    id: '37a179c4-df70-4b14-84b5-e78580b97166',
    type: 'book' as ProductType,
    ageGroupId: 5,
    indexType: 'image',
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page5.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page1.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page2.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page3.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page4.png'
    ],
    title: "Einstein. Niezwykła mysia podróż przez czasoprzestrzeń",
    description: `A co, jeśli słynne teorie Einsteina powstały dopiero po spotkaniu wynalazcy z pewną myszką?
                  Czy nie byłaby to odpowiedź na pytanie, jakim cudem pracownik szwajcarskiego urzędu patentowego wywrócił do góry nogami zasady fizyki oraz nasze wyobrażenie o przestrzeni i czasie?`,
    isLock: true,
    rating: 3.5, 
    reviewCount: 85,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/background.png',
        textColor: '#fff',
        tileColor: '#6f6e45',
        backgroundColor: '#6f6e45',
        bgColorButton: '#000'
      },
    } as BookContent,
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42fxx9-815e-46b5988d1sdba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15x337b-43e5-41ccx4e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6d90714e-b4cb-d59f81sd7d0f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
      {
        type: 'voice_quiz',
        ids: ['a40bxxcbb9-871a-43db-ba87-622sdsfdf59199fc9f', 'a40bcbbxxx9-871a-43db-ba87-622fdfsds59199fc9f', 'axxx40bcbb9-871a-43db-ba87-622sds59199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
    ]
  },
  {
  id: '362d5de4-691d-4cc5-9d0b-52195009deee988',
  type: 'book' as ProductType,
  ageGroupId: 5,
  indexType: 'image',
  indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
  gallery: [ 
    'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/7.png',
    'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/1.png', 
    'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/2.png', 
    'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/3.png',
    'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/4.png',
    'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/6.png'
  ],
  title: "Wielki atlas małych przyjemności",
  description: "O pięknych, darmowych przyjemnostkach dnia codziennego. Czyli o rzeczach, których czasem nie doceniamy lub o których zapomnieliśmy, że możemy się nimi cieszyć tak po prostu…",
  isLock: false,
  rating: 3.5, 
  reviewCount: 85,
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
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
    },
    {
      type: 'audiobook',
      ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
    },
    {
      type: 'printouts',
      ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
    },
    {
      type: 'voice_quiz',
      ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f', 'a40bcbb9-871a-43db-ba87-622sdsfdf59199fc9f', 'a40bcbb9-871a-43db-ba87-622fdfsds59199fc9f'],
      bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
    },
  ]
  },
  {
    id: '37a179c4-df70-4b14-84b5-e7ddsd8580b97166',
    type: 'book' as ProductType,
    ageGroupId: 5,
    indexType: 'image',
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page5.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page1.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page2.png', 
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page3.png',
      'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/gallery/page4.png'
    ],
    title: "Einstein. Niezwykła mysia podróż przez czasoprzestrzeń",
    description: `A co, jeśli słynne teorie Einsteina powstały dopiero po spotkaniu wynalazcy z pewną myszką?
                  Czy nie byłaby to odpowiedź na pytanie, jakim cudem pracownik szwajcarskiego urzędu patentowego wywrócił do góry nogami zasady fizyki oraz nasze wyobrażenie o przestrzeni i czasie?`,
    isLock: true,
    rating: 3.5, 
    reviewCount: 85,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/background.png',
        textColor: '#fff',
        tileColor: '#6f6e45',
        backgroundColor: '#6f6e45',
        bgColorButton: '#000'
      },
    } as BookContent,
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42fxx9-815e-46b5988d1sdba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15x337b-43e5-41ccx4e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6d90714e-b4cb-d59f81sd7d0f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
      {
        type: 'audiobook',
        ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
      {
        type: 'voice_quiz',
        ids: ['a40bxxcbb9-871a-43db-ba87-622sdsfdf59199fc9f', 'a40bcbbxxx9-871a-43db-ba87-622fdfsds59199fc9f', 'axxx40bcbb9-871a-43db-ba87-622sds59199fc9f'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/index.png',
      },
    ]
  },
];