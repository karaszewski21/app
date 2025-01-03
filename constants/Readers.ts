import { ProductType, ReaderContent } from "@/model";
import { ReaderPage } from "@/model/reader";

export const readers = [
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
        rating: 4, 
        reviewCount: 120,
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
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/quiz/quiz-baner.png',
          },
          {
            type: 'audiobook',
            ids: ['bc6de1ad-de39-44d0-97fa-6bac2301e92bzosia', '8161eb39-7ab7-4186-b7fd-0f43b54df133zosia'],
            bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/readers/old_oak/audiobook/audiobook-baner.png',
          },
          {
            type: 'printouts',
            ids: ['16271817-907d-4896-8882-zzzz', 'f978f1cb-c6d7-4c56-8e84-22b54f36sdsd'],
          },
        ]
      },
  ];
