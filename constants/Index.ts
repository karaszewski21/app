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
              {
                type: 'english',
                ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9fxxx', 'a40bcbb9-871a-43db-ba87-622sds59199fgfgff', 'a40bcbb9-871a-43db-ba87-622sds59199fc9fzzz', 'a40bcbb9-871a-43db-ba87-622sds59199fc9fccc'],
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
              {
                type: 'english',
                ids: ['a40bcbb9-871a-43db-ba87-622sds5919', 'a40bcbb9-871a-43db-ba87-622sds5919', 'a40bcbb9-871a-43db-ba87-777', 'a40bcbb9-871a-43db-ba87-622sds591'],
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
          isLock: true,
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
            {
              type: 'english',
              ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9fxxx', 'a40bcbb9-871a-43db-ba87-622sds59199fgfgff', 'a40bcbb9-871a-43db-ba87-622sds59199fc9fzzz', 'a40bcbb9-871a-43db-ba87-622sds59199fc9fccc'],
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
            {
              type: 'english',
              ids: ['a40bcbb9-871a-43db-ba87-622sds59199fc9fxxx', 'a40bcbb9-871a-43db-ba87-622sds59199fgfgff', 'a40bcbb9-871a-43db-ba87-622sds59199fc9fzzz', 'a40bcbb9-871a-43db-ba87-622sds59199fc9fccc'],
              bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/index.png',
            },
          ]
        },
    ],
    readers: [
      {
        id: '5fa869da-166d-45cc-a57d-36dda0a181b56',
        type: 'reader' as ProductType,
        ageGroupId: 3,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/index3.png',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/gallery/1.png',
        ],
        title: "Stary dąb",
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
          english: [
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
                  text: `As I looked out the window this morning, I couldn't help but notice that the weather is absolutely beautiful today, with clear blue skies and a gentle breeze.`,
                  translation: 'Gdy spojrzałem przez okno tego ranka, nie mogłem nie zauważyć, że pogoda jest dziś absolutnie piękna, z bezchmurnym niebem i delikatną bryzą.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3',
                  vocabulary: [
                    {
                      word: 'looked out',
                      translation: 'spojrzeć na zewnątrz',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'
                    },
                    {
                      word: 'notice',
                      translation: 'zauważyć',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'
                    },
                    {
                      word: 'weather',
                      translation: 'zauważyć',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'
                    },
                    {
                      word: 'gentle breeze',
                      translation: 'zauważyć',
                      audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'
                    }
                  ]     
                },
                {
                  type: 'text',
                  text: `I've always been passionate about learning new languages because it not only broadens my horizons but also helps me understand different cultures and connect with people from around the world.`,
                  translation: 'Zawsze byłem pasjonatem uczenia się nowych języków, ponieważ nie tylko poszerza to moje horyzonty, ale także pomaga mi zrozumieć różne kultury i nawiązywać kontakty z ludźmi z całego świata.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                },
                {
                  type: 'text',
                  text: `I've always been passionate about learning new languages because it not only broadens my horizons but also helps me understand different cultures and connect with people from around the world.`,
                  translation: 'Zawsze byłem pasjonatem uczenia się nowych języków, ponieważ nie tylko poszerza to moje horyzonty, ale także pomaga mi zrozumieć różne kultury i nawiązywać kontakty z ludźmi z całego świata.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                },
                {
                  type: 'text',
                  text: `I've always been passionate about learning new languages because it not only broadens my horizons but also helps me understand different cultures and connect with people from around the world.`,
                  translation: 'Zawsze byłem pasjonatem uczenia się nowych języków, ponieważ nie tylko poszerza to moje horyzonty, ale także pomaga mi zrozumieć różne kultury i nawiązywać kontakty z ludźmi z całego świata.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                },
                {
                  type: 'text',
                  text: `I've always been passionate about learning new languages because it not only broadens my horizons but also helps me understand different cultures and connect with people from around the world.`,
                  translation: 'Zawsze byłem pasjonatem uczenia się nowych języków, ponieważ nie tylko poszerza to moje horyzonty, ale także pomaga mi zrozumieć różne kultury i nawiązywać kontakty z ludźmi z całego świata.',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                },
                {
                  type: 'text',
                  text: `I apologize, but I didn't quite catch what you just said - could you please repeat that more slowly and clearly so I can better understand your explanation?`,
                  translation: 'Przepraszam, ale nie do końca zrozumiałem, co właśnie powiedziałeś - czy mógłbyś powtórzyć to wolniej i wyraźniej, żebym mógł lepiej zrozumieć twoje wyjaśnienie?',
                  audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                }
              ]
            },
            {
              type: 'content',
              paragraphs: [
                  {
                    type: 'text',
                    text: `The weather is beautiful today.`,
                    translation: 'Pogoda jest dziś piękna.',
                    audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                  },
                  {
                    type: 'text',
                    text: `I like learning new languages.`,
                    translation: 'Lubię uczyć się nowych języków.',
                    audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                  },
                  {
                    type: 'text',
                    text: `Could you please repeat that?`,
                    translation: 'Czy możesz to powtórzyć?',
                    audioUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/wamp/quiz_voice/wamp_vq_responce.mp3'     
                  }
                ]
            },
            {
              type: 'end',
              title: 'Dobranoc!',
              subtitle: 'Brawo! Świetnie ci poszło!'
            }
          ] as LangReaderPage[]
        } as ReaderContent,
        resource: [
          {
            type: 'quiz',
            ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15337b-43e5-414e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6714e-b4cb-d59f81sd7d0f1edd'],
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
        id: '5fa869da-166d-45cc-a57d-36dda0a181bdf56',
        type: 'reader' as ProductType,
        ageGroupId: 4,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/index.png',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/gallery/2.png',
        ],
        title: "Ciuchcia",
        description: "W świecie, gdzie wszystko musi być szybkie i nowoczesne, poznajemy uroczą Ciuchcię, która powoli podróżuje malowniczą trasą przez góry. Gdy zostaje zastąpiona przez szybsze pociągi, wydaje się, że jej dni dobiegły końca. Jednak pewnego dnia burza pokazuje wszystkim, że czasem to właśnie stare, sprawdzone rozwiązania są najlepsze!",
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
              title: 'Przeczytaj o małej lokomotywie z wielkim sercem!',
              image: 'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/index.png'
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
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/1.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/2.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/3.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/4.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/5.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/6.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/7.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/choo-choo/reader/8.png',
          ],
  
          english: {}
        } as ReaderContent,
        resource: [
          {
            type: 'quiz',
            ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba111', 'fb15337b-43e5-414e-b4cb-d59f81370f1edd', 'fb15337b-43e5-414e-b4cb-d59f8137d0f1edd', 'fb15337b-43e5-6714e-b4cb-d59f81sd7d0f1edd'],
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
        id: '5fa869da-166d-45cc-a57d-36ddfda181b56',
        type: 'reader' as ProductType,
        ageGroupId: 3,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/index.png',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/gallery/cover.png',
        ],
        title: "Natalia i smok",
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
              subTitle: 'Czas czytania: 3-4 minuty',
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
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/1.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/2.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/3.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/4.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/5.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/6.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/natalie_and_dragon/reader/7.png',
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
        id: '5fa869da-166d-45ccfd-d57d-36dda0a181b56',
        type: 'reader' as ProductType,
        ageGroupId: 3,
        indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/index.png',
        gallery: [ 
          'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/gallery/cover.png',
        ],
        title: "Zosia i wielki strach",
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
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/1.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/2.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/3.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/4.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/5.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/6.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/7.png',
            'https://goldfish.fra1.digitaloceanspaces.com/readers/zosia/reader/8.png',
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
            ids: ['16271817-907d-4896-8882-zzzz', 'f978f1cb-c6d7-4c56-8e84-22b54f36sdsd'],
          },
        ]
      },
    ]
}