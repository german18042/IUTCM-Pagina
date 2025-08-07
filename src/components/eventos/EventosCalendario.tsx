"use client";

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

interface EventoCalendario {
  id: string;
  titulo: string;
  hora: string;
  fecha: number;
  fechaCompleta: string;
}

interface EventosPorFecha {
  [key: string]: {
    id: string;
    titulo: string;
    hora: string;
  }[];
}

export const EventosCalendario = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [eventosPorFecha, setEventosPorFecha] = useState<EventosPorFecha>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Nombres de los meses
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  // Función para obtener el número de días en un mes
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Función para obtener el día de la semana del primer día del mes (0 = Domingo, 6 = Sábado)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Función para avanzar al mes siguiente
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // Función para retroceder al mes anterior
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  // Generar el calendario
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    
    const days = [];
    
    // Agregar días vacíos para alinear el primer día del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    
    // Agregar los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      // Formato de fecha para buscar en eventosPorFecha
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasEvents = eventosPorFecha[dateStr] && eventosPorFecha[dateStr].length > 0;
      
      days.push(
        <div 
          key={day} 
          className={`h-10 w-10 flex items-center justify-center rounded-full ${
            hasEvents 
              ? 'bg-secondary text-white cursor-pointer hover:bg-secondary/90' 
              : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
          }`}
          title={hasEvents ? `${eventosPorFecha[dateStr].length} eventos` : ""}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };
  
  // Cargar eventos desde la API
  useEffect(() => {
    const fetchEventos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/eventos');
        
        if (!response.ok) {
          throw new Error('Error al cargar eventos');
        }
        
        const data: Evento[] = await response.json();
        setEventos(data);
        
        // Organizar eventos por fecha
        const porFecha: EventosPorFecha = {};
        
        data.forEach(evento => {
          // Convertir fechas a objetos Date
          const fechaInicio = new Date(evento.fechaInicio);
          const fechaFin = new Date(evento.fechaFin);
          
          // Crear un evento para cada día entre fechaInicio y fechaFin
          const currentDate = new Date(fechaInicio);
          
          while (currentDate <= fechaFin) {
            const dateStr = currentDate.toISOString().split('T')[0];
            
            if (!porFecha[dateStr]) {
              porFecha[dateStr] = [];
            }
            
            porFecha[dateStr].push({
              id: evento._id,
              titulo: evento.titulo,
              hora: new Date(evento.fechaInicio).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit'
              })
            });
            
            // Avanzar al siguiente día
            currentDate.setDate(currentDate.getDate() + 1);
          }
        });
        
        setEventosPorFecha(porFecha);
      } catch (err) {
        console.error('Error al cargar eventos:', err);
        setError('No se pudieron cargar los eventos');
      } finally {
        setLoading(false);
      }
    };
    
    fetchEventos();
  }, []);
  
  // Eventos del mes actual
  const getEventosDelMes = () => {
    const eventosDelMes: EventoCalendario[] = [];
    
    for (const dateStr in eventosPorFecha) {
      // Crear la fecha correctamente para evitar problemas de zona horaria
      // Formato de dateStr es YYYY-MM-DD
      const [year, month, day] = dateStr.split('-').map(Number);
      const date = new Date(year, month - 1, day); // month es 0-indexed en JavaScript
      
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        eventosPorFecha[dateStr].forEach(evento => {
          eventosDelMes.push({
            ...evento,
            fecha: day, // Usar el día directamente del string para evitar desfases
            fechaCompleta: dateStr
          });
        });
      }
    }
    
    // Ordenar por fecha
    return eventosDelMes.sort((a, b) => a.fecha - b.fecha);
  };
  
  const eventosDelMes = getEventosDelMes();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {loading ? (
        <div className="py-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando eventos...</p>
        </div>
      ) : error ? (
        <div className="py-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaCalendarAlt className="mr-2 text-secondary" />
              Calendario
            </h2>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={prevMonth}
            className="text-gray-600 hover:text-secondary"
            aria-label="Mes anterior"
          >
            <FaChevronLeft />
          </button>
          
          <span className="font-medium text-primary text-lg">
            {meses[currentMonth]} {currentYear}
          </span>
          
          <button 
            onClick={nextMonth}
            className="text-gray-600 hover:text-secondary"
            aria-label="Mes siguiente"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      
      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => (
          <div key={index} className="h-10 w-10 flex items-center justify-center font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendario */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {renderCalendar()}
      </div>
      
      {/* Lista de eventos del mes */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Eventos de {meses[currentMonth]}
        </h3>
        
        {eventosDelMes.length > 0 ? (
          <div className="space-y-4">
            {eventosDelMes.map((evento) => (
              <a 
                key={evento.id}
                href={`/eventos/${evento.id}`}
                className="block bg-gray-50 hover:bg-gray-100 p-3 rounded-md transition-colors"
              >
                <div className="flex items-start">
                  <div className="bg-secondary text-white text-center p-2 rounded-md mr-3">
                    <div className="text-xl font-bold">{evento.fecha}</div>
                    <div className="text-xs">{meses[currentMonth].substring(0, 3)}</div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">{evento.titulo}</h4>
                    <p className="text-sm text-gray-600">{evento.hora}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">
            No hay eventos programados para este mes
          </p>
        )}
      </div>
        </>
      )}
    </div>
  );
};
