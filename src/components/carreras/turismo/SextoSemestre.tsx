"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaClock, FaSchool, FaBook, FaCheckCircle, FaBriefcase, FaHandshake, FaBuilding } from 'react-icons/fa';
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

  const beneficios = [
    { icon: <FaBriefcase />, texto: "Experiencia laboral real en el sector turístico" },
    { icon: <FaHandshake />, texto: "Contactos profesionales y oportunidades de empleo" },
    { icon: <FaBuilding />, texto: "Aplicación práctica de conocimientos adquiridos" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-800">
            <img 
              src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg" 
              alt="Sexto Semestre Turismo" 
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg';
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
              <span className="text-secondary">TSU TURISMO MENCIÓN SERVICIOS TURISTICOS VI</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Desarrollo Académico del sexto semestre de la carrera de Técnico Superior Universitario en Turismo Mención Servicios Turísticos
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                href="#pasantias"
                className="font-bold shadow-lg hover:shadow-xl"
              >
                Ver Detalles
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
              El sexto semestre de la carrera de TSU en Turismo Mención Servicios Turísticos está dedicado exclusivamente a las pasantías profesionales, donde aplicarás todos los conocimientos adquiridos durante tu formación en un entorno laboral real del sector turístico, consolidando tu experiencia práctica y preparándote para tu inserción en el mercado laboral.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Las pasantías te permitirán desarrollar habilidades profesionales, establecer contactos en la industria y aplicar de manera práctica los conocimientos teóricos adquiridos durante los semestres anteriores.
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
                <p className="text-gray-700">Técnico Superior Universitario en Turismo Mención: Servicios Turísticos</p>
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
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-white/20 mb-12"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="text-secondary text-3xl mr-6 mt-1">
                  <FaBook />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">PASANTÍAS</h3>
                  <p className="text-white/90 mb-4">
                    Las pasantías constituyen el componente práctico final de la carrera, donde aplicarás todos los conocimientos adquiridos en un entorno laboral real del sector turístico.
                  </p>
                  <div className="flex items-center text-sm text-white/80 mb-2">
                    <FaCheckCircle className="mr-2 text-secondary" />
                    <span>Duración mínima de 320 horas</span>
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <FaCheckCircle className="mr-2 text-secondary" />
                    <span>Supervisión académica y profesional</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-center mb-8">Beneficios de las Pasantías</h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {beneficios.map((beneficio, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-white/20 text-center"
                  variants={fadeIn}
                >
                  <div className="text-secondary text-3xl mb-4 flex justify-center">
                    {beneficio.icon}
                  </div>
                  <p className="text-white/90">{beneficio.texto}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 text-center">
              <Button 
                variant="secondary" 
                size="lg"
                href="/carreras/3"
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
