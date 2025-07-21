import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { AgropecuariaTercerSemestre } from '../../../../../components/carreras/agropecuaria/AgropecuariaTercerSemestre';

export const metadata: Metadata = {
  title: 'Tercer Semestre - TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Información detallada sobre el tercer semestre de la carrera de TSU en Administración de Empresas Agropecuarias en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaTercerSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaTercerSemestre />
      </main>
      <Footer />
    </>
  );
}
