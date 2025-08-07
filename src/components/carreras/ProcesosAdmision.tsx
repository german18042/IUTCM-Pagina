"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { FaRegCalendarAlt, FaRegFileAlt, FaRegCheckCircle, FaRegIdCard } from 'react-icons/fa';

const pasos = [
  {
    id: 1,
    icon: <FaRegCalendarAlt size={32} className="text-primary" />,
    title: "Solicitud de Admisión",
    description: "Completa el formulario de solicitud en línea o presencial en nuestra oficina de admisiones.",
    color: "bg-blue-50"
  },
  {
    id: 2,
    icon: <FaRegFileAlt size={32} className="text-primary" />,
    title: "Documentación",
    description: "Presenta los documentos requeridos: título de bachiller, cédula, fotos y certificados.",
    color: "bg-blue-50"
  },
  {
    id: 3,
    icon: <FaRegCheckCircle size={32} className="text-primary" />,
    title: "Evaluación",
    description: "Participa en nuestro proceso de evaluación y orientación vocacional.",
    color: "bg-blue-50"
  },
  {
    id: 4,
    icon: <FaRegIdCard size={32} className="text-primary" />,
    title: "Inscripción",
    description: "Formaliza tu inscripción y comienza tu camino hacia el éxito profesional.",
    color: "bg-blue-50"
  }
];

export const ProcesosAdmision = () => {
  return (
    <section id="admision" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Proceso de Admisión
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sigue estos sencillos pasos para formar parte de nuestra comunidad educativa
            </motion.p>
          </div>

          <div className="space-y-12">
            {pasos.map((paso, index) => (
              <motion.div 
                key={paso.id}
                className="flex flex-col md:flex-row gap-6 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`${paso.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {paso.icon}
                  <span className="sr-only">Paso {paso.id}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 text-primary">Paso {paso.id}: {paso.title}</h3>
                  <p className="text-gray-600">{paso.description}</p>
                </div>
                {index < pasos.length - 1 && (
                  <div className="hidden md:block h-12 border-l-2 border-dashed border-gray-300 mx-auto my-2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center text-primary">Próximas Fechas de Admisión</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-blue-600">Periodo Regular</p>
                <p className="text-gray-600">15 de agosto - 30 de septiembre, 2025</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-blue-600">Periodo Extraordinario</p>
                <p className="text-gray-600">15 de enero - 28 de febrero, 2026</p>
              </div>
            </div>
            <div className="text-center">
              <Button 
                variant="primary" 
                size="lg"
                href="https://api.whatsapp.com/send/?phone=584247837583&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Admisión
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
