"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaHotel, FaMapMarkedAlt, FaCalendarAlt, FaGlobeAmericas, FaLandmark, FaTree, FaBuilding, FaUniversity, FaShip, FaCarSide, FaRegIdCard, FaUsers, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';

export const TurismoDetalle = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      cursos: 8,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'IV',
      cursos: 8,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'V',
      cursos: 8,
      precio: { primerPago: 160, mensualidad: 90 }
    },
    {
      numero: 'VI',
      cursos: 1,
      precio: { primerPago: 160, mensualidad: 90 }
    }
  ];

  const capacidades = [
    { icon: <FaHotel />, texto: "Dirigir, supervisar, evaluar y controlar las diversas unidades operativas y establecimientos turísticos" },
    { icon: <FaMapMarkedAlt />, texto: "Participar activamente en la formulación, ejecución y evaluación de proyectos turísticos" },
    { icon: <FaCalendarAlt />, texto: "Programar o ejecutar eventos y/o actividades recreativas a los distintos tipos de turistas" },
    { icon: <FaGlobeAmericas />, texto: "Realizar estudios para la clasificación y categorización de los servicios de alojamiento turístico" },
    { icon: <FaChartLine />, texto: "Proponer estrategias de comercialización y mercadotecnia para impulsar las ventas de los productos y servicios turísticos" },
    { icon: <FaUsers />, texto: "Gestionar equipos de trabajo multiculturales y coordinar servicios de atención al cliente en diferentes idiomas" }
  ];

  const industrias = [
    { icon: <FaHotel />, texto: "Agencias de Viajes, Cadenas de hoteles y posadas" },
    { icon: <FaShip />, texto: "Empresas de transporte marítimo, aéreo y terrestre" },
    { icon: <FaPlane />, texto: "Organizaciones de transporte como cruceros, líneas de autobuses o aerolíneas" },
    { icon: <FaUsers />, texto: "Empresas complementarias de animación, recreación, y de proyectos publicitarios" },
    { icon: <FaLandmark />, texto: "Museos" },
    { icon: <FaTree />, texto: "Parques Nacionales" },
    { icon: <FaBuilding />, texto: "Centros de convenciones y eventos" },
    { icon: <FaUniversity />, texto: "Instituciones educativas de turismo" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-800">
            <img 
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg" 
              alt="Carrera de Turismo IUTCM" 
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg';
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
              Técnico Superior Universitario En<br />
              <span className="text-secondary">Turismo Mención Servicios Turísticos</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Forma profesionales con liderazgo y las competencias necesarias para administrar y operar áreas de servicios turísticos, elevando la productividad del sector con un enfoque de calidad integral.
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Descripción de la Carrera</h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={fadeIn}
            >
              El TSU en Turismo área de servicios turísticos es un profesional con liderazgo y las competencias necesarias para poder administrar y operar las áreas servicios turísticos y desarrollo turístico, elevando la productividad de este sector con un enfoque de calidad integral.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={fadeIn}
            >
              El campo laboral de la carrera de turismo mención servicios turísticos abarca temas cruciales como el funcionamiento de las empresas turísticas, la sostenibilidad, el comportamiento de los turistas y el impacto positivo que tiene la visita de turistas en un país.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              variants={fadeIn}
            >
              Puedes inscribir y cursar la carrera por semestre o materias individuales y así desarrollarlas a tu ritmo y bajo tu determinación, el tiempo que le quieras dedicar a tu carrera.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Capacidades Profesionales */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Capacidades Profesionales</h2>
            
            <motion.p 
              className="text-lg text-white/90 mb-8 text-center"
              variants={fadeIn}
            >
              La capacitación profesional de un Técnico Superior Universitario en Turismo Mención Servicios Turísticos le permite realizar con dominio lo siguiente:
            </motion.p>
            
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
                   className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12"
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
     
                 <motion.p 
                   className="text-lg text-gray-700 mt-12"
                   variants={fadeIn}
                 >
                   Empresas Comerciales y cualquier organización que requiera la automatización de sus procesos manuales, colaborando al desarrollo social con nuevas tecnologías de información y comunicación o bien del ejercicio de su profesión de forma independiente.
                 </motion.p>
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
                      href={`/carreras/3/semestre/${semestre.numero === 'I' ? '1' : semestre.numero === 'II' ? '2' : semestre.numero === 'III' ? '3' : semestre.numero === 'IV' ? '4' : semestre.numero === 'V' ? '5' : '6'}`} 
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
