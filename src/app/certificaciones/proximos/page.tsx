'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProximosHero } from '@/components/certificaciones/ProximosHero';

const proximosCursos = {
  certificados: [
    'Certificado en Mecánica de Bicicleta',
    'Certificado en Mecánica de Motos',
    'Certificado en Mecánico Automotriz',
    'Certificado en Soldadura',
    'Certificado en Herrería',
    'Certificado en Plomería Residencial',
    'Certificado en Electricidad Residencial',
    'Certificado en Aires Acondicionados',
    'Certificado en Reparación de Celulares',
    'Certificado en Reparación de Lavadoras Residenciales',
    'Certificado de Reparación de Neveras Residenciales',
    'Certificado Instalador y Montador de Equipos de Aires Acondicionados Individuales',
    'Certificado en cerrajería',
    'Certificado en Albañilería',
    'Certificado en Jardinería',
    'Certificado en Sistemas Eléctricos y Electromecánicos de Vehículos',
    'Certificado en Mantenimiento de PC',
    'Certificado en Montaje y Mantenimiento Paneles Solares Fotovoltaica',
    'Certificado en Montaje y Mantenimiento de Alarmas y Cámaras de Vigilancia',
    'Certificado Aire Acondicionado Automotriz'
  ],
  diplomados: [
    'Diplomado Manejo de Aguas y Riegos',
    'Diplomado Cultivo e Industrialización del Café',
    'Diplomado Crianza y Manejo de Equinos',
    'Diplomado Crianza y Engorde de Cerdos',
    'Diplomado Cultivo y Comercialización de Aguacate',
    'Diplomado Producción de Pollos de Engorde',
    'Diplomado de Hidroponia',
    'Diplomado Producción de Aves de Postura',
    'Diplomado Crianza y Comercialización de Tilapia',
    'Diplomado Cultivo y Comercialización de Limón',
    'Diplomado Establecimiento y Manejo de Especies Forrajeras',
    'Diplomado Manejo de ganado Bovino',
    'Diplomado de Administración Financiera Agropecuaria',
    'Diplomado Elaboración de Concentrados para Cerdos',
    'Diplomado de Ganado Lechero',
    'Diplomado Ganadería Bovina Doble Propósito',
    'Diplomado Lombricompost',
    'Diplomado Crianza y Comercialización de Pavos',
    'Diplomado Crianza y Comercialización de Conejos',
    'Diplomado en Crianza y Comercialización de Camarones',
    'Diplomado Mejoramiento Genético de Bovinos',
    'Diplomado en Nutrición para Ganado Lechero',
    'Diplomado Ganadería de Engorde',
    'Diplomado Elaboración Concentrados para Aves',
    'Diplomados Elaboración de Concentrados para Bovinos',
    'Diplomado Cultivo e Industrialización de Cacao',
    'Diplomado Cultivo y Comercialización de Parchita',
    'Diplomado Cultivo y Comercialización de Guayabas',
    'Diplomado Cultivo y Comercialización de Plátano',
    'Diplomado Apicultura',
    'Diplomado Administración de Finca Ganadera',
    'Diplomado en Fruticultura',
    'Diplomado Crianza de Cabras',
    'Diplomado Crianza de Ovejas',
    'Diplomado Cultivo y Comercialización Tubérculos',
    'Diplomado Cultivo y Comercialización Legumbres',
    'Diplomado Elaboración y Comercialización de Quesos'
  ]
};

export default function ProximosCursosPage() {
  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#042e47',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <Navbar />
      
      <main>
        <ProximosHero />

        {/* Certificados Section */}
        <section id="certificados" className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12 text-white"
            >
              Certificados Técnicos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximosCursos.certificados.map((certificado, index) => (
                <motion.div
                  key={certificado}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{certificado}</h3>
                  <span className="inline-block bg-[#042e47] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diplomados Section */}
        <section id="diplomados" className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12 text-white"
            >
              Diplomados
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximosCursos.diplomados.map((diplomado, index) => (
                <motion.div
                  key={diplomado}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{diplomado}</h3>
                  <span className="inline-block bg-[#042e47] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 
 
 
 