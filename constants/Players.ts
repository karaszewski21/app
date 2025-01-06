import {  ProductType } from "@/model";
import { Version, OptionsPlayer } from "@/model/audio_player";

export const players = [
  {
    id: '5fa869da-166d-45cc-da57d-36dda0a181b56',
    type: 'audio_play' as ProductType,
    ageGroupId: 3,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/ugly_duck/index.webp',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/players/ugly_duck/cover.webp',
    ],
    title: "Brzydkie Kaczątko",
    description: "To jest pełen tekst baśni „Brzydkie Kaczątko” autorstwa Hansa Christiana Andersena. Opowiada historię młodego ptaka, który różni się wyglądem od swojego rodzeństwa i jest przez to odrzucany przez innych. Przechodzi przez trudne chwile, samotność i nieakceptację, ale w końcu odkrywa swoją prawdziwą naturę, przemieniając się w pięknego łabędzia. To opowieść o akceptacji siebie, przemianie i poszukiwaniu własnego miejsca w świecie",
    rating: 4.7, 
    reviewCount: 11,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/ugly_duck/background.webp',
        textColor: '#000',
        tileColor: '#ad4a4c'
      } as OptionsPlayer,
    },
    versions: [{
      title: 'Brzydkie Kaczątko',
      subTitle: 'czas trwania - 30 minut',
      type: 'pl',
      audioFile: 'ugly_duck',
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/ugly_duck/index.webp',
      textColor: '#000',
      backgroundColor: '#c3cdaf',
      duration: 4
    }] as Version[],
    resource: [
      {
        type: 'quiz',
        ids: ['a1b2c3d4-5678-9101-Ugly', 'b2c3d4e5-6789-1011-quizBrzydkieKaczatko2'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/ugly_duck/baner_quiz.webp',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-48zxz96-duck1'],
      },
    ]
  },
  {
    id: '5fa869da-166d-45cc-a57d-36ddads0a181b56',
    type: 'audio_play' as ProductType,
    ageGroupId: 3,
    indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/cat/index.webp',
    gallery: [ 
      'https://goldfish.fra1.digitaloceanspaces.com/players/cat/cover.webp',
    ],
    title: "Kot w butach",
    description: "Opowieść o młodym chłopcu Janku, który po śmierci ojca otrzymuje w spadku tylko kota. Początkowo uważa to za stratę, ale wkrótce odkrywa, że kot jest wyjątkowy – potrafi mówić i ma niezwykły spryt. Dzięki przebiegłym planom kota, Janek zdobywa przychylność króla, bogactwo i serce królewny. Historia pokazuje, że inteligencja, odwaga i pomysłowość mogą zmienić życie na lepsze, nawet w najtrudniejszych sytuacjach.",
    rating: 3.5, 
    reviewCount: 8,
    content: {
      options: {
        backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/cat/background.webp',
        textColor: '#000',
        tileColor: '#ad4a4c'
      } as OptionsPlayer,
    },
    versions: [{
      title: 'Kot w butach',
      subTitle: 'czas trwania - 15 minut',
      type: 'pl',
      audioFile: 'puss_in_boot',
      imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/cat/index.webp',
      textColor: '#000',
      backgroundColor: '#c3cdaf',
      duration: 4
    }] as Version[],
    resource: [
      {
        type: 'quiz',
        ids: ['quizKotwButach1', 'quizKotwButach2'],
        bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/players/cat/baner_quiz.webp',
      },
      {
        type: 'printouts',
        ids: ['16271817-907d-48zxz96-kot1', '16271817-907d-48zxz96-kot2'],
      },
    ]
  },
  ];