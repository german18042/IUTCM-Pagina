import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { PrimerSemestre } from '../../../../../components/carreras/informatica/PrimerSemestre';

export const metadata = {
  title: 'Primer Semestre - TSU en Informática | IUTCM',
  description: 'Información detallada sobre el primer semestre de la carrera de Técnico Superior Universitario en Informática en el Instituto Universitario de Tecnología de Cumaná.',
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
