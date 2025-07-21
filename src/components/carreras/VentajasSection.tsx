"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderImage } from '../../components/home/PlaceholderImage';
import { FaUserGraduate, FaHandshake, FaLaptopCode, FaGlobe, FaUsers, FaCertificate } from 'react-icons/fa';

const ventajas = [
  {
    id: 1,
    icon: <FaUserGraduate size={36} className="text-primary" />,
    title: "Profesores Expertos",
    description: "Aprende de profesionales con amplia experiencia en el campo y dedicados a tu éxito académico."
  },
  {
    id: 2,
    icon: <FaHandshake size={36} className="text-primary" />,
    title: "Convenios Empresariales",
    description: "Accede a oportunidades de prácticas profesionales y empleo a través de nuestros convenios con empresas líderes."
  },
  {
    id: 3,
    icon: <FaLaptopCode size={36} className="text-primary" />,
    title: "Instalaciones Modernas",
    description: "Estudia en aulas y laboratorios equipados con la última tecnología para un aprendizaje práctico y efectivo."
  },
  {
    id: 4,
    icon: <FaGlobe size={36} className="text-primary" />,
    title: "Enfoque Internacional",
    description: "Prepárate con una perspectiva global y competencias para destacar en un mercado laboral internacional."
  },
  {
    id: 5,
    icon: <FaUsers size={36} className="text-primary" />,
    title: "Comunidad Estudiantil",
    description: "Forma parte de una comunidad diversa y colaborativa que enriquecerá tu experiencia universitaria."
  },
  {
    id: 6,
    icon: <FaCertificate size={36} className="text-primary" />,
    title: "Titulación Reconocida",
    description: "Obtén un título con reconocimiento nacional e internacional que respaldará tu carrera profesional."
  }
];

export const VentajasSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden text-white">
      {/* Fondo con patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿Por qué estudiar en IUTCM?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descubre las ventajas que te ofrece nuestra institución para tu formación profesional y desarrollo personal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventajas.map((ventaja, index) => (
            <motion.div 
              key={ventaja.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {ventaja.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{ventaja.title}</h3>
                <p className="text-gray-700">{ventaja.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg font-medium text-white">
            En IUTCM no solo formamos profesionales, construimos líderes para el futuro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
