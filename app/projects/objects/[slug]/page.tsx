"use client";

import { useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Lightbox from "@/components/Lightbox";
import { buildNavItems, translations } from "@/lib/translations";
import { objectsData } from "@/lib/objects-data";
import type { Language } from "@/types/language";

interface ObjectPageProps {
  params: {
    slug: string;
  };
}

export default function ObjectPage({ params }: ObjectPageProps) {
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

  // Find project data
  const projectData = objectsData.find((p) => p.id === params.slug);

  // Find translation for title
  // We assume the structure of translations matches the IDs added previously
  const projectTitle = useMemo(() => {
    if (!projectData) return "";
    // We try to find the item in the translations array that matches the slug
    // We added 'id' to the items in translations.ts
    const item = copy.objects.items.find((i: any) => i.id === params.slug);
    return item ? item.title : projectData.titleKey;
  }, [copy, params.slug, projectData]);

  if (!projectData) {
    return notFound();
  }

  // Determine the background image: try to use the last image of the first series, otherwise fallback
  const lastImage = projectData.series.length > 0 && projectData.series[0].images.length > 0 
    ? projectData.series[0].images[projectData.series[0].images.length - 1]
    : "/favicon1.png";

  return (
    <main className="min-h-screen bg-neutral-900 text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none fixed z-0"
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
          </div>

          <div className="space-y-16">
            {projectData.series.map((series, seriesIndex) => (
              <div key={seriesIndex} className="space-y-6">
                {/* Only show series title if it's not "Main" or if there are multiple series */}
                {(projectData.series.length > 1 || series.name !== "Main") && (
                  <h2 className="text-2xl font-serif text-white/80 border-b border-white/10 pb-2 inline-block">
                    {/* We might want to translate these series names eventually */}
                    {series.name === "Main" 
                      ? (lang === "bg" ? "Галерия" : "Gallery")
                      : (series.name === "Interior" 
                          ? (lang === "bg" ? "Интериор" : "Interior")
                          : (series.name === "Wall" 
                              ? (lang === "bg" ? "Стена" : "Wall") 
                              : series.name)
                        )
                    }
                  </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {series.images.map((imageSrc, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-neutral-800"
                      onClick={() => setLightboxState({ isOpen: true, src: imageSrc })}
                    >
                      <Image
                        src={imageSrc}
                        alt={`${projectTitle} - ${series.name} - ${imgIndex + 1}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
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



