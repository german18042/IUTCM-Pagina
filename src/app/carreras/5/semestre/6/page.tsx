import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { AgropecuariaSextoSemestre } from '../../../../../components/carreras/agropecuaria/AgropecuariaSextoSemestre';

export const metadata: Metadata = {
  title: 'Sexto Semestre - TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Información detallada sobre el sexto semestre de la carrera de TSU en Administración de Empresas Agropecuarias en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaSextoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaSextoSemestre />
      </main>
      <Footer />
    </>
  );
}
