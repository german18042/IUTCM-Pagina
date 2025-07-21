"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUniversity } from 'react-icons/fa';
import { ContactoHero } from '@/components/contacto/ContactoHero';

export default function ContactoPage() {
  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#042e47',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <Navbar />
      
      <main>
        <ContactoHero />

        {/* Contact Information Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#042e47] hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#042e47]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <FaEnvelope className="text-[#042e47] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Correo Electrónico</h3>
                <div className="text-center space-y-2">
                  <p className="text-gray-700">info@iutcm.edu.ve</p>
                  <p className="text-gray-700">admisiones@iutcm.edu.ve</p>
                  <p className="text-gray-700">soporte@iutcm.edu.ve</p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#042e47] hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#042e47]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <FaPhone className="text-[#042e47] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Teléfonos</h3>
                <div className="text-center space-y-2">
                  <p className="text-gray-700">+58 123 456 7890</p>
                  <p className="text-gray-700">+58 123 456 7891</p>
                  <p className="text-gray-700">+58 123 456 7892</p>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#042e47] hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#042e47]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <FaMapMarkerAlt className="text-[#042e47] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Dirección</h3>
                <p className="text-center text-gray-700">
                  Av. Universidad, Ciudad Guayana<br />
                  Estado Bolívar, Venezuela<br />
                  Código Postal 8050
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section id="contacto" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#042e47] focus:border-transparent"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#042e47] focus:border-transparent"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#042e47] focus:border-transparent"
                      placeholder="Asunto de tu mensaje"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#042e47] focus:border-transparent"
                      placeholder="Escribe tu mensaje aquí..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button variant="primary" size="lg" type="submit" className="w-full hover:scale-105 transition-transform shadow-lg">
                      Enviar mensaje
                    </Button>
                  </div>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-gray-900 p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <FaClock className="text-2xl mr-4 text-[#042e47]" />
                  <h3 className="text-2xl font-bold">Horario de atención</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Lunes - Viernes:</span>
                    <span className="text-gray-900 font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sábados:</span>
                    <span className="text-gray-900 font-semibold">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Domingos:</span>
                    <span className="text-gray-900 font-semibold">Cerrado</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <FaUniversity className="text-2xl mr-4 text-[#042e47]" />
                    <h3 className="text-2xl font-bold">Sede Principal</h3>
                  </div>
                  <p className="text-gray-700">
                    Nuestra sede principal está ubicada en el corazón de Ciudad Guayana, 
                    con fácil acceso al transporte público y amplias instalaciones para 
                    nuestros estudiantes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preguntas frecuentes</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y programas académicos.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {/* FAQ Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    question: "¿Cuáles son los requisitos de admisión?",
                    answer: "Los requisitos varían según el programa. Generalmente necesitarás tu título de bachiller, notas certificadas y documentos de identificación."
                  },
                  {
                    question: "¿Ofrecen becas o ayudas financieras?",
                    answer: "Sí, ofrecemos diferentes tipos de becas y planes de financiamiento. Contacta a nuestro departamento de admisiones para más información."
                  },
                  {
                    question: "¿Cuándo comienzan las clases?",
                    answer: "Los períodos académicos comienzan en septiembre y febrero. Las fechas exactas varían cada año."
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

              {/* FAQ Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">¿Cuál es el proceso de admisión?</h3>
                <p className="text-gray-600">
                  El proceso de admisión incluye completar una solicitud en línea, presentar documentos académicos, y en algunos casos, realizar una prueba de aptitud. Para más detalles, visita nuestra sección de Admisiones o contáctanos directamente.
                </p>
              </motion.div>

              {/* FAQ Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">¿Ofrecen becas o ayudas financieras?</h3>
                <p className="text-gray-600">
                  Sí, ofrecemos diversas opciones de becas y ayudas financieras para estudiantes calificados. Te recomendamos contactar a nuestro departamento de ayuda financiera para obtener información específica sobre los requisitos y plazos de solicitud.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

              {/* FAQ Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">¿Cuál es el proceso de admisión?</h3>
                <p className="text-gray-600">
                  El proceso de admisión incluye completar una solicitud en línea, presentar documentos académicos, y en algunos casos, realizar una prueba de aptitud. Para más detalles, visita nuestra sección de Admisiones o contáctanos directamente.
                </p>
              </motion.div>

              {/* FAQ Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">¿Ofrecen becas o ayudas financieras?</h3>
                <p className="text-gray-600">
                  Sí, ofrecemos diversas opciones de becas y ayudas financieras para estudiantes calificados. Te recomendamos contactar a nuestro departamento de ayuda financiera para obtener información específica sobre los requisitos y plazos de solicitud.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
