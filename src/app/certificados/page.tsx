import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CertificadosHero } from '@/components/certificados/CertificadosHero';
import { BlockchainSection } from '@/components/certificados/BlockchainSection';
import { BeneficiosSection } from '@/components/certificados/BeneficiosSection';
import { VentajasSection } from '@/components/certificados/VentajasSection';

export const metadata: Metadata = {
  title: 'Certificados Digitales | IUTCM',
  description: 'Certificados digitales seguros y verificables con tecnología blockchain del Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.',
};

export default function CertificadosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CertificadosHero />
      <VentajasSection />
      <BlockchainSection />
      <BeneficiosSection />
      <Footer />
    </main>
  );
} 