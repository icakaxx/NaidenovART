"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const vantaEffect = useRef<any>(null);

  // Initialize Vanta.js NET effect with cosmic colors
  useEffect(() => {
    if (!vantaRef.current) return;

    // Wait for VANTA and THREE to be loaded
    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b82f6,
          backgroundColor: 0x0f0c29,
          points: 12,
          maxDistance: 25,
          spacing: 18,
          showDots: true,
        });
      } else {
        // Retry if libraries not loaded yet
        setTimeout(initVanta, 100);
      }
    };

    initVanta();

    // Cleanup
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

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
      {/* Cosmic Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#1c1ca0] to-[#24243e]" />
      
      {/* Background Car Pattern - Behind Everything */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* Row 1 - Top */}
        <div className="absolute top-[5%] left-[5%] w-32 h-32 opacity-25 animate-float">
          <Image src="/images/car1.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[8%] left-[35%] w-28 h-28 opacity-22 animate-gentle-rotate">
          <Image src="/images/car2.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[12%] left-[65%] w-36 h-36 opacity-28 animate-drift">
          <Image src="/images/car3.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[3%] right-[10%] w-30 h-30 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Image src="/images/car4.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Row 2 - Upper Middle */}
        <div className="absolute top-[25%] left-[15%] w-34 h-34 opacity-24 animate-gentle-rotate" style={{ animationDelay: '3s' }}>
          <Image src="/images/car3.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[28%] left-[50%] w-32 h-32 opacity-25 animate-float" style={{ animationDelay: '1s' }}>
          <Image src="/images/car1.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[22%] right-[20%] w-30 h-30 opacity-20 animate-drift" style={{ animationDelay: '4s' }}>
          <Image src="/images/car4.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Row 3 - Middle */}
        <div className="absolute top-[45%] left-[8%] w-28 h-28 opacity-22 animate-float" style={{ animationDelay: '5s' }}>
          <Image src="/images/car2.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[48%] left-[40%] w-36 h-36 opacity-28 animate-gentle-rotate" style={{ animationDelay: '1.5s' }}>
          <Image src="/images/car4.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[42%] right-[15%] w-32 h-32 opacity-25 animate-float" style={{ animationDelay: '3.5s' }}>
          <Image src="/images/car1.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Row 4 - Lower Middle */}
        <div className="absolute top-[65%] left-[20%] w-30 h-30 opacity-20 animate-drift" style={{ animationDelay: '2.5s' }}>
          <Image src="/images/car3.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[68%] left-[55%] w-34 h-34 opacity-24 animate-float" style={{ animationDelay: '4.5s' }}>
          <Image src="/images/car2.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[62%] right-[8%] w-28 h-28 opacity-22 animate-gentle-rotate" style={{ animationDelay: '6s' }}>
          <Image src="/images/car4.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Row 5 - Bottom */}
        <div className="absolute top-[85%] left-[12%] w-32 h-32 opacity-25 animate-float" style={{ animationDelay: '3s' }}>
          <Image src="/images/car1.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[82%] left-[45%] w-30 h-30 opacity-20 animate-drift" style={{ animationDelay: '5.5s' }}>
          <Image src="/images/car3.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[88%] right-[18%] w-36 h-36 opacity-28 animate-gentle-rotate" style={{ animationDelay: '2s' }}>
          <Image src="/images/car2.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Additional scattered cars for density */}
        <div className="absolute top-[18%] left-[75%] w-28 h-28 opacity-18 animate-float" style={{ animationDelay: '7s' }}>
          <Image src="/images/car1.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[38%] left-[25%] w-26 h-26 opacity-16 animate-drift" style={{ animationDelay: '8s' }}>
          <Image src="/images/car3.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[55%] left-[70%] w-32 h-32 opacity-25 animate-gentle-rotate" style={{ animationDelay: '4s' }}>
          <Image src="/images/car4.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[75%] left-[35%] w-28 h-28 opacity-22 animate-float" style={{ animationDelay: '6.5s' }}>
          <Image src="/images/car2.png" alt="" fill className="object-contain" />
        </div>
      </div>
      
      {/* Vanta.js NET Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 pointer-events-none opacity-60 z-[2]"
      />
      
      {/* Animated Stars Canvas */}
      <canvas
        ref={starsCanvasRef}
        className="absolute inset-0 pointer-events-none z-[3]"
      />
      
      {/* Nebula Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDuration: '8s' }} />
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      
      {/* Floating Car Decorations - Multiple Positions - Above Background but Below Content */}
      
      {/* Car 2 - Bottom Right - Gentle Rotation */}
      <div className="hidden lg:block absolute bottom-20 right-10 z-[5] opacity-30 animate-gentle-rotate">
        <Image
          src="/images/car2.png"
          alt="Decorative car illustration"
          width={180}
          height={180}
          className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        />
      </div>
      
      {/* Car 3 - Top Right - Float Animation */}
      <div className="hidden xl:block absolute top-32 right-1/4 z-[5] opacity-25 animate-float">
        <Image
          src="/images/car3.png"
          alt="Decorative car illustration"
          width={150}
          height={150}
          className="object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        />
      </div>
      
      {/* Car 4 - Middle Left - Slow Float */}
      <div className="hidden xl:block absolute top-1/2 left-5 z-[5] opacity-20" style={{ animation: 'float 10s ease-in-out infinite' }}>
        <Image
          src="/images/car4.png"
          alt="Decorative car illustration"
          width={140}
          height={140}
          className="object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12 z-[20]">
        {/* Left Text Block */}
        <div className="max-w-xl space-y-8 relative z-[25]">
          {/* Breadcrumb - Cosmic Style */}
          <div className="flex items-center space-x-3 text-sm bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-md px-5 py-3 rounded-full w-fit shadow-lg border border-blue-400/30">
            <svg
              className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-blue-200 font-semibold">CREATIVE SERVICES</span>
            <span className="text-blue-400">/</span>
            <span className="text-cyan-300 uppercase tracking-wider font-bold drop-shadow-[0_0_8px_rgba(103,232,249,0.6)]">
              AUTOMOTIVE ART
            </span>
          </div>

          {/* Main Heading - Cosmic Style */}
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">ARTISTIC</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,197,253,0.8)]">
              VISIONS
            </span>
          </h1>

          {/* Description - Cosmic Style */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <p className="relative text-lg lg:text-xl text-blue-50 max-w-lg leading-relaxed font-medium bg-gradient-to-br from-[#1c1ca0]/60 to-[#0f0c29]/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-blue-400/30">
              Transform your automotive dreams into reality. Specializing in custom
              car art, helmet designs, and creative murals that bring your vision
              to life.
            </p>
          </div>

          {/* CTA Button - Cosmic Style */}
          <button className="group relative mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">VIEW PORTFOLIO</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
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

          {/* Badges Row - Cosmic Style */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-start space-x-3 bg-gradient-to-br from-[#1c1ca0]/70 to-[#0f0c29]/70 backdrop-blur-md p-4 rounded-xl shadow-lg border border-blue-400/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                  <svg
                    className="w-6 h-6 text-white drop-shadow-lg"
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
                  <p className="font-bold text-base leading-snug tracking-wide text-white drop-shadow-lg">
                    PROFESSIONAL
                    <br />
                    <span className="text-sm text-blue-200 font-normal">
                      QUALITY WORK
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-start space-x-3 bg-gradient-to-br from-[#1c1ca0]/70 to-[#0f0c29]/70 backdrop-blur-md p-4 rounded-xl shadow-lg border border-purple-400/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                  <svg
                    className="w-6 h-6 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-base leading-snug tracking-wide text-white drop-shadow-lg">
                    CUSTOM
                    <br />
                    <span className="text-sm text-purple-200 font-normal">
                      CREATIVE SOLUTIONS
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Box - Featured Artwork - Cosmic Style */}
        <div className="relative mt-16 lg:mt-0 z-[25]">
          {/* Cosmic Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-purple-500/40 rounded-3xl blur-3xl transform scale-110 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-3xl blur-2xl transform scale-105 animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
          
          {/* Main Featured Image Container - Cosmic Frame */}
          <div className="relative bg-gradient-to-br from-[#1c1ca0]/80 to-[#0f0c29]/80 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)] transition-all duration-500 group">
            {/* Featured Car Artwork with Cosmic Border */}
            <div className="relative w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.3)] border-2 border-cyan-400/40 group-hover:border-cyan-300/60 transition-all">
              <Image
                src="/images/car-artwork.jpg"
                alt="NaidenovART - Professional Car Illustration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Cosmic Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29]/90 via-[#1c1ca0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Artwork label with cosmic glow */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-black text-2xl drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-2">
                  CUSTOM CAR ART
                </h3>
                <p className="text-cyan-100 text-sm font-medium drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                  Professional automotive illustration & design
                </p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />
            </div>
            
            {/* Small Gallery Preview - All 4 Car Images */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {/* Car 1 */}
              <div className="relative aspect-square bg-gradient-to-br from-[#f97316] to-[#dc2626] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all cursor-pointer border border-orange-400/30 group">
                <Image
                  src="/images/car1.png"
                  alt="Car illustration 1"
                  fill
                  className="object-contain p-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                />
              </div>
              
              {/* Car 2 */}
              <div className="relative aspect-square bg-gradient-to-br from-[#3b82f6] to-[#6366f1] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all cursor-pointer border border-blue-400/30 group">
                <Image
                  src="/images/car2.png"
                  alt="Car illustration 2"
                  fill
                  className="object-contain p-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                />
              </div>
              
              {/* Car 3 */}
              <div className="relative aspect-square bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all cursor-pointer border border-purple-400/30 group">
                <Image
                  src="/images/car3.png"
                  alt="Car illustration 3"
                  fill
                  className="object-contain p-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                />
              </div>
              
              {/* Car 4 */}
              <div className="relative aspect-square bg-gradient-to-br from-[#06b6d4] to-[#22d3ee] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all cursor-pointer border border-cyan-400/30 group">
                <Image
                  src="/images/car4.png"
                  alt="Car illustration 4"
                  fill
                  className="object-contain p-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                />
              </div>
            </div>
            
            {/* Decorative cosmic orbs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/60 to-blue-500/60 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Bottom cosmic gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0c29] via-[#1c1ca0]/50 to-transparent pointer-events-none z-[15]" />
    </section>
  );
}

