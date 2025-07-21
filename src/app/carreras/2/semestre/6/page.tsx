import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { SextoSemestre } from '../../../../../components/carreras/administracion/SextoSemestre';

export const metadata = {
  title: 'Sexto Semestre - TSU en Administración de Empresas | IUTCM',
  description: 'Información detallada sobre el sexto semestre y pasantías profesionales de la carrera de Técnico Superior Universitario en Administración de Empresas en el Instituto Universitario de Tecnología de Cumaná.',
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
