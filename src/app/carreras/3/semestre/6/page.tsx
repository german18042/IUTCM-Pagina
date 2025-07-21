import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { SextoSemestre } from '../../../../../components/carreras/turismo/SextoSemestre';

export const metadata: Metadata = {
  title: 'Sexto Semestre - TSU en Turismo Mención Servicios Turísticos | IUTCM',
  description: 'Información detallada sobre el sexto semestre y pasantías profesionales de la carrera de TSU en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function SextoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <SextoSemestre />
      </main>
      <Footer />
    </>
  );
}
