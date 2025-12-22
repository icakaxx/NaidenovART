"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { translations } from "@/lib/translations";

const SESSION_STORAGE_KEY = "promotional-popup-shown";

export default function PromotionalPopup() {
  const [lang] = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  
  const copy = useMemo(() => translations[lang].promotionalPopup, [lang]);

  useEffect(() => {
    // Check if pop-up has been shown in this session
    if (typeof window === "undefined") return;
    
    const hasBeenShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
    
    if (!hasBeenShown) {
      setShouldRender(true);
      
      // Show pop-up after 35 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 35000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    }
    // Remove from DOM after animation
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[calc(100%-2rem)] transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-neutral-900/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4 md:p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close promotional pop-up"
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="pr-8">
          <p className="text-white text-sm md:text-base leading-relaxed">
            {copy.message}{" "}
            <a
              href="https://hmwspro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors underline decoration-blue-400/50 hover:decoration-blue-300/70"
            >
              {copy.linkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

