import React from 'react';
import { Metadata } from 'next';
import { NoticiasHeader } from '../../components/noticias/NoticiasHeader';
import NoticiasList from '../../components/noticias/NoticiasList';
import { Footer } from '../../components/layout/Footer';
import { Navbar } from '../../components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Noticias | IUTCM',
  description: 'Mantente informado sobre las últimas noticias del Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary">
        <NoticiasHeader />
        
        <div className="container mx-auto px-4 py-12">
              <NoticiasList />
        </div>
      </main>
      <Footer />
    </>
  );
}
