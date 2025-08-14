import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { NoticiaDetalle } from '../../../components/noticias/NoticiaDetalle';
import { NoticiasRelacionadas } from '../../../components/noticias/NoticiasRelacionadas';

// Esta función se ejecutaría en un entorno real para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // En un caso real, aquí se buscaría la noticia por ID en la base de datos
  const resolvedParams = await params;
  return {
    title: `Noticia | IUTCM`,
    description: 'Detalles de la noticia del Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
  };
}

export default async function NoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary">
        <NoticiaDetalle id={resolvedParams.id} />
        <NoticiasRelacionadas noticiaActualId={resolvedParams.id} limite={3} />
      </main>
      <Footer />
    </>
  );
}