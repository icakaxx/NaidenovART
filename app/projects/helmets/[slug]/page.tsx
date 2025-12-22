"use client";

import { use, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Lightbox from "@/components/Lightbox";
import { buildNavItems, translations } from "@/lib/translations";
import { helmetsData } from "@/lib/helmets-data";
import { useLanguage } from "@/lib/hooks/useLanguage";

interface HelmetPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function HelmetPage({ params }: HelmetPageProps) {
  const { slug } = use(params);
  const [lang, toggleLang] = useLanguage();
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
  }>({
    isOpen: false,
    src: "",
  });

  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  // Find helmet project data
  const helmetData = helmetsData.find((p) => p.id === slug);

  // Determine project title based on slug
  const projectTitle = useMemo(() => {
    if (!helmetData) return "";
    if (slug === "helmet-collection") {
      return lang === "bg" ? "Колекция Каски" : "Helmet Collection";
    }
    return helmetData.titleKey;
  }, [helmetData, slug, lang]);

  if (!helmetData) {
    return notFound();
  }

  // Determine the background image: use the last image of the first series
  const lastImage = helmetData.series.length > 0 && helmetData.series[0].images.length > 0
    ? helmetData.series[0].images[helmetData.series[0].images.length - 1]
    : "/favicon1.png";

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
          </div>

          <div className="space-y-16">
            {helmetData.series.map((series, seriesIndex) => (
              <div key={seriesIndex} className="space-y-6">
                {/* Only show series title if there are multiple series */}
                {helmetData.series.length > 1 && (
                  <h2 className="text-2xl font-serif text-white/80 border-b border-white/10 pb-2 inline-block">
                    {series.name === "Main"
                      ? (lang === "bg" ? "Галерия" : "Gallery")
                      : series.name
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




