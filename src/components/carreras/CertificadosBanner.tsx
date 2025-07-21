"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    icon: <FaLock className="w-6 h-6" />,
    text: "Seguridad Blockchain"
  },
  {
    icon: <FaGlobe className="w-6 h-6" />,
    text: "Reconocimiento Global"
  },
  {
    icon: <FaCheckCircle className="w-6 h-6" />,
    text: "Validación Instantánea"
  }
];

export const CertificadosBanner = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary via-primary/95 to-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaShieldAlt className="text-secondary w-12 h-12" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Certificados Digitales con Blockchain
              </h2>
            </div>
            <p className="text-gray-200 text-xl mb-8 leading-relaxed">
              Obtén certificados seguros y reconocidos globalmente, respaldados por tecnología Blockchain. Tu éxito profesional avalado por la innovación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-secondary">
                    {feature.icon}
                  </div>
                  <span className="text-white font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Link 
                href="/certificados"
                className="group inline-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Conoce más
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:flex-shrink-0"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-secondary/30 rounded-full animate-pulse delay-75"></div>
              <div className="absolute inset-8 bg-secondary/40 rounded-full animate-pulse delay-150"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaShieldAlt className="w-32 h-32 lg:w-40 lg:h-40 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 