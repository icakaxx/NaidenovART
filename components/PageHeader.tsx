"use client";

import Header, { NavItem } from "@/components/Header";
import { Language } from "@/types/language";

interface PageHeaderProps {
  lang: Language;
  navItems: NavItem[];
  onToggleLang: () => void;
}

export default function PageHeader({ lang, navItems, onToggleLang }: PageHeaderProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: "url('/images/bg-pics/unnamed.jpg')" }}
      />
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/70" />
      
      {/* Header Content */}
      <div className="relative z-10">
        <Header lang={lang} navItems={navItems} onToggleLang={onToggleLang} />
      </div>
    </div>
  );
}




