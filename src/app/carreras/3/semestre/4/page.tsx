import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { CuartoSemestre } from '../../../../../components/carreras/turismo/CuartoSemestre';

export const metadata: Metadata = {
  title: 'Cuarto Semestre - TSU en Turismo Mención Servicios Turísticos | IUTCM',
  description: 'Información detallada sobre el cuarto semestre de la carrera de TSU en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function CuartoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <CuartoSemestre />
      </main>
      <Footer />
    </>
  );
}
