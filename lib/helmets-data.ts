export interface HelmetProjectSeries {
  name: string;
  images: string[];
}

export interface HelmetProjectData {
  id: string;
  titleKey: string;
  coverImage: string;
  series: HelmetProjectSeries[];
}

export const helmetsData: HelmetProjectData[] = [
  {
    id: "helmet-collection",
    titleKey: "Helmet Collection",
    coverImage: "/images/helmets/helmets10.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/helmets/helmets1.webp",
          "/images/helmets/helmets2.webp",
          "/images/helmets/helmets3.webp",
          "/images/helmets/helmets4.webp",
          "/images/helmets/helmets5.webp",
          "/images/helmets/helmets6.webp",
          "/images/helmets/helmets7.webp",
          "/images/helmets/helmets8.webp",
          "/images/helmets/helmets9.webp",
          "/images/helmets/helmets10.webp",
        ],
      },
    ],
  },
];




