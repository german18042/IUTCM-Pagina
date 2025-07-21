import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { CuartoSemestre } from '../../../../../components/carreras/informatica/CuartoSemestre';

export const metadata = {
  title: 'Cuarto Semestre - TSU en Informática | IUTCM',
  description: 'Información detallada sobre el cuarto semestre de la carrera de Técnico Superior Universitario en Informática en el Instituto Universitario de Tecnología de Cumaná.',
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
