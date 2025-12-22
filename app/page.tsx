"use client";

import { useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import { buildNavItems, translations } from "@/lib/translations";
import { useLanguage } from "@/lib/hooks/useLanguage";

export default function Home() {
  const [lang, toggleLang] = useLanguage();
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems = useMemo(() => buildNavItems(copy), [copy]);

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
