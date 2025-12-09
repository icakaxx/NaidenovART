import type { Language } from "@/types/language";

export const routes = {
  home: "/",
  paintings: "/paintings",
  a3: "/paintings/a3",
  a4: "/paintings/a4",
  projects: "/projects",
  objects: "/projects/objects",
  cars: "/projects/cars",
  helmets: "/projects/helmets",
  laptops: "/projects/laptops",
  street: "/street-cause",
  messages: "/street-cause/messages",
  awards: "/street-cause/awards",
  clothing: "/clothing",
} as const;

export const translations = {
  bg: {
    nav: {
      paintings: "Картини",
      projects: "Проекти",
      street: "Улична кауза",
      clothing: "Дрехи",
      subtabs: {
        a3: "А3 формат (30х40 см.)",
        a4: "А4 формат (29х19см.)",
        objects: "Обекти",
        cars: "Автомобили",
        helmets: "Каски",
        laptops: "Лаптопи",
        messages: "Послания",
        awards: "Награди",
      },
    },
    hero: {
      tagline: "Рисуване по всичко",
      description:
        "От платното до уличните стени и текстила. Изкуството е начин на живот, а не просто хоби.",
      cta: "Виж портфолио",
    },
    portfolio: {
      galleryLabel: "Галерия",
      title: "Избрани творби",
      viewAll: "Разгледай всички",
      cards: [
        { title: 'Абстракция "Начало"', category: "Картини" },
        { title: "Уличен Проект София", category: "Улична кауза" },
        { title: 'Колекция "Зима"', category: "Дрехи" },
      ],
    },
    paintings: {
      a3Title: "А3 формат",
      a3Subtitle: "30x40 см - 10 творби",
      a3Description: "",
      a3OrderNote:
        "Картините по поръчка са един от най-търсените и предпочитани подаръци за всякакъв повод. Изработват се индивидуално според желанието на клиента и са подходящи както за лични, така и за корпоративни събития. Всяка поръчана картина пристига при Вас в рамка и специално обезопасена. Към нея добавяме ръчно изрисувана подаръчна кутия – напълно безплатно, за да получите завършен, елегантен и готов за подаряване продукт.",
      a4Title: "Формат А4",
      a4Subtitle: "29x19 см - 10 творби",
      a4Description: "",
      a4OrderNote:
        "Картините по поръчка са един от най-търсените и предпочитани подаръци за всякакъв повод. Изработват се индивидуално според желанието на клиента и са подходящи както за лични, така и за корпоративни събития. Всяка поръчана картина пристига при Вас в рамка и специално обезопасена. Към нея добавяме ръчно изрисувана подаръчна кутия – напълно безплатно, за да получите завършен, елегантен и готов за подаряване продукт.",
    },
    objects: {
      description: "Вниманието и отношението към всеки обект са водещи принципи. Всяка идея бива скицирана след консултация и се пресъздава след одобрението на клиента.",
      items: [
        { title: "Жечев", image: "/images/objects/Zhechev.webp", id: "zhechev" },
        { title: "Пица Стоп", image: "/images/objects/pizza-stop.webp", id: "pizza-stop" },
        { title: "ASEA-M Detailing Studio", image: "/images/objects/aseam.webp", id: "asea-m" },
        { title: "068 barbershop", image: "/images/objects/barbershop.webp", id: "068-barbershop" },
        { title: "Село Прелом", image: "/images/objects/prelom.webp", id: "prelom" },
        { title: "Vornikova Modern Dance School", image: "/images/objects/vornikova.webp", id: "vornikova" },
      ],
    },
    cars: {
      alfaromeoTitle: "Проект Alfa Romeo 156",
      alfaromeoDescription: "",
      roadassistTitle: "Проект Пътна помощ",
      roadassistDescription: "",
      kadishaTitle: "Проект Кадиша",
      kadishaDescription: "",
    },
    projects: {
      objectsTitle: "Обекти",
      objectsDescription: "Графично оформление и брандинг на различни обекти - от заведения до бизнес помещения.",
      carsTitle: "Автомобили",
      carsDescription: "Персонализирано графично оформление на автомобили с внимание към всеки детайл.",
      helmetsTitle: "Каски",
      helmetsDescription: "Уникален дизайн и графично оформление на каски за мотоциклетисти.",
      laptopsTitle: "Лаптопи",
      laptopsDescription: "Креативно графично оформление на лаптопи за персонализиран стил.",
    },
    pages: {
      paintingsIntro:
        "Изберете формат, за да разгледате наличните творби или да направите поръчка.",
      projectsIntro: "Изберете категория проекти, за да разгледате реализираните работи.",
      carsIntro: "Изберете проект, за да разгледате реализираните автомобили.",
      carsDescription: "Всяко превозно средство преминава през пълно третиране на повърхността. Това е като цялостно пребоядисване, като се рисува върху боята, служеща за база, преди лакиране. На този етап, NAIDENOVART предлага рисуване само върху предварително подготвени автомобили.",
      streetIntro: "Изберете категория улична кауза, за да разгледате инициативите.",
      messagesIntro: "Уличните послания в гр. Ловеч обикалят българският интернет от 2023 г. до днес. Тяхната задача е да усмихват, вдъхновяват и всяват добро настроение в забързаното ежедневие сред хората. Каузата се породи след кървавия случай с Дебора Михайлова, като ловешките улици осъмнаха с послания в подкрепа на жените, жертви на домашно насилие. Тогава се уверихме, че освен да усмихват, могат и да помагат на хората, карайки ги да се чувстват разбрани. Те придобиват голяма популярност с всеки изминал път, като тяхното въздействие е факт и през социалните мрежи. За тези улични инициативи, NAIDENOVART бе награден от \"24 часа\" в ежегодната им церемония за достойните българи. Дни след това и от кметът на Ловеч - Страцимир Петков, за издигане престижа на Ловеч.",
      clothingIntro: "Coming soon",
    },
    street: {
      messagesTitle: "Послания",
      messagesDescription: "Улични послания и инициативи, които вдъхновяват и подкрепят общността.",
      awardsTitle: "Награди",
      awardsDescription: "Признания и награди за принос към изкуството и социалните каузи.",
    },
    messages: {
      customTitle: "Послания по поръчка",
      customDescription: "Индивидуалните улични послания по поръчка са трогателен и подходящ метод за всеки повод. Те допринесоха емоционално за брачни предложения, изненади за рождени дни, покани за бал или обяснение в любов към някого. Реклами НЕ се приемат.",
      cause1Title: "Улична кауза 1",
      cause1Description: "Уличните послания в гр. Ловеч обикалят българският интернет от 2023 г. до днес. Тяхната задача е да усмихват, вдъхновяват и всяват добро настроение в забързаното ежедневие сред хората.",
      cause2Title: "Улична кауза 2",
      cause2Description: "Уличните послания в гр. Ловеч обикалят българският интернет от 2023 г. до днес. Тяхната задача е да усмихват, вдъхновяват и всяват добро настроение в забързаното ежедневие сред хората.",
      cause3Title: "Улична кауза 3",
      cause3Description: "Уличните послания в гр. Ловеч обикалят българският интернет от 2023 г. до днес. Тяхната задача е да усмихват, вдъхновяват и всяват добро настроение в забързаното ежедневие сред хората.",
    },
  },
  en: {
    nav: {
      paintings: "Paintings",
      projects: "Projects",
      street: "Street cause",
      clothing: "Clothing",
      subtabs: {
        a3: "A3 format (30x40 cm)",
        a4: "A4 format (29x19 cm)",
        objects: "Objects",
        cars: "Cars",
        helmets: "Helmets",
        laptops: "Laptops",
        messages: "Messages",
        awards: "Awards",
      },
    },
    hero: {
      tagline: "Painting on everything",
      description:
        "From canvas to street walls and textiles. Art is a way of life, not just a hobby.",
      cta: "View portfolio",
    },
    portfolio: {
      galleryLabel: "Gallery",
      title: "Selected works",
      viewAll: "View all",
      cards: [
        { title: 'Abstraction "Beginning"', category: "Paintings" },
        { title: "Street Project Sofia", category: "Street cause" },
        { title: 'Collection "Winter"', category: "Clothing" },
      ],
    },
    paintings: {
      a3Title: "A3 format",
      a3Subtitle: "30x40 cm - 10 works",
      a3Description: "",
      a3OrderNote:
        "Custom paintings are one of the most requested and appreciated gifts for any occasion. Each piece is made to order based on the client’s vision and is suitable for both personal and corporate events. Every ordered painting arrives framed and securely packaged. We include a hand-painted gift box at no extra cost, so you receive a complete, elegant, ready-to-gift piece.",
      a4Title: "A4 format",
      a4Subtitle: "29x19 cm - 10 works",
      a4Description: "",
      a4OrderNote:
        "Custom paintings are one of the most requested and appreciated gifts for any occasion. Each piece is made to order based on the client’s vision and is suitable for both personal and corporate events. Every ordered painting arrives framed and securely packaged. We include a hand-painted gift box at no extra cost, so you receive a complete, elegant, ready-to-gift piece.",
    },
    objects: {
      description: "Attention and attitude towards every object are guiding principles. Each idea is sketched after consultation and recreated upon client approval.",
      items: [
        { title: "Zhechev", image: "/images/objects/Zhechev.webp", id: "zhechev" },
        { title: "Pizza Stop", image: "/images/objects/pizza-stop.webp", id: "pizza-stop" },
        { title: "ASEA-M Detailing Studio", image: "/images/objects/aseam.webp", id: "asea-m" },
        { title: "068 barbershop", image: "/images/objects/barbershop.webp", id: "068-barbershop" },
        { title: "Selo Prelom", image: "/images/objects/prelom.webp", id: "prelom" },
        { title: "Vornikova Modern Dance School", image: "/images/objects/vornikova.webp", id: "vornikova" },
      ],
    },
    cars: {
      alfaromeoTitle: "Alfa Romeo 156 Project",
      alfaromeoDescription: "",
      roadassistTitle: "Road Assist Project",
      roadassistDescription: "",
      kadishaTitle: "Kadisha Project",
      kadishaDescription: "",
    },
    projects: {
      objectsTitle: "Objects",
      objectsDescription: "Graphic design and branding for various facilities - from restaurants to business premises.",
      carsTitle: "Cars",
      carsDescription: "Custom vehicle graphics with attention to every detail.",
      helmetsTitle: "Helmets",
      helmetsDescription: "Unique design and graphic styling for motorcycle helmets.",
      laptopsTitle: "Laptops",
      laptopsDescription: "Creative graphic design for laptops with personalized style.",
    },
    street: {
      messagesTitle: "Messages",
      messagesDescription: "Street messages and initiatives that inspire and support the community.",
      awardsTitle: "Awards",
      awardsDescription: "Recognitions and awards for contributions to art and social causes.",
    },
    messages: {
      customTitle: "Custom Messages",
      customDescription: "Individual custom street messages are a touching and appropriate method for every occasion. They contributed emotionally to marriage proposals, birthday surprises, ball invitations or declaration of love to someone. ADS are NOT accepted.",
      cause1Title: "Street Cause 1",
      cause1Description: "The street messages in Lovech have been circulating Bulgarian internet from 2023 to the present. Their task is to smile, inspire and instill good mood in the busy daily life among people.",
      cause2Title: "Street Cause 2",
      cause2Description: "The street messages in Lovech have been circulating Bulgarian internet from 2023 to the present. Their task is to smile, inspire and instill good mood in the busy daily life among people.",
      cause3Title: "Street Cause 3",
      cause3Description: "The street messages in Lovech have been circulating Bulgarian internet from 2023 to the present. Their task is to smile, inspire and instill good mood in the busy daily life among people.",
    },
    pages: {
      paintingsIntro:
        "Choose a format to view available works or place a commission.",
      projectsIntro: "Choose a project category to view completed works.",
      carsIntro: "Choose a project to view completed vehicles.",
      carsDescription: "Each vehicle undergoes full surface treatment. This is like a complete repainting, where painting is done on the base paint before varnishing. At this stage, NAIDENOVART offers painting only on pre-prepared vehicles.",
      streetIntro: "Choose a street cause category to view the initiatives.",
      messagesIntro: "The street messages in Lovech have been circulating Bulgarian internet from 2023 to the present. Their task is to smile, inspire and instill good mood in the busy daily life among people. The cause arose after the bloody case with Debora Mihaylova, when the streets of Lovech woke up with messages in support of women, victims of domestic violence. Then we were convinced that besides smiling, they can help people, making them feel understood. They gain great popularity with each passing time, and their impact is a fact through social networks. For these street initiatives, NAIDENOVART was awarded by \"24 chasa\" in their annual ceremony for worthy Bulgarians. Days later also from the mayor of Lovech - Stratsimir Petkov, for raising the prestige of Lovech.",
      clothingIntro: "Coming soon",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];

export const buildNavItems = (copy: Translation) => [
  {
    name: copy.nav.paintings,
    href: routes.paintings,
    subtabs: [
      { name: copy.nav.subtabs.a3, href: routes.a3 },
      { name: copy.nav.subtabs.a4, href: routes.a4 },
    ],
  },
  {
    name: copy.nav.projects,
    href: routes.projects,
    subtabs: [
      { name: copy.nav.subtabs.objects, href: routes.objects },
      { name: copy.nav.subtabs.cars, href: routes.cars },
      { name: copy.nav.subtabs.helmets, href: routes.helmets },
      { name: copy.nav.subtabs.laptops, href: routes.laptops },
    ],
  },
  {
    name: copy.nav.street,
    href: routes.street,
    subtabs: [
      { name: copy.nav.subtabs.messages, href: routes.messages },
      { name: copy.nav.subtabs.awards, href: routes.awards },
    ],
  },
  { name: copy.nav.clothing, href: routes.clothing },
];
