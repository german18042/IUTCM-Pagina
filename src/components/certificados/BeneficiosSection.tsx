"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BeneficiosSection = () => {
  const beneficios = [
    {
      titulo: "Para el Centro",
      imagen: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
      imagenFallback: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
      beneficios: [
        "Elimina la falsificación de títulos",
        "Proceso de certificación rápido",
        "Proceso más económico",
        "Destaca como una institución innovadora y vanguardista",
        "Proporciona un mayor valor para los alumnos",
        "Preserva el prestigio de la escuela"
      ]
    },
    {
      titulo: "Para el Graduado",
      imagen: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      imagenFallback: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      beneficios: [
        "Cómodo de compartir y validar por todo el mundo",
        "Facilita la apostilla para el reconocimiento internacional",
        "Posibilidad de incorporar el título en el CV o en LinkedIn",
        "Destaca en procesos de selección",
        "Obtención instantánea"
      ]
    },
    {
      titulo: "Para la Empresa",
      imagen: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      imagenFallback: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg",
      beneficios: [
        "Capacidad para verificar las titulaciones de los candidatos mediante un sistema rápido sencillo y gratuito",
        "Ahorro económico derivado de errores de contratación",
        "Posibilidad de obtener otros campos de información relevantes y validados"
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Beneficios de los Certificados de IUTCM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La colaboración entre IUTCM y FirmeDigital ofrece una solución innovadora para la emisión 
            de certificados académicos. Esta alianza permite a los estudiantes y graduados obtener sus 
            certificados de manera segura, eficiente y transparente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
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
                  src={beneficio.imagen}
                  alt={beneficio.titulo}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = beneficio.imagenFallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {beneficio.titulo}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {beneficio.beneficios.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                    >
                      <svg className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 