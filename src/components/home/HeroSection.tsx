"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-16 sm:pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-gray-800"> {/* Añadido color de fondo como respaldo */}
        <img 
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg" 
          alt="Campus universitario IUTCM" 
          className="w-full h-full object-cover opacity-90"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg';
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div 
              className="font-bold mb-6 text-center relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 tracking-tight"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-secondary drop-shadow-lg bg-clip-text bg-gradient-to-r from-secondary to-blue-400 text-transparent font-extrabold">IUTCM</span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 tracking-wide uppercase text-gray-200"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Instituto Universitario de Tecnología
              </motion.p>
              <motion.p 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="border-b-2 border-secondary pb-1">Dr. Cristóbal Mendoza</span>
              </motion.p>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-100 tracking-wide font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <span className="border-l-2 border-secondary pl-3">Formando profesionales con excelencia académica para el futuro</span>
            </motion.p>
            
            <motion.p 
              className="mb-6 sm:mb-8 text-gray-200 max-w-lg text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Ofrecemos programas académicos de alta calidad en diversas áreas del conocimiento, con un enfoque práctico y orientado a las necesidades del mercado laboral actual.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                variant="secondary" 
                size="lg" 
                href="/carreras"
                className="text-sm sm:text-base font-bold shadow-lg hover:shadow-xl"
              >
                Explorar Carreras
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Imagen para pantallas grandes (lg y superiores) */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative h-[400px] xl:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Estudiantes IUTCM" 
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Imagen flotante para pantallas medianas (md) */}
          <motion.div
            className="lg:hidden md:block hidden mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="relative h-[300px] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Estudiantes IUTCM" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
