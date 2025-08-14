'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EventoForm from '@/components/admin/eventos/EventoForm';

export default function EditarEventoPage() {
  const router = useRouter();
  const params = useParams(); // <-- params ahora es una Promise
  const [evento, setEvento] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      const eventId = resolvedParams.id as string;
      setId(eventId);
      if (eventId) {
        await fetchEvento(eventId);
      }
    };
    
    getParams();
  }, [params]);

  const fetchEvento = async (eventId: string) => {
    try {
      const res = await fetch(`/api/eventos/${eventId}`);
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
    if (!id) return;
    
    try {
      const response = await fetch(`/api/eventos/${id}`, {
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

  if (loading || !id) return <div>Cargando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Editar Evento</h1>
      {evento && <EventoForm evento={evento} onSubmit={handleSubmit} />}
    </div>
  );
}