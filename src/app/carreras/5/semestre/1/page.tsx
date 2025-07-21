import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { AgropecuariaPrimerSemestre } from '../../../../../components/carreras/agropecuaria/AgropecuariaPrimerSemestre';

export const metadata: Metadata = {
  title: 'Primer Semestre - TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Información detallada sobre el primer semestre de la carrera de TSU en Administración de Empresas Agropecuarias en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaPrimerSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaPrimerSemestre />
      </main>
      <Footer />
    </>
  );
}
