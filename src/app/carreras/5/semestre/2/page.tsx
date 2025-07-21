import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../../../components/layout/Navbar';
import { Footer } from '../../../../../components/layout/Footer';
import { AgropecuariaSegundoSemestre } from '../../../../../components/carreras/agropecuaria/AgropecuariaSegundoSemestre';

export const metadata: Metadata = {
  title: 'Segundo Semestre - TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Información detallada sobre el segundo semestre de la carrera de TSU en Administración de Empresas Agropecuarias en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaSegundoSemestrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaSegundoSemestre />
      </main>
      <Footer />
    </>
  );
}
