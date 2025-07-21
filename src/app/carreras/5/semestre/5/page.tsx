import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { AgropecuariaQuintoSemestre } from '../../../../../components/carreras/agropecuaria/AgropecuariaQuintoSemestre';

export const metadata: Metadata = {
  title: 'Quinto Semestre - TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Información detallada sobre el quinto semestre de la carrera de TSU en Administración de Empresas Agropecuarias en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaQuintoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaQuintoSemestre />
      </main>
      <Footer />
    </>
  );
}
