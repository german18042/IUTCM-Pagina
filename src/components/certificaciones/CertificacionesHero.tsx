"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export const CertificacionesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800">
          <img 
            src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg" 
            alt="Estudiantes en capacitación" 
            className="w-full h-full object-cover opacity-90"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg';
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
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Certificaciones Profesionales
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Impulsa tu carrera con nuestros programas de certificación especializados. Formación práctica y reconocida en el mercado laboral.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              href="#certificaciones"
              className="font-bold shadow-lg hover:shadow-xl"
            >
              Ver Certificaciones
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              href="/contacto"
              className="font-bold shadow-lg hover:shadow-xl border-2 border-white"
            >
              Contáctanos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 
 
 
 