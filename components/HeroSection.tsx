"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function HeroSection() {
  return (
    <header className="relative h-screen w-full hero-bg">
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Navigation */}
        <Header />
        {/* Main Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 mb-20 flex-grow gap-12 md:gap-32">
          {/* Left Side: Large Logo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-up">
            <Image
              src="https://ndcgnswvhpnffvbzqcrn.supabase.co/storage/v1/object/public/NaidenovART/logo-removebg-preview.png"
              alt="NaidenovART Logo"
              width={845}
              height={845}
              className="max-w-[650px] lg:max-w-[845px] w-auto h-auto object-contain drop-shadow-2xl"
              style={{ transform: 'scale(1.3)' }}
              priority
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="animate-fade-in-up">
              <div className="h-1 w-32 bg-blue-400 mb-8 mx-auto md:mx-0"></div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                Naidenov<span className="text-blue-400">ART</span>
              </h1>
            </div>

            <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] mb-10 uppercase animate-fade-in-up delay-100 text-gray-100">
              Рисуване по всичко
            </h2>

            <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-12 font-light leading-relaxed animate-fade-in-up delay-200">
              От платното до уличните стени и текстила. Изкуството е начин на живот, а не просто хоби.
            </p>

            <Link
              href="#portfolio"
              className="group relative px-12 py-5 bg-transparent border border-white text-white overflow-hidden transition-all duration-300 animate-fade-in-up delay-300"
            >
              <span className="relative z-10 font-bold text-lg uppercase tracking-widest group-hover:text-black transition-colors">
                Виж портфолио
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Socials / Bottom Info */}
        <div className="w-full px-6 py-8 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 animate-fade-in-up delay-500">
          <div className="text-xs text-gray-500 mb-4 md:mb-0 tracking-widest uppercase">
            &copy; 2024 NaidenovART
          </div>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-white/70 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.001zm0-2c-2.67 0-2.99.01-4.05.06-1.066.05-1.79.227-2.48.497a6.9 6.9 0 00-2.52 1.64 6.9 6.9 0 00-1.64 2.52c-.27.69-.447 1.414-.497 2.48-.05 1.06-.06 1.38-.06 4.05v.08c0 2.67.01 2.99.06 4.05.05 1.066.227 1.79.497 2.48a6.9 6.9 0 001.64 2.52 6.9 6.9 0 002.52 1.64c.69.27 1.414.447 2.48.497 1.06.05 1.38.06 4.05.06h.08c2.67 0 2.99-.01 4.05-.06 1.066-.05 1.79-.227 2.48-.497a6.9 6.9 0 002.52-1.64 6.9 6.9 0 001.64-2.52c.27-.69.447-1.414.497-2.48.05-1.06.06-1.38.06-4.05v-.08c0-2.67-.01-2.99-.06-4.05-.05-1.066-.227-1.79-.497-2.48a6.9 6.9 0 00-1.64-2.52 6.9 6.9 0 00-2.52-1.64c-.69-.27-1.414-.447-2.48-.497-1.06-.05-1.38-.06-4.05-.06h-.08z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
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
