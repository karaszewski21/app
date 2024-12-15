import {  ProductType } from "@/model";
import { Version, OptionsPlayer } from "@/model/audio_player";

export const players = [
  {
    id: '5fa869da-166d-45cc-da57d-36dda0a181b56',
    type: 'audio_play' as ProductType,
    ageGroupId: 3,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index.png',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/gallery/1.png',
    ],
    title: "Słuchowisko 1",
    description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
    rating: 4, 
    reviewCount: 120,
    options: {
      backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/background.png',
      textColor: '#000',
      tileColor: '#7d2d11'
    } as OptionsPlayer,
    versions: [{
      title: 'title 1',
      subTitle: 'subTitle 2',
      type: 'pl',
      audioFile: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/pl.mp4',
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/index.png',
      textColor: '#000',
      backgroundColor: '#7d2d11',
      duration: 4
    },
    {
      title: 'title eng 1',
      subTitle: 'subTitle eng 2',
      type: 'eng',
      audioFile: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/pl.mp4',
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/index.png',
      textColor: '#000',
      backgroundColor: '#7d2d11',
      duration: 4
    }] as Version[],
    resource: [
      {
        type: 'quiz',
        ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/quiz-baner.png',
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
    title: "Słuchowisko 2",
    description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
    rating: 4, 
    reviewCount: 120,
    options: {
      backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/background2.png',
      textColor: '#000',
      tileColor: '#7d2d11'
    } as OptionsPlayer,
    versions: [{
      title: 'title 1',
      subTitle: 'subTitle 2',
      type: 'pl',
      audioFile: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/pl.mp4',
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/index.png',
      textColor: '#000',
      backgroundColor: '#7d2d11',
      duration: 36000,
    },
    {
      title: 'title eng 1',
      subTitle: 'subTitle eng 2',
      type: 'eng',
      audioFile: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/pl.mp4',
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/index.png',
      textColor: '#000',
      backgroundColor: '#7d2d11',
      duration: 36000,
    }] as Version[],
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