"use client";

import { useMemo, useState } from "react";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import type { Language } from "@/types/language";
import { buildNavItems, translations } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("bg");
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => {
    setLang((prev) => (prev === "bg" ? "en" : "bg"));
  };

  return (
    <main className="min-h-screen">
      <HeroSection
        lang={lang}
        navItems={navItems}
        copy={copy.hero}
        onToggleLang={toggleLang}
      />
      <PortfolioSection copy={copy.portfolio} />
    </main>
  );
}
