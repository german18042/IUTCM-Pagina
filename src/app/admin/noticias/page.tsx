'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Noticia {
  _id: string;
  titulo: string;
  fecha: string;
  estado: string;
  categoria: string;
}

interface Config {
  bannerInscripciones?: {
    activo: boolean;
    ultimaModificacion?: Date;
    modificadoPor?: string;
  };
}

export default function AdminNoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [config, setConfig] = useState<Config>({});
  const router = useRouter();

  useEffect(() => {
    fetchNoticias();
    fetchConfig();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await fetch('/api/noticias');
      if (!response.ok) throw new Error('Error al cargar noticias');
      const data = await response.json();
      setNoticias(data);
    } catch (error) {
      setError('Error al cargar las noticias');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchConfig = async () => {
    try {
      const response = await fetch('/api/config');
      if (!response.ok) throw new Error('Error al cargar la configuración');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error('Error al cargar la configuración:', error);
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
      setError('Error al eliminar la noticia');
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
      setError('Error al actualizar el estado');
    }
  };

  const toggleBannerInscripciones = async () => {
    try {
      const response = await fetch('/api/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bannerInscripciones: {
            activo: !(config.bannerInscripciones?.activo ?? true),
          },
        }),
      });

      if (!response.ok) throw new Error('Error al actualizar la configuración');
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Administrar Noticias</h1>
        <div className="flex gap-4">
          <button
            onClick={toggleBannerInscripciones}
            className={`px-4 py-2 rounded-md transition-colors ${
              config.bannerInscripciones?.activo
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Banner de Inscripciones: {config.bannerInscripciones?.activo ? 'Activo' : 'Inactivo'}
          </button>
          <Link
            href="/admin/noticias/nueva"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Crear Nueva Noticia
          </Link>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Título
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {noticias.map((noticia) => (
              <tr key={noticia._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {noticia.titulo}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {new Date(noticia.fecha).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {noticia.categoria}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
    </div>
  );
} 