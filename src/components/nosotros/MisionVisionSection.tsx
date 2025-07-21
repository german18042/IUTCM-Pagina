"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa';

export const MisionVisionSection = () => {
  return (
    <section id="MisionVisionSection" className="relative py-20 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden">
      {/* Fondo con patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white text-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-accent"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full mr-4 shadow-inner">
                <FaEye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">VISIÓN</h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestra visión en el Instituto Universitario de Tecnología "Dr. Cristóbal Mendoza" es ser reconocidos como una institución líder en la formación de profesionales altamente capacitados y comprometidos con el desarrollo sostenible en el campo de la tecnología y la administración.
            </p>
          </motion.div>

          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-yellow-400"
          >
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 p-4 rounded-full mr-4 shadow-inner">
                <FaBullseye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">MISIÓN</h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Como institución, nos preocupamos por el bienestar integral de nuestros estudiantes. Buscamos crear un ambiente inclusivo, respetuoso y motivador, que promueva el crecimiento personal y el desarrollo de talentos individuales. Queremos que nuestros estudiantes se sientan apoyados y acompañados en su proceso de formación, brindándoles las herramientas y el apoyo necesario para alcanzar sus metas y superar sus expectativas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
