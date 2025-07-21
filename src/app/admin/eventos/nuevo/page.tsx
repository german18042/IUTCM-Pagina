'use client';

import EventoForm from '@/components/admin/eventos/EventoForm';
import { useRouter } from 'next/navigation';

export default function NuevoEventoPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al crear el evento');
      }

      router.push('/admin/eventos');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Crear Nuevo Evento</h1>
      <EventoForm onSubmit={handleSubmit} />
    </div>
  );
} 