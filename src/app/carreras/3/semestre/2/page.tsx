import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { SegundoSemestre } from '../../../../../components/carreras/turismo/SegundoSemestre';

export const metadata: Metadata = {
  title: 'Segundo Semestre - TSU en Turismo Mención Servicios Turísticos | IUTCM',
  description: 'Información detallada sobre el segundo semestre de la carrera de TSU en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function SegundoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <SegundoSemestre />
      </main>
      <Footer />
    </>
  );
}
