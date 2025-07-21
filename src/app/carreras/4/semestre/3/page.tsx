import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { HoteleriaTercerSemestre } from '../../../../../components/carreras/turismo/HoteleriaTercerSemestre';

export const metadata: Metadata = {
  title: 'Tercer Semestre - TSU en Turismo Mención Hotelería | IUTCM',
  description: 'Información detallada sobre el tercer semestre de la carrera de TSU en Turismo Mención Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteleriaTercerSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteleriaTercerSemestre />
      </main>
      <Footer />
    </>
  );
}
