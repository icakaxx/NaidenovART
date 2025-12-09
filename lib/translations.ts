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
  about: "/about",
} as const;

export const translations = {
  bg: {
    nav: {
      paintings: "Картини",
      projects: "Проекти",
      street: "Улична кауза",
      clothing: "Дрехи",
      about: "За мен",
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
    },
    pages: {
      paintingsIntro:
        "Изберете формат, за да разгледате наличните творби или да направите поръчка.",
      projectsIntro: "Разделът е в подготовка.",
      carsIntro: "Изберете проект, за да разгледате реализираните автомобили.",
      streetIntro: "Уличната кауза и посланията ще бъдат споделени скоро.",
      clothingIntro: "Coming soon",
      aboutIntro: "Информация за автора ще бъде добавена скоро.",
    },
  },
  en: {
    nav: {
      paintings: "Paintings",
      projects: "Projects",
      street: "Street cause",
      clothing: "Clothing",
      about: "About me",
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
    },
    pages: {
      paintingsIntro:
        "Choose a format to view available works or place a commission.",
      projectsIntro: "This section is in preparation.",
      carsIntro: "Choose a project to view completed vehicles.",
      streetIntro: "Street cause stories and messages are coming soon.",
      clothingIntro: "Coming soon",
      aboutIntro: "Author information will be added soon.",
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
  { name: copy.nav.about, href: routes.about },
];
