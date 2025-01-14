import { stories } from '@/constants/Stories';
import { ageGroups } from '@/constants/AgeGroups';
import { BookContent, ProductType, ReaderContent } from '@/model';
import { LangReaderPage, ReaderPage } from '@/model/reader';

export const index = {
    stories: stories,
    ageGroups: ageGroups,
    books: [
        {
            id: '362d5de4-691d-4cc5-9d0b-52195009d988',
            type: 'book' as ProductType,
            ageGroupId: 5,
            indexType: 'image',
            indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
            gallery: [ 
              'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/gallery/7.png',
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
                bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_quiz.webp',
              },
              {
                type: 'audiobook',
                ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
                bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_audio.webp',
              },
              {
                type: 'printouts',
                ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
                bannerUrl: '',
              },
              {
                type: 'voice_quiz',
                ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f', 'a40bcbb9-871a-43db-ba87-622sdsfdf59199fc9f', 'a40bcbb9-871a-43db-ba87-622fdfsds59199fc9f'],
                bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_audio.webp',
              },
              {
                type: 'english',
                ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9fxxx', 'a40bcbb9-871a-43db-ba87-622sds59199fgfgff'],
                bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/baner_audio.webp',
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
              backgroundColor: '#6f6e45',
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
              ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b-tumilu', 'bc6de1ad-de39-44d0-97fa-6bac2301e92b-tumilu2'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/tumilu/baner-audio.webp',
            },
            {
              type: 'printouts',
              ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
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
          rating: 3.5, 
          reviewCount: 85,
          content: {
            options: {
              backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/background1.webp',
              textColor: '#3f251d',
              tileColor: '#d10c07',
              backgroundColor: '#4c788a',
              bgColorButton: '#000'
            },
          } as BookContent,
          resource: [
            {
              type: 'quiz',
              ids: ['9dcceb17-1189-42fxx9-815e-46b5988d1sdba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15x337b-43e5-41ccx4e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6d90714e-b4cb-d59f81sd7d0f1edd'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_quiz.webp',
            },
            {
              type: 'audiobook',
              ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_audio.webp',
            },
            {
              type: 'printouts',
              ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_audio.webp',
            },
            {
              type: 'voice_quiz',
              ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9f'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_audio.webp',
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
          rating: 3.5, 
          reviewCount: 85,
          content: {
            options: {
              backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/background.png',
              textColor: '#fff',
              tileColor: '#cbac35',
              backgroundColor: '#cbac35',
              bgColorButton: '#000'
            },
          } as BookContent,
          resource: [
            {
              type: 'quiz',
              ids: ['9dcceb17-1189-42fxx9-815e-46b5988d1sdba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15x337b-43e5-41ccx4e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6d90714e-b4cb-d59f81sd7d0f1edd'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/baner_quiz.webp',
            },
            {
              type: 'audiobook',
              ids: ['bc6de1ad-de39-44d0-97fa-6bacds2301e92b', '8161eb39-7ab7-4186-b7fdsfd-0f43b54df133', '8161eb39-7ab7-4186-b7fdsfd-0f43bds54df133'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/mis/baner_audio.webp',
            },
            {
              type: 'printouts',
              ids: ['f564c212-e491-40f9-b197-mis1', 'f564c212-e491-40f9-b197-mis2'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/sam/baner_audio.webp',
            },
          ]
        },
    ],
    readers: [
      {
        id: '5fa869da-166d-45cc-a57d-36dda0a181b56',
        type: 'reader' as ProductType,
        ageGroupId: 3,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index.webp',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/gallery/cover.webp',
        ],
        title: "Stary dąb",
        description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
        rating: 4, 
        reviewCount: 8,
        content: {
          options: {
            backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/background.webp',
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
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/index.webp'
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
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/3.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/4.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/5.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/6.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/7.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/8.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/9.webp',
          ],
          english: [
            {
              type: 'cover',
              title: '',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/reader/index.webp'
            },
            {
              type: 'content',
              paragraphs: [
                {
                  type: 'text',
                  text: `In a dark dense forest, there stood a very old oak tree. Its mighty crown provided perfect shelter from the rain, with branches like wide-open arms welcoming all small forest dwellers.`,
                  translation: 'W ciemnym, gęstym lesie rósł bardzo stary dąb. Jego potężna korona dawała doskonałe schronienie przed deszczem, a gałęzie przypominały szeroko otwarte ramiona, przyjmujące wszystkich małych mieszkańców lasu.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/1.mp3',
                  vocabulary: [
                    {
                      word: 'dark dense forest',
                      translation: 'ciemny, gęsty las',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/1_1.mp3',
                    },
                    {
                      word: 'old oak tree',
                      translation: 'stary dąb',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/1_2.mp3',
                    },
                    {
                      word: 'mighty crown',
                      translation: 'potężna korona',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/1_3.mp3',
                    },
                    {
                      word: 'forest dwellers',
                      translation: 'mieszkańcy lasu',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/1_4.mp3',
                    }
                  ]
                },
                {
                  type: 'text',
                  text: `A family of turtledoves lived in its lush crown, creating a friendly atmosphere with their beautiful singing.`,
                  translation: 'W bujnej koronie zamieszkała rodzina turkawek, tworząc przyjacielską atmosferę swoim pięknym śpiewem.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/2.mp3',
                  vocabulary: [
                    {
                      word: 'turtledoves',
                      translation: 'turkawki',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/2_1.mp3',
                    },
                    {
                      word: 'lush crown',
                      translation: 'bujna korona',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/2_2.mp3',
                    },
                    {
                      word: 'friendly atmosphere',
                      translation: 'przyjacielska atmosfera',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/2_3.mp3',
                    }
                  ]
                },
              ]
            },
            {
              type: 'content',
              paragraphs: [
                {
                  type: 'text',
                  text: `Below, by the trunk, two young bears played carelessly, enjoying fresh forest fruits.`,
                  translation: 'Na dole, przy pniu, dwa młode niedźwiadki beztrosko się bawiły, zajadając świeże owoce leśne.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/3.mp3',
                  vocabulary: [
                    {
                      word: 'young bears',
                      translation: 'młode niedźwiadki',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/3_1.mp3'
                    },
                    {
                      word: 'trunk',
                      translation: 'pień',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/3_2.mp3'
                    },
                    {
                      word: 'carelessly',
                      translation: 'beztrosko',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/3_3.mp3'
                    },
                    {
                      word: 'fresh forest fruits',
                      translation: 'świeże owoce leśne',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/3_4.mp3'
                    }
                  ]
                },
                {
                  type: 'text',
                  text: `Two small squirrels also found shelter here, spending their days jumping from tree to tree, playing tag, and discovering wonderful new places in the forest.`,
                  translation: 'Schronienie znalazły tu również dwie małe wiewiórki, spędzające dni na skakaniu z drzewa na drzewo, graniu w berka i odkrywaniu cudownych nowych miejsc w lesie.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/4.mp3',
                  vocabulary: [
                    {
                      word: 'squirrels',
                      translation: 'wiewiórki',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/4_1.mp3',
                    },
                    {
                      word: 'playing tag',
                      translation: 'granie w berka',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/4_2.mp3',
                    },
                    {
                      word: 'wonderful places',
                      translation: 'cudowne miejsca',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/4_3.mp3',
                    }
                  ]
                },
                {
                  type: 'text',
                  text: `As night fell and heavy rain began to fall, all the forest creatures fell into a peaceful sleep, protected by the old oak tree, who was grateful for another day of being a shelter for forest creatures.`,
                  translation: 'Gdy zapadła noc i zaczął padać rzęsisty deszcz, wszystkie leśne stworzenia pogrążyły się w spokojnym śnie, chronione przez starego dęba, który był wdzięczny za kolejny dzień bycia schronieniem dla leśnych stworzeń.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/5.mp3',
                  vocabulary: [
                    {
                      word: 'as night fell',
                      translation: 'gdy zapadła noc',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/5_1.mp3',
                    },
                    {
                      word: 'heavy rain',
                      translation: 'rzęsisty deszcz',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/5_2.mp3',
                    },
                    {
                      word: 'peaceful sleep',
                      translation: 'spokojny sen',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/5_3.mp3',
                    },
                    {
                      word: 'grateful',
                      translation: 'wdzięczny',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/english/5_4.mp3',
                    }
                  ]
                }
              ]
            },
            {
              type: 'end',
              title: 'Good night!',
              subtitle: 'Bravo! You did great!'
            }
          ] as LangReaderPage[]
        } as ReaderContent,
        resource: [
          {
            type: 'quiz',
            ids: ['9dcceb17-1189-42f9-815e-quizOld', '9dcceb17-1189-42f9-815e-quizOld2'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/baner_quiz.webp',
          },
          {
            type: 'audiobook',
            ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b-old', '8161eb39-7ab7-4186-b7fd-0f43b54df133-old'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/baner_audio.webp',
          },
          {
            type: 'printouts',
            ids: ['16271817-907d-4896-8882-old1', '16271817-90fd7d-4896-8882-old2', '16271817-90fd7d-4896-8882-old3'],
          },
        ]
      },
      {
        id: '5fa869da-166d-45cc-a57d-36dda0a181bdf56',
        type: 'reader' as ProductType,
        ageGroupId: 4,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/index.webp',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/gallery/cover.webp',
        ],
        title: "Ciuchcia",
        description: "W świecie, gdzie wszystko musi być szybkie i nowoczesne, poznajemy uroczą Ciuchcię, która powoli podróżuje malowniczą trasą przez góry. Gdy zostaje zastąpiona przez szybsze pociągi, wydaje się, że jej dni dobiegły końca. Jednak pewnego dnia burza pokazuje wszystkim, że czasem to właśnie stare, sprawdzone rozwiązania są najlepsze!",
        rating: 4, 
        reviewCount: 7,
        content: {
          options: {
            backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/background.webp',
            textColor: '#222',
            tileColor: '#91654d',
            text: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 5 min',
              textColor: '#fff',
              backgroundColor: '#44746c',
            },
            image: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 5 min',
              textColor: '#000',
              backgroundColor: '#9d281a',
            },
            english: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 10 min',
              textColor: '#000',
              backgroundColor: '#44746c',
            }
          },
          text: [
            {
              type: 'cover',
              title: 'Przeczytaj o małej lokomotywie z wielkim sercem!',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/index.webp'
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `Na krótkiej trasie, między górskimi wioskami, jeździła sobie kiedyś pewna
                          Ciuchcia. Była bardzo wolna, ponieważ w dawnych czasach nie musiała być
                          wcale szybka. Pociągami jeździły wtedy przede wszystkim rodziny na górskie
                          wycieczki.`
                  },
                  {
                    type: 'text',
                    text: `Podczas niespiesznej jazdy wszyscy podziwiali przepiękne widoki.
                          Szczególnie dzieci, które chętnie wyglądały przez okna i obserwowały
                          urzekające krajobrazy. A im wyżej pociąg wjeżdżał w góry, tym więcej piękna
                          widziały. Pasące się na łąkach krówki, jeziorka pełne ryb tuż obok trasy,
                          ruiny zamku, w którym kiedyś mieszkał podobno sam król. Czasami widać
                          też było stado saren. Taka przejażdżka zapewniała wspaniałe wrażenia.`
                  },
                  {
                    type: 'text',
                    text: `Czasy jednak się zmieniły – teraz wszyscy żyją szybciej. Coraz częściej
                            korzystają z pociągów pospiesznych, które wożą ludzi z miejsca na miejsce
                            tak szybko, że ci nie mają nawet okazji, by nacieszyć się jazdą. Przy takiej
                            prędkości krajobrazy za oknem szybko znikają, zlewając się w jeden
                            rozmazany obraz. I tak Ciuchcia jeździła coraz rzadziej i rzadziej, aż w końcu
                            zupełnie przestała wyjeżdżać na szlak.`
                  },
                  {
                    type: 'text',
                    text: `– Co zrobimy z tą starą niepotrzebną ciuchcią? – zapytał ktoś.
                           – Do zajezdni z nią! – zdecydowali o jej losie niewdzięczni zawiadowcy.`
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `Gdybyście, drogie dzieci, nie wiedziały – zajezdnia, to takie miejsce, gdzie
                            odpoczywają pociągi. Tam dbają o nie mechanicy, abyśmy mogli nimi
                            bezpiecznie jeździć. Ciuchcia wylądowała w najciemniejszym kącie zajezdni,
                            ponieważ nie była już zupełnie nikomu potrzebna. Stamtąd obserwowała po
                            cichutku pędzące pociągi.`
                  },
                  {
                    type: 'text',
                    text: `– Po co cię tu postawili?! Zabierasz tylko miejsce. Mieli cię rozmontować, a z
                            twoich elementów zrobić nowy pociąg pospieszny.`
                  },
                  {
                    type: 'text',
                    text: `– Nowy pociąg pospieszny? A po co? Z niej nie chciałbym nawet jednej śrubki!`
                  },
                  {
                    type: 'text',
                    text: `– Tak, tak, jesteś całkowicie niepotrzebna. Zawadzasz tu tylko wszystkim –
                          wyśmiewały się z Ciuchci supernowoczesne pociągi.`
                  },
                  {
                    type: 'text',
                    text: `Ciuchcia coraz bardziej chowała się w kąt, by nikt jej nie widział i by nikomu
                          nie przeszkadzała. Na szczęście znalazł się ktoś, kto stanął w jej obronie.
                          Ktoś, komu jej los nie był obojętny.`
                  },
                  {
                    type: 'text',
                    text: `– Przecież ja cię znam! – powiedział pewien stary mechanik, który zajmował
                          się pociągami w tej zajezdni. – Gdy byłem mały, moi rodzice często jeździli ze
                          mną w góry. To były cudowne wycieczki. A ty zawsze nas tam woziłaś. I za to
                          ci dziękuję! – mechanik poklepał Ciuchcię po starej blasze. – Wiesz co?
                          Troszkę cię oporządzę – zdecydował stary mechanik i poszedł po olej.`
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `– Po co to robisz? To tylko strata czasu – śmiali się z niego koledzy, widząc,
                          jak zajmuje się nieczynnym pociągiem. – Przecież on już nigdy nigdzie nie
                          pojedzie.`
                  },
                  {
                    type: 'text',
                    text: `– Może nie, ale były czasy, gdy sprawiał ludziom radość. Zasługuje na mój
                            szacunek, bo dzięki niemu przeżyłem piękne chwile – bronił się stary
                            mechanik i oliwił rdzewiejące elementy ciuchci.`
                  },
                  {
                    type: 'text',
                    text: `Ale koledzy mechanicy już go nie słuchali. Woleli ścigać się, który z nich
                          lepiej i szybciej przygotuje do drogi swój ekspres.`
                  },
                  {
                    type: 'text',
                    text: `Tak mijały dni, a Ciuchcia nie czuła się już tak bardzo opuszczona, ponieważ
                          stary mechanik odwiedzał ją regularnie każdego popołudnia po pracy i
                          opowiadał jej różne historie z czasów, gdy kiedyś nią jeździł. Ciuchcia
                          słuchając tego wszystkiego chętnie wspominała piękne miejsca, które w
                          ciągu swojego życia tyle razy odwiedziła.`
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `Pewnego dnia zerwała się wyjątkowo mocna burza. Wiatr łamał drzewa,
                          które spadały na drogi. Samochody i autobusy były zablokowane, ludzie nie
                          mogli pojechać do pracy, a dzieci do szkół.`
                  },
                  {
                    type: 'text',
                    text: `– Trzeba dojechać koleją do miejsc, które są nieprzejezdne i pomóc
                            odblokować drogi – powiedzieli mechanicy.`
                  },
                  {
                    type: 'text',
                    text: `Ale ciężkie i wysokie drzewa zerwały swoimi konarami również przewody
                          elektryczne. I okazało się, że superszybkie pociągi nie były w stanie wyjechać
                          z zajezdni.`
                  },
                  {
                    type: 'text',
                    text: `– Wpadłem na pewien pomysł – podrapał się po brodzie stary mechanik. Na
                          górce między dolinami, w pobliżu zajezdni, jest zakład elektryczny. –
                          Skoczymy z Ciuchcią po specjalistów elektryków. Oni naprawią przewody,
                          dzięki czemu pociągi będą mogły pojechać i pomóc ludziom – zapoznał ich
                          ze swoim planem.`
                  },
                  {
                    type: 'text',
                    text: `– To znakomity pomysł! – uznali pozostali koledzy. Nawet pociągi
                          ekspresowe musiały się z tym zgodzić!`
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `I tak po długiej przerwie, Ciuchcia znowu wyjechała na tory. A ponieważ
                          stary mechanik odpowiednio o nią zadbał, pociąg był w dobrym stanie i
                          droga przebiegła bez problemów. Gdy gdzieś na trasie leżały połamane
                          gałęzie albo zwalone drzewo, Ciuchcia bez większego wysiłku spychała je z
                          drogi.`
                  },
                  {
                    type: 'text',
                    text: `W końcu wtoczyła się na górkę, elektrycy wsiedli do pociągu i po powrocie do
                          zajezdni zabrali się za naprawę przewodów elektrycznych. Pociągi
                          pospieszne mogły wyruszyć, by pomóc rozwozić ludzi i dzieci w czasie, gdy
                          ciężkie maszyny usuwały drzewa, które zwaliły się na drogi.`
                  },
                  {
                    type: 'text',
                    text: `– Dziękujemy ci, Ciuchcio! Bardzo nam pomogłaś. Bez ciebie by się nie udało
                          – przyznały pociągi, gdy wreszcie wróciły do zajezdni po pracowitym dniu. –
                          Już nigdy nie będziemy się z ciebie śmiać.`
                  },
                  {
                    type: 'text',
                    text: `– Nie ma za co, musimy sobie przecież pomagać – uśmiechnęła się skromnie Ciuchcia.`
                  },
                  {
                    type: 'text',
                    text: `Ale momencik… Taki wyjątkowy pociąg nie powinien chyba stać w ciemnym
                          kącie zajezdni, prawda?`
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `– W każdy weekend zaprosimy rodziny do wspólnej jazdy starą trasą z naszą
                          bohaterską Ciuchcią – zdecydowali wszyscy pracownicy kolei.`
                  },
                  {
                    type: 'text',
                    text: `Zgadnijcie, kto wybrał się na tę przejażdżkę jako pierwszy? Oczywiście – stary mechanik.`
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
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/1.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/2.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/3.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/4.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/5.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/6.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/7.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/8.webp',
          ],
  
          english: [
            {
              type: 'cover',
              title: '',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/index.webp'
            },
            {  
              type: 'content',
              paragraphs: [
                {
                  "type": "text",
                  "text": "There once was a Choo-choo train that ran on a short route between mountain villages. She was very slow because in the old days, speed wasn't important. Trains were mainly used by families going on mountain trips, who enjoyed admiring the beautiful views.",
                  "translation": "Na krótkiej trasie, między górskimi wioskami, jeździła sobie kiedyś pewna Ciuchcia. Była bardzo wolna, ponieważ w dawnych czasach nie musiała być wcale szybka. Pociągami jeździły wtedy przede wszystkim rodziny na górskie wycieczki. Podczas niespiesznej jazdy wszyscy podziwiali przepiękne widoki.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/1.mp3',
                  "vocabulary": [
                    {
                      "word": "mountain villages",
                      "translation": "górskie wioski",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/1_1.mp3',
                    },
                    {
                      "word": "beautiful views",
                      "translation": "przepiękne widoki",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/1_2.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "Especially children loved looking out the windows at grazing cows, fish-filled lakes, castle ruins where a king supposedly lived, and sometimes even herds of deer. Such rides provided wonderful experiences.",
                  "translation": "Szczególnie dzieci, które chętnie wyglądały przez okna i obserwowały urzekające krajobrazy, pasące się krówki, jeziorka pełne ryb, ruiny zamku, w którym podobno mieszkał król, i czasami stado saren. Taka przejażdżka zapewniała wspaniałe wrażenia.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/2.mp3',
                  "vocabulary": [
                    {
                      "word": "castle ruins",
                      "translation": "ruiny zamku",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/2_1.mp3',
                    },
                    {
                      "word": "grazing cows",
                      "translation": "pasące się krówki",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/2_2.mp3',
                    },
                    {
                      "word": "fish-filled lakes",
                      "translation": "jeziorka pełne ryb",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/2_3.mp3',
                    },
                    {
                      "word": "looking out the windows",
                      "translation": "wyglądały przez okna",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/2_4.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "But times changed - now everyone lives faster. People increasingly use express trains that transport them so quickly from place to place that they don't even have time to enjoy the journey. At such speeds, the landscapes blur into one smeared image outside the window.",
                  "translation": "Czasy jednak się zmieniły – teraz wszyscy żyją szybciej. Coraz częściej korzystają z pociągów pospiesznych, które wożą ludzi z miejsca na miejsce tak szybko, że ci nie mają nawet okazji, by nacieszyć się jazdą. Przy takiej prędkości krajobrazy za oknem szybko znikają, zlewając się w jeden rozmazany obraz.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3.mp3',
                  "vocabulary": [
                    {
                      "word": "times changed",
                      "translation": "czasy się zmieniły",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3_1.mp3',
                    },
                    {
                      "word": "express trains",
                      "translation": "pociągi ekspresowe",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3_2.mp3',
                    },
                    {
                      "word": "to enjoy the journey",
                      "translation": "nacieszyć się podróżą",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3_3.mp3',
                    },
                    {
                      "word": "landscapes blur",
                      "translation": "krajobrazy zlewają się",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3_4.mp3',
                    },
                    {
                      "word": "smeared image",
                      "translation": "rozmazany obraz",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3_5.mp3',
                    },
                    {
                      "word": "increasingly",
                      "translation": "coraz częściej",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/3_6.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "And so the Choo-choo train ran less and less frequently until she completely stopped running on the tracks.",
                  "translation": "I tak Ciuchcia jeździła coraz rzadziej i rzadziej, aż w końcu zupełnie przestała wyjeżdżać na szlak.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/4.mp3',
                  "vocabulary": [
                    {
                      "word": "stopped running",
                      "translation": "przestała wyjeżdżać",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/4_1.mp3',
                    }
                  ]
                },
              ]
            },
            {
              type: 'content',
              paragraphs: [
                {
                  "type": "text",
                  "text": "'What shall we do with this old useless Choo-choo train?' someone asked. 'Take her to the depot!' decided the ungrateful dispatchers. Children, if you don't know - a depot is a place where trains rest. There, mechanics take care of them so we can ride them safely.",
                  "translation": "'Co zrobimy z tą starą niepotrzebną ciuchcią?' zapytał ktoś. 'Do zajezdni z nią!' zdecydowali o jej losie niewdzięczni zawiadowcy. Gdybyście, drogie dzieci, nie wiedziały – zajezdnia, to takie miejsce, gdzie odpoczywają pociągi. Tam dbają o nie mechanicy, abyśmy mogli nimi bezpiecznie jeździć.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/5.mp3',
                  "vocabulary": [
                    {
                      "word": "depot",
                      "translation": "zajezdnia",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/5_1.mp3',
                    },
                    {
                      "word": "ungrateful dispatchers",
                      "translation": "niewdzięczni dyspozytorzy",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/5_2.mp3',
                    },
                    {
                      "word": "mechanics",
                      "translation": "mechanicy",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/5_3.mp3',
                    },
                    {
                      "word": "take care of",
                      "translation": "dbać o",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/5_4.mp3',
                    },
                    {
                      "word": "useless",
                      "translation": "bezużyteczny",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/5_5.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "The Little Choo-choo train ended up in the darkest corner of the depot because she wasn't needed anymore. From there, she quietly observed the speeding trains.",
                  "translation": "Ciuchcia wylądowała w najciemniejszym kącie zajezdni, ponieważ nie była już zupełnie nikomu potrzebna. Stamtąd obserwowała po cichutku pędzące pociągi.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/6.mp3',
                  "vocabulary": [
                    {
                      "word": "darkest corner",
                      "translation": "najciemniejszy kąt",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/6_1.mp3',
                    },
                    {
                      "word": "ended up",
                      "translation": "wylądowała",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/6_2.mp3',
                    },
                    {
                      "word": "wasn't needed anymore",
                      "translation": "nie była już potrzebna",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/6_3.mp3',
                    },
                    {
                      "word": "quietly observed",
                      "translation": "po cichu obserwowała",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/6_4.mp3',
                    },
                    {
                      "word": "speeding trains",
                      "translation": "pędzące pociągi",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/6_5.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "Fortunately, someone stood up for her - an old mechanic who remembered her from his childhood. He took care of her despite his colleagues' mockery.",
                  "translation": "Na szczęście znalazł się ktoś, kto stanął w jej obronie - pewien stary mechanik, który pamiętał ją z dzieciństwa. Zajmował się nią mimo drwin kolegów.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/7.mp3',
                  "vocabulary": [
                    {
                      "word": "stood up for her",
                      "translation": "wstawił się za nią",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/7_1.mp3',
                    },
                    {
                      "word": "remembered from childhood",
                      "translation": "pamiętał z dzieciństwa",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/7_2.mp3',
                    },
                    {
                      "word": "despite",
                      "translation": "mimo",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/7_3.mp3',
                    },
                    {
                      "word": "colleagues' mockery",
                      "translation": "kpiny kolegów",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/7_4.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "Then one stormy day, when fallen trees blocked roads and damaged power lines, the modern electric trains couldn't leave the depot. That's when the Little Choo-choo, which didn't need electricity, proved invaluable by helping transport electricians to fix the power lines.",
                  "translation": "Pewnego burzowego dnia, gdy powalone drzewa zablokowały drogi i uszkodziły przewody elektryczne, nowoczesne pociągi elektryczne nie mogły wyjechać z zajezdni. Wtedy właśnie Ciuchcia, która nie potrzebowała elektryczności, okazała się niezastąpiona, pomagając przetransportować elektryków do naprawy linii.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8.mp3',
                  "vocabulary": [
                    {
                      "word": "stormy day",
                      "translation": "burzowy dzień",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8_1.mp3',
                    },
                    {
                      "word": "fallen trees",
                      "translation": "powalone drzewa",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8_2.mp3',
                    },
                    {
                      "word": "power lines",
                      "translation": "linie energetyczne",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8_3.mp3',
                    },
                    {
                      "word": "proved invaluable",
                      "translation": "okazała się nieoceniona",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8_4.mp3',
                    },
                    {
                      "word": "electricians",
                      "translation": "elektrycy",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8_5.mp3',
                    },
                    {
                      "word": "to fix",
                      "translation": "naprawić",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/8_6.mp3',
                    }
                  ]
                }
              ]
            },
            {
              type: 'content',
              paragraphs: [
               {
                  "type": "text",
                  "text": "After this event, everyone appreciated her value. The railway workers decided that every weekend, the heroic Little Choo-choo train would take families on trips along the old route.",
                  "translation": "Po tym wydarzeniu wszyscy docenili jej wartość. Pracownicy kolei zdecydowali, że w każdy weekend bohaterska Ciuchcia będzie woziła rodziny na wycieczki starą trasą.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/9.mp3',
                  "vocabulary": [
                    {
                      "word": "heroic",
                      "translation": "bohaterska",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/9_1.mp3',
                    },
                    {
                      "word": "railway workers",
                      "translation": "pracownicy kolei",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/9_2.mp3',
                    },
                    {
                      "word": "appreciated",
                      "translation": "docenili",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/9_3.mp3',
                    } 
                  ]
                },
                {
                  "type": "text",
                  "text": "And guess who was the first to take such a ride? Of course - the old mechanic.",
                  "translation": "Zgadnijcie, kto wybrał się na tę przejażdżkę jako pierwszy? Oczywiście - stary mechanik.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/10.mp3',
                  "vocabulary": [
                    {
                      "word": "guess who",
                      "translation": "zgadnijcie kto",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/10_1.mp3',
                    },
                    {
                      "word": "to take a ride",
                      "translation": "wyruszyć w podróż",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/10_2.mp3',
                    },
                    {
                      "word": "of course",
                      "translation": "oczywiście",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/english/10_3.mp3',
                    },
                  ]
                }
              ]
            },
            {
              type: 'end',
              title: 'Bravo!',
              subtitle: 'You did a fantastic job!'
            }
          ] as LangReaderPage[]
        } as ReaderContent,
        resource: [
          {
            type: 'quiz',
            ids: ['9dcceb17-1189-42fxx9-815e-Coo1', '9dcceb17-1189-42fxx9-815e-Coo2'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/quiz/baner_quiz.webp',
          },
          {
            type: 'audiobook',
            ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92b-train', '8161eb39-7ab7-4186-b7fd-0f43b54df133-train'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/baner_audio.webp',
          },
          {
            type: 'printouts',
            ids: ['16271817-907d-48zxz96-choo1', '16271817-907d-48zxz96-choo22'],
          },
        ]
      },
      {
        id: '5fa869da-166d-45cc-a57d-36ddfda181b56',
        type: 'reader' as ProductType,
        ageGroupId: 3,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/index.webp',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/gallery/cover.webp',
          'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/gallery/cover.webp',
        ],
        title: "Natalia i smok",
        description: "Główny bohater - wiekowy dąb - pełni rolę opiekuna i strażnika leśnej społeczności. Jego rozłożyste gałęzie i potężna korona tworzą bezpieczne schronienie dla wielu mieszkańców lasu",
        rating: 5, 
        reviewCount: 17,
        content: {
          options: {
            backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/background.webp',
            textColor: '#fff',
            tileColor: '#cd2b83',
            text: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 5 min',
              textColor: '#fff',
              backgroundColor: '#cd2b83',
            },
            image: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 3-4 minuty',
              textColor: '#000',
              backgroundColor: '#544a86',
            },
            english: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 10 min',
              textColor: '#000',
              backgroundColor: '#24bedb',
            }
          },
          text: [
            {
              type: 'cover',
              title: '',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/index.png'
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
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/1.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/2.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/3.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/4.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/5.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/6.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/7.webp',
          ],
  
          english: [
            {
              type: 'cover',
              title: '',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/index.webp'
            },
            {
              type: 'content',
              paragraphs: [
                {
                  "type": "text",
                  "text": "Natalia loved dragons more than anything in the world. She had dragon toys, dragon bedding, a dragon alarm clock shaped like an egg, and even a backpack with fire-breathing dragons.",
                  "translation": "Natalia kochała smoki najbardziej na świecie. Miała smocze zabawki, pościel w smoki, budzik w kształcie smoczego jajka, a nawet plecak ze smokami ziejącymi ogniem",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/1.mp3',
                  "vocabulary": [
                    {
                      "word": "dragons",
                      "translation": "smoki",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/1_1.mp3',
                    },
                    {
                      "word": "bedding",
                      "translation": "pościel",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/1_2.mp3',
                    },
                    {
                      "word": "alarm clock",
                      "translation": "budzik",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/1_3.mp3',
                    },
                    {
                      "word": "shaped like",
                      "translation": "w kształcie",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/1_4.mp3',
                    },
                  ]
                },
                {
                  "type": "text",
                  "text": "Every morning she would carefully arrange all her dragon figurines on the shelf, making sure they were facing the same direction.",
                  "translation": "Każdego ranka starannie układała wszystkie swoje smocze figurki na półce, upewniając się, że patrzą w tym samym kierunku.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/2.mp3',
                  "vocabulary": [
                    {
                      "word": "arrange",
                      "translation": "układać",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/2_1.mp3',
                    },
          
                    {
                      "word": "carefully",
                      "translation": "starannie",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/2_2.mp3',
                    },
                    {
                      "word": "figurines",
                      "translation": "figurki",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/2_3.mp3',
                    },
                    {
                      "word": "shelf",
                      "translation": "półka",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/2_4.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "One night, Natalia dreamed of flying high above a river on a huge dragon's back. The wind was blowing through her hair, and she was laughing with joy.",
                  "translation": "Pewnej nocy Natalia śniła o locie wysoko nad rzeką na grzbiecie ogromnego smoka. Wiatr rozwiewał jej włosy, a ona śmiała się z radości.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3.mp3',
                  "vocabulary": [
                    {
                      "word": "dreamed",
                      "translation": "śniła",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_1.mp3',
                    },
                    {
                      "word": "huge",
                      "translation": "ogromny",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_2.mp3',
                    },
                    {
                      "word": "wind",
                      "translation": "wiatr",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_3.mp3',
                    },
                    {
                      "word": "joy",
                      "translation": "radość",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_4.mp3',
                    },
                    {
                      "word": "flying high",
                      "translation": "lot wysoko",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_5.mp3',
                    },
                    {
                      "word": "river",
                      "translation": "rzeka",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_6.mp3',
                    },
                    {
                      "word": "back",
                      "translation": "grzbiet",
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/3_7.mp3',
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "Suddenly, she heard a bell ringing - it was her dragon egg alarm clock waking her up for another day of school.",
                  "translation": "Nagle usłyszała dzwonienie - to jej budzik w kształcie smoczego jajka budził ją na kolejny dzień szkoły.",
                  "vocabulary": [
                    {
                      "word": "suddenly",
                      "translation": "nagle"
                    },
                    {
                      "word": "bell ringing",
                      "translation": "dzwonienie"
                    }
                  ]
                },
              ]
            },
            {
              type: 'content',
              paragraphs: [
                {
                  "type": "text",
                  "text": "Mom promised Natalia a dragon if she got good grades. The girl studied hard all year, learning multiplication, division, and spelling.",
                  "translation": "Mama obiecała Natalii smoka, jeśli dostanie dobre oceny. Dziewczynka ciężko się uczyła przez cały rok, ucząc się mnożenia, dzielenia i ortografii.",
                  "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/5.mp3",
                  "vocabulary": [
                    {
                      "word": "multiplication",
                      "translation": "mnożenie",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/5_1.mp3"
                    },
                    {
                      "word": "division",
                      "translation": "dzielenie",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/5_2.mp3"
                    },
                    {
                      "word": "spelling",
                      "translation": "ortografia",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/5_3.mp3"
                    },
                    {
                      "word": "promised",
                      "translation": "obiecała",
                       "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/5_4.mp3"
                    },
                    {
                      "word": "studied hard",
                      "translation": "ciężko się uczyła",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/5_5.mp3"
                    },
                  ]
                },
                {
                  "type": "text",
                  "text": "When she brought home an excellent report card, her parents took her to the mall. Instead of going to the toy shop as Natalia expected, they went to a pet store. There, mom showed her a special surprise - a real water dragon!",
                  "translation": "Kiedy przyniosła do domu świetne świadectwo, rodzice zabrali ją do centrum handlowego. Zamiast do sklepu z zabawkami, jak się spodziewała Natalia, poszli do sklepu zoologicznego. Tam mama pokazała jej specjalną niespodziankę - prawdziwego wodnego smoka!",
                  "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/6.mp3",
                  "vocabulary": [
                    {
                      "word": "report card",
                      "translation": "świadectwo",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/6_1.mp3",
                    },
                    {
                      "word": "excellent",
                      "translation": "świetne",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/6_2.mp3",
                    },
                    {
                      "word": "mall",
                      "translation": "centrum handlowe",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/6_3.mp3",
                    },
                    {
                      "word": "toy shop",
                      "translation": "sklep z zabawkami",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/6_4.mp3",
                    },
                    {
                      "word": "pet store",
                      "translation": "sklep zoologiczny",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/6_5.mp3",
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "It was an axolotl from Mexico, pink and small, with delicate spikes around its face. Although it couldn't fly, it could swim underwater just like Chinese dragons.",
                  "translation": "Był to aksolotl z Meksyku, różowy i mały, z delikatnymi kolcami wokół pyszczka. Chociaż nie potrafił latać, umiał pływać pod wodą jak chińskie smoki.",
                  "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/7.mp3",
                  "vocabulary": [
                    {
                      "word": "axolotl",
                      "translation": "aksolotl",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/7_1.mp3",
                    },
                    {
                      "word": "delicate",
                      "translation": "delikatny",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/7_2.mp3",
                    },
                    {
                      "word": "spikes",
                      "translation": "kolce",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/7_3.mp3",
                    },
                    {
                      "word": "swim underwater",
                      "translation": "pływać pod wodą",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/7_4.mp3",
                    },
                  ]
                },
                {
                  "type": "text",
                  "text": "Natalia immediately fell in love with her water dragon. On the way home, she held the aquarium tightly on her lap, along with a bag of amphibian food and a book about caring for axolotls. That day, Natalia discovered that even the biggest dreams can come true in unexpected ways.",
                  "translation": "Natalia od razu pokochała swojego wodnego smoka. W drodze do domu mocno trzymała na kolanach akwarium, wraz z torebką karmy dla płazów i książką o opiece nad aksolotlami. Tego dnia Natalia odkryła, że nawet największe marzenia mogą się spełnić w nieoczekiwany sposób.",
                  "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8.mp3",
                  "vocabulary": [
                      {
                        "word": "aquarium",
                        "translation": "akwarium",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_1.mp3",
                      },
                      {
                        "word": "amphibian",
                        "translation": "płaz",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_2.mp3",
                      },
                      {
                        "word": "unexpected",
                        "translation": "nieoczekiwany",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_3.mp3",
                      },
                      {
                        "word": "immediately",
                        "translation": "od razu",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_4.mp3",
                      },
                      {
                        "word": "fell in love",
                        "translation": "pokochała",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_5.mp3",
                      },
                      {
                        "word": "caring for",
                        "translation": "opieka nad",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_6.mp3",
                      },
                      {
                        "word": "discovered",
                        "translation": "odkryła",
                        "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/english/8_7.mp3",
                      }
                    ]
                }
              ]
            },
            {
              type: 'end',
              title: 'Bravo!',
              subtitle: 'You did great!'
            }
          ] as LangReaderPage[]
        } as ReaderContent,
        resource: [
          {
            type: 'quiz',
            ids: ['9dcceb17-1189-42fxx9-815e-natalia1', '9dcceb17-1189-42fxx9-815e-quizNatalia2', '9dcceb17-1189-42fxx9-815e-quizNatalia3'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/baner_quiz.webp',
          },
          {
            type: 'audiobook',
            ids: ['8161eb39-7ab7-4186-b7fd-0f43b54df133-nat', 'bc6de1ad-de39-44d0-97fa-6bac2301e92b-nat'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/baner_audio.webp',
          },
          {
            type: 'printouts',
            ids: ['16271817-907d-4896-88z82-nati1', '16271817-907d-4896-88z82-nati2'],
          },
        ]
      },
      {
        id: '5fa869da-166d-45ccfd-d57d-36dda0a181b56',
        type: 'reader' as ProductType,
        ageGroupId: 3,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/index.webp',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/gallery/cover.webp',
        ],
        title: "Zosia i wielki strach",
        description: "Główna bohaterka, mała Zosia, musi zmierzyć się z nieoczekiwaną sytuacją, gdy jej mama trafia do szpitala, by urodzić jej braciszka,Historia porusza ważne tematy takie jak radzenie sobie ze strachem, pojawienie się rodzeństwa w rodzinie oraz rola wsparcia najbliższych.",
        rating: 5, 
        reviewCount: 22,
        content: {
          options: {
            backgroundUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/background.webp',
            textColor: '#222',
            tileColor: '#6b5a6c',
            text: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 5 min',
              textColor: '#fff',
              backgroundColor: '#53a695',
            },
            image: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 5 min',
              textColor: '#000',
              backgroundColor: '#86ac2c',
            },
            english: {
              title: 'Zacznij czytać',
              subTitle: 'Czas czytania: 10 min',
              textColor: '#000',
              backgroundColor: '#d1a8a7',
            }
          },
          text: [
            {
              type: 'cover',
              title: '',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/index.png'
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `Zosia jest małym przedszkolakiem. Ma kręcone włosy, które jej mama często zaplata w warkocze.
                          Zosia przez cały dzień wzorowo dba o swoją lalkę Lucynkę.
                          Jednak teraz najbardziej ze wszystkiego nie może się doczekać tego, że oprócz lalki będzie mogła dbać także o prawdziwego dzidziusia! 
                          Mamusia i tatuś powiedzieli jej bowiem, że będzie mieć rodzeństwo – małego braciszka.
                          `
                  },
                  {
                    type: 'text',
                    text: `Wieczorem, gdy Zosia szła spać, zniecierpliwiona spytała mamę:
                          – Mamusiu, a kiedy w końcu urodzi się dzidziuś?
                          Mama spojrzała z uśmiechem na swój zaokrąglony brzuszek:
                          – Nie wiem, kiedy dokładnie, Zosiu, ale już niebawem. Dobranoc.
                          – Mama pocałowała ją, zgasiła światło i wyszła z pokoju.
                          Zosia nakryła siebie i swoje ulubione lalki pierzynką, po czym od razu zasnęła.
                          `
                  },
                  {
                    type: 'text',
                    text: ` Rano obudził Zosię jakiś dziwny hałas.
                            Wydawało jej się nawet, że słyszała alarm – wycie syreny albo koguta.
                            Wyskoczyła szybko z łóżka i wyjrzała przez okno.
                            I rzeczywiście, przed domem stała karetka. Ale cóż to?
                            Jakiś ubrany na biało pan podtrzymywał za ramię jej mamusię i pomagał jej wsiąść do środka!
                          `
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: ` Zosia natychmiast wybiegła z pokoju. Tatuś wchodził właśnie przez drzwi.
                            Miał na sobie kurtkę i buty, a gdy spojrzał na Zosię, wcale się nie uśmiechnął.
                            – Jadę z mamą – powiedział szybko. – Nie bój się, wkrótce wrócę.
                            W kuchni czeka na ciebie babcia ze śniadaniem.
                            – Po tych słowach zniknął za zamykającymi się drzwiami.
                          `
                  },
                  {
                    type: 'text',
                    text: ` Zosię natychmiast zdjął wielki strach. 
                            „Dlaczego tatuś wyszedł z domu?
                            Dlaczego mamusia wsiadała do karetki?” – zastanawiała się Zosia.
                            Wiedziała, że karetki przewożą chorych i rannych. Do jej oczu napłynęły łzy.
                            Usiadła na ziemi, oparła się plecami o drzwi i z całego tego strachu i bezsilności zaczęła płakać.
                            Nie wiedziała bowiem, co innego może zrobić.
                          `
                  },
                  {
                    type: 'text',
                    text: ` Wtedy z kuchni wyszła babcia. Od razu zrozumiała, co się dzieje i postanowiła przytulić Zosię.
                            Zosia jednak się broniła. Nie chciała zostać z babcią – chciała pojechać do mamy! 
                            Dlaczego Dlaczego zostawili ją samą?
                          `
                  },
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: ` – Bardzo się boisz, prawda? – spytała babcia delikatnie i otarła jej łzy. 
                            – Wszyscy szybko poszli i nikt nie miał czasu wyjaśnić ci, co się dzieje?
                          `
                  },
                  {
                    type: 'text',
                    text: ` Zosia przytaknęła i znowu zaczęła szlochać. Babcia przytuliła więc
                            dziewczynkę do siebie i szepnęła jej do ucha:
                          `
                  },
                  {
                    type: 'text',
                    text: `– Z twoją mamusią jest wszystko w porządku. W nocy dzidziuś chciał przyjść
                           na świat, musiała więc pojechać do szpitala. Ale wasze auto jest teraz u
                           mechanika, więc tatuś zadzwonił po karetkę, żeby zawiozła mamę.
                          `
                  },
                  {
                    type: 'text',
                    text: `Gdy Zosia przytuliła się do babci, bała się już trochę mniej. Otarła łzy rękawem od piżamy.
                          `
                  },
                  {
                    type: 'text',
                    text: ` – Karetką mama dostanie się do szpitala najszybciej i najbezpieczniej. 
                            A wiesz, co to znaczy? Że już niebawem będziesz mieć braciszka!
                            – powiedziała babcia spokojnym głosem.
                            – Może zjemy razem śniadanie?
                            Potem możesz namalować dla braciszka jakiś ładny obrazek.
                          `
                  }
                ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: ` Serce Zosi wciąż jeszcze tłukło się ze strachu, ale babcia pogłaskała ją, a jej
                            ciepła dłoń zawsze działała kojąco. Gdy podzieliła się swoim strachem z
                            babcią, ten jakby zmniejszył się i skurczył. Narysowała więc na kartce
                            dzidziusia w wózeczku z uśmiechniętą mamusią.
                          `
                  },
                  {
                    type: 'text',
                    text: ` Dokładnie tak, jak mówiła babcia, nie trwało to długo. Od razu po obiedzie
                            zastukał zamek w drzwiach i stanął w nich tata. Pomógł Zosi się ubrać, a
                            potem wspólnie pojechali autobusem do szpitala.
                          `
                  },
                  {
                    type: 'text',
                    text: ` Tam czekała już na nich mamusia. Była uśmiechnięta, tak samo jak na
                            obrazku Zosi, a w ramionach trzymała malutkie zawiniątko. Uśmiechnęła się
                            do Zosi i powiedziała:
                          `
                  },
                  {
                    type: 'text',
                    text: `– Z twoją mamusią jest wszystko w porządku. W nocy dzidziuś chciał przyjść
                           na świat, musiała więc pojechać do szpitala. Ale wasze auto jest teraz u
                           mechanika, więc tatuś zadzwonił po karetkę, żeby zawiozła mamę.
                          `
                  },
                  {
                    type: 'text',
                    text: `– Zobacz, to twój braciszek!
                          `
                  },
                  {
                    type: 'text',
                    text: `
                          Zosia pogłaskała drobniutkiego braciszka po policzku. Miał zamknięte oczka,
                          spał spokojnie i był tylko troszeczkę większy niż lalki Zosi. Wyglądał tak
                          rozkosznie! Tata i mama spoglądali na niego z miłością. Wreszcie wszyscy
                          znowu byli razem. Zosia z radości objęła mamusię. Wtedy już w ogóle
                          przestała się bać.

                          `
                  }
                ]
            },
            {
              type: 'end',
              title: 'Koniec!',
              subtitle: 'Brawo! Świetnie ci poszło!'
            }
          ] as ReaderPage[],
          image: [
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/1.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/2.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/3.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/4.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/5.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/6.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/7.webp',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/8.webp',
          ],
          english: [
            {
              type: 'cover',
              title: '',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/index.png'
            },
            {  
              type: 'content',
              paragraphs: [
                {
                  "type": "text",
                  "text": "Zosia is a little preschooler. She has curly hair that her mom often braids. Zosia takes exemplary care of her doll Lucynka all day long, but now she can't wait to have a real baby! Her parents told her she would have a little brother.",
                  "translation": "Zosia jest małym przedszkolakiem. Ma kręcone włosy, które jej mama często zaplata w warkocze. Zosia przez cały dzień wzorowo dba o swoją lalkę Lucynkę, ale teraz najbardziej nie może się doczekać prawdziwego dzidziusia! Rodzice powiedzieli jej, że będzie mieć braciszka.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/1.mp3',
                  "vocabulary": [
                    {
                      "word": "preschooler",
                      "translation": "przedszkolak",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/1_1.mp3"
                    },
                    {
                      "word": "curly hair",
                      "translation": "kręcone włosy",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/1_2.mp3"
                    },
                    {
                      "word": "braids",
                      "translation": "zaplata w warkocze",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/1_3.mp3"
                    },
                    {
                      "word": "exemplary",
                      "translation": "wzorowo",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/1_4.mp3"
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "In the evening, before bed, Zosia impatiently asked her mom when the baby would be born. Mom, looking at her round belly, replied that it would be soon. In the morning, Zosia was awakened by a siren sound. Through the window, she saw an ambulance and a man in white clothes helping her mom get inside. Dad quickly left the house, saying he was going with mom and that grandma was waiting in the kitchen.",
                  "translation": "Wieczorem, przed snem, Zosia niecierpliwie pytała mamę, kiedy urodzi się dzidziuś. Mama, patrząc na swój zaokrąglony brzuszek, odpowiedziała że już niedługo. Rano Zosię obudził dźwięk syreny. Zobaczyła przez okno karetkę i pana w białym ubraniu, który pomagał jej mamie wsiąść do środka. Tata szybko wyszedł z domu, mówiąc że jedzie z mamą i że babcia czeka w kuchni.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/2.mp3',
                  "vocabulary": [
                    {
                      "word": "impatiently",
                      "translation": "niecierpliwie",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/2_1.mp3"
                    },
                    {
                      "word": "round belly",
                      "translation": "zaokrąglony brzuszek",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/2_2.mp3"
                    },
                    {
                      "word": "siren",
                      "translation": "syrena",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/2_3.mp3"
                    },
                    {
                      "word": "ambulance",
                      "translation": "karetka",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/2_4.mp3"
                    }
                  ]
                }
              ]
            },
            {
              type: 'content',
              paragraphs: [
                {
                  "type": "text",
                  "text": "Zosia became very scared. She sat down by the door and started crying. Grandma, who came out of the kitchen, hugged her and explained that everything was fine - mom was going to the hospital because the baby wanted to come into the world. Since their car was at the mechanic's, dad had called an ambulance.",
                  "translation": "Zosię ogarnął wielki strach. Usiadła pod drzwiami i zaczęła płakać. Babcia, która wyszła z kuchni, przytuliła ją i wytłumaczyła, że wszystko jest w porządku - mama jedzie do szpitala, bo dzidziuś chce przyjść na świat. Ponieważ ich samochód był u mechanika, tata wezwał karetkę.",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/3.mp3',
                  "vocabulary": [
                    {
                      "word": "scared",
                      "translation": "przestraszona",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/3_1.mp3"
                    },
                    {
                      "word": "hugged",
                      "translation": "przytuliła",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/3_2.mp3"
                    },
                    {
                      "word": "explained",
                      "translation": "wytłumaczyła",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/3_3.mp3"
                    },
                    {
                      "word": "mechanic's",
                      "translation": "u mechanika",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/3_4.mp3"
                    }
                  ]
                },
                {
                  "type": "text",
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/4.mp3',
                  "text": "Zosia and grandma had breakfast together, and then the little girl drew a picture for her brother - a baby in a stroller with a smiling mommy. After lunch, dad came back and took Zosia to the hospital. There, mom was waiting with a tiny bundle. The baby brother was only slightly bigger than Zosia's dolls, had his eyes closed, and was sleeping sweetly. Zosia gently stroked his cheek. Looking at her happy family, she wasn't scared anymore at all.",
                  "translation": "Zosia z babcią zjadły śniadanie, a potem dziewczynka narysowała obrazek dla braciszka - dzidziusia w wózeczku z uśmiechniętą mamusią. Po obiedzie wrócił tata i zabrał Zosię do szpitala. Tam czekała już mama z malutkim zawiniątkiem. Braciszek był niewiele większy od lalek Zosi, miał zamknięte oczka i słodko spał. Zosia pogłaskała go delikatnie po policzku. Patrząc na szczęśliwą rodzinę, przestała się już zupełnie bać.",
                  "vocabulary": [
                    {
                      "word": "breakfast",
                      "translation": "śniadanie",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/4_1.mp3"
                    },
                    {
                      "word": "drew a picture",
                      "translation": "narysowała obrazek",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/4_2.mp3"
                    },
                    {
                      "word": "tiny bundle",
                      "translation": "malutkie zawiniątko",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/4_3.mp3"
                    },
                    {
                      "word": "gently stroked",
                      "translation": "pogłaskała delikatnie",
                      "audioUrl": "https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/english/4_4.mp3"
                    }
                  ]
                }
              ]
            },
            {
              type: 'end',
              title: 'Bravo! You did great!',
              subtitle: ''
            }
          ] as LangReaderPage[]
        } as ReaderContent,
        resource: [
          {
            type: 'quiz',
            ids: ['9dcceb17-1189-42fxx9-815e-46b5988d1sdbaquizZosia1', '9dcceb17-1189-42fxx9-815e-46b5988d1sdbaquizZosia2', '9dcceb17-1189-42fxx9-815e-46b5988d1sdbaquizZosia3'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/baner_quiz.webp',
          },
          {
            type: 'audiobook',
            ids: ['8161eb39-7ab7-4186-b7fd-0f43b54df133-zosia', 'bc6de1ad-de39-44d0-97fa-6bac2301e92b-zosia'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/baner_audio.webp',
          },
          {
            type: 'printouts',
            ids: ['16271817-907d-4896-8882-zzzz', 'f978f1cb-c6d7-4c56-8e84-22b54f36sdsd'],
          },
        ]
      },
    ]
}