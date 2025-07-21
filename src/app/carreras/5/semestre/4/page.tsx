import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { AgropecuariaCuartoSemestre } from '../../../../../components/carreras/agropecuaria/AgropecuariaCuartoSemestre';

export const metadata: Metadata = {
  title: 'Cuarto Semestre - TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Información detallada sobre el cuarto semestre de la carrera de TSU en Administración de Empresas Agropecuarias en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaCuartoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaCuartoSemestre />
      </main>
      <Footer />
    </>
  );
}
