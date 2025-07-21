'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { CertificacionesHero } from '@/components/certificaciones/CertificacionesHero';
import Link from 'next/link';

const certificaciones = [
  {
    titulo: 'Certificación de soldadura',
    descripcion: `Nuestro simulador de soldadura proporciona una experiencia de aprendizaje interactiva y dinámica, permitiéndote adquirir conocimientos de manera eficiente y efectiva. A través de esta innovadora herramienta, podrás formarte de manera más rápida y económica, optimizando tanto el tiempo como los costes asociados a tu formación en soldadura.

Durante el curso, los participantes recibirán una formación integral en los principios fundamentales de la soldadura. Se proporcionará un conocimiento profundo sobre los equipos y herramientas utilizados en el proceso de soldadura, así como sobre los materiales más comúnmente soldados, como el acero, el aluminio y el acero inoxidable.`,
    imagen: 'https://i.imgur.com/HCrQDF1.png',
  },
  {
    titulo: 'Certificación de Pescadería',
    descripcion: `El curso de Certificación de Pescadería es un programa completo diseñado para aquellos interesados en desarrollar habilidades especializadas en el manejo de pescados y mariscos frescos. Durante este curso, los participantes aprenderán los conocimientos esenciales y las técnicas prácticas necesarias para sobresalir en el emocionante campo de la pescadería.

A lo largo del programa, los estudiantes explorarán una amplia gama de temas relacionados con los productos del mar. Esto incluirá el conocimiento de diferentes tipos de pescados y mariscos, tanto de agua dulce como de agua salada. Los participantes aprenderán sobre las características de cada especie, su calidad, técnicas de almacenamiento adecuadas y las formas más comunes de preparación culinaria.`,
    imagen: 'https://i.imgur.com/OhEZhIe.jpeg',
  },
  {
    titulo: 'Certificación de Carnicería',
    descripcion: `El curso de Certificación de Carnicería es una oportunidad única para aquellos interesados en adquirir habilidades especializadas en el arte de la carnicería. Durante el curso, los participantes aprenderán los conocimientos esenciales y las técnicas prácticas necesarias para sobresalir en este oficio.

El programa de certificación abarcará una amplia gama de temas, incluyendo el conocimiento de los diferentes tipos de carne, desde res y cerdo hasta aves y cordero. Los estudiantes aprenderán sobre las características de cada tipo de carne, su calidad, corte y usos culinarios adecuados.`,
    imagen: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg',
  },
  {
    titulo: 'Programa de Higiene y Manipulación de Alimentos',
    descripcion: `Es un programa diseñado para proporcionar a los participantes los conocimientos y las habilidades necesarias para garantizar la seguridad e inocuidad de los alimentos en entornos de preparación y servicio de alimentos.

Durante el programa, los estudiantes aprenderán sobre los principios fundamentales de la higiene alimentaria y la importancia de mantener altos estándares de seguridad en la manipulación de alimentos. Se les enseñará sobre los peligros alimentarios, como la contaminación cruzada, el crecimiento bacteriano y las intoxicaciones alimentarias, y cómo prevenirlos.

Este abordará temas como la higiene personal, incluyendo la importancia del lavado de manos adecuado y la vestimenta apropiada en la manipulación de alimentos. Los participantes también aprenderán sobre la limpieza y desinfección de equipos y superficies, así como las prácticas de almacenamiento seguro de alimentos.`,
    imagen: 'https://i.imgur.com/pIwID17.jpeg',
  },
  {
    titulo: 'Atención al cliente',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos de la atención al cliente, incluyendo la importancia de brindar un trato amable, cortés y respetuoso, así como la capacidad de escuchar activamente y comprender las necesidades y preocupaciones de los clientes.

Los participantes adquirirán habilidades prácticas en la comunicación efectiva, tanto verbal como escrita, aprendiendo a transmitir información clara y precisa, a utilizar un lenguaje adecuado y a adaptar su estilo de comunicación según las características y preferencias de cada cliente.`,
    imagen: 'https://i.imgur.com/ZJtAzE9.jpeg',
  },
  {
    titulo: 'Certificado de Cajero',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos del manejo de efectivo, incluyendo el conteo preciso de billetes y monedas, la verificación de la autenticidad de los billetes y el manejo seguro de los valores.

Los participantes adquirirán habilidades prácticas en la operación de sistemas y terminales de punto de venta (POS), incluyendo el registro y cobro de productos o servicios, la emisión de recibos y la realización de devoluciones o cambios.

El curso también cubrirá temas relacionados con el servicio al cliente, como el manejo de situaciones difíciles, la resolución de problemas y la comunicación efectiva con los clientes.`,
    imagen: 'https://i.imgur.com/2xVEBIx.jpeg',
  },
  {
    titulo: 'Experto en Dirección del comercio especializado',
    descripcion: `El curso de Certificación de Elaboración y Venta de Charcutería es un programa especializado diseñado para aquellos interesados en aprender las técnicas y habilidades necesarias para producir y vender una amplia variedad de productos de charcutería artesanal.

Además de la elaboración de los productos, el curso también abordará aspectos clave de la venta y comercialización de la charcutería. Los participantes aprenderán sobre el etiquetado adecuado, el empaquetado atractivo y la presentación de los productos para atraer a los clientes. También se les enseñará a brindar un servicio al cliente de calidad, asesorando a los clientes sobre los diferentes productos de charcutería, recomendando combinaciones y ofreciendo información sobre los procesos de elaboración.`,
    imagen: 'https://i.imgur.com/FlhHeEY.png',
  },
  {
    titulo: 'Certificado en Mecánica de Motos',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos teóricos de la mecánica de motos, incluyendo los sistemas y componentes clave de una motocicleta, el funcionamiento de los motores de combustión interna, los sistemas de transmisión, los sistemas de frenos, la suspensión y otros sistemas esenciales.

Los participantes adquirirán habilidades prácticas en la identificación y solución de problemas comunes en las motocicletas, así como en el mantenimiento preventivo y correctivo. Aprenderán a utilizar herramientas y equipos específicos de la mecánica de motos, y se les enseñará a realizar tareas como ajustar y reemplazar piezas, cambiar aceite y filtros, ajustar la cadena de transmisión, ajustar las válvulas, limpiar y ajustar los carburadores, entre otras.`,
    imagen: 'https://i.imgur.com/pDGqrYo.png',
  },
  {
    titulo: 'Certificado de Reparación de Aires Acondicionados Split',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos de los sistemas de aire acondicionado split, incluyendo los componentes principales como el compresor, el evaporador, el condensador y las unidades de ventilación. Se les enseñará sobre los principios de refrigeración y los ciclos de funcionamiento de estos sistemas.

Los participantes adquirirán habilidades prácticas en la reparación adecuada de los equipos split, incluyendo la selección de la ubicación adecuada, el montaje de las unidades interiores y exteriores, la conexión de las tuberías, la carga de refrigerante y la realización de pruebas de funcionamiento.`,
    imagen: 'https://i.imgur.com/09RHNsT.jpeg',
  },
  {
    titulo: 'Certificación Reparación de lavadoras residenciales',
    descripcion: `Durante el curso, los estudiantes aprenderán los principios básicos de funcionamiento de las lavadoras, incluyendo los diferentes componentes y sistemas que las componen, como el motor, la transmisión, la bomba de agua, los sensores y los controles electrónicos.

Los participantes adquirirán habilidades prácticas en la identificación y solución de problemas comunes en las lavadoras, como fugas de agua, problemas de drenaje, fallas en el sistema de agitación o centrifugado, y problemas eléctricos. Aprenderán a utilizar herramientas y equipos adecuados para desmontar, reparar y volver a ensamblar las lavadoras de manera segura y eficiente.`,
    imagen: 'https://i.imgur.com/2t7p9Z4.jpeg',
  },
  {
    titulo: 'Certificado de Instalacion de Aires acondicionados split',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos de los sistemas de aire acondicionado split, incluyendo los componentes principales como la unidad interior, la unidad exterior, las tuberías de refrigerante, los cables eléctricos y los controles.

Los participantes adquirirán habilidades prácticas en la planificación y diseño de la instalación de aires acondicionados split, incluyendo la selección de la ubicación adecuada para la unidad interior y exterior, la instalación de soportes y soportes de pared, y la correcta conexión de las tuberías de refrigerante y los cables eléctricos.`,
    imagen: 'https://i.imgur.com/JLTudJc.png',
  },
  {
    titulo: 'Certificación de Reparación de Neveras Residenciales',
    descripcion: `Durante el curso, los estudiantes aprenderán los principios básicos de funcionamiento de las neveras, incluyendo los diferentes componentes y sistemas que las componen, como el compresor, el condensador, el evaporador, el sistema de refrigeración y los controles electrónicos.

Los participantes adquirirán habilidades prácticas en la identificación y solución de problemas comunes en las neveras, como la falta de enfriamiento, fugas de refrigerante, problemas de descongelamiento, fallas en los ventiladores o en los controles de temperatura. Aprenderán a utilizar herramientas y equipos adecuados para desmontar, reparar y volver a ensamblar las neveras de manera segura y eficiente.`,
    imagen: 'https://i.imgur.com/tLAI4WF.jpeg',
  },
  {
    titulo: 'Certificado de Mantenimiento de Pc',
    descripcion: `Durante el curso, los estudiantes aprenderán los fundamentos de las computadoras, incluyendo los componentes principales como la placa madre, la unidad de procesamiento central (CPU), la memoria RAM, el disco duro, la tarjeta gráfica y otros periféricos.

Los participantes adquirirán habilidades prácticas en la instalación y actualización de hardware de PC, como la instalación de tarjetas de expansión, la conexión de cables y la configuración de dispositivos periféricos. Aprenderán a identificar y solucionar problemas comunes relacionados con el hardware, como problemas de inicio, errores de memoria y fallas en los componentes.`,
    imagen: 'https://i.imgur.com/Os71j1o.jpeg',
  },
  {
    titulo: 'Certificación de elaboración y venta de charcutería',
    descripcion: `El curso de Certificación de Elaboración y Venta de Charcutería es un programa especializado diseñado para aquellos interesados en aprender las técnicas y habilidades necesarias para producir y vender una amplia variedad de productos de charcutería artesanal.

Además de la elaboración de los productos, el curso también abordará aspectos clave de la venta y comercialización de la charcutería. Los participantes aprenderán sobre el etiquetado adecuado, el empaquetado atractivo y la presentación de los productos para atraer a los clientes. También se les enseñará a brindar un servicio al cliente de calidad, asesorando a los clientes sobre los diferentes productos de charcutería, recomendando combinaciones y ofreciendo información sobre los procesos de elaboración.`,
    imagen: 'https://i.imgur.com/x4J9EkR.png',
  },
];

export default function CertificacionesPage() {
  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#042e47',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <Navbar />
      
      <main>
        <CertificacionesHero />

        {/* Lista de Certificaciones */}
        <section id="certificaciones" className="py-16">
          <div className="container mx-auto px-4">
            {certificaciones.map((cert, index) => (
              <motion.div
                key={cert.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 items-center bg-white p-8 rounded-lg shadow-lg`}
              >
                <div className="w-full lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={cert.imagen}
                    alt={cert.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {cert.titulo}
                  </h2>
                  <div className="prose prose-lg">
                    {cert.descripcion.split('\n\n').map((parrafo, i) => (
                      <p key={i} className="text-gray-600 mb-4">
                        {parrafo}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sección de Próximos Cursos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Descubre la variedad de Cursos de Profesionalización que tendremos para ti próximamente
              </h2>
              <Link 
                href="/certificaciones/proximos"
                className="inline-block bg-[#042e47] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Próximamente
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 
 
 
 