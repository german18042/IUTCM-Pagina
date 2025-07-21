"use client";

import React from 'react';
import { LoadingProvider } from './LoadingProvider';

interface ClientProvidersProps {
  children: React.ReactNode;
}

// Este componente agrupa todos los proveedores del lado del cliente
// para evitar problemas de hidratación
const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <LoadingProvider>
      {children}
    </LoadingProvider>
  );
};

export default ClientProviders;
