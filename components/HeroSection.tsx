"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";


export default function HeroSection() {
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);

  // Create animated stars for cosmic hero section
  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: Array<{ 
      x: number; 
      y: number; 
      size: number; 
      opacity: number; 
      speed: number; 
      twinkleSpeed: number;
      color: string;
    }> = [];
    
    for (let i = 0; i < 200; i++) {
      const colors = ['rgba(255, 255, 255', 'rgba(147, 197, 253', 'rgba(196, 181, 253'];
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.15 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
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
        ctx.fillStyle = `${star.color}, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for larger stars
        if (star.size > 1.5) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
          gradient.addColorStop(0, `${star.color}, ${star.opacity * 0.6})`);
          gradient.addColorStop(1, `${star.color}, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image - Car Artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/car-artwork.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Animated Stars Canvas */}
      <canvas
        ref={starsCanvasRef}
        className="absolute inset-0 pointer-events-none z-[3]"
      />
      
      {/* Nebula Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDuration: '8s' }} />
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 flex flex-col items-center justify-center min-h-screen z-[20]">
        {/* Logo - Center and Attention-Catching */}
        <div className="flex items-center justify-center mb-8 relative z-[25] animate-fall-from-top" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden flex items-center justify-center bg-white/95 backdrop-blur-md border-8 border-[#1c1ca0]/30 shadow-2xl">
            <Image
              src="/images/logo.webp"
              alt="NaidenovART Logo"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1ca0]/20 via-[#2563eb]/20 to-[#0891b2]/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Content Block */}
        <div className="max-w-2xl space-y-8 relative z-[25] text-center">

          {/* Description - Light Style */}
          <div className="relative mx-auto animate-fall-from-top" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-cyan-200/40 rounded-2xl blur-lg" />
            <p className="relative text-xl lg:text-2xl text-gray-800 max-w-md mx-auto leading-relaxed font-bold bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-lg border-2 border-blue-200/50">
              Рисуване по всичко!
            </p>
          </div>

          {/* CTA Button - Light Style */}
          <button className="group relative mt-4 mx-auto bg-gradient-to-r from-[#1c1ca0] via-[#2563eb] to-[#0891b2] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 text-white overflow-hidden animate-fall-from-top" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] via-[#0891b2] to-[#1c1ca0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">ВИЖ ПОРТФОЛИО</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {/* Badges Row - Light Style */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <div className="relative group animate-fall-from-top" style={{ animationDelay: '0.7s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-start space-x-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1c1ca0] to-[#2563eb] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-base leading-snug tracking-wide text-gray-900">
                    ПРОФЕСИОНАЛНА
                    <br />
                    <span className="text-sm text-gray-600 font-normal">
                      КАЧЕСТВЕНА РАБОТА
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group animate-fall-from-top" style={{ animationDelay: '0.9s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-start space-x-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0891b2] to-[#06b6d4] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-base leading-snug tracking-wide text-gray-900">
                    ПЕРСОНАЛИЗИРАНИ
                    <br />
                    <span className="text-sm text-gray-600 font-normal">
                      ТВОРЧЕСКИ РЕШЕНИЯ
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-gray-50/50 to-transparent pointer-events-none z-[15]" />
    </section>
  );
}

