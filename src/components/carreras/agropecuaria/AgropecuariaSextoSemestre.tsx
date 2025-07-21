"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaClock, FaSchool, FaBook, FaCheckCircle, FaBriefcase, FaHandshake, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';

export const AgropecuariaSextoSemestre = () => {
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

  const beneficios = [
    {
      icon: <FaBriefcase />,
      title: "Experiencia Profesional",
      description: "Aplica tus conocimientos en entornos laborales reales del sector agropecuario."
    },
    {
      icon: <FaHandshake />,
      title: "Networking Profesional",
      description: "Establece contactos con profesionales y empresas del sector que pueden abrir puertas a futuras oportunidades laborales."
    },
    {
      icon: <FaChartLine />,
      title: "Desarrollo de Competencias",
      description: "Fortalece tus habilidades técnicas y blandas en un entorno laboral supervisado."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-800">
            <img 
              src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg" 
              alt="Sexto Semestre Agropecuaria" 
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg';
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
              <span className="text-secondary">TSU ADMINISTRACIÓN DE EMPRESAS AGROPECUARIAS VI</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Desarrollo Académico del sexto semestre de la carrera de Técnico Superior Universitario en Administración de Empresas Agropecuarias
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                href="#materias"
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
              El sexto semestre de la carrera de TSU en Administración de Empresas Agropecuarias está dedicado exclusivamente a las pasantías profesionales, representando la culminación de tu formación académica y el puente hacia tu inserción en el mercado laboral. Durante este período, tendrás la oportunidad de aplicar todos los conocimientos y habilidades adquiridos a lo largo de la carrera en un entorno laboral real del sector agropecuario.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Las pasantías te permitirán enfrentarte a situaciones y desafíos reales en la administración de empresas agropecuarias, desarrollando competencias profesionales bajo la supervisión de expertos del sector. Esta experiencia no solo complementa tu formación académica, sino que también te proporciona una valiosa experiencia laboral que enriquecerá tu currículum y facilitará tu inserción en el mercado laboral una vez graduado.
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
                <p className="text-gray-700">Técnico Superior Universitario en Administración de Empresas Agropecuarias</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Materias */}
      <section id="materias" className="py-16 bg-primary text-white">
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
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md mb-12 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start">
                <div className="text-secondary text-3xl mr-6 mt-1">
                  <FaBook />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">PASANTÍAS</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Las pasantías profesionales constituyen un período de práctica laboral supervisada en empresas del sector agropecuario, donde aplicarás los conocimientos adquiridos durante tu formación académica. Esta experiencia te permitirá desarrollar habilidades prácticas en la administración de empresas agropecuarias y establecer contactos profesionales valiosos para tu futuro laboral.
                  </p>
                  <div className="flex items-center text-sm text-white/80 mb-2">
                    <FaCheckCircle className="mr-2 text-secondary" />
                    <span>Duración: 320 horas académicas</span>
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <FaCheckCircle className="mr-2 text-secondary" />
                    <span>Evaluación: Informe final y evaluación del tutor empresarial</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-center mb-8">Beneficios de las Pasantías</h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
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
                  <h4 className="text-lg font-bold mb-3">{beneficio.title}</h4>
                  <p className="text-white/80 text-sm">{beneficio.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 text-center">
              <Button 
                variant="secondary" 
                size="lg"
                href="/carreras/5"
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
