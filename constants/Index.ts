import { stories } from '@/constants/Stories';
import { ageGroups } from '@/constants/AgeGroups';
import { ResourceType } from '@/model';

export const index = {
    stories: stories,
    ageGroups: ageGroups,
    indexBooks: [
        {
            id: '362d5de4-691d-4cc5-9d0b-52195009d988',
            type: 'book' as ResourceType,
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
        },
        {
            id: '37a179c4-df70-4b14-84b5-e78580b97166',
            type: 'book' as ResourceType,
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
        },
        {
            id: '7fb7fe03-fcf3-4dc7-a093-ef45d60e985b',
            type: 'book' as ResourceType,
            indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/einstein/einstainindexpromo.mp4',
            gallery: [ 
              'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_serene_and_breathtaking_beauty_landscape_fe_2.jpg', 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
            ],
            title: "Tytuł książki 3",
            description: "Opis książki ",
            isLock: false,
            rating: 3.5, 
            reviewCount: 85,
        },
        {
            id: 'a3118f6e-a4b6-426f-88b7-f934b63a29b4',
            type: 'book' as ResourceType,
            indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
            gallery: [ 
              'https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg', 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
            ],
            title: "Tytuł książki 5",
            description: "Opis książki ",
            isLock: false,
            rating: 3.5, 
            reviewCount: 85,
        },
    ],
    indexReaders: [
        {
            id: 'aa839df8-2ce5-4b42-87ec-46f9b35e4da9',
            type: 'reader' as ResourceType,
            indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
            gallery: [ 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
              'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
            ],
            title: "Tytuł Czytanki 1",
            description: "Opis Czytanki",
            rating: 4, 
            reviewCount: 120,
        },
        {
            id: '5fa869da-166d-45cc-a57d-36dda0a181b3',
            type: 'reader' as ResourceType,
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
        },
        {
            id: '5edd9000-3681-4ef8-b49b-f9caff040de2',
            type: 'reader' as ResourceType,
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
        },
        {
            id: 'ef675ec5-6a84-4493-91e1-a68881043f93',
            type: 'reader' as ResourceType,
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
        },
    ]
}