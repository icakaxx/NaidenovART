"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function PortfolioSection() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="bg-neutral-900 py-20 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-2">
              Галерия
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Избрани творби
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:block text-white/70 hover:text-blue-400 transition-colors border-b border-white/20 pb-1 hover:border-blue-400 mt-4 md:mt-0"
          >
            Разгледай всички
          </Link>
        </div>

        {/* Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-800 cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="font-serif text-6xl italic">1</span>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-xl font-bold text-white">Абстракция &quot;Начало&quot;</h4>
              <p className="text-blue-400 text-xs uppercase tracking-wider mt-1">
                Картини
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-800 cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-orange-900 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="font-serif text-6xl italic">2</span>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-xl font-bold text-white">Уличен Проект София</h4>
              <p className="text-blue-400 text-xs uppercase tracking-wider mt-1">
                Улична кауза
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-800 cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="font-serif text-6xl italic">3</span>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-xl font-bold text-white">Колекция &quot;Зима&quot;</h4>
              <p className="text-blue-400 text-xs uppercase tracking-wider mt-1">
                Дрехи
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="#"
            className="text-white hover:text-blue-400 transition-colors border-b border-white/30 pb-1 hover:border-blue-400"
          >
            Разгледай всички
          </Link>
        </div>
      </div>
    </section>
  );
}

