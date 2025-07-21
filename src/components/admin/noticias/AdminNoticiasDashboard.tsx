'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Noticia {
  _id: string;
  titulo: string;
  fecha: string;
  estado: string;
  categoria: string;
  autor: string;
}

export default function AdminNoticiasDashboard() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await fetch('/api/noticias');
      if (!response.ok) throw new Error('Error al cargar noticias');
      const data = await response.json();
      setNoticias(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleEstado = async (id: string, nuevoEstado: string) => {
    try {
      const response = await fetch(`/api/noticias/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: nuevoEstado }),
      });

      if (!response.ok) throw new Error('Error al actualizar el estado');
      await fetchNoticias();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      return;
    }

    try {
      const response = await fetch(`/api/noticias/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar la noticia');
      await fetchNoticias();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div className="text-gray-900">Cargando...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Título
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {noticias.map((noticia) => (
            <tr key={noticia._id}>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {noticia.titulo}
                </div>
                <div className="text-sm text-gray-500">
                  {noticia.categoria}
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                {new Date(noticia.fecha).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <select
                  value={noticia.estado}
                  onChange={(e) => toggleEstado(noticia._id, e.target.value)}
                  className={`text-sm font-semibold rounded-full px-3 py-1 ${
                    noticia.estado === 'publicado'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  <option value="borrador">Borrador</option>
                  <option value="publicado">Publicado</option>
                </select>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => router.push(`/admin/noticias/editar/${noticia._id}`)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(noticia._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 