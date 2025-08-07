"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y brindarte la información que necesitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            
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
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Asunto de tu mensaje"
                  required
                />
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
                ></textarea>
              </div>

              {status.message && (
                <div 
                  className={`p-4 rounded-md ${
                    status.type === 'success' 
                      ? 'bg-green-600/20 text-green-200 border border-green-500/30' 
                      : 'bg-red-600/20 text-red-200 border border-red-500/30'
                  }`}
                >
                  {status.message}
                </div>
              )}
              
              <div>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  type="submit" 
                  className="w-full hover:scale-105 transition-transform shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
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
                  <p className="text-gray-100 text-lg">soporte@iutcm.gob</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white mr-5">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">Teléfonos</h4>
                  <p className="text-gray-100 text-lg">+58 (424) 783-7583</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
