"use client";

import { useMemo, useState } from "react";
import Header, { NavItem } from "@/components/Header";
import A4GallerySection from "@/components/A4GallerySection";
import { buildNavItems, translations } from "@/lib/translations";
import type { Language } from "@/types/language";

export default function A4Page() {
  const [lang, setLang] = useState<Language>("bg");
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="bg-neutral-950/90 backdrop-blur sticky top-0 z-50 border-b border-white/10">
        <Header lang={lang} navItems={navItems} onToggleLang={toggleLang} />
      </div>
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
