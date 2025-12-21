"use client";

import { useMemo, useState } from "react";
import { NavItem } from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { buildNavItems, translations } from "@/lib/translations";
import Link from "next/link";

import type { Language } from "@/types/language";

export default function ObjectsPage() {
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
            {copy.nav.subtabs.objects}
          </h1>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            {copy.objects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {copy.objects.items.map((item, index) => (
            <Link
              key={index}
              href={`/projects/objects/${item.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)] min-h-[300px] flex flex-col justify-end"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition duration-500 blur-sm"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="relative space-y-3">
                <h3 className="text-3xl font-serif font-bold">{item.title}</h3>
                <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">
                  {lang === "bg" ? "Виж повече" : "See more"}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}




