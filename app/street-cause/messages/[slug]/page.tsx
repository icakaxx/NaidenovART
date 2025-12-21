"use client";

import { useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Lightbox from "@/components/Lightbox";
import { buildNavItems, translations } from "@/lib/translations";
import type { Language } from "@/types/language";

interface MessagePageProps {
  params: {
    slug: string;
  };
}

export default function MessagePage({ params }: MessagePageProps) {
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

  // Determine project title based on slug
  const projectTitle = useMemo(() => {
    if (!params.slug) return "";
    if (params.slug === "custom") {
      return copy.messages.customTitle;
    } else if (params.slug === "street-cause") {
      return copy.messages.streetCauseTitle;
    }
    return "";
  }, [copy, params.slug]);

  // Images from actual folders - combine all street-cause folders
  const images = useMemo(() => {
    if (params.slug === "custom") {
      return [
        "/images/messages/personal-messages/1000026334.webp",
        "/images/messages/personal-messages/1000026335.webp",
        "/images/messages/personal-messages/1000026336 (1).webp",
        "/images/messages/personal-messages/1000026337.webp",
        "/images/messages/personal-messages/1000026338.webp",
      ];
    } else if (params.slug === "street-cause") {
      // Combine images from street-cause-1 and street-cause-2 folders
      return [
        // Street cause 1
        "/images/messages/street-cause-1/1000026321.webp",
        "/images/messages/street-cause-1/1000026322.webp",
        "/images/messages/street-cause-1/1000026324.webp",
        "/images/messages/street-cause-1/1000026327.webp",
        "/images/messages/street-cause-1/1000026330.webp",
        // Street cause 2
        "/images/messages/street-cause-2/1000026322.webp",
        "/images/messages/street-cause-2/1000026325.webp",
        "/images/messages/street-cause-2/1000026326.webp",
        "/images/messages/street-cause-2/1000026328.webp",
        "/images/messages/street-cause-2/1000026331.webp",
      ];
    }
    return [];
  }, [params.slug]);

  if (!projectTitle) {
    return notFound();
  }

  // Determine the background image: use the first image as background
  const lastImage = images.length > 0 ? images[0] : "/favicon1.png";

  return (
    <main className="min-h-screen bg-neutral-900 text-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none fixed z-0 blur-md scale-110"
        style={{ backgroundImage: `url('${lastImage}')` }}
      />
      <div className="absolute inset-0 bg-neutral-900/80 pointer-events-none fixed z-0" />
      <div className="relative z-10">
        <PageHeader lang={lang} navItems={navItems} onToggleLang={toggleLang} />

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-12">
          <div className="space-y-6">
            <div className="h-1 w-20 bg-blue-400"></div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {projectTitle}
            </h1>
            {params.slug === "custom" && (
              <p className="text-white/70 max-w-3xl leading-relaxed">
                {copy.messages.customDescription}
              </p>
            )}
            {params.slug === "street-cause" && (
              <p className="text-white/70 max-w-3xl leading-relaxed">
                {copy.messages.streetCauseDescription}
              </p>
            )}
          </div>

          <div className="space-y-16">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((imageSrc, imgIndex) => (
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
                      alt={`${projectTitle} - ${imgIndex + 1}`}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-105 relative z-10"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20 z-20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Lightbox
        src={lightboxState.src}
        alt={projectTitle}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, src: "" })}
      />
    </main>
  );
}




