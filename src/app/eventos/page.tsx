import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { EventosHeader } from '../../components/eventos/EventosHeader';
import { EventosCalendario } from '../../components/eventos/EventosCalendario';
import { EventosDestacados } from '../../components/eventos/EventosDestacados';

export const metadata: Metadata = {
  title: 'Eventos | IUTCM',
  description: 'Calendario de eventos y actividades del Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function EventosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary">
        <EventosHeader />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <EventosDestacados />
            </div>
            <div className="lg:col-span-1">
              <EventosCalendario />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
