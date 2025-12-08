"use client";

import { useMemo, useState } from "react";
import Header, { NavItem } from "@/components/Header";
import { buildNavItems, translations } from "@/lib/translations";
import type { Language } from "@/types/language";

export default function StreetCausePage() {
  const [lang, setLang] = useState<Language>("bg");
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="bg-neutral-950/90 backdrop-blur sticky top-0 z-50 border-b border-white/10">
        <Header lang={lang} navItems={navItems} onToggleLang={toggleLang} />
      </div>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-6">
        <div className="space-y-4">
          <div className="h-1 w-20 bg-blue-400"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {copy.nav.street}
          </h1>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            {copy.pages.streetIntro}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/60">
          {lang === "bg"
            ? "Послания, стенописи и инициативи за градска среда скоро."
            : "Murals, messages, and urban initiatives coming soon."}
        </div>
      </section>
    </main>
  );
}

