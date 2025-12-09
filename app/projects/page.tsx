"use client";

import { useMemo, useState } from "react";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { buildNavItems, translations } from "@/lib/translations";
import type { Language } from "@/types/language";

export default function ProjectsPage() {
  const [lang, setLang] = useState<Language>("bg");
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <PageHeader lang={lang} navItems={navItems} onToggleLang={toggleLang} />

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-6">
        <div className="space-y-4">
          <div className="h-1 w-20 bg-blue-400"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {copy.nav.projects}
          </h1>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            {copy.pages.projectsIntro}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/60">
          {lang === "bg"
            ? "Очаквайте галерия с реализирани обекти, автомобили, каски и лаптопи."
            : "A gallery of objects, cars, helmets, and laptops projects will appear soon."}
        </div>
      </section>
    </main>
  );
}


