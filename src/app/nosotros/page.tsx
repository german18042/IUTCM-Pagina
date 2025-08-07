import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { NosotrosHero } from '../../components/nosotros/NosotrosHero';
import { HistoriaSection } from '../../components/nosotros/HistoriaSection';
import { MisionVisionSection } from '../../components/nosotros/MisionVisionSection';
import { ObjetivosSection } from '../../components/nosotros/ObjetivosSection';
import { EquipoSection } from '../../components/nosotros/EquipoSection';

export const metadata = {
  title: 'Sobre Nosotros - IUTCM',
  description: 'Descubre la historia, la misión y los valores del Instituto Universitario de Tecnología DR. Cristobal Mendoza.',
};

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <NosotrosHero />
      <HistoriaSection />
      <MisionVisionSection />
      <ObjetivosSection />
     {/*<EquipoSection />*/}
      <Footer />
    </main>
  );
}
