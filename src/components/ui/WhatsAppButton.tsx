"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Comprobar al cargar
    checkIfMobile();
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <motion.a 
      href="https://api.whatsapp.com/send/?phone=584247837583&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 rounded-full ${isMobile ? 'bottom-4 right-4 p-3' : 'bottom-6 right-6 p-4'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={isMobile ? 24 : 28} />
      <span className="sr-only">Contactar por WhatsApp</span>
    </motion.a>
  );
};
