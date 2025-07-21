import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { HoteleriaPrimerSemestre } from '../../../../../components/carreras/turismo/HoteleriaPrimerSemestre';

export const metadata: Metadata = {
  title: 'Primer Semestre - TSU en Turismo Mención Hotelería | IUTCM',
  description: 'Información detallada sobre el primer semestre de la carrera de TSU en Turismo Mención Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteleriaPrimerSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteleriaPrimerSemestre />
      </main>
      <Footer />
    </>
  );
}
