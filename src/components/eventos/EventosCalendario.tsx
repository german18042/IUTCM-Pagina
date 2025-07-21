"use client";

import React, { useState } from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Datos de ejemplo para eventos por fecha
const eventosPorFecha = {
  "2025-07-20": [
    { id: 1, titulo: "Feria de Empleo y Pasantías", hora: "9:00 AM" }
  ],
  "2025-07-25": [
    { id: 2, titulo: "Jornada de Actualización Tecnológica", hora: "10:00 AM" }
  ],
  "2025-07-30": [
    { id: 3, titulo: "Conferencia: Innovación en Ingeniería", hora: "3:00 PM" }
  ],
  "2025-08-05": [
    { id: 4, titulo: "Taller de Emprendimiento", hora: "1:00 PM" }
  ],
  "2025-08-10": [
    { id: 5, titulo: "Inicio Semana de la Ciencia", hora: "9:00 AM" }
  ],
  "2025-08-14": [
    { id: 6, titulo: "Clausura Semana de la Ciencia", hora: "4:00 PM" }
  ],
  "2025-08-20": [
    { id: 7, titulo: "Inicio Hackathon IUTCM", hora: "8:00 AM" }
  ],
  "2025-08-21": [
    { id: 8, titulo: "Fin Hackathon IUTCM", hora: "8:00 AM" }
  ]
};

export const EventosCalendario = () => {
  const [currentMonth, setCurrentMonth] = useState(6); // Julio (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  
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
  
  // Eventos del mes actual
  const getEventosDelMes = () => {
    const eventos = [];
    
    for (const dateStr in eventosPorFecha) {
      const date = new Date(dateStr);
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        eventosPorFecha[dateStr].forEach(evento => {
          eventos.push({
            ...evento,
            fecha: date.getDate(),
            fechaCompleta: dateStr
          });
        });
      }
    }
    
    // Ordenar por fecha
    return eventos.sort((a, b) => a.fecha - b.fecha);
  };
  
  const eventosDelMes = getEventosDelMes();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
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
          
          <span className="font-medium">
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
    </div>
  );
};
