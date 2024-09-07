export const audiobook = {
    id: "pl-audiobook-001",
    title: "Przykładowy Tytuł Audiobooka",
    author: "Jan Kowalski",
    description: "Fascynująca historia o przygodach w świecie wyobraźni...",
    coverImage: "https://example.com/book-cover.jpg",
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
        audioFile: "test.mp3"
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
        audioFile: "test.mp3"
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
        audioFile: "test.mp3"
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
        audioFile: "test.mp3"
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
        audioFile: "test.mp3"
      }
    ]
  };