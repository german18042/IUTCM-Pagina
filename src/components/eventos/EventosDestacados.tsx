"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaChevronRight } from 'react-icons/fa';

// Datos de ejemplo para los eventos destacados
const eventosDestacados = [
  {
    id: 1,
    titulo: 'Feria de Empleo y Pasantías 2025',
    fecha: '20 de julio, 2025',
    hora: '9:00 AM - 4:00 PM',
    lugar: 'Auditorio Principal IUTCM',
    imagen: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    descripcion: 'Conecta con más de 30 empresas que ofrecen oportunidades laborales y pasantías para estudiantes y egresados del IUTCM. Trae tu currículum y prepárate para entrevistas en el sitio.'
  },
  {
    id: 2,
    titulo: 'Jornada de Actualización Tecnológica',
    fecha: '25 de julio, 2025',
    hora: '10:00 AM - 2:00 PM',
    lugar: 'Laboratorio de Informática',
    imagen: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    descripcion: 'Participa en talleres prácticos sobre las últimas tendencias en desarrollo de software, inteligencia artificial y ciberseguridad. Cupos limitados, inscripción previa requerida.'
  },
  {
    id: 3,
    titulo: 'Conferencia: Innovación en Ingeniería',
    fecha: '30 de julio, 2025',
    hora: '3:00 PM - 5:00 PM',
    lugar: 'Sala de Conferencias',
    imagen: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    descripcion: 'El reconocido ingeniero Dr. Roberto Méndez compartirá sus experiencias sobre innovación en el campo de la ingeniería y cómo prepararse para los desafíos del futuro profesional.'
  },
  {
    id: 4,
    titulo: 'Taller de Emprendimiento',
    fecha: '5 de agosto, 2025',
    hora: '1:00 PM - 5:00 PM',
    lugar: 'Centro de Innovación',
    imagen: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    descripcion: 'Aprende cómo convertir tus ideas en proyectos viables. Este taller práctico cubrirá desde la conceptualización hasta la búsqueda de financiamiento para emprendimientos tecnológicos.'
  },
  {
    id: 5,
    titulo: 'Semana de la Ciencia y Tecnología',
    fecha: '10-14 de agosto, 2025',
    hora: '9:00 AM - 6:00 PM',
    lugar: 'Campus Principal',
    imagen: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    descripcion: 'Cinco días de exposiciones, conferencias y demostraciones sobre los avances científicos y tecnológicos desarrollados por estudiantes y profesores del IUTCM.'
  },
  {
    id: 6,
    titulo: 'Hackathon IUTCM 2025',
    fecha: '20-21 de agosto, 2025',
    hora: '8:00 AM (48 horas)',
    lugar: 'Edificio de Tecnología',
    imagen: 'https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg',
    descripcion: 'Competencia de programación de 48 horas donde equipos de estudiantes desarrollarán soluciones innovadoras a problemas reales. Importantes premios para los ganadores.'
  }
];

export const EventosDestacados = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Eventos Destacados</h2>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary">
            <option>Todos los eventos</option>
            <option>Académicos</option>
            <option>Culturales</option>
            <option>Deportivos</option>
            <option>Tecnológicos</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {eventosDestacados.map((evento, index) => (
          <motion.div
            key={evento.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto">
                <img 
                  src={evento.imagen} 
                  alt={evento.titulo} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap gap-4 mb-3">
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    <FaCalendarAlt className="mr-1" /> {evento.fecha}
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-gray-600">
                    <FaClock className="mr-1" /> {evento.hora}
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-gray-600">
                    <FaMapMarkerAlt className="mr-1" /> {evento.lugar}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 hover:text-secondary transition-colors duration-300">
                  <a href={`/eventos/${evento.id}`}>{evento.titulo}</a>
                </h3>
                
                <p className="text-gray-600 mb-4">{evento.descripcion}</p>
                
                <a 
                  href={`/eventos/${evento.id}`}
                  className="inline-flex items-center px-4 py-2 bg-secondary text-white font-medium rounded-md hover:bg-secondary/90 transition-colors duration-300"
                >
                  Más información
                  <FaChevronRight className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
            Anterior
          </a>
          <a href="#" className="py-2 px-4 bg-secondary border border-secondary text-sm font-medium text-white">
            1
          </a>
          <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
            2
          </a>
          <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
            Siguiente
          </a>
        </nav>
      </div>
    </div>
  );
};
