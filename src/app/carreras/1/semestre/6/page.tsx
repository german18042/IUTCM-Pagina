import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { SextoSemestre } from '../../../../../components/carreras/informatica/SextoSemestre';

export const metadata = {
  title: 'Sexto Semestre - TSU en Informática | IUTCM',
  description: 'Información detallada sobre el sexto semestre y las pasantías profesionales de la carrera de Técnico Superior Universitario en Informática en el Instituto Universitario de Tecnología de Cumaná.',
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
