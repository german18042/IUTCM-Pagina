import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { SegundoSemestre } from '../../../../../components/carreras/administracion/SegundoSemestre';

export const metadata = {
  title: 'Segundo Semestre - TSU en Administración de Empresas | IUTCM',
  description: 'Información detallada sobre el segundo semestre de la carrera de Técnico Superior Universitario en Administración de Empresas en el Instituto Universitario de Tecnología de Cumaná.',
};

export default function SegundoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <SegundoSemestre />
      </main>
      <Footer />
    </>
  );
}
