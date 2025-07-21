import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { NoticiaDetalle } from '../../../components/noticias/NoticiaDetalle';
import { NoticiasRelacionadas } from '../../../components/noticias/NoticiasRelacionadas';

// Esta función se ejecutaría en un entorno real para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // En un caso real, aquí se buscaría la noticia por ID en la base de datos
  return {
    title: `Noticia | IUTCM`,
    description: 'Detalles de la noticia del Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
  };
}

export default function NoticiaPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary">
        <NoticiaDetalle id={params.id} />
        <NoticiasRelacionadas noticiaActualId={params.id} limite={3} />
      </main>
      <Footer />
    </>
  );
}
