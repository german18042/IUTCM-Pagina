"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTractor, FaSeedling, FaChartLine, FaUsers, FaHandshake, FaGlobeAmericas, FaIndustry, FaUniversity, FaBuilding, FaFlag } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../ui/Button';

export const AgropecuariaDetalle = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const semestres = [
    {
      numero: 'I',
      cursos: 8,
      precio: { primerPago: 120, mensualidad: 80 }
    },
    {
      numero: 'II',
      cursos: 7,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'III',
      cursos: 7,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'IV',
      cursos: 7,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'V',
      cursos: 6,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'VI',
      cursos: 1,
      precio: { primerPago: 160, mensualidad: 90 }
    }
  ];

  const capacidades = [
    { icon: <FaLeaf />, texto: "Gestión sostenible de recursos naturales y producción agropecuaria" },
    { icon: <FaTractor />, texto: "Planificación y dirección de proyectos agrícolas y ganaderos" },
    { icon: <FaSeedling />, texto: "Implementación de técnicas de cultivo y crianza eficientes" },
    { icon: <FaChartLine />, texto: "Análisis económico y financiero de empresas del sector agropecuario" },
    { icon: <FaUsers />, texto: "Dirección y coordinación de equipos de trabajo en el ámbito rural" },
    { icon: <FaHandshake />, texto: "Comercialización y distribución de productos agropecuarios" },
    { icon: <FaGlobeAmericas />, texto: "Aplicación de prácticas agrícolas sostenibles y respetuosas con el medio ambiente" }
  ];

  const industrias = [
    { icon: <FaTractor />, texto: "Empresas agrícolas y ganaderas" },
    { icon: <FaIndustry />, texto: "Industrias de procesamiento de alimentos" },
    { icon: <FaUniversity />, texto: "Instituciones de investigación y desarrollo agropecuario" },
    { icon: <FaBuilding />, texto: "Cooperativas y asociaciones de productores" },
    { icon: <FaLeaf />, texto: "Organismos de desarrollo rural y extensión agrícola" },
    { icon: <FaGlobeAmericas />, texto: "Organizaciones de conservación y gestión ambiental" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-800">
            <img 
              src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg" 
              alt="Administración de Empresas Agropecuarias" 
              className="w-full h-full object-cover opacity-80"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg';
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              TSU en Administración de Empresas Agropecuarias
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Formación especializada para la gestión eficiente y sostenible de empresas del sector agropecuario
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                href="#pensum"
                className="font-bold shadow-lg hover:shadow-xl"
              >
                Ver Pensum
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

      {/* Descripción de la Carrera */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Descripción de la Carrera</h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
            >
              La carrera de Técnico Superior Universitario en Administración de Empresas Agropecuarias está diseñada para formar profesionales con inclinación e interés por las actividades de producción agropecuaria y el trabajo científico y creativo, capaces de aportar alternativas para resolver problemas vitales del ser humano relacionados con la producción de alimentos y la gestión sostenible de recursos naturales.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Este programa académico combina conocimientos de administración empresarial con aspectos técnicos de la producción agropecuaria, preparando a los estudiantes para gestionar eficientemente empresas del sector, implementar proyectos de desarrollo rural, y aplicar técnicas modernas de producción agrícola y ganadera que sean económicamente viables y ambientalmente sostenibles.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Los egresados estarán capacitados para enfrentar los desafíos del sector agropecuario moderno, contribuyendo al desarrollo económico y social de las comunidades rurales y a la seguridad alimentaria, mediante la aplicación de conocimientos técnicos, administrativos y de gestión sostenible de recursos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Capacidades Profesionales */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Capacidades Profesionales</h2>
            <p className="text-lg text-white/90 mb-8 text-center">
              La capacitación profesional de un Técnico Superior Universitario en Administración de Empresas Agropecuarias le permite desarrollar habilidades especializadas para la gestión eficiente y sostenible de empresas del sector agrícola y ganadero. Nuestros egresados dominan las siguientes competencias:
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {capacidades.map((capacidad, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-white/20"
                  variants={fadeIn}
                >
                  <div className="text-secondary text-2xl mr-4 mt-1">
                    {capacidad.icon}
                  </div>
                  <p className="text-white/90">{capacidad.texto}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campo Laboral */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Campo Laboral</h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Los egresados de la carrera de TSU en Administración de Empresas Agropecuarias pueden desempeñarse en diversos ámbitos relacionados con la producción agrícola, ganadera y la gestión de recursos naturales:
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {industrias.map((industria, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={fadeIn}
                >
                  <div className="text-primary text-3xl mb-4 flex justify-center">
                    {industria.icon}
                  </div>
                  <p className="text-gray-700 text-center">{industria.texto}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pensum Académico */}
      <section id="pensum" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pensum Académico</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {semestres.map((semestre, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-primary text-white py-3 px-4 rounded-t-md -mt-6 -mx-6 mb-4">
                    <h3 className="text-xl font-bold text-center">Semestre {semestre.numero}</h3>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">{semestre.cursos}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{semestre.cursos} {semestre.cursos === 1 ? 'Materia' : 'Materias'}</p>
                    
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-1">Primer pago:</p>
                      <p className="font-bold text-primary">${semestre.precio.primerPago}</p>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-1">Mensualidad:</p>
                      <p className="font-bold text-primary">${semestre.precio.mensualidad}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                    <Link 
                      href={`/carreras/5/semestre/${semestre.numero === 'I' ? '1' : semestre.numero === 'II' ? '2' : semestre.numero === 'III' ? '3' : semestre.numero === 'IV' ? '4' : semestre.numero === 'V' ? '5' : '6'}`} 
                      className="inline-block bg-secondary hover:bg-secondary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acreditación */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Triple Acreditación Académica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                variants={fadeIn}
              >
                <div className="relative w-full h-24 mb-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" 
                    alt="Bandera de Venezuela" 
                    className="h-full mx-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/150x80?text=Venezuela';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">República Bolivariana de Venezuela</h3>
                <p className="text-gray-700 text-sm">
                  Institución Universitaria Autorizada Legalmente en Venezuela, creada según Gaceta oficial de la República Bolivariana de Venezuela No. 34.800, de fecha 17 de Septiembre del 1991, según Decreto Presidencial No. 1.840.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                variants={fadeIn}
              >
                <div className="relative w-full h-24 mb-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" 
                    alt="Bandera de España" 
                    className="h-full mx-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/150x80?text=España';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Reino de España</h3>
                <p className="text-gray-700 text-sm">
                  Centro de Formación Autorizado Legalmente en España, creada según Datos Registrales BORME, Registro Mercantil de VALENCIA T 10623, L 7904, F 13, S 8, H V 186071, I/A 1 (12.02.19) No. 34.800.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                variants={fadeIn}
              >
                <div className="relative w-full h-24 mb-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" 
                    alt="Bandera de Estados Unidos" 
                    className="h-full mx-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/150x80?text=USA';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Estados Unidos de América</h3>
                <p className="text-gray-700 text-sm">
                  Florida Limited Liability Company, IUTCM, LLC, Document Number, L19000285223 IUTCM.ONLINE
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
