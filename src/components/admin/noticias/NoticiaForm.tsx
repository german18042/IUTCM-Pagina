'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface NoticiaFormProps {
  noticia?: {
    _id?: string;
    titulo: string;
    contenido: string;
    imagen: string;
    autor: string;
    resumen: string;
    categoria: string;
    estado: string;
  };
  onSubmit: (data: any) => void;
  isSubmitting?: boolean;
}

export default function NoticiaForm({ noticia, onSubmit, isSubmitting = false }: NoticiaFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    contenido: '',
    imagen: '',
    autor: '',
    resumen: '',
    categoria: 'Institucional',
    estado: 'borrador'
  });

  useEffect(() => {
    if (noticia) {
      setFormData(noticia);
    }
  }, [noticia]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="resumen" className="block text-sm font-medium text-gray-700">
          Resumen
        </label>
        <textarea
          name="resumen"
          id="resumen"
          value={formData.resumen}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">
          Contenido
        </label>
        <textarea
          name="contenido"
          id="contenido"
          value={formData.contenido}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
          URL de la imagen
        </label>
        <input
          type="url"
          name="imagen"
          id="imagen"
          value={formData.imagen}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="autor" className="block text-sm font-medium text-gray-700">
          Autor
        </label>
        <input
          type="text"
          name="autor"
          id="autor"
          value={formData.autor}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
          Categoría
        </label>
        <select
          name="categoria"
          id="categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        >
          <option value="Admisiones">Admisiones</option>
          <option value="Convenios">Convenios</option>
          <option value="Logros">Logros</option>
          <option value="Infraestructura">Infraestructura</option>
          <option value="Capacitación">Capacitación</option>
          <option value="Eventos">Eventos</option>
          <option value="Académico">Académico</option>
          <option value="Institucional">Institucional</option>
        </select>
      </div>

      <div>
        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <select
          name="estado"
          id="estado"
          value={formData.estado}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
        >
          <option value="borrador">Borrador</option>
          <option value="publicado">Publicado</option>
        </select>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.back()}
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Guardando...' : noticia ? 'Actualizar' : 'Crear'} Noticia
        </button>
      </div>
    </form>
  );
} 