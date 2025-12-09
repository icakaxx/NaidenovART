export interface LaptopProjectSeries {
  name: string;
  images: string[];
}

export interface LaptopProjectData {
  id: string;
  titleKey: string;
  coverImage: string;
  series: LaptopProjectSeries[];
}

export const laptopsData: LaptopProjectData[] = [
  {
    id: "laptops-collection",
    titleKey: "Laptop Collection",
    coverImage: "/images/laptops/laptop8.webp",
    series: [
      {
        name: "Main",
        images: [
          "/images/laptops/laptop1.webp",
          "/images/laptops/laptop2.webp",
          "/images/laptops/laptop3.webp",
          "/images/laptops/laptop4.webp",
          "/images/laptops/laptop5.webp",
          "/images/laptops/laptop6.webp",
          "/images/laptops/laptop7.webp",
          "/images/laptops/laptop8.webp",
        ],
      },
    ],
  },
];

