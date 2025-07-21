"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingLogoProps {
  duration?: number; // Duración en milisegundos
}

export const LoadingLogo: React.FC<LoadingLogoProps> = ({ duration = 2000 }) => {
  // Inicializar estado solo en el cliente para evitar discrepancias de hidratación
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Marcar como montado para evitar renderizado en servidor
    setMounted(true);
    
    // Ocultar el loader después de la duración especificada
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);
  
  // No renderizar nada durante la hidratación
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-primary z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: 1
              }}
              transition={{ 
                duration: 1,
                times: [0, 0.6, 1]
              }}
              className="relative w-64 h-64 mb-4"
            >
              <Image
                src="/images/logo.png"
                alt="IUTCM Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base text-white uppercase tracking-wide">
                Instituto Universitario de Tecnología
              </p>
              <p className="text-lg sm:text-xl text-white font-semibold">
                Dr. Cristóbal Mendoza
              </p>
            </motion.div>
            
            <motion.div
              animate={{ 
                scaleX: [0, 1],
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut",
                repeat: 0
              }}
              className="h-1 bg-gradient-to-r from-secondary to-blue-400 w-48 sm:w-64 mx-auto rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
