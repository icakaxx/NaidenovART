"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface A3GalleryCopy {
  title: string;
  subtitle: string;
  description: string;
  orderNote: string;
}

interface A3GallerySectionProps {
  copy: A3GalleryCopy;
}

const images = [
  { src: "/images/а3/1000025833.webp", alt: "A3 artwork 1" },
  { src: "/images/а3/1000025834.webp", alt: "A3 artwork 2" },
  { src: "/images/а3/1000025835.webp", alt: "A3 artwork 3" },
  { src: "/images/а3/1000025836.webp", alt: "A3 artwork 4" },
  { src: "/images/а3/1000025837.webp", alt: "A3 artwork 5" },
  { src: "/images/а3/1000025838.webp", alt: "A3 artwork 6" },
  { src: "/images/а3/1000025839.webp", alt: "A3 artwork 7" },
  { src: "/images/а3/1000025840.webp", alt: "A3 artwork 8" },
  { src: "/images/а3/1000025841.webp", alt: "A3 artwork 9" },
  { src: "/images/а3/1000025842.webp", alt: "A3 artwork 10" },
];

export default function A3GallerySection({ copy }: A3GallerySectionProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      id="a3"
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
            10 works - A3 - mixed media
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
                  cursor-zoom-in
                  h-64 md:h-80
                `}
                onClick={() => setLightboxImage(image)}
              >
                {/* Blurred background */}
                <div
                  className="absolute inset-0 blur-md scale-110"
                  style={{
                    backgroundImage: `url('${image.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  aria-hidden
                />
                {/* Main image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-105 relative z-10"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20 z-20"></div>
                <div className="absolute bottom-3 left-3 text-xs tracking-widest text-white/80 uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur">
                  {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        src={lightboxImage?.src ?? ""}
        alt={lightboxImage?.alt ?? ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
}
