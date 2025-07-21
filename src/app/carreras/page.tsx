import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { CarrerasHero } from '../../components/carreras/CarrerasHero';
import { ProgramasAcademicos } from '../../components/carreras/ProgramasAcademicos';
import { VentajasSection } from '../../components/carreras/VentajasSection';
import { ProcesosAdmision } from '../../components/carreras/ProcesosAdmision';
import { TestimoniosGraduados } from '../../components/carreras/TestimoniosGraduados';
import { ContactoCarreras } from '../../components/carreras/ContactoCarreras';
import { CertificadosBanner } from '../../components/carreras/CertificadosBanner';

export const metadata = {
  title: 'Carreras Técnicas - IUTCM',
  description: 'Explora nuestras carreras técnicas universitarias y encuentra tu camino hacia el éxito profesional en IUTCM.',
};

export default function Carreras() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CarrerasHero />
      <ProgramasAcademicos />
      <VentajasSection />
      <CertificadosBanner />
      <ProcesosAdmision />
      <TestimoniosGraduados />
      <ContactoCarreras />
      <Footer />
    </main>
  );
}
