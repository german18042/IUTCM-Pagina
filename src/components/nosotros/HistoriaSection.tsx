"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const HistoriaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Descubre la historia, la misión y los valores del IUTCM
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Grupo de estudiantes universitarios IUTCM" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-lg z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-lg z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6">
              En nuestra institución, nos enorgullece ofrecer una formación académica de calidad respaldada por una sólida trayectoria de excelencia y compromiso con la educación. Estamos comprometidos con el desarrollo integral de nuestros estudiantes, preparándolos para enfrentar los desafíos del mundo profesional con confianza y conocimientos actualizados.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Contamos con un destacado equipo de profesores altamente capacitados, quienes no solo poseen una sólida formación académica, sino también una vasta experiencia en el campo laboral. Esto nos permite brindar una educación práctica y relevante, conectando los conocimientos teóricos con la realidad del mercado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
