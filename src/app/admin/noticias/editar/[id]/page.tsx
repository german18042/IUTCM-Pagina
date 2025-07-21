'use client';

import { useEffect, useState } from 'react';
import NoticiaForm from '@/components/admin/noticias/NoticiaForm';
import { useRouter } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function EditarNoticiaPage({ params }: Props) {
  const router = useRouter();
  const [noticia, setNoticia] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNoticia();
  }, [params.id]);

  const fetchNoticia = async () => {
    try {
      const res = await fetch(`/api/noticias/${params.id}`);
      if (!res.ok) throw new Error('Error al cargar la noticia');
      const data = await res.json();
      setNoticia(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch(`/api/noticias/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la noticia');
      }

      router.push('/admin/noticias');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Editar Noticia</h1>
      {noticia && <NoticiaForm noticia={noticia} onSubmit={handleSubmit} />}
    </div>
  );
} 