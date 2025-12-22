"use client";

import Image from "next/image";
import Link from "next/link";
import Header, { NavItem } from "./Header";
import type { Language } from "@/types/language";

interface HeroCopy {
  tagline: string;
  description: string;
  cta: string;
}

interface HeroSectionProps {
  lang: Language;
  navItems: NavItem[];
  copy: HeroCopy;
  onToggleLang: () => void;
}

export default function HeroSection({
  lang,
  navItems,
  copy,
  onToggleLang,
}: HeroSectionProps) {
  return (
    <header className="relative min-h-screen w-full hero-bg" id="top">
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between min-h-screen">
        {/* Navigation */}
        <Header lang={lang} navItems={navItems} onToggleLang={onToggleLang} />
        {/* Main Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 mb-20 flex-grow gap-12 md:gap-32">
          {/* Left Side: Large Logo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-up">
            <Image
              src="https://ndcgnswvhpnffvbzqcrn.supabase.co/storage/v1/object/public/NaidenovART/logo-removebg-preview.png"
              alt="NaidenovART Logo"
              width={845}
              height={845}
              className="max-w-[85vw] md:max-w-[650px] lg:max-w-[845px] w-auto h-auto object-contain drop-shadow-2xl md:scale-125 transition-transform"
              priority
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="animate-fade-in-up">
              <div className="h-1 w-32 bg-blue-400 mb-8 mx-auto md:mx-0"></div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                Naidenov<span className="text-blue-400">ART</span>
              </h1>
            </div>

            <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] mb-10 uppercase animate-fade-in-up delay-100 text-gray-100">
              {copy.tagline}
            </h2>

            <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-12 font-light leading-relaxed animate-fade-in-up delay-200">
              {copy.description}
            </p>

            <Link
              href="#portfolio"
              className="group relative px-12 py-5 bg-transparent border border-white text-white overflow-hidden transition-all duration-300 animate-fade-in-up delay-300"
            >
              <span className="relative z-10 font-bold text-lg uppercase tracking-widest group-hover:text-black transition-colors">
                {copy.cta}
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
