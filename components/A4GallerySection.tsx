"use client";

import Image from "next/image";
import { useState } from "react";

interface A4GalleryCopy {
  title: string;
  subtitle: string;
  description: string;
  orderNote: string;
}

interface A4GallerySectionProps {
  copy: A4GalleryCopy;
}

const images = [
  { src: "/images/a4/1000025845.webp", alt: "A4 artwork 1" },
  { src: "/images/a4/1000025846.webp", alt: "A4 artwork 2" },
  { src: "/images/a4/1000025847 (1).webp", alt: "A4 artwork 3" },
  { src: "/images/a4/1000025848.webp", alt: "A4 artwork 4" },
  { src: "/images/a4/1000025849.webp", alt: "A4 artwork 5" },
  { src: "/images/a4/1000025850.webp", alt: "A4 artwork 6" },
  { src: "/images/a4/1000025851.webp", alt: "A4 artwork 7" },
  { src: "/images/a4/1000025852.webp", alt: "A4 artwork 8" },
  { src: "/images/a4/1000025853.webp", alt: "A4 artwork 9" },
  { src: "/images/a4/1000025854.webp", alt: "A4 artwork 10" },
];

export default function A4GallerySection({ copy }: A4GallerySectionProps) {
  const [ratios, setRatios] = useState<number[]>(images.map(() => 1));

  return (
    <section
      id="a4"
      className="relative overflow-hidden bg-neutral-950 py-20 px-6 md:px-12 border-t border-white/5"
    >
      <div
        className="absolute inset-0 bg-[url('/images/bg-pics/unnamed.jpg')] bg-cover bg-center scale-105 blur-sm opacity-60"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="h-1 w-20 bg-blue-400"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              {copy.title}
            </h2>
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">
              {copy.subtitle}
            </p>
            {copy.description && (
              <p className="text-white/70 leading-relaxed">
                {copy.description}
              </p>
            )}
            <div className="text-white/70 leading-relaxed bg-white/5 border border-white/10 rounded-xl p-4 md:p-5">
              {copy.orderNote}
            </div>
          </div>
          <div className="text-white/40 text-sm">
            10 works - A4 - mixed media
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
          {images.map((image, idx) => {
            return (
              <div
                key={image.src}
                className={`
                  relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0
                  shadow-[0_15px_40px_-25px_rgba(0,0,0,0.6)]
                  transition duration-500 ease-out
                  hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)]
                  group
                  h-44 sm:h-52 md:h-56
                `}
                style={{ aspectRatio: ratios[idx] || 1 }}
              >
                <div
                  className="absolute inset-0 scale-110 blur-xl opacity-30"
                  style={{ backgroundImage: `url(${image.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  aria-hidden
                />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 3}
                  onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                    const ratio = naturalWidth / naturalHeight;
                    setRatios((prev) => {
                      const clone = [...prev];
                      clone[idx] = ratio || 1;
                      return clone;
                    });
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute bottom-3 left-3 text-xs tracking-widest text-white/80 uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur">
                  {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

