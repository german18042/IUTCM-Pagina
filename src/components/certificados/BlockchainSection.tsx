"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BlockchainSection = () => {
  return (
    <section id="blockchain" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              ¿Qué es la Tecnología Blockchain?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Permite el registro y verificación de transacciones de manera transparente y sin intermediarios. 
              En el caso de los certificados virtuales de IUTCM, en alianza con FirmeDigital la información 
              relevante sobre la certificación, como los datos del estudiante, el programa académico completado 
              y las calificaciones obtenidas, se almacena en una cadena de bloques.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-primary">
              Emisión de Certificados Académicos con IUTCM
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La colaboración entre IUTCM y FirmeDigital ofrece una solución innovadora para la emisión 
              de certificados académicos. Esta alianza permite a los estudiantes y graduados obtener sus 
              certificados de manera segura, eficiente y transparente, utilizando tecnología de vanguardia.
            </p>

            <ul className="space-y-4">
              {[
                "Registro inmutable y permanente",
                "Verificación instantánea y global",
                "Protección contra falsificaciones",
                "Acceso 24/7 a tus certificados",
                "Compartición segura y sencilla"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://i.imgur.com/KPTWKfR.jpeg"
                alt="Tecnología Blockchain"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 