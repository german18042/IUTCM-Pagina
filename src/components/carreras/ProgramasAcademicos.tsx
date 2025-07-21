"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderImage } from '../../components/home/PlaceholderImage';
import { Button } from '../../components/ui/Button';
import { FaGraduationCap, FaChartLine, FaPlane, FaHotel, FaLeaf, FaUtensils } from 'react-icons/fa';

const programas = [
  {
    id: 1,
    title: "T.S.U. en Informática",
    icon: <FaGraduationCap size={32} />,
    color: "var(--primary)",
    description: "Adquiere el conocimiento, habilidades y destrezas necesarias para resolver cualquier desafío relacionado con la tecnología. Prepárate para ser un líder en el mundo digital y aprovecha las oportunidades en constante evolución en el campo de la informática. ¡Tu futuro está lleno de posibilidades!",
    areas: ["Desarrollo de Software", "Redes y Sistemas", "Bases de Datos", "Seguridad Informática"]
  },
  {
    id: 2,
    title: "T.S.U. en Administración de Empresas",
    icon: <FaChartLine size={32} />,
    color: "var(--secondary)",
    description: "Estarás completamente preparado para desarrollar y gestionar empresas en distintos sectores, ya sea comercial, industrial o administrativo. Obtén una sólida base académica y una experiencia práctica operativa de alto nivel. ¡Abre las puertas hacia el éxito y alcanza nuevas alturas en tu carrera profesional!",
    areas: ["Gestión Empresarial", "Contabilidad", "Marketing", "Recursos Humanos"]
  },
  {
    id: 3,
    title: "T.S.U. en Turismo Mención Servicios Turísticos",
    icon: <FaPlane size={32} />,
    color: "var(--accent)",
    description: "Adquirirás conocimientos especializados en planificación y organización de viajes, gestión de alojamiento, atención al cliente, marketing turístico y desarrollo de productos turísticos. Aprenderás a identificar las necesidades y expectativas de los viajeros, superando sus expectativas y creando momentos memorables. ¡Prepárate para conquistar el mundo del turismo con conocimientos de vanguardia!",
    areas: ["Planificación de Viajes", "Marketing Turístico", "Atención al Cliente", "Desarrollo de Productos Turísticos"]
  },
  {
    id: 4,
    title: "T.S.U. en Turismo Mención Hotelería",
    icon: <FaHotel size={32} />,
    color: "var(--primary-light)",
    description: "Tendrás la oportunidad de convertirte en un experto en la gestión y operación de establecimientos hoteleros, brindando experiencias excepcionales a los huéspedes. Adquirirás conocimientos en servicio al cliente, supervisión de operaciones hoteleras, creación de ambientes acogedores y garantía de satisfacción de los huéspedes. ¡Inicia tu camino hacia el éxito en la industria hotelera hoy mismo!",
    areas: ["Gestión Hotelera", "Servicio al Cliente", "Operaciones Hoteleras", "Administración de Alojamientos"]
  },
  {
    id: 5,
    title: "T.S.U. en ADE Agropecuaria",
    icon: <FaLeaf size={32} />,
    color: "var(--secondary-light)",
    description: "Obtén los conocimientos y habilidades necesarios para gestionar de manera efectiva empresas en este campo en constante crecimiento. Aprenderás a optimizar recursos, implementar estrategias financieras, planificar cultivos y comercializar productos agropecuarios, siempre enfocados en la sustentabilidad. ¡No pierdas esta oportunidad de éxito en el mundo agropecuario!",
    areas: ["Gestión de Recursos Naturales", "Producción Agrícola", "Comercialización", "Desarrollo Sostenible"]
  },
  {
    id: 6,
    title: "Dohmi Culinary Institute",
    icon: <FaUtensils size={32} />,
    color: "var(--accent-light)",
    description: "La pasión, el aprendizaje y la creatividad se funden en el mismo plato. El lugar donde consigues certificarte profesionalmente en áreas gastronómicas con mayor demanda de empleo: cocina, panadería, barismo, pastelería y coctelería. Desarrolla tu talento culinario y prepárate para una carrera exitosa en el mundo gastronómico.",
    areas: ["Cocina Profesional", "Panadería", "Pastelería", "Barismo", "Coctelería"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const ProgramasAcademicos = () => {
  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Programas Académicos
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Ofrecemos una amplia variedad de carreras técnicas diseñadas para prepararte 
            en las áreas más demandadas del mercado laboral actual.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {programas.map((programa) => (
            <motion.div 
              key={programa.id}
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                {programa.id === 1 && (
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Informática" 
                    className="w-full h-full object-cover"
                  />
                )}
                {programa.id === 2 && (
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Administración de Empresas" 
                    className="w-full h-full object-cover"
                  />
                )}
                {programa.id === 3 && (
                  <img 
                    src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Turismo Servicios Turísticos" 
                    className="w-full h-full object-cover"
                  />
                )}
                {programa.id === 4 && (
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Turismo Hotelería" 
                    className="w-full h-full object-cover"
                  />
                )}
                {programa.id === 5 && (
                  <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="ADE Agropecuaria" 
                    className="w-full h-full object-cover"
                  />
                )}
                {programa.id === 6 && (
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Culinary Institute" 
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                  <span className="text-primary">{programa.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{programa.title}</h3>
                <p className="text-gray-600 mb-4">{programa.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Áreas de estudio:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {programa.areas.map((area, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="text-sm text-gray-700 font-medium">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="w-full mt-2"
                  href={programa.id === 6 ? 'https://www.dohmi.com/' : `/carreras/${programa.id}`}
                  target={programa.id === 6 ? '_blank' : '_self'}
                  rel={programa.id === 6 ? 'noopener noreferrer' : ''}
                >
                  Más información
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
