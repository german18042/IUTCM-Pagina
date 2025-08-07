"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const EventosHeader = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with darker overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800">
        <img 
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
            alt="Eventos universitarios" 
            className="w-full h-full object-cover opacity-90"
          loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg';
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
            Eventos Institucionales
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Descubre todas las actividades académicas y extracurriculares que tenemos preparadas para ti en el Instituto Universitario de Tecnología Dr. Cristóbal Mendoza.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="#eventos-destacados"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 ease-out hover:scale-105 shadow-lg"
            >
              Ver Eventos Destacados
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
