"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface NavItem {
  name: string;
  href: string;
  subtabs?: { name: string; href: string }[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navItems: NavItem[] = [
    {
      name: "Картини",
      href: "#kartini",
      subtabs: [
        { name: "А3 формат (30х40 см.)", href: "#a3" },
        { name: "А4 формат (29х19см.)", href: "#a4" },
      ],
    },
    {
      name: "Проекти",
      href: "#proekti",
      subtabs: [
        { name: "Обекти", href: "#obekti" },
        { name: "Автомобили", href: "#avtomobili" },
        { name: "Каски", href: "#kaski" },
        { name: "Лаптопи", href: "#laptopi" },
      ],
    },
    {
      name: "Улична кауза",
      href: "#ulichna-kauza",
      subtabs: [
        { name: "Послания", href: "#poslaniya" },
        { name: "Награди", href: "#nagradi" },
      ],
    },
    {
      name: "Дрехи",
      href: "#drehi",
    },
    {
      name: "За мен",
      href: "#za-men",
    },
  ];

  // Create animated stars for cosmic header
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match header
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 100; // Header height
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: Array<{ x: number; y: number; size: number; opacity: number; speed: number; twinkleSpeed: number }> = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.1 + 0.05,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    // Animate stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Twinkling effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Slow horizontal drift
        star.x += star.speed;
        if (star.x > canvas.width) star.x = 0;

        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for larger stars
        if (star.size > 1) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          gradient.addColorStop(0, `rgba(147, 197, 253, ${star.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] overflow-visible">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29] via-[#1c1ca0] to-[#24243e] opacity-95" />
      
      {/* Animated stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Nebula-like glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      
      {/* Border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      <nav className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo + First 2 Tabs */}
          <div className="hidden lg:flex items-center space-x-10 flex-1">
            {/* Logo Placeholder */}
            <Link href="/" className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm hover:border-cyan-300/70 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                <span className="text-cyan-300 font-black text-xl">N</span>
              </div>
            </Link>

            {/* First 2 Tabs */}
            {navItems.slice(0, 2).map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subtabs && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative text-white text-sm font-bold tracking-wider hover:text-cyan-300 transition-all duration-300 group block py-2"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 rounded-lg blur-sm transition-all duration-300" />
                </Link>

                {/* Dropdown Menu */}
                {item.subtabs && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 min-w-[220px] bg-gradient-to-br from-[#1c1ca0]/95 to-[#0f0c29]/95 backdrop-blur-lg rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden z-[100] animate-fadeIn">
                    <div className="py-2">
                      {item.subtabs.map((subtab) => (
                        <Link
                          key={subtab.name}
                          href={subtab.href}
                          className="block px-4 py-3 text-white text-sm font-medium hover:text-cyan-300 hover:bg-blue-500/20 transition-all duration-200"
                        >
                          {subtab.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo - Cosmic Style */}
          <Link 
            href="/" 
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl lg:text-3xl font-black tracking-wider group z-10"
          >
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,197,253,0.8)]">
              NAIDENOVART
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 blur-xl group-hover:blur-2xl transition-all duration-300" />
          </Link>

          {/* Right Side: Last 3 Tabs */}
          <div className="hidden lg:flex items-center space-x-10 flex-1 justify-end">
            {navItems.slice(2).map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subtabs && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative text-white text-sm font-bold tracking-wider hover:text-cyan-300 transition-all duration-300 group block py-2"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 rounded-lg blur-sm transition-all duration-300" />
                </Link>

                {/* Dropdown Menu */}
                {item.subtabs && activeDropdown === item.name && (
                  <div className="absolute top-full right-0 mt-2 min-w-[220px] bg-gradient-to-br from-[#1c1ca0]/95 to-[#0f0c29]/95 backdrop-blur-lg rounded-xl shadow-2xl border border-blue-400/30 overflow-hidden z-[100] animate-fadeIn">
                    <div className="py-2">
                      {item.subtabs.map((subtab) => (
                        <Link
                          key={subtab.name}
                          href={subtab.href}
                          className="block px-4 py-3 text-white text-sm font-medium hover:text-cyan-300 hover:bg-blue-500/20 transition-all duration-200"
                        >
                          {subtab.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Logo + Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Logo */}
            <Link href="/" className="relative group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm">
                <span className="text-cyan-300 font-black text-lg">N</span>
              </div>
            </Link>

            {/* Mobile Menu Button - Cosmic Style */}
            <button
              className="text-white p-2 hover:bg-blue-500/30 rounded-lg transition-all duration-300 backdrop-blur-sm border border-blue-400/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
            <svg
              className="w-6 h-6 drop-shadow-[0_0_8px_rgba(147,197,253,0.8)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Cosmic Style */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-2 bg-gradient-to-br from-[#1c1ca0]/95 to-[#0f0c29]/95 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-blue-400/30">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-white text-sm font-bold tracking-wider hover:text-cyan-300 transition-colors py-3 px-4 rounded-lg hover:bg-blue-500/20"
                  onClick={() => {
                    if (!item.subtabs) setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
                {/* Mobile Subtabs */}
                {item.subtabs && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-400/30 pl-4">
                    {item.subtabs.map((subtab) => (
                      <Link
                        key={subtab.name}
                        href={subtab.href}
                        className="block text-blue-200 text-xs font-medium hover:text-cyan-300 transition-colors py-2 px-4 rounded-lg hover:bg-blue-500/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subtab.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

