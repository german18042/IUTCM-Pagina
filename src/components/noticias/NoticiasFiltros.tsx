"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

interface NoticiasFiltrosProps {
  categorias: string[];
  categoriaSeleccionada: string;
  onCategoriaChange: (categoria: string) => void;
}

export const NoticiasFiltros = ({ 
  categorias, 
  categoriaSeleccionada, 
  onCategoriaChange 
}: NoticiasFiltrosProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <FaFilter className="text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">Filtrar por Categoría</h2>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoriaChange('')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            categoriaSeleccionada === ''
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todas
        </button>
        
        {categorias.map((categoria) => (
          <motion.button
            key={categoria}
            onClick={() => onCategoriaChange(categoria)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoriaSeleccionada === categoria
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoria}
          </motion.button>
        ))}
      </div>
    </div>
  );
}; 