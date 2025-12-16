export interface CarProjectSeries {
  name: string;
  images: string[];
}

export interface CarProjectData {
  id: string;
  titleKey: string;
  coverImage: string;
  series: CarProjectSeries[];
}

export const carsData: CarProjectData[] = [
  {
    id: "alfa-romeo-156",
    titleKey: "Alfa Romeo 156",
    coverImage: "/images/vehicles/alfa-romeo/alfa1.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/vehicles/alfa-romeo/alfa1.webp",
          "/images/vehicles/alfa-romeo/alfa2.webp",
          "/images/vehicles/alfa-romeo/alfa3.webp",
          "/images/vehicles/alfa-romeo/alfa4.webp",
          "/images/vehicles/alfa-romeo/alfa5.webp",
          "/images/vehicles/alfa-romeo/alfa6.webp",
          "/images/vehicles/alfa-romeo/alfa7.jpg",
          "/images/vehicles/alfa-romeo/alfa8.jpg",
        ],
      },
    ],
  },
  {
    id: "road-assist",
    titleKey: "Road Assist",
    coverImage: "/images/vehicles/road-assist/road1.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/vehicles/road-assist/road1.webp",
          "/images/vehicles/road-assist/road2.webp",
          "/images/vehicles/road-assist/road3.webp",
          "/images/vehicles/road-assist/road4.webp",
          "/images/vehicles/road-assist/road5.webp",
          "/images/vehicles/road-assist/road6.webp",
          "/images/vehicles/road-assist/road7.webp",
          "/images/vehicles/road-assist/road8.webp",
        ],
      },
    ],
  },
  {
    id: "kadisha",
    titleKey: "Kadisha",
    coverImage: "/images/vehicles/kadisha/1000026344.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/vehicles/kadisha/1000026344.webp",
          "/images/vehicles/kadisha/1000026345.webp",
          "/images/vehicles/kadisha/1000026346.webp",
        ],
      },
    ],
  },
];



