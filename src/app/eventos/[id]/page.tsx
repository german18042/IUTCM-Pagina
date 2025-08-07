'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUser, FaUsers, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

interface Evento {
  _id: string;
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
  enlaceInscripcion?: string;
}

export default function EventoDetalle() {
  const params = useParams();
  const [evento, setEvento] = useState<Evento | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/eventos/${params.id}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar el evento');
        }
        const data = await response.json();
        setEvento(data);
      } catch (err) {
        setError('Error al cargar el evento. Por favor, intente nuevamente.');
        console.error('Error fetching evento:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchEvento();
    }
  }, [params.id]);

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatearHora = (fecha: string) => {
    return new Date(fecha).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="bg-primary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !evento) {
    return (
      <div className="bg-primary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error || 'No se encontró el evento solicitado.'}</p>
          <Link href="/eventos" className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Volver a Eventos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Imagen de cabecera */}
        <div className="relative h-80 w-full">
          <img 
            src={evento.imagen} 
            alt={evento.titulo} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                  {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{evento.titulo}</h1>
            </div>
          </div>
        </div>
        
        {/* Información del evento */}
        <div className="p-6">
          {/* Detalles principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaCalendarAlt className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Fecha</h3>
                  <p className="text-base font-medium text-gray-900">
                    {formatearFecha(evento.fechaInicio)}
                    {evento.fechaInicio !== evento.fechaFin && ` al ${formatearFecha(evento.fechaFin)}`}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaClock className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Hora</h3>
                  <p className="text-base font-medium text-gray-900">
                    {formatearHora(evento.fechaInicio)} - {formatearHora(evento.fechaFin)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Lugar</h3>
                  <p className="text-base font-medium text-gray-900">{evento.lugar}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaUser className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Organizador</h3>
                  <p className="text-base font-medium text-gray-900">{evento.organizador}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaUsers className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Capacidad</h3>
                  <p className="text-base font-medium text-gray-900">{evento.capacidad} personas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaCheckCircle className="text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Inscripción</h3>
                  <p className="text-base font-medium text-gray-900">
                    {evento.inscripcionRequerida ? 'Requiere inscripción previa' : 'No requiere inscripción'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Descripción */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
            <div className="prose prose-primary max-w-none text-gray-700">
              <p>{evento.descripcion}</p>
            </div>
          </div>
          
          {/* Estado del evento */}
          {evento.estado !== 'programado' && (
            <div className="mt-8 p-4 rounded-md bg-gray-50 border border-gray-200">
              <div className="flex items-center">
                <div className={`h-3 w-3 rounded-full ${
                  evento.estado === 'cancelado' ? 'bg-red-500' : 'bg-green-500'
                } mr-2`}></div>
                <p className="text-sm font-medium text-gray-700">
                  Este evento está {evento.estado === 'cancelado' ? 'cancelado' : 'finalizado'}
                </p>
              </div>
            </div>
          )}
          
          {/* Botones de acción */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/eventos" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Volver a Eventos
            </Link>
            
            {evento.estado === 'programado' && evento.inscripcionRequerida && evento.enlaceInscripcion && (
              <a 
                href={evento.enlaceInscripcion} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors"
              >
                Inscribirse
              </a>
            )}
            
            {evento.estado === 'programado' && (!evento.inscripcionRequerida || !evento.enlaceInscripcion) && (
              <div className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white">
                {evento.inscripcionRequerida ? 'Inscripción no disponible' : 'No requiere inscripción'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
