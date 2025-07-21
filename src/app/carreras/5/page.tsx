import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { AgropecuariaDetalle } from '../../../components/carreras/agropecuaria/AgropecuariaDetalle';

export const metadata: Metadata = {
  title: 'TSU en Administración de Empresas Agropecuarias | IUTCM',
  description: 'Formación especializada para la gestión eficiente y sostenible de empresas del sector agropecuario en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AgropecuariaPage() {
  return (
    <>
      <Navbar />
      <main>
        <AgropecuariaDetalle />
      </main>
      <Footer />
    </>
  );
}
