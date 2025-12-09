"use client";

import { useMemo, useState } from "react";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { buildNavItems, translations } from "@/lib/translations";
import type { Language } from "@/types/language";
import A3GallerySection from "@/components/A3GallerySection";

export default function A3Page() {
  const [lang, setLang] = useState<Language>("bg");
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <PageHeader lang={lang} navItems={navItems} onToggleLang={toggleLang} />
      <A3GallerySection
        copy={{
          title: copy.paintings.a3Title,
          subtitle: copy.paintings.a3Subtitle,
          description: copy.paintings.a3Description,
          orderNote: copy.paintings.a3OrderNote,
        }}
      />
    </main>
  );
}

