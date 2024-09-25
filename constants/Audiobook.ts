export const audiobook = {
    id: "pl-audiobook-001",
    title: "Przykładowy Tytuł Audiobooka",
    author: "Jan Kowalski",
    description: "Fascynująca historia o przygodach w świecie wyobraźni...",
    image: "https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg",
    language: "pl-PL",
    genres: ["Fantasy", "Przygodowe"],
    publishDate: "2024-03-15",
    publisher: "Wydawnictwo XYZ",
    versions: [
      {
        id: "version-standard-adult",
        type: "standard",
        ageGroup: "adult",
        narrator: "Anna Nowak",
        duration: 36000, // w sekundach
        isAbridged: false,
        hasMusic: false,
        isDramatized: false,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4"
      },
      {
        id: "version-dramatized-ya",
        type: "dramatized",
        ageGroup: "young-adult",
        cast: ["Piotr Nowak", "Maria Kowalska", "Jan Wiśniewski"],
        duration: 40000,
        isAbridged: false,
        hasMusic: true,
        isDramatized: true,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/Dawid%20Podsiadlo%20-%20Ma%C5%82omiasteczkowy.mp4"
      },
      {
        id: "version-abridged",
        type: "abridged",
        ageGroup: "all",
        narrator: "Tomasz Skrót",
        duration: 18000,
        isAbridged: true,
        hasMusic: false,
        isDramatized: false,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/POLUZJANCI%20-%20Trzy%20metry%20ponad%20ziemi%C4%85.mp4"
      },
      {
        id: "version-commentary",
        type: "commentary",
        ageGroup: "adult",
        narrator: "Autor Oryginalny",
        commentator: "Prof. Adam Mądry",
        duration: 45000,
        isAbridged: false,
        hasMusic: false,
        isDramatized: false,
        hasCommentary: true,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/POLUZJANCI%20-%20Trzy%20metry%20ponad%20ziemi%C4%85.mp4"
      },
      {
        id: "version-accessibility",
        type: "accessibility",
        ageGroup: "all",
        narrator: "Marta Dostępna",
        duration: 38000,
        isAbridged: false,
        hasMusic: false,
        isDramatized: false,
        accessibilityFeatures: ["descriptive-audio", "simplified-language"],
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/POLUZJANCI%20-%20Trzy%20metry%20ponad%20ziemi%C4%85.mp4"
      }
    ]
  };