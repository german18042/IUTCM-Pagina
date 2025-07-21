"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const equipo = [
  {
    id: 1,
    name: "Dra. María Rodríguez",
    position: "Directora",
    email: "maria.rodriguez@iutcm.edu.ve",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  },
  {
    id: 2,
    name: "Dr. Carlos Mendoza",
    position: "Subdirector Académico",
    email: "carlos.mendoza@iutcm.edu.ve",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 3,
    name: "Ing. Laura Pérez",
    position: "Coordinadora de Informática",
    email: "laura.perez@iutcm.edu.ve",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: 4,
    name: "Lic. Roberto Gómez",
    position: "Coordinador de Administración",
    email: "roberto.gomez@iutcm.edu.ve",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];

const MiembroEquipo = ({ miembro, index }: { miembro: typeof equipo[0], index: number }) => (
  <motion.div
    key={miembro.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto w-full max-w-xs"
  >
    <div className="h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
      <img 
        src={miembro.image} 
        alt={miembro.name} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://ui-avatars.com/api/?name=${miembro.name.replace(/ /g, '+')}&background=0D8ABC&color=fff&size=256`;
        }}
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{miembro.name}</h3>
      <p className="text-primary font-medium mb-3 text-sm sm:text-base">{miembro.position}</p>
      <div className="flex space-x-3 justify-center sm:justify-start">
        <a 
          href={`https://linkedin.com/in/${miembro.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`} 
          className="text-gray-500 hover:text-primary transition-colors p-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${miembro.name}`}
        >
          <FaLinkedin size={18} />
        </a>
        <a 
          href={`mailto:${miembro.email}`} 
          className="text-gray-500 hover:text-primary transition-colors p-2"
          aria-label={`Email de ${miembro.name}`}
        >
          <FaEnvelope size={18} />
        </a>
        <a 
          href="#" 
          className="text-gray-500 hover:text-primary transition-colors p-2"
          aria-label={`Twitter de ${miembro.name}`}
        >
          <FaTwitter size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

export const EquipoSection = () => {
  return (
    <section id="equipo" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden">
      {/* Fondo con patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Nuestro Equipo Directivo
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto px-4">
            Contamos con profesionales altamente calificados comprometidos con la excelencia académica y el desarrollo de nuestros estudiantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {equipo.map((miembro, index) => (
            <MiembroEquipo key={miembro.id} miembro={miembro} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <a 
            href="/nosotros/equipo-completo" 
            className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-secondary/90 transition-colors text-sm sm:text-base"
          >
            Ver Equipo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};
