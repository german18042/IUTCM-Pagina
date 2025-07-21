"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const CertificadosHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800">
          <img 
            src="hhttps://i.imgur.com/2gcTWD3.jpeg" 
            alt="Certificados Digitales IUTCM" 
            className="w-full h-full object-cover opacity-90"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://i.imgur.com/2gcTWD3.jpeg';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-primary/70 z-10"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Certificados con la garantía que mereces y la seguridad que necesitas
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Impulsa tu éxito con certificados virtuales seguros y portables, avalados por Blockchain y reconocidos a nivel global
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg mb-8 text-white/80 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Descubre las ventajas exclusivas de certificarte con nosotros. Nuestro respaldo y reconocimiento global te abrirán puertas a nuevas oportunidades. ¡Asegura tu éxito con nosotros y destaca en el mundo profesional!
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              href="#ventajas"
              className="font-bold shadow-lg hover:shadow-xl"
            >
              Descubre las Ventajas
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              href="#beneficios"
              className="font-bold shadow-lg hover:shadow-xl border-2 border-white"
            >
              Ver Beneficios
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 