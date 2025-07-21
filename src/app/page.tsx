import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { InscripcionesSection } from "@/components/home/InscripcionesSection";
import NoticiasRecientesSection from "@/components/home/NoticiasRecientesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CertificacionesDestacadas } from "@/components/home/CertificacionesDestacadas";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedPrograms />
        <CertificacionesDestacadas />
        <InscripcionesSection />
        <NoticiasRecientesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
