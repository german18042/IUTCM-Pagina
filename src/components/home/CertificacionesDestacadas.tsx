"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const certificaciones = [
  {
    id: 1,
    titulo: 'Soldadura Industrial',
    descripcion: 'Aprende las técnicas más avanzadas de soldadura industrial con certificación internacional.',
    imagen: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 2,
    titulo: 'Certificado de Reparación de Aires Acondicionados Split',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos de los sistemas de aire acondicionado.`,
    imagen: 'https://i.imgur.com/09RHNsT.jpeg',
    },
  {
    id: 3,
    titulo: 'Atención al Cliente',
    descripcion: 'Desarrolla habilidades profesionales en servicio y atención al cliente.',
    imagen: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop'
  }
];

export const CertificacionesDestacadas = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certificaciones Destacadas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Amplía tus conocimientos y mejora tus oportunidades laborales con nuestras certificaciones profesionales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificaciones.map((certificacion) => (
            <motion.div
              key={certificacion.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={certificacion.imagen}
                  alt={certificacion.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{certificacion.titulo}</h3>
                <p className="text-gray-600 mb-4">{certificacion.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/certificaciones"
            className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-md hover:bg-secondary/90 transition-all hover:scale-105 transform font-medium shadow-lg"
          >
            <span>Ver todas las certificaciones</span>
            <FaArrowRight className="ml-3" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}; 
 
 
 