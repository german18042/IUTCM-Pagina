"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { FaGraduationCap, FaUsers, FaBook, FaGlobe } from 'react-icons/fa';
import { PlaceholderImage } from './PlaceholderImage';

const stats = [
  { id: 1, icon: <FaGraduationCap size={24} />, value: '30+', label: 'Años de Experiencia' },
  { id: 2, icon: <FaUsers size={24} />, value: '3,000+', label: 'Estudiantes Activos' },
  { id: 3, icon: <FaBook size={24} />, value: '5+', label: 'Programas Académicos' },
  { id: 4, icon: <FaGlobe size={24} />, value: '15+', label: 'Convenios Internacionales' },
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Estudiantes IUTCM" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Sobre IUTCM</h2>
            
            <p className="text-lg text-gray-700 mb-4">
              El Instituto Universitario de Tecnología DR. Cristobal Mendoza (IUTCM) es una institución educativa comprometida con la formación integral de profesionales competentes y éticos.
            </p>
            
            <p className="text-gray-600 mb-6">
              Desde nuestra fundación, nos hemos dedicado a ofrecer una educación de calidad que combina la teoría con la práctica, preparando a nuestros estudiantes para enfrentar los desafíos del mundo laboral con confianza y conocimientos sólidos.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Nuestra Misión</h3>
              <p className="text-gray-600 mb-4">
                Formar profesionales integrales con competencias técnicas y humanas, capaces de contribuir al desarrollo sostenible de la sociedad a través de la innovación y el compromiso ético.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-3">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser una institución educativa líder y referente en la formación de profesionales, reconocida por su excelencia académica, innovación y compromiso social.
              </p>
            </div>
            
            <Button variant="primary" size="lg" href="/nosotros">
              Conoce más sobre nosotros
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="bg-primary p-6 rounded-lg text-center shadow-md"
            >
              <div className="text-white mb-2 flex justify-center">{stat.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-200 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
