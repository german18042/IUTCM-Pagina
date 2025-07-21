import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { QuintoSemestre } from '../../../../../components/carreras/informatica/QuintoSemestre';

export const metadata = {
  title: 'Quinto Semestre - TSU en Informática | IUTCM',
  description: 'Información detallada sobre el quinto semestre de la carrera de Técnico Superior Universitario en Informática en el Instituto Universitario de Tecnología de Cumaná.',
};

export default function QuintoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <QuintoSemestre />
      </main>
      <Footer />
    </>
  );
}
