"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';

export const ObjetivosSection = () => {
  const objetivos = [
    {
      id: 1,
      icon: <FaGraduationCap size={32} />,
      title: "Impartir una educación de excelencia",
      description: "Ofrecer programas académicos de alta calidad que respondan a las necesidades del mercado laboral y la sociedad."
    },
    {
      id: 2,
      icon: <FaLightbulb size={32} />,
      title: "Promover la investigación y la innovación",
      description: "Fomentar el desarrollo de proyectos de investigación que contribuyan al avance del conocimiento y la tecnología."
    },
    {
      id: 3,
      icon: <FaHandshake size={32} />,
      title: "Formar profesionales éticos y comprometidos",
      description: "Desarrollar en nuestros estudiantes valores éticos y responsabilidad social para su desempeño profesional."
    },
    {
      id: 4,
      icon: <FaUsers size={32} />,
      title: "Brindar un ambiente de apoyo y desarrollo personal",
      description: "Crear espacios que promuevan el crecimiento personal, el bienestar y el desarrollo integral de la comunidad universitaria."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">OBJETIVOS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros objetivos institucionales están orientados a la formación integral de profesionales y al desarrollo sostenible de nuestra comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objetivos.map((objetivo, index) => (
            <motion.div
              key={objetivo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4 flex justify-center">
                {objetivo.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{objetivo.title}</h3>
              <p className="text-gray-600">{objetivo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
