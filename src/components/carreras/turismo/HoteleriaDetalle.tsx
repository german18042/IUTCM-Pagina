"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaHotel, FaMapMarkedAlt, FaCalendarAlt, FaGlobeAmericas, FaLandmark, FaTree, FaBuilding, FaUniversity, FaShip, FaCarSide, FaRegIdCard, FaUsers, FaChartLine, FaUtensils, FaConciergeBell, FaHandshake, FaComments, FaSmile } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';

export const HoteleriaDetalle = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      cursos: 8,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'III',
      cursos: 7,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'IV',
      cursos: 6,
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
    { icon: <FaHandshake />, texto: "Atención al cliente con estándares internacionales" },
    { icon: <FaRegIdCard />, texto: "Asertividad en la resolución de situaciones complejas" },
    { icon: <FaSmile />, texto: "Empatía y amabilidad en entornos multiculturales" },
    { icon: <FaComments />, texto: "Psicología positiva aplicada a la experiencia del huésped" },
    { icon: <FaUsers />, texto: "Liderazgo y Servicio personalizado en establecimientos turísticos" },
    { icon: <FaConciergeBell />, texto: "Gestión eficiente de servicios hoteleros y turísticos de alta calidad" },
  ];

  const industrias = [
    { icon: <FaHotel />, texto: "Empresas turísticas privadas de comercialización o agencias de viajes" },
    { icon: <FaBuilding />, texto: "Cadenas hoteleras que deseen integrar dentro de su personal a un profesional que gestione las diversas actividades dentro del hotel" },
    { icon: <FaPlane />, texto: "Organizaciones de transporte como cruceros, líneas de autobuses o aerolíneas" },
    { icon: <FaUtensils />, texto: "Restaurantes internacionales o de especialidades" },
    { icon: <FaMapMarkedAlt />, texto: "Áreas dedicadas a ofrecer guías turísticos" },
    { icon: <FaLandmark />, texto: "Instituciones o empresas públicas que quieran darle proyección al servicio turístico y fortalecer su actividad económica" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-800">
            <img 
              src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg" 
              alt="Carrera de Turismo Hotelería IUTCM" 
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg';
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
              TSU en Turismo<br />
              <span className="text-secondary">Mención Servicios Turísticos y Hotelería</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Forma profesionales capacitados para gestionar servicios turísticos y hoteleros con excelencia
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

      {/* Descripción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Descripción de la Carrera</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Los Servicios Turísticos son el conjunto de realizaciones, hechos y actividades, tendientes a producir prestaciones personales que satisfagan las necesidades del turista y contribuyan al logro de facilitación, acercamiento, uso y disfrute de los bienes turísticos.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El campo laboral de la carrera de hotelería y turismo es uno de los más importantes, al ser donde recae la gran parte de viajeros nacionales e internacionales. La administración de hotel es encargada de proporcionar a los turistas todos los servicios básicos, como alojamiento y alimentación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capacidades Profesionales */}
      <section className="relative py-16 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden text-white">
        {/* Fondo con patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Capacidades Profesionales</h2>
            <p className="text-lg text-white/90 mb-8 text-center">
              La capacitación profesional de un Técnico Superior Universitario en Turismo Mención Servicios Turísticos y Hotelería le permite desarrollar habilidades especializadas para brindar experiencias excepcionales a los turistas y gestionar con excelencia los servicios hoteleros. Nuestros egresados dominan las siguientes competencias:
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Campo Laboral</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Nuestros egresados están capacitados para trabajar en diversos sectores:
            </p>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {industrias.map((ind, index) => (
                <motion.div 
                  key={index} 
                  className="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                  variants={fadeIn}
                >
                  <div className="text-white text-3xl mb-4 flex justify-center">{ind.icon}</div>
                  <p className="font-medium text-white">{ind.texto}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pensum Académico */}
      <section id="pensum" className="relative py-16 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden text-white">
        {/* Fondo con patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
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
                  className="bg-white border border-white/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-secondary/80 text-white py-3 px-4 rounded-t-md -mt-6 -mx-6 mb-4">
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
                      href={`/carreras/4/semestre/${semestre.numero === 'I' ? '1' : semestre.numero === 'II' ? '2' : semestre.numero === 'III' ? '3' : semestre.numero === 'IV' ? '4' : semestre.numero === 'V' ? '5' : '6'}`} 
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

       {/* Triple Acreditación */}
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
                        Institución Universitaria Autorizada Legalmente en Venezuela, creada según Gaceta oficial de la República Bolivariana de Venezuela No. 34.800, de fecha 17 de Septiembre del 1991, según Decreto Presidencial No. 1.840. Instituto Universitario de Tecnología Dr. Cristobal Mendoza
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
                        Centro de Formación Autorizado Legalmente en España, creada según Datos Registrales BORME, Registro Mercantil de VALENCIA T 10623, L 7904, F 13, S 8, H V 186071, I/A 1 (12.02.19) No. 34.800. Centro de Formación Emprendetec
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
