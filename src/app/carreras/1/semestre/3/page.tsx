import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { TercerSemestre } from '../../../../../components/carreras/informatica/TercerSemestre';

export const metadata = {
  title: 'Tercer Semestre - TSU en Informática | IUTCM',
  description: 'Información detallada sobre el tercer semestre de la carrera de Técnico Superior Universitario en Informática en el Instituto Universitario de Tecnología de Cumaná.',
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
