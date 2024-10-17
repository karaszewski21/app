import { LangType, ProductType } from "@/model";

export const players = [
    {
      id: '8d5209bb-933a-4812-bb68-c08f8029680d',
      type: 'audio_play' as ProductType,
      ageGroupId: 2,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł słuchowska 1",
      description: "Opis słuchowska",
      rating: 3.5, 
      reviewCount: 85,
      versions: [
        {
          type: "pl" as LangType,
          name: 'Wiosna',
          narrator: "Anna Nowak",
          duration: 36000, // w sekundach
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png',
          audioFile: "https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4"
        },
        {
          type: "eng" as LangType,
          name: 'Wiosna',
          narrator: "Anna Nowak",
          duration: 40000,
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg',
          audioFile: "https://goldfish.fra1.digitaloceanspaces.com/Dawid%20Podsiadlo%20-%20Ma%C5%82omiasteczkowy.mp4"
        },
      ],
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: '02ce1335-98d3-45c2-b515-da8e30575b39',
      type: 'audio_play' as ProductType,
      ageGroupId: 2,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł słuchowska 2",
      description: "Opis słuchowska ",
      rating: 3.5, 
      reviewCount: 85,
      versions: [
        {
          type: "pl" as LangType,
          name: 'Wiosna',
          narrator: "Anna Nowak",
          duration: 36000, // w sekundach
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg',
          audioFile: "https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4"
        },
        {
          type: "eng" as LangType,
          name: 'Wiosna',
          narrator: "Anna Nowak",
          duration: 40000,
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg',
          audioFile: "https://goldfish.fra1.digitaloceanspaces.com/Dawid%20Podsiadlo%20-%20Ma%C5%82omiasteczkowy.mp4"
        },
      ],
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    },
    {
      id: '02ce1335-98d3-45c2-b515-da8e30575b69',
      type: 'audio_play' as ProductType,
      ageGroupId: 5,
      indexUrl: 'https://goldfish.fra1.digitaloceanspaces.com/books/amp/indexpromo.mp4',
      gallery: [ 
        'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_Book_Cover_The_Happy_Goldfish_AdventuresBackg_3.jpg', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png', 
        'https://goldfish.fra1.digitaloceanspaces.com/atlas_ma%C5%82ych_przyjemnosci/cover.png'
      ],
      title: "Tytuł słuchowska 2",
      description: "Opis słuchowska ",
      rating: 3.5, 
      reviewCount: 85,
      versions: [
        {
          type: "pl" as LangType,
          name: 'Wiosna',
          narrator: "Anna Nowak",
          duration: 36000, // w sekundach
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg',
          audioFile: "https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4"
        },
        {
          type: "eng" as LangType,
          name: 'Wiosna',
          narrator: "Anna Nowak",
          duration: 40000,
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg',
          audioFile: "https://goldfish.fra1.digitaloceanspaces.com/Dawid%20Podsiadlo%20-%20Ma%C5%82omiasteczkowy.mp4"
        },
      ],
      resource: [
        {
          type: 'quiz',
          ids: ['9dcceb17-1189-42f9-815e-46b5988d1ba2', 'fb15337b-43e5-414e-b4cb-d59f81370f1e'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
        {
          type: 'printouts',
          ids: ['16271817-907d-4896-8882-060bc61d5418', 'd5935d8f-aa77-4c0d-a32f-b9bb5a2b1fb7'],
          bannerUrl: 'https://goldfish.fra1.digitaloceanspaces.com/goldfish-logo.png',
        },
      ]
    }
  ];