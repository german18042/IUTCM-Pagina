"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

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

interface NoticiaDetalleProps {
  id: string;
}

export const NoticiaDetalle: React.FC<NoticiaDetalleProps> = ({ id }) => {
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch(`/api/noticias/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar la noticia');
        }
        const data = await response.json();
        setNoticia(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar la noticia');
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl text-gray-600">Cargando noticia...</div>
      </div>
    );
  }

  if (error || !noticia) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl text-red-600">{error || 'No se encontró la noticia'}</div>
      </div>
    );
  }

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article>
      {/* Header con imagen de fondo */}
      <div className="relative h-[40vh] sm:h-[50vh] bg-primary">
        <div className="absolute inset-0">
          <Image 
            src={noticia.imagen} 
            alt={noticia.titulo} 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative h-full flex items-end pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="inline-flex items-center text-sm font-medium text-white/90">
                <FaCalendarAlt className="mr-1" /> {formatearFecha(noticia.fecha)}
              </span>
              <span className="inline-flex items-center text-sm font-medium text-white/90">
                <FaUser className="mr-1" /> {noticia.autor}
              </span>
              <span className="inline-flex items-center text-sm font-medium bg-secondary/80 text-white px-3 py-1 rounded-full">
                <FaTag className="mr-1" /> {noticia.categoria}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {noticia.titulo}
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Contenido de la noticia */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8"
            >
              {/* Resumen */}
              <div className="text-lg text-gray-600 mb-6 font-medium">
                {noticia.resumen}
              </div>

              {/* Contenido principal */}
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: '#1e2939' }}
                dangerouslySetInnerHTML={{ __html: noticia.contenido }}
              />
              
              {/* Compartir en redes sociales */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaShare className="mr-2 text-secondary" />
                  Compartir esta noticia
                </h4>
                
                <div className="flex space-x-4">
                  <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <FaFacebook size={24} />
                  </button>
                  <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${noticia.titulo}`, '_blank')} className="text-blue-400 hover:text-blue-600 transition-colors">
                    <FaTwitter size={24} />
                  </button>
                  <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${noticia.titulo}`, '_blank')} className="text-blue-700 hover:text-blue-900 transition-colors">
                    <FaLinkedin size={24} />
                  </button>
                  <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${noticia.titulo} ${window.location.href}`, '_blank')} className="text-green-600 hover:text-green-800 transition-colors">
                    <FaWhatsapp size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                Información adicional
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Categoría</h4>
                  <p className="text-gray-600">{noticia.categoria}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Fecha de publicación</h4>
                  <p className="text-gray-600">{formatearFecha(noticia.fecha)}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Autor</h4>
                  <p className="text-gray-600">{noticia.autor}</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
