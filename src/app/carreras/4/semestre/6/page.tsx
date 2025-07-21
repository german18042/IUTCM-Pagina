import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { HoteleriaSextoSemestre } from '../../../../../components/carreras/turismo/HoteleriaSextoSemestre';

export const metadata: Metadata = {
  title: 'Sexto Semestre - TSU en Turismo Mención Hotelería | IUTCM',
  description: 'Información detallada sobre el sexto semestre de la carrera de TSU en Turismo Mención Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteleriaSextoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteleriaSextoSemestre />
      </main>
      <Footer />
    </>
  );
}
