import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Additional sections can be added here */}
      {/* 
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      */}
    </main>
  );
}


