import React from 'react';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { TurismoDetalle } from '../../../components/carreras/turismo/TurismoDetalle';

export const metadata = {
  title: 'TSU en Turismo Mención Servicios Turísticos - IUTCM',
  description: 'Información detallada sobre la carrera de Técnico Superior Universitario en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function TurismoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TurismoDetalle />
      <Footer />
    </main>
  );
}
