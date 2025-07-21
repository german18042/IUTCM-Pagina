import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { HoteriaQuintoSemestre } from '../../../../../components/carreras/turismo/HoteriaQuintoSemestre';

export const metadata: Metadata = {
  title: 'Quinto Semestre - TSU en Turismo Mención Hotelería | IUTCM',
  description: 'Información detallada sobre el quinto semestre de la carrera de TSU en Turismo Mención Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteriaQuintoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteriaQuintoSemestre />
      </main>
      <Footer />
    </>
  );
}
