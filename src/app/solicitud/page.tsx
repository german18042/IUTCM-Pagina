"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaUser, FaIdCard, FaMapMarkerAlt, FaPaperPlane, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function SolicitudPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    telefono: '',
    region: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/solicitud', {
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
        nombre: '',
        apellido: '',
        cedula: '',
        email: '',
        telefono: '',
        region: ''
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
    <div className="min-h-screen bg-primary" suppressHydrationWarning>
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
          {/* Background image with darker overlay */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gray-800">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Solicitud Credito IUTCM" 
                className="w-full h-full object-cover opacity-90"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-primary/70 z-10"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Solicitud de Crédito IUTCM
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Completa el formulario y nos pondremos en contacto contigo para brindarte toda la información que necesitas acerca de los créditos.
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <FaPaperPlane className="text-2xl text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Formulario de Solicitud
                  </h2>
                  <p className="text-gray-600">
                    Por favor, completa todos los campos requeridos
                  </p>
                </div>

                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-medium">
                      ¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.
                    </p>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 font-medium">
                      {status.error}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-2" />
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                        placeholder="Tu nombre"
                        required
                        disabled={status.loading}
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-2" />
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                        placeholder="Tu apellido"
                        required
                        disabled={status.loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cedula" className="block text-sm font-medium text-gray-700 mb-2">
                      <FaIdCard className="inline mr-2" />
                      Cédula
                    </label>
                    <input
                      type="text"
                      id="cedula"
                      name="cedula"
                      value={formData.cedula}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                      placeholder="Ej: V-12345678"
                      required
                      disabled={status.loading}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2" />
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                        placeholder="tu@email.com"
                        required
                        disabled={status.loading}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="inline mr-2" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                        placeholder="Ej: 0412-1234567"
                        required
                        disabled={status.loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      <FaMapMarkerAlt className="inline mr-2" />
                      Región
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white text-gray-900"
                      required
                      disabled={status.loading}
                    >
                      <option value="">Selecciona una región</option>
                      <option value="Vigia">Vigía</option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="Merida">Mérida</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status.loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Enviar Solicitud
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
