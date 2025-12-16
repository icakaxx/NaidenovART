export interface ProjectImage {
  src: string;
}

export interface ProjectSeries {
  name: string; // Identifier for the series, e.g. "main", "interior", "wall"
  images: string[];
}

export interface ProjectData {
  id: string;
  titleKey: string; // To look up in translations
  coverImage: string;
  series: ProjectSeries[];
}

export const objectsData: ProjectData[] = [
  {
    id: "zhechev",
    titleKey: "Zhechev", // Corresponds to translations title.
    // Note: In translations it is "Жечев" / "Zhechev".
    // I'll use the array index from translations if needed, or just map by this ID.
    // Actually, checking translations.ts, it's an array of items. 
    // I need to align the data model. 
    // Let's assume the order in translations matches or I'll look it up by English title.
    coverImage: "/images/objects/Zhechev.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/objects/Zhechev/zhechev1.webp",
          "/images/objects/Zhechev/zhechev2.webp",
          "/images/objects/Zhechev/zhechev3.webp",
        ],
      },
      {
        name: "Wall",
        images: [
          "/images/objects/Zhechev/zhechev-wall-1.webp",
          "/images/objects/Zhechev/zhechev-wall-2.webp",
          "/images/objects/Zhechev/zhechev-wall-3.webp",
          "/images/objects/Zhechev/zhechev-wall-4.webp",
        ],
      },
    ],
  },
  {
    id: "pizza-stop",
    titleKey: "Pizza Stop",
    coverImage: "/images/objects/pizza-stop.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/objects/Pizzastop/pizzastop1.webp",
          "/images/objects/Pizzastop/pizzastop2.webp",
          "/images/objects/Pizzastop/pizzastop3.webp",
          "/images/objects/Pizzastop/pizzastop4.webp",
          "/images/objects/Pizzastop/pizzastop5.webp",
        ],
      },
    ],
  },
  {
    id: "asea-m",
    titleKey: "ASEA-M Detailing Studio",
    coverImage: "/images/objects/aseam.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/objects/aseam/aseam1.webp",
          "/images/objects/aseam/aseam2.webp",
          "/images/objects/aseam/aseam3.webp",
        ],
      },
      {
        name: "Interior", // "aseamin" likely means interior
        images: [
          "/images/objects/aseam/aseamin1.webp",
          "/images/objects/aseam/aseamin2.webp",
          "/images/objects/aseam/aseamin3.webp",
          "/images/objects/aseam/aseamin4.webp",
          "/images/objects/aseam/aseamin5.webp",
        ],
      },
    ],
  },
  {
    id: "068-barbershop",
    titleKey: "068 barbershop",
    coverImage: "/images/objects/barbershop.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/objects/068barbershop/barbershop1.webp",
          "/images/objects/068barbershop/barbershop2.webp",
          "/images/objects/068barbershop/barbershop3.webp",
          "/images/objects/068barbershop/barbershop4.webp",
          "/images/objects/068barbershop/barbershop5.webp",
        ],
      },
    ],
  },
  {
    id: "prelom",
    titleKey: "Село Прелом", // "Selo Prelom" in EN
    coverImage: "/images/objects/prelom.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/objects/prelom/prelom1.webp",
          "/images/objects/prelom/prelom2.webp",
          "/images/objects/prelom/prelom3.webp",
          "/images/objects/prelom/prelom4.webp",
        ],
      },
    ],
  },
  {
    id: "vornikova",
    titleKey: "Vornikova Modern Dance School",
    coverImage: "/images/objects/vornikova.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/objects/vornikova/vornikova1.webp",
          "/images/objects/vornikova/vornikova2.webp",
          "/images/objects/vornikova/vornikova3.webp",
          "/images/objects/vornikova/vornikova4.webp",
          "/images/objects/vornikova/vornikova5.webp",
        ],
      },
    ],
  },
];



