"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const VentajasSection = () => {
  const ventajas = [
    {
      titulo: "Reconocimiento Global",
      descripcion: "Nuestros certificados son reconocidos internacionalmente, facilitando tu desarrollo profesional en cualquier parte del mundo.",
      icono: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      imagen: "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg",
      imagenFallback: "https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg"
    },
    {
      titulo: "Tecnología de Cadena de Bloques",
      descripcion: "Respaldados por tecnología de cadena de bloques, garantizando la autenticidad y seguridad de tus certificados.",
      icono: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      imagen: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      imagenFallback: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
    },
    {
      titulo: "Portabilidad Total",
      descripcion: "Accede y comparte tus certificados fácilmente, perfectos para incluir en tu CV o LinkedIn.",
      icono: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      imagen: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
      imagenFallback: "https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg"
    }
  ];

  return (
    <section id="ventajas" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ventajas de Certificarte con nosotros
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Asegura tu camino al éxito con certificados virtuales seguros y portables, 
            respaldados por cadena de bloques y reconocidos en todo el mundo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventajas.map((ventaja, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="relative h-48">
                <img
                  src={ventaja.imagen}
                  alt={ventaja.titulo}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = ventaja.imagenFallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {ventaja.icono}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {ventaja.titulo}
                </h3>
                <p className="text-gray-600">
                  {ventaja.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 