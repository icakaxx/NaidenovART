"use client";

import { useMemo, useState } from "react";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { buildNavItems, translations } from "@/lib/translations";
import type { Language } from "@/types/language";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

const awardsImages = [
  "/images/messages/awards/1000026318.webp",
  "/images/messages/awards/1000026319.webp",
  "/images/messages/awards/1000026320.webp",
  "/images/messages/awards/1000026323.webp",
];

export default function AwardsPage() {
  const [lang, setLang] = useState<Language>("bg");
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
  }>({
    isOpen: false,
    src: "",
  });

  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  return (
    <main className="min-h-screen bg-neutral-900 text-white relative">
      <div className="absolute inset-0 bg-[url('/favicon1.png')] bg-cover bg-center opacity-10 pointer-events-none fixed" />
      <PageHeader lang={lang} navItems={navItems} onToggleLang={toggleLang} />

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-12">
        <div className="space-y-6">
          <div className="h-1 w-20 bg-blue-400"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {copy.nav.subtabs.awards}
          </h1>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            {lang === "bg"
              ? "За тези улични инициативи, NAIDENOVART бе награден от \"24 часа\" в ежегодната им церемония за достойните българи. Дни след това и от кметът на Ловеч - Страцимир Петков, за издигане престижа на Ловеч."
              : "For these street initiatives, NAIDENOVART was awarded by \"24 chasa\" in their annual ceremony for worthy Bulgarians. Days later also from the mayor of Lovech - Stratsimir Petkov, for raising the prestige of Lovech."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsImages.map((imageSrc, imgIndex) => (
            <div
              key={imgIndex}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-neutral-800"
              onClick={() => setLightboxState({ isOpen: true, src: imageSrc })}
            >
              {/* Blurred background */}
              <div
                className="absolute inset-0 blur-md scale-110"
                style={{
                  backgroundImage: `url('${imageSrc}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Main image */}
              <Image
                src={imageSrc}
                alt={`Award image ${imgIndex + 1}`}
                fill
                className="object-contain transition duration-500 group-hover:scale-105 relative z-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20 z-20"></div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        src={lightboxState.src}
        alt="Award image"
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, src: "" })}
      />
    </main>
  );
}




