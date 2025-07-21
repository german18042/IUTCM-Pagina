import React from 'react';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { TercerSemestre } from '../../../../../components/carreras/administracion/TercerSemestre';

export const metadata = {
  title: 'Tercer Semestre - TSU en Administración de Empresas | IUTCM',
  description: 'Información detallada sobre el tercer semestre de la carrera de Técnico Superior Universitario en Administración de Empresas en el Instituto Universitario de Tecnología de Cumaná.',
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
