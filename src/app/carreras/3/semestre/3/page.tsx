import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { TercerSemestre } from '../../../../../components/carreras/turismo/TercerSemestre';

export const metadata: Metadata = {
  title: 'Tercer Semestre - TSU en Turismo Mención Servicios Turísticos | IUTCM',
  description: 'Información detallada sobre el tercer semestre de la carrera de TSU en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function TercerSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <TercerSemestre />
      </main>
      <Footer />
    </>
  );
}
