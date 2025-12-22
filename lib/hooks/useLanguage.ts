"use client";

import { useState, useEffect } from "react";
import type { Language } from "@/types/language";

const STORAGE_KEY = "naidenov-art-language";

export function useLanguage(): [Language, () => void] {
  // Initialize with default "bg" for SSR compatibility
  const [lang, setLang] = useState<Language>("bg");
  const [isHydrated, setIsHydrated] = useState(false);

  // Read from localStorage after hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "bg") {
        setLang(stored);
      }
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage whenever language changes (after hydration)
  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }, [lang, isHydrated]);

  const toggleLang = () => {
    setLang((prev) => (prev === "bg" ? "en" : "bg"));
  };

  return [lang, toggleLang];
}

