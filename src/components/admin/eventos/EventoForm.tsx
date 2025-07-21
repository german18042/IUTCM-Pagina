'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface EventoFormProps {
  evento?: {
    _id?: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    fechaInicio: string;
    fechaFin: string;
    lugar: string;
    organizador: string;
    tipo: string;
    estado: string;
    capacidad: number;
    inscripcionRequerida: boolean;
  };
  onSubmit: (data: any) => void;
}

export default function EventoForm({ evento, onSubmit }: EventoFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    fechaInicio: '',
    fechaFin: '',
    lugar: '',
    organizador: '',
    tipo: 'conferencia',
    estado: 'programado',
    capacidad: 0,
    inscripcionRequerida: false
  });

  useEffect(() => {
    if (evento) {
      const fechaInicio = new Date(evento.fechaInicio).toISOString().split('T')[0];
      const fechaFin = new Date(evento.fechaFin).toISOString().split('T')[0];
      setFormData({ ...evento, fechaInicio, fechaFin });
    }
  }, [evento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">
            Fecha de inicio
          </label>
          <input
            type="date"
            name="fechaInicio"
            id="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="fechaFin" className="block text-sm font-medium text-gray-700">
            Fecha de fin
          </label>
          <input
            type="date"
            name="fechaFin"
            id="fechaFin"
            value={formData.fechaFin}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lugar" className="block text-sm font-medium text-gray-700">
          Lugar
        </label>
        <input
          type="text"
          name="lugar"
          id="lugar"
          value={formData.lugar}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="organizador" className="block text-sm font-medium text-gray-700">
          Organizador
        </label>
        <input
          type="text"
          name="organizador"
          id="organizador"
          value={formData.organizador}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
          Tipo de evento
        </label>
        <select
          name="tipo"
          id="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="conferencia">Conferencia</option>
          <option value="taller">Taller</option>
          <option value="seminario">Seminario</option>
          <option value="cultural">Cultural</option>
          <option value="deportivo">Deportivo</option>
          <option value="otro">Otro</option>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="programado">Programado</option>
          <option value="cancelado">Cancelado</option>
          <option value="finalizado">Finalizado</option>
        </select>
      </div>

      <div>
        <label htmlFor="capacidad" className="block text-sm font-medium text-gray-700">
          Capacidad
        </label>
        <input
          type="number"
          name="capacidad"
          id="capacidad"
          value={formData.capacidad}
          onChange={handleChange}
          required
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="inscripcionRequerida"
          id="inscripcionRequerida"
          checked={formData.inscripcionRequerida}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="inscripcionRequerida" className="ml-2 block text-sm text-gray-900">
          Requiere inscripción
        </label>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {evento ? 'Actualizar' : 'Crear'} Evento
        </button>
      </div>
    </form>
  );
} 