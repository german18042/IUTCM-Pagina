import React from 'react';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { AdministracionDetalle } from '../../../components/carreras/administracion/AdministracionDetalle';

export const metadata = {
  title: 'TSU en Administración de Empresas - IUTCM',
  description: 'Información detallada sobre la carrera de Técnico Superior Universitario en Administración de Empresas en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function AdministracionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AdministracionDetalle />
      <Footer />
    </main>
  );
}
