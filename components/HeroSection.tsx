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

        {/* Socials / Bottom Info */}
        <div className="w-full px-6 py-8 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 animate-fade-in-up delay-500">
          <div className="text-xs text-gray-500 mb-4 md:mb-0 space-y-2">
            <div className="tracking-widest uppercase">
              &copy; 2026 NaidenovART
            </div>
            <div className="normal-case tracking-normal">
              Уебсайтът е създаден от{" "}
              <a
                href="https://www.hmwspro.com/bg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors underline"
              >
                H&M Website Provisioning
              </a>
            </div>
          </div>
          <div className="flex space-x-8">
            <a
              href="https://www.instagram.com/naidenov_art/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573373319939"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
