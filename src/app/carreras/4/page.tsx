import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { HoteleriaDetalle } from '../../../components/carreras/turismo/HoteleriaDetalle';

export const metadata: Metadata = {
  title: 'TSU en Turismo Mención Servicios Turísticos y Hotelería | IUTCM',
  description: 'Información detallada sobre la carrera de TSU en Turismo Mención Servicios Turísticos y Hotelería en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function HoteleriaPage() {
  return (
    <>
      <Navbar />
      <main>
        <HoteleriaDetalle />
      </main>
      <Footer />
    </>
  );
}
