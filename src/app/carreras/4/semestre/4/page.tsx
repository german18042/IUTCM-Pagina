import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { HoteleriaCuartoSemestre } from '../../../../../components/carreras/turismo/HoteleriaCuartoSemestre';

export const metadata: Metadata = {
  title: 'Cuarto Semestre - TSU en Turismo Mención Hotelería | IUTCM',
  description: 'Información detallada sobre el cuarto semestre de la carrera de TSU en Turismo Mención Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteleriaCuartoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteleriaCuartoSemestre />
      </main>
      <Footer />
    </>
  );
}
