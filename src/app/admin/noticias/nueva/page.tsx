'use client';

import { useState } from 'react';
import NoticiaForm from '@/components/admin/noticias/NoticiaForm';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NuevaNoticiaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      // Asegurarnos de que la fecha esté presente
      const noticiaData = {
        ...data,
        fecha: data.fecha || new Date().toISOString(),
      };

      console.log('Enviando datos:', noticiaData);

      const response = await fetch('/api/noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticiaData),
      });

      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Error al crear la noticia');
      }

      // Si todo sale bien, redirigimos
      router.push('/admin/noticias');
      router.refresh();
    } catch (error: any) {
      console.error('Error detallado:', error);
      setError(error.message || 'Ocurrió un error al crear la noticia. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Crear Nueva Noticia</h1>
        <Link
          href="/admin/noticias"
          className="text-blue-600 hover:text-blue-800"
        >
          Volver al listado
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <NoticiaForm 
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
} 