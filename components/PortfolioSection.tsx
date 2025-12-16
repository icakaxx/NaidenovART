"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface CardCopy {
  title: string;
  category: string;
  href?: string;
  image?: string;
}

interface PortfolioCopy {
  galleryLabel: string;
  title: string;
  viewAll: string;
  cards: ReadonlyArray<CardCopy>;
}

interface PortfolioSectionProps {
  copy: PortfolioCopy;
}

export default function PortfolioSection({ copy }: PortfolioSectionProps) {
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-2">
              {copy.galleryLabel}
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              {copy.title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:block text-white/70 hover:text-blue-400 transition-colors border-b border-white/20 pb-1 hover:border-blue-400 mt-4 md:mt-0"
          >
            {copy.viewAll}
          </Link>
        </div>

        {/* Featured Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.cards.map((card, index) => {
            const cardContent = (
              <div
                className="group relative aspect-[4/5] overflow-hidden bg-neutral-800 cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Background Image */}
                {card.image ? (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-all duration-700 blur-sm group-hover:scale-105"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
                )}
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent translate-y-4 group-hover:translate-y-0 opacity-100 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>
                  <p className="text-blue-400 text-xs uppercase tracking-wider mt-1">
                    {card.category}
                  </p>
                </div>
              </div>
            );

            return card.href ? (
              <Link key={index} href={card.href} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="text-white hover:text-blue-400 transition-colors border-b border-white/30 pb-1 hover:border-blue-400"
          >
            {copy.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

