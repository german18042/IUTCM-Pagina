"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export const ContactoCarreras = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: '',
    carrera: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setStatus({
        loading: false,
        success: true,
        error: ''
      });

      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        telefono: '',
        carrera: '',
        message: ''
      });

      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Error al enviar el formulario'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ¿Interesado en nuestras carreras?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contáctanos para obtener más información o agendar una visita guiada a nuestro campus
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Solicita información</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Tu nombre"
                      required
                      disabled={status.loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                      required
                      disabled={status.loading}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-200 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tu número de teléfono"
                    required
                    disabled={status.loading}
                  />
                </div>
                
                <div>
                  <label htmlFor="carrera" className="block text-sm font-medium text-gray-200 mb-1">
                    Carrera de interés
                  </label>
                  <select
                    id="carrera"
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white"
                    required
                    disabled={status.loading}
                  >
                    <option value="">Selecciona una carrera</option>
                    <option value="informatica">T.S.U. en Informática</option>
                    <option value="administracion">T.S.U. en Administración</option>
                    <option value="turismo">T.S.U. en Turismo</option>
                    <option value="hoteleria">T.S.U. en Hotelería</option>
                    <option value="agropecuaria">T.S.U. en Agropecuaria</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    disabled={status.loading}
                  ></textarea>
                </div>

                {status.error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    {status.error}
                  </div>
                )}

                {status.success && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                    ¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto.
                  </div>
                )}
                
                <div>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    type="submit" 
                    className="w-full hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status.loading}
                  >
                    {status.loading ? 'Enviando...' : 'Enviar solicitud'}
                  </Button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Contáctanos directamente</h3>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white mr-5">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-2">Correo electrónico</h4>
                    <p className="text-gray-100 text-lg">info@iutcm.edu.ve</p>
                    <p className="text-gray-100 text-lg">admisiones@iutcm.edu.ve</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white mr-5">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-2">Teléfonos</h4>
                    <p className="text-gray-100 text-lg">+58 (212) 555-1234</p>
                    <p className="text-gray-100 text-lg">+58 (212) 555-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white mr-5">
                    <FaCalendarAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-2">Horarios</h4>
                    <p className="text-gray-100 text-lg">Martes y Jueves: 9:00 AM - 12:00 PM</p>
                    <p className="text-gray-100 text-lg">Sábados: 10:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
