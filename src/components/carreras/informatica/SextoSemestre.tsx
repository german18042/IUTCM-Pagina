"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaClock, FaSchool, FaBook, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';

export const SextoSemestre = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const materias = [
    "PASANTÍAS"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-800">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
              alt="Sexto Semestre Informática" 
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg';
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-primary/70 z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-20">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sexto Semestre<br />
              <span className="text-secondary">TSU en Informática</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Desarrollo Académico del sexto semestre de la carrera de Técnico Superior Universitario en Informática
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                href="#pasantias"
                className="font-bold shadow-lg hover:shadow-xl"
              >
                Ver Información
              </Button>
              <Button 
                variant="primary" 
                size="lg"
                href="/contacto"
                className="font-bold shadow-lg hover:shadow-xl border-2 border-white"
              >
                Solicitar Información
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Desarrollo Académico</h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
            >
              Puedes inscribir y cursar la carrera por semestre o materias individuales y así desarrollarlas a tu ritmo y bajo tu determinación, el tiempo que le quieras dedicar a tu carrera.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Pregunta por nuestros procesos de covalidación y acreditación de estudios ya cursados en el área que te permitirán aprobar las materias por equivalencia.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  <FaSchool />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Modalidad</h3>
                <p className="text-gray-700">Presencial Digital Interactiva</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  <FaClock />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Duración</h3>
                <p className="text-gray-700">Estudia a tu Ritmo</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  <FaGraduationCap />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Título que otorga</h3>
                <p className="text-gray-700">Técnico Superior Universitario en Informática</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pasantías */}
      <section id="pasantias" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Pasantías Profesionales</h2>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/20 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start mb-6">
                <div className="text-secondary text-3xl mr-6 mt-1">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">PASANTÍAS</h3>
                  <p className="text-lg mb-4">
                    Las pasantías profesionales representan la culminación de tu formación académica como Técnico Superior Universitario en Informática. Durante este período, aplicarás todos los conocimientos y habilidades adquiridos a lo largo de la carrera en un entorno laboral real.
                  </p>
                  <p className="text-lg mb-4">
                    Nuestros estudiantes realizan sus pasantías en empresas e instituciones reconocidas del sector tecnológico, donde tienen la oportunidad de integrarse a equipos de trabajo profesionales y desarrollar proyectos significativos.
                  </p>
                  <div className="flex items-center text-white/80 mt-6">
                    <FaCheckCircle className="mr-2 text-secondary" />
                    <span>Créditos académicos disponibles</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white/5 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-secondary">Beneficios de las Pasantías</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="mr-3 text-secondary mt-1" />
                    <span>Experiencia laboral real en el sector tecnológico</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mr-3 text-secondary mt-1" />
                    <span>Aplicación práctica de conocimientos teóricos</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mr-3 text-secondary mt-1" />
                    <span>Desarrollo de habilidades profesionales y personales</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mr-3 text-secondary mt-1" />
                    <span>Oportunidades de empleo al finalizar la carrera</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="mr-3 text-secondary mt-1" />
                    <span>Creación de red de contactos profesionales</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <div className="mt-12 text-center">
              <Button 
                variant="secondary" 
                size="lg"
                href="/carreras/1"
                className="font-bold shadow-lg hover:shadow-xl"
              >
                Volver a la Carrera
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
