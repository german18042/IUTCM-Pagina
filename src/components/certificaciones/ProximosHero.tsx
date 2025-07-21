"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export const ProximosHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
            alt="Formación profesional" 
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
            Programa de Profesionalización
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Aprende las habilidades fundamentales en diferentes áreas de estudio para crear equipos más competitivos con Inteligencia Artificial, Realidad Virtual, Realidad Aumentada y clases presenciales hibridas.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              href="#certificados"
              className="font-bold shadow-lg hover:shadow-xl"
            >
              Ver Certificados
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              href="#diplomados"
              className="font-bold shadow-lg hover:shadow-xl border-2 border-white"
            >
              Ver Diplomados
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 
 
 
 