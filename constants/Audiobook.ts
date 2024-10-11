export const audiobook = {
    id: "pl-audiobook-001",
    title: "Einstein. Niezwykła mysia podróż przez czasoprzestrzeń",
    author: "Jan Kowalski",
    description: "Fascynująca historia o przygodach w świecie wyobraźni...",
    image: "https://goldfish.fra1.digitaloceanspaces.com/readers/goldfish_text/Leonardo_Phoenix_A_serene_beauty_landscape_featuring_a_stunnin_1.jpg",
    language: "pl-PL",
    genres: ["Fantasy", "Przygodowe"],
    publishDate: "2024-03-15",
    publisher: "Wydawnictwo XYZ",
    versions: [
      {
        type: "pl",
        name: 'Wiosna',
        ageGroup: "adult",
        narrator: "Anna Nowak",
        duration: 36000, // w sekundach
        isAbridged: false,
        hasMusic: false,
        isDramatized: false,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4"
      },
      {
        type: "pl",
        name: 'Lato',
        ageGroup: "adult",
        narrator: "Anna Nowak",
        duration: 36000, // w sekundach
        isAbridged: false,
        hasMusic: false,
        isDramatized: false,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4"
      },
      {
        type: "uk",
        name: 'Wiosna',
        ageGroup: "young-adult",
        cast: ["Piotr Nowak", "Maria Kowalska", "Jan Wiśniewski"],
        duration: 40000,
        isAbridged: false,
        hasMusic: true,
        isDramatized: true,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/Dawid%20Podsiadlo%20-%20Ma%C5%82omiasteczkowy.mp4"
      },
      {
        type: "pl-uk",
        name: 'Rozdział 12',
        ageGroup: "all",
        narrator: "Tomasz Skrót",
        duration: 18000,
        isAbridged: true,
        hasMusic: false,
        isDramatized: false,
        audioFile: "https://goldfish.fra1.digitaloceanspaces.com/POLUZJANCI%20-%20Trzy%20metry%20ponad%20ziemi%C4%85.mp4"
      },
    ]
  };