"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Datos de ejemplo para los eventos próximos
const eventos = [
  {
    id: 1,
    titulo: 'Feria de Empleo y Pasantías 2025',
    fecha: '20 de julio, 2025',
    hora: '9:00 AM - 4:00 PM',
    lugar: 'Auditorio Principal IUTCM',
    imagen: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg'
  },
  {
    id: 2,
    titulo: 'Jornada de Actualización Tecnológica',
    fecha: '25 de julio, 2025',
    hora: '10:00 AM - 2:00 PM',
    lugar: 'Laboratorio de Informática',
    imagen: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
  },
  {
    id: 3,
    titulo: 'Conferencia: Innovación en Ingeniería',
    fecha: '30 de julio, 2025',
    hora: '3:00 PM - 5:00 PM',
    lugar: 'Sala de Conferencias',
    imagen: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg'
  },
  {
    id: 4,
    titulo: 'Taller de Emprendimiento',
    fecha: '5 de agosto, 2025',
    hora: '1:00 PM - 5:00 PM',
    lugar: 'Centro de Innovación',
    imagen: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  }
];

export const EventosProximos = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <FaCalendarAlt className="mr-2 text-secondary" />
        Próximos Eventos
      </h2>

      <div className="space-y-6">
        {eventos.map((evento, index) => (
          <motion.div
            key={evento.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <a href={`/eventos/${evento.id}`} className="block">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={evento.imagen} 
                  alt={evento.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-secondary text-white text-sm font-medium px-3 py-1 rounded-md">
                    {evento.fecha}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                {evento.titulo}
              </h3>
              
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <p className="flex items-center">
                  <FaClock className="mr-2 text-secondary" />
                  {evento.hora}
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-secondary" />
                  {evento.lugar}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <a 
          href="/eventos"
          className="inline-flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Ver todos los eventos
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
