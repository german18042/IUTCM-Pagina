"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { NoticiasFiltros } from './NoticiasFiltros';

interface Noticia {
  _id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen: string;
  fecha: string;
  autor: string;
  categoria: string;
  estado: string;
}

export default function NoticiasList() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('/api/noticias');
        if (!response.ok) throw new Error('Error al cargar noticias');
        const data = await response.json();
        const noticiasPublicadas = data.filter((noticia: Noticia) => noticia.estado === 'publicado');
        setNoticias(noticiasPublicadas);
        
        // Extraer categorías únicas
        const categoriasUnicas = noticiasPublicadas
          .map((noticia: Noticia) => noticia.categoria)
          .filter((categoria: string, index: number, self: string[]) => self.indexOf(categoria) === index)
          .sort();
        setCategorias(categoriasUnicas);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  const noticiasFiltradas = noticias.filter(noticia => 
    categoriaSeleccionada === '' || noticia.categoria === categoriaSeleccionada
  );

  if (loading) {
  return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl text-gray-600">Cargando noticias...</div>
          </div>
    );
  }

  if (noticias.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl text-gray-600">No hay noticias disponibles.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <NoticiasFiltros 
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaChange={setCategoriaSeleccionada}
      />

      <div className="grid grid-cols-1 gap-8">
        {noticiasFiltradas.map((noticia) => (
        <motion.article
            key={noticia._id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
          <div className="md:flex">
              {/* Imagen */}
            <div className="md:w-1/3">
                <div className="relative h-64 md:h-full">
                  <Image
                src={noticia.imagen} 
                alt={noticia.titulo} 
                    fill
                    className="object-cover"
              />
            </div>
              </div>

              {/* Contenido */}
              <div className="md:w-2/3 p-6">
                {/* Metadata superior */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <FaUser className="mr-2" />
                    {noticia.autor}
                </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <FaTag className="mr-2" />
                    {noticia.categoria}
                </span>
              </div>
              
                {/* Título */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {noticia.titulo}
                </h2>

                {/* Resumen */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {noticia.resumen}
                </p>

                {/* Preview del contenido */}
                <div className="text-gray-600 mb-6 line-clamp-3">
                  {noticia.contenido}
                </div>
              
                {/* Botón de leer más */}
                <div className="flex justify-end">
                  <Link
                    href={`/noticias/${noticia._id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Leer más
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                  </Link>
                </div>
            </div>
          </div>
        </motion.article>
      ))}
      </div>

      {noticiasFiltradas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No hay noticias disponibles para la categoría seleccionada.
          </p>
        </div>
      )}
    </div>
  );
}
