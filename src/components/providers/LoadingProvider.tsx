"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LoadingLogo } from '../ui/LoadingLogo';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading debe ser usado dentro de un LoadingProvider');
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Usar useState con una función para evitar problemas de hidratación
  const [isLoading, setIsLoading] = useState<boolean>(() => true);
  const [mounted, setMounted] = useState<boolean>(false);

  // Solo ejecutar efectos después de la hidratación en el cliente
  useEffect(() => {
    setMounted(true);
    
    // Mostrar el loader por 2 segundos en la carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Si no estamos montados (en el servidor o durante la hidratación), solo renderizar los children
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingLogo />}
      {children}
    </LoadingContext.Provider>
  );
};
