"use client";

import { useMemo } from "react";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import A4GallerySection from "@/components/A4GallerySection";
import { buildNavItems, translations } from "@/lib/translations";
import { useLanguage } from "@/lib/hooks/useLanguage";

export default function A4Page() {
  const [lang, toggleLang] = useLanguage();
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <PageHeader lang={lang} navItems={navItems} onToggleLang={toggleLang} />
      <A4GallerySection
        copy={{
          title: copy.paintings.a4Title,
          subtitle: copy.paintings.a4Subtitle,
          description: copy.paintings.a4Description,
          orderNote: copy.paintings.a4OrderNote,
        }}
      />
    </main>
  );
}
