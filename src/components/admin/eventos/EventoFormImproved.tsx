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

  // Clases CSS mejoradas para inputs
  const inputClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200";
  const selectClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {evento ? 'Editar Evento' : 'Crear Nuevo Evento'}
        </h2>
        <p className="text-gray-600">
          Complete todos los campos para {evento ? 'actualizar' : 'crear'} el evento.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Título */}
        <div>
          <label htmlFor="titulo" className={labelClasses}>
            Título del Evento *
          </label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            placeholder="Ingrese el título del evento"
            className={inputClasses}
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="descripcion" className={labelClasses}>
            Descripción *
          </label>
          <textarea
            name="descripcion"
            id="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Describa el evento en detalle"
            className={`${inputClasses} resize-vertical`}
          />
        </div>

        {/* Imagen */}
        <div>
          <label htmlFor="imagen" className={labelClasses}>
            URL de la Imagen *
          </label>
          <input
            type="url"
            name="imagen"
            id="imagen"
            value={formData.imagen}
            onChange={handleChange}
            required
            placeholder="https://ejemplo.com/imagen.jpg"
            className={inputClasses}
          />
        </div>

        {/* Fechas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fechaInicio" className={labelClasses}>
              Fecha de Inicio *
            </label>
            <input
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              value={formData.fechaInicio}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="fechaFin" className={labelClasses}>
              Fecha de Fin *
            </label>
            <input
              type="date"
              name="fechaFin"
              id="fechaFin"
              value={formData.fechaFin}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
        </div>

        {/* Lugar y Organizador */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="lugar" className={labelClasses}>
              Lugar *
            </label>
            <input
              type="text"
              name="lugar"
              id="lugar"
              value={formData.lugar}
              onChange={handleChange}
              required
              placeholder="Ubicación del evento"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="organizador" className={labelClasses}>
              Organizador *
            </label>
            <input
              type="text"
              name="organizador"
              id="organizador"
              value={formData.organizador}
              onChange={handleChange}
              required
              placeholder="Nombre del organizador"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Tipo y Estado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="tipo" className={labelClasses}>
              Tipo de Evento *
            </label>
            <select
              name="tipo"
              id="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              className={selectClasses}
            >
              <option value="conferencia">Conferencia</option>
              <option value="taller">Taller</option>
              <option value="seminario">Seminario</option>
              <option value="cultural">Cultural</option>
              <option value="deportivo">Deportivo</option>
              <option value="academico">Académico</option>
              <option value="tecnologico">Tecnológico</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="estado" className={labelClasses}>
              Estado *
            </label>
            <select
              name="estado"
              id="estado"
              value={formData.estado}
              onChange={handleChange}
              required
              className={selectClasses}
            >
              <option value="programado">Programado</option>
              <option value="cancelado">Cancelado</option>
              <option value="finalizado">Finalizado</option>
            </select>
          </div>
        </div>

        {/* Capacidad */}
        <div>
          <label htmlFor="capacidad" className={labelClasses}>
            Capacidad *
          </label>
          <input
            type="number"
            name="capacidad"
            id="capacidad"
            value={formData.capacidad}
            onChange={handleChange}
            required
            min="1"
            placeholder="Número máximo de participantes"
            className={inputClasses}
          />
        </div>

        {/* Inscripción requerida */}
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-md">
          <input
            type="checkbox"
            name="inscripcionRequerida"
            id="inscripcionRequerida"
            checked={formData.inscripcionRequerida}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="inscripcionRequerida" className="text-sm font-medium text-gray-700">
            Requiere inscripción previa
          </label>
        </div>

        {/* Botones */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            {evento ? 'Actualizar Evento' : 'Crear Evento'}
          </button>
        </div>
      </form>
    </div>
  );
}
