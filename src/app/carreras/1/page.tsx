import React from 'react';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { InformaticaDetalle } from '../../../components/carreras/informatica/InformaticaDetalle';

export const metadata = {
  title: 'TSU en Informática - IUTCM',
  description: 'Información detallada sobre la carrera de Técnico Superior Universitario en Informática en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function InformaticaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InformaticaDetalle />
      <Footer />
    </main>
  );
}
