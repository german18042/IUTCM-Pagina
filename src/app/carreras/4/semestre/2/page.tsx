import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { HoteriaSegundoSemestre } from '../../../../../components/carreras/turismo/HoteriaSegundoSemestre';

export const metadata: Metadata = {
  title: 'Segundo Semestre - TSU en Turismo Mención Hotelería | IUTCM',
  description: 'Información detallada sobre el segundo semestre de la carrera de TSU en Turismo Mención Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteriaSegundoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteriaSegundoSemestre />
      </main>
      <Footer />
    </>
  );
}
