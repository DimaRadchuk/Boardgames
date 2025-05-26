const airport = ["Монтреаль - Трюдо", "Гітроу", "Ханеда (зелена)", "Ґарденмуен (зелена)"];

const gameDatePilots = [
  {
    date: "19-01-2025",
    airport: "Ханеда",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук Д.", pilot: "1-й пілот"},
      { player: "Радчук О.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "19-01-2025",
    airport: "Ханеда",
    complexity: "Зелений",
    result: "Перемога",
    players: [
      { player: "Радчук Д.", pilot: "1-й пілот"},
      { player: "Радчук О.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "19-01-2025",
    airport: "Ґарденмуен",
    complexity: "Зелений",
    result: "Перемога",
    players: [
      { player: "Радчук Д.", pilot: "1-й пілот"},
      { player: "Радчук О.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "26-01-2025",
    airport: "Гарстфілд-Джексон",
    complexity: "Зелений",
    result: "Перемога",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "01-02-2025",
    airport: "Вацлав Гавен",
    complexity: "Зелений",
    result: "Перемога",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "01-02-2025",
    airport: "Гітроу",
    complexity: "Жовтий",
    result: "Перемога",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "17-02-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
    {
    date: "17-02-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "17-02-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "09-03-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук Д.", pilot: "1-й пілот"},
      { player: "Радчук О.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "09-03-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук Д.", pilot: "1-й пілот"},
      { player: "Радчук О.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "09-03-2025",
    airport: "Тонконтін",
    complexity: "Жовтий",
    result: "Перемога",
    players: [
      { player: "Радчук Д.", pilot: "1-й пілот"},
      { player: "Радчук О.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "16-03-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "16-03-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "16-03-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Поразка",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "16-03-2025",
    airport: "Гульєльмо Марконі",
    complexity: "Зелений",
    result: "Перемога",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
  {
    date: "16-03-2025",
    airport: "Ґалеан",
    complexity: "Жовтий",
    result: "Перемога",
    players: [
      { player: "Радчук О.", pilot: "1-й пілот"},
      { player: "Радчук Д.", pilot: "2-й пілот"},
    ],
  },
];

// Війна персня

const gameDateWarRingCardGame = [
  {
    date: "05-01-2025",
    players: [
      { player: "Радчук Д.", faction: "Вільні народи", point: 1},
      { player: "Радчук О.", faction: "Тінь", point: 0},
    ],
    description: "19 - 15",
  },
  {
    date: "26-01-2025",
    players: [
      { player: "Радчук Д.", faction: "Тінь", point: 1},
      { player: "Радчук О.", faction: "Вільні народи", point: 0},
    ],
    description: "23 - 14",
  },
  {
    date: "04-02-2025",
    players: [
      { player: "Радчук Д.", faction: "Вільні народи", point: 0},
      { player: "Радчук О.", faction: "Тінь", point: 1},
    ],
    description: "20 - 20",
  },
  {
    date: "16-02-2025",
    players: [
      { player: "Радчук Д.", faction: "Тінь", point: 1},
      { player: "Радчук О.", faction: "Вільні народи", point: 0},
    ],
    description: "20 - 17",
  },
];

const gameTurbo = [
  {
    date: "26-01-2025",
    track: "США",
    expansions: [
      { expansion: "Туман"}, 
      { expansion: "Гараж"},
    ],
    players: [
      { player: "Тупало В.", position: 1, point: 9},
      { player: "Радчук Д.", position: 2, point: 6},
      { player: "Ваврисюк І.", position: 3, point: 4},
      { player: "Дзих В.", position: 4, point: 3},
      { player: "Жилич В.", position: 5, point: 2},
    ],
  },
  {
    date: "25-05-2025",
    track: "Велика Британія",
    expansions: [
      { expansion: "Дощ"}, 
      { expansion: "Гараж"},
    ],
    players: [
      { player: "Дзих В.", position: 1, point: 9},
      { player: "Жилич В.", position: 2, point: 6},
      { player: "Радчук Д.", position: 3, point: 4},
      { player: "Ваврисюк І.", position: 4, point: 3},
      { player: "Крутих Б.", position: 5, point: 2},
      { player: "Богач М.", position: 6, point: 1},
    ],
  },
];
