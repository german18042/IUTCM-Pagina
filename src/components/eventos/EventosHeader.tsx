"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const EventosHeader = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-secondary text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
          alt="Eventos universitarios" 
          className="w-full h-full object-cover opacity-80"
          loading="eager"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Eventos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90">
            Descubre todas las actividades académicas y extracurriculares que tenemos preparadas para ti
          </p>
        </motion.div>
      </div>
    </section>
  );
};
