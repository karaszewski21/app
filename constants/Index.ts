import { stories } from '@/constants/Stories';
import { ageGroups } from '@/constants/AgeGroups';
import { BookContent, ProductType, ReaderContent } from '@/model';
import { ReaderPage } from '@/model/reader';

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
        id: '5fa869da-166d-45cc-a57d-36dda0a181bdf56',
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
    ]
}