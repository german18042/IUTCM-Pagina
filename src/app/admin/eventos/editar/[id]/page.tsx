'use client';

import { useEffect, useState } from 'react';
import EventoForm from '@/components/admin/eventos/EventoForm';
import { useRouter } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function EditarEventoPage({ params }: Props) {
  const router = useRouter();
  const [evento, setEvento] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvento();
  }, [params.id]);

  const fetchEvento = async () => {
    try {
      const res = await fetch(`/api/eventos/${params.id}`);
      if (!res.ok) throw new Error('Error al cargar el evento');
      const data = await res.json();
      setEvento(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch(`/api/eventos/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el evento');
      }

      router.push('/admin/eventos');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Editar Evento</h1>
      {evento && <EventoForm evento={evento} onSubmit={handleSubmit} />}
    </div>
  );
} 