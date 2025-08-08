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
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedPrograms />
        <CertificacionesDestacadas />
        {/* Banner Crédito IUTCM */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-sm p-6 sm:p-8">
              <span className="absolute inset-y-0 left-0 w-1 bg-white" aria-hidden />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="text-center sm:text-left max-w-2xl">
                  <p className="text-xs sm:text-sm text-white/80 font-medium tracking-wide uppercase">
                    Financiamiento estudiantil
                  </p>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
                    Solicita tu crédito IUTCM
                  </h2>
                  <p className="mt-2 text-white/90">
                    Accede a planes flexibles para tus estudios. Aplica en minutos y recibe respuesta rápida.
                  </p>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90 text-sm">
                    <li>• Tasas preferenciales para estudiantes</li>
                    <li>• Aprobación ágil</li>
                    <li>• Gestión 100% en línea</li>
                    <li>• Soporte dedicado</li>
                  </ul>
                  <div className="mt-4">
                    <Link
                      href="/solicitud"
                      className="inline-flex items-center justify-center bg-secondary text-primary px-6 py-3 rounded-md font-semibold hover:bg-accent transition-colors shadow-sm"
                    >
                      Solicitar ahora
                    </Link>
                  </div>
                </div>
                {/* Ilustración tipo tarjeta */}
                <div className="shrink-0">
                  <div className="relative w-64 h-40 sm:w-80 sm:h-48 rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10" />
                    <Image
                      src="/images/logo.png"
                      alt="Logo IUTCM"
                      width={80}
                      height={80}
                      className="absolute top-4 left-4 w-16 h-auto opacity-95"
                    />
                    <div className="absolute top-4 right-4 text-right">
                      <p className="text-white/80 text-xs uppercase tracking-wider">IUTCM Crédito</p>
                    </div>
                    <div className="absolute left-4 bottom-10 text-white tracking-widest">
                      <p className="text-lg">•••• 1234 •••• 5678</p>
                    </div>
                    <div className="absolute left-4 bottom-4 flex items-center gap-6 text-white/80 text-xs">
                      <p>Titular: Estudiante</p>
                      <p>Exp: 12/28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <InscripcionesSection />
        <NoticiasRecientesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
