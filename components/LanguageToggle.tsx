"use client";

import type { Language } from "@/types/language";

interface LanguageToggleProps {
  lang: Language;
  onToggle: () => void;
}

export default function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  const isEN = lang === "en";
  const flagUrl = isEN
    ? "https://flagcdn.com/gb.svg"
    : "https://flagcdn.com/bg.svg";

  return (
    <div className="flex items-center gap-3 select-none">
      <span
        className={`text-sm font-semibold tracking-wide ${
          isEN ? "text-white" : "text-white/60"
        }`}
      >
        EN
      </span>
      <button
        type="button"
        onClick={onToggle}
        aria-label={`Switch language to ${isEN ? "Bulgarian" : "English"}`}
        className="relative w-[90px] h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-lg flex items-center px-[6px] transition-all duration-300 hover:shadow-xl"
      >
        <div
          className={`absolute top-1 bottom-1 rounded-full bg-neutral-900 shadow-md transition-transform duration-300 ease-out ${
            isEN ? "left-1" : "left-[50px]"
          }`}
          style={{ width: "38px" }}
        >
          <div
            className="w-full h-full rounded-full bg-cover bg-center border border-white/70"
            style={{ backgroundImage: `url(${flagUrl})` }}
          />
        </div>
      </button>
      <span
        className={`text-sm font-semibold tracking-wide ${
          !isEN ? "text-white" : "text-white/60"
        }`}
      >
        BG
      </span>
    </div>
  );
}

