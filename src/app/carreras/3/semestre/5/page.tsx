import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { QuintoSemestre } from '../../../../../components/carreras/turismo/QuintoSemestre';

export const metadata: Metadata = {
  title: 'Quinto Semestre - TSU en Turismo Mención Servicios Turísticos | IUTCM',
  description: 'Información detallada sobre el quinto semestre de la carrera de TSU en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function QuintoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <QuintoSemestre />
      </main>
      <Footer />
    </>
  );
}
