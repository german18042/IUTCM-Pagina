"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { PlaceholderImage } from '../../components/home/PlaceholderImage';

export const CarrerasHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800"> {/* Añadido color de fondo como respaldo */}
          <img 
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg" 
            alt="Estudiantes universitarios en el campus" 
            className="w-full h-full object-cover opacity-90"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg';
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
            Nuestras Carreras Técnicas
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Formamos profesionales técnicos con excelencia académica y valores éticos, 
            preparados para enfrentar los desafíos del mundo laboral actual.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              href="#programas"
              className="font-bold shadow-lg hover:shadow-xl"
            >
              Explorar Programas
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              href="#admision"
              className="font-bold shadow-lg hover:shadow-xl border-2 border-white"
            >
              Proceso de Admisión
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
