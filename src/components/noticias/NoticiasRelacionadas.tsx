"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

interface Noticia {
  _id: string;
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  categoria: string;
}

interface NoticiasRelacionadasProps {
  categoriaActual?: string;
  noticiaActualId?: string;
  limite?: number;
}

export const NoticiasRelacionadas: React.FC<NoticiasRelacionadasProps> = ({
  categoriaActual,
  noticiaActualId,
  limite = 3
}) => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('/api/noticias');
        if (!response.ok) throw new Error('Error al cargar noticias relacionadas');
        const data = await response.json();
        
        // Filtramos las noticias publicadas
        let noticiasPublicadas = data.filter((noticia: any) => noticia.estado === 'publicado');
        
        // Si tenemos categoría, priorizamos noticias de la misma categoría
        if (categoriaActual) {
          noticiasPublicadas.sort((a: Noticia, b: Noticia) => 
            a.categoria === categoriaActual ? -1 : b.categoria === categoriaActual ? 1 : 0
          );
        }
        
        // Excluimos la noticia actual si tenemos su ID
        if (noticiaActualId) {
          noticiasPublicadas = noticiasPublicadas.filter((n: Noticia) => n._id !== noticiaActualId);
        }
        
        // Tomamos solo la cantidad especificada en limite
        setNoticias(noticiasPublicadas.slice(0, limite));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar noticias relacionadas');
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [categoriaActual, noticiaActualId, limite]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-600">Cargando noticias relacionadas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  if (noticias.length === 0) {
    return null;
  }

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Noticias Relacionadas</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <Link 
              href={`/noticias/${noticia._id}`}
              key={noticia._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
              <div className="relative h-48">
                <Image
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  {formatearFecha(noticia.fecha)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {noticia.titulo}
                </h3>
                
                <p className="text-gray-600 line-clamp-2">
                  {noticia.resumen}
                </p>
                
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {noticia.categoria}
                  </span>
                </div>
              </div>
            </Link>
        ))}
        </div>
      </div>
    </section>
  );
};
