"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '¡Gracias por suscribirte!'
        });
        setEmail('');
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Error al procesar la suscripción'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al conectar con el servidor'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="mb-2">Teléfono: +58 (424) 783-7583</p>
            <p className="mb-2">Email: soporte@iutcm.edu.ve</p>
            <p className="mb-2">Whatsapp: +58 (424) 783-7583</p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="hover:text-secondary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="hover:text-secondary transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-secondary transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/certificaciones" className="hover:text-secondary transition-colors">
                  Certificaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/IUTCMONLINE?ref=bookmarks#" className="hover:text-secondary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/iutcm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Boletín informativo */}
          <div>
            <h3 className="text-xl font-bold mb-4">Boletín Informativo</h3>
            <p className="mb-4">Suscríbete para recibir las últimas noticias y actualizaciones.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Procesando...' : 'Suscribirse'}
              </button>
              {status.message && (
                <div 
                  className={`mt-2 p-2 rounded text-sm ${
                    status.type === 'success' 
                      ? 'bg-green-600/20 text-green-200' 
                      : 'bg-red-600/20 text-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} IUTCM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
