"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import type { Language } from "@/types/language";

export interface NavItem {
  name: string;
  href: string;
  subtabs?: { name: string; href: string }[];
}

interface HeaderProps {
  lang: Language;
  navItems: NavItem[];
  onToggleLang: () => void;
}

export default function Header({ lang, navItems, onToggleLang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center relative z-50" id="navbar">
      <Link href="/" className="flex items-center gap-4 cursor-pointer group">
        <Image
          src="/favicon1.png"
          alt="NaidenovART Logo"
          width={40}
          height={40}
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
        <div className="text-xl md:text-3xl font-bold tracking-widest uppercase font-serif text-white group-hover:text-blue-400 transition-colors">
          NaidenovART
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-medium tracking-widest uppercase">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => item.subtabs && setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className="relative group overflow-hidden pb-1 block"
            >
              <span className="group-hover:-translate-y-full transition-transform duration-300 block">
                {item.name}
              </span>
              <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-blue-400">
                {item.name}
              </span>
            </Link>

            {/* Dropdown Menu */}
            {item.subtabs && activeDropdown === item.name && (
              <div
                className="absolute top-full left-0 pt-2 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl py-2 min-w-[200px] z-[100] animate-fadeIn"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subtabs.map((subtab) => (
                  <Link
                    key={subtab.name}
                    href={subtab.href}
                    className="block px-4 py-2 text-sm text-white/80 hover:text-blue-400 hover:bg-white/5 transition-colors"
                  >
                    {subtab.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Language Toggle */}
      <div className="hidden md:block">
        <LanguageToggle lang={lang} onToggle={onToggleLang} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-blue-400 transition-colors focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 transform transition-transform duration-500 overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-white/50 hover:text-white z-50"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col justify-start items-center min-h-full py-24 space-y-8">
          {navItems.map((item) => (
            <div key={item.name} className="w-full px-8 max-w-md">
              <Link
                href={item.href}
                onClick={toggleMenu}
                className="text-2xl uppercase tracking-widest hover:text-blue-400 transition-colors font-serif block mb-2"
              >
                {item.name}
              </Link>
              {item.subtabs && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-400/30 pl-4">
                  {item.subtabs.map((subtab) => (
                    <Link
                      key={subtab.name}
                      href={subtab.href}
                      onClick={toggleMenu}
                      className="block text-lg text-white/70 hover:text-blue-400 transition-colors"
                    >
                      {subtab.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Language Toggle at Bottom */}
          <div className="pt-8">
            <LanguageToggle lang={lang} onToggle={onToggleLang} />
          </div>
        </div>
      </div>
    </nav>
  );
}
