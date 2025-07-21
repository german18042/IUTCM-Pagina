"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PlaceholderImage } from '../../components/home/PlaceholderImage';

const testimonios = [
  {
    id: 1,
    nombre: "Carlos Rodríguez",
    carrera: "T.S.U. en Informática",
    año: "2023",
    empresa: "TechSolutions Inc.",
    cargo: "Desarrollador Full Stack",
    testimonio: "Mi formación en IUTCM me brindó las herramientas necesarias para destacarme en el campo de la tecnología. Los conocimientos prácticos y el enfoque en proyectos reales me permitieron integrarme rápidamente al mercado laboral y crecer profesionalmente."
  },
  {
    id: 2,
    nombre: "María González",
    carrera: "T.S.U. en Administración de Empresas",
    año: "2022",
    empresa: "Grupo Financiero Nacional",
    cargo: "Analista de Operaciones",
    testimonio: "Gracias a la formación integral que recibí en IUTCM, pude desarrollar habilidades de liderazgo y gestión que me han permitido asumir responsabilidades importantes en mi empresa. La combinación de teoría y práctica fue fundamental para mi éxito profesional."
  },
  {
    id: 3,
    nombre: "Alejandro Martínez",
    carrera: "T.S.U. en Turismo Mención Servicios Turísticos",
    año: "2023",
    empresa: "Viajes Globales",
    cargo: "Coordinador de Experiencias Turísticas",
    testimonio: "Estudiar en IUTCM fue una experiencia transformadora. Los profesores expertos y las prácticas profesionales me permitieron conocer a fondo la industria turística. Hoy aplico todo lo aprendido creando experiencias memorables para viajeros de todo el mundo."
  },
  {
    id: 4,
    nombre: "Laura Pérez",
    carrera: "Dohmi Culinary Institute",
    año: "2022",
    empresa: "Restaurante Fusión",
    cargo: "Chef Ejecutiva",
    testimonio: "La formación que recibí en el Dohmi Culinary Institute fue excepcional. Aprendí técnicas avanzadas de cocina y desarrollé mi creatividad culinaria. Hoy dirijo mi propio equipo y puedo expresar mi pasión por la gastronomía cada día."
  }
];

export const TestimoniosGraduados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1
    );
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
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo que dicen nuestros graduados
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conoce las experiencias de nuestros egresados y cómo IUTCM transformó sus vidas profesionales
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary flex-shrink-0">
                  {testimonios[currentIndex].id === 1 && (
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Carlos Rodríguez" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {testimonios[currentIndex].id === 2 && (
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                      alt="María González" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {testimonios[currentIndex].id === 3 && (
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Alejandro Martínez" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {testimonios[currentIndex].id === 4 && (
                    <img 
                      src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Laura Pérez" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="flex-1">
                  <FaQuoteLeft className="text-secondary mb-4" size={30} />
                  <p className="text-lg md:text-xl mb-6 italic">
                    {testimonios[currentIndex].testimonio}
                  </p>
                  <div>
                    <h4 className="text-xl font-bold">{testimonios[currentIndex].nombre}</h4>
                    <p className="text-secondary">{testimonios[currentIndex].carrera}</p>
                    <p className="text-gray-200">
                      {testimonios[currentIndex].cargo} en {testimonios[currentIndex].empresa} | Egresado {testimonios[currentIndex].año}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="bg-secondary text-white p-3 rounded-full hover:bg-accent transition-colors"
                aria-label="Testimonio anterior"
              >
                <FaChevronLeft />
              </motion.button>
              
              <div className="flex gap-2 items-center">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-secondary' : 'bg-white/30'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="bg-secondary text-white p-3 rounded-full hover:bg-accent transition-colors"
                aria-label="Siguiente testimonio"
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
