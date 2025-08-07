"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PlaceholderImage } from './PlaceholderImage';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Egresado de Informática',
    image: '/images/testimonial-1.jpg',
    quote: 'Mi experiencia en IUTCM fue transformadora. Los profesores son expertos en sus áreas y el enfoque práctico me permitió integrarme rápidamente al mercado laboral.',
  },
  {
    id: 2,
    name: 'María González',
    role: 'Estudiante de Administración',
    image: '/images/testimonial-2.jpg',
    quote: 'Lo que más valoro de IUTCM es la calidad de la enseñanza y las oportunidades de networking. He podido conectar con profesionales de mi área incluso antes de graduarme.',
  },
  {
    id: 3,
    name: 'José Martínez',
    role: 'Egresado de Ingeniería',
    image: '/images/testimonial-3.jpg',
    quote: 'Gracias a la formación recibida en IUTCM, pude emprender mi propio negocio. Los conocimientos técnicos y de gestión han sido fundamentales para mi éxito profesional.',
  },
  {
    id: 4,
    name: 'Ana Pérez',
    role: 'Estudiante de Educación',
    image: '/images/testimonial-4.jpg',
    quote: 'El ambiente universitario en IUTCM es increíble. Los profesores realmente se preocupan por tu desarrollo y siempre están disponibles para apoyarte en tu camino académico.',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros estudiantes</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Conoce las experiencias de quienes han formado parte de nuestra comunidad educativa.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary flex-shrink-0">
                  {testimonials[currentIndex].id === 1 && (
                    <img 
                      src="https://i.imgur.com/VBVgyz9.png" 
                      alt="Carlos Rodríguez" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {testimonials[currentIndex].id === 2 && (
                    <img 
                      src="https://i.imgur.com/yisBxrH.png" 
                      alt="María González" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {testimonials[currentIndex].id === 3 && (
                    <img 
                      src="https://i.imgur.com/3niUgim.png" 
                      alt="José Martínez" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {testimonials[currentIndex].id === 4 && (
                    <img 
                      src="https://i.imgur.com/0osjN9N.png" 
                      alt="Ana Pérez" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="flex-1">
                  <FaQuoteLeft className="text-secondary mb-4" size={30} />
                  <p className="text-lg md:text-xl mb-6 italic">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="bg-secondary text-white p-3 rounded-full hover:bg-accent transition-colors"
                aria-label="Testimonio anterior"
              >
                <FaChevronLeft />
              </motion.button>
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
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
                onClick={nextTestimonial}
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
