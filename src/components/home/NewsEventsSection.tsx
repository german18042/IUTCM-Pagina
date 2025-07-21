"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Noticia {
  _id: string;
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  categoria: string;
}

interface Evento {
  _id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  hora: string;
  lugar: string;
}

export default function NewsEventsSection() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasRes, eventosRes] = await Promise.all([
          fetch('/api/noticias'),
          fetch('/api/eventos')
        ]);

        if (!noticiasRes.ok || !eventosRes.ok) {
          throw new Error('Error al cargar los datos');
        }

        const noticiasData = await noticiasRes.json();
        const eventosData = await eventosRes.json();

        setNoticias(noticiasData.filter((noticia: any) => noticia.estado === 'publicado').slice(0, 3));
        setEventos(eventosData.slice(0, 3));
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Cargando noticias...</div>;
  }

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Fondo con patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Noticias y Eventos
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias y eventos de nuestra institución
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <div key={noticia._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-secondary rounded-full mb-2">
                  {noticia.categoria}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {noticia.resumen}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(noticia.fecha).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/noticias/${noticia._id}`}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/noticias"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Ver todas las noticias
          </Link>
        </div>
      </div>
    </section>
  );
}
