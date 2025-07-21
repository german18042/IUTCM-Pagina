import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { PrimerSemestre } from '../../../../../components/carreras/turismo/PrimerSemestre';

export const metadata = {
  title: 'Primer Semestre - TSU en Turismo Mención Servicios Turísticos | IUTCM',
  description: 'Información detallada sobre el primer semestre de la carrera de Técnico Superior Universitario en Turismo Mención Servicios Turísticos en el Instituto Universitario de Tecnología de Cumaná.',
};

export default function PrimerSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <PrimerSemestre />
      </main>
      <Footer />
    </>
  );
}
