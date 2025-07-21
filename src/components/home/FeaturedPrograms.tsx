"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { PlaceholderImage } from './PlaceholderImage';

const programs = [
  {
    id: 1,
    title: 'T.S.U. en Informática',
    description: 'Adquiere conocimientos y habilidades para resolver desafíos tecnológicos en desarrollo de software, redes, bases de datos y seguridad informática.',
    image: '/images/informatica.jpg',
    link: '/carreras/1',
  },
  {
    id: 2,
    title: 'T.S.U. en Administración de Empresas',
    description: 'Prepárate para desarrollar y gestionar empresas en distintos sectores con sólida base académica y experiencia práctica.',
    image: '/images/administracion.jpg',
    link: '/carreras/2',
  },
  {
    id: 3,
    title: 'T.S.U. en Turismo Mención Servicios Turísticos',
    description: 'Especialízate en planificación de viajes, gestión de alojamiento, atención al cliente y desarrollo de productos turísticos.',
    image: '/images/turismo.jpg',
    link: '/carreras/3',
  },
];

export const FeaturedPrograms = () => {
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
    <section className="relative py-20 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden text-white">
      {/* Fondo con patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Programas Académicos Destacados</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Descubre nuestras carreras diseñadas para formar profesionales competitivos en el mercado laboral actual.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                {program.id === 1 && (
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="T.S.U. en Informática" 
                    className="w-full h-full object-cover"
                  />
                )}
                {program.id === 2 && (
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="T.S.U. en Administración de Empresas" 
                    className="w-full h-full object-cover"
                  />
                )}
                {program.id === 3 && (
                  <img 
                    src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="T.S.U. en Turismo Mención Servicios Turísticos" 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  href={program.link}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                >
                  <span>Más información</span>
                  <FaArrowRight className="ml-2" size={14} />
                </Link>
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
            href="/carreras"
            className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-md hover:bg-secondary/90 transition-all hover:scale-105 transform font-medium shadow-lg"
          >
            <span>Explorar todas nuestras carreras</span>
            <FaArrowRight className="ml-3" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
