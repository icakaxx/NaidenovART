"use client";

import { useMemo, useState } from "react";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { buildNavItems, routes, translations } from "@/lib/translations";
import type { Language } from "@/types/language";
import Link from "next/link";

export default function ProjectsPage() {
  const [lang, setLang] = useState<Language>("bg");
  const copy = useMemo(() => translations[lang], [lang]);
  const navItems: NavItem[] = useMemo(() => buildNavItems(copy), [copy]);

  const toggleLang = () => setLang((prev) => (prev === "bg" ? "en" : "bg"));

  return (
    <main className="min-h-screen bg-neutral-900 text-white relative">
      <div className="absolute inset-0 bg-[url('/favicon1.png')] bg-cover bg-center opacity-10 pointer-events-none fixed" />
      <PageHeader lang={lang} navItems={navItems} onToggleLang={toggleLang} />

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-10">
        <div className="space-y-6">
          <div className="h-1 w-20 bg-blue-400"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {copy.nav.projects}
          </h1>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            {copy.pages.projectsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Link
            href={routes.objects}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)]"
          >
            <div className="absolute inset-0 bg-[url('/images/bg-pics/unnamed.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-70 transition duration-500 blur-sm" />
            <div className="relative space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">{lang === "bg" ? "Обекти" : "Objects"}</div>
              <h3 className="text-3xl font-serif font-bold">{copy.projects.objectsTitle}</h3>
              <p className="text-white/70">{copy.projects.objectsDescription}</p>
              <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">
                {lang === "bg" ? "Виж повече" : "See more"}
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          <Link
            href={routes.cars}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)]"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition duration-500 blur-sm" style={{ backgroundImage: `url('/images/vehicles/alfa-romeo/alfa6.webp')` }} />
            <div className="relative space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">{lang === "bg" ? "Автомобили" : "Cars"}</div>
              <h3 className="text-3xl font-serif font-bold">{copy.projects.carsTitle}</h3>
              <p className="text-white/70">{copy.projects.carsDescription}</p>
              <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">
                {lang === "bg" ? "Виж повече" : "See more"}
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          <Link
            href={routes.helmets}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)]"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition duration-500 blur-sm" style={{ backgroundImage: `url('/images/helmets/helmets5.webp')` }} />
            <div className="relative space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">{lang === "bg" ? "Каски" : "Helmets"}</div>
              <h3 className="text-3xl font-serif font-bold">{copy.projects.helmetsTitle}</h3>
              <p className="text-white/70">{copy.projects.helmetsDescription}</p>
              <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">
                {lang === "bg" ? "Виж повече" : "See more"}
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          <Link
            href={routes.laptops}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)]"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition duration-500 blur-sm" style={{ backgroundImage: `url('/images/laptops/laptop6.webp')` }} />
            <div className="relative space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">{lang === "bg" ? "Лаптопи" : "Laptops"}</div>
              <h3 className="text-3xl font-serif font-bold">{copy.projects.laptopsTitle}</h3>
              <p className="text-white/70">{copy.projects.laptopsDescription}</p>
              <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">
                {lang === "bg" ? "Виж повече" : "See more"}
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}


