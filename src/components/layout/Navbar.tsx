"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes, FaNewspaper, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Carreras', path: '/carreras' },
  { name: 'Certificaciones', path: '/certificaciones' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Eventos', path: '/eventos' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú móvil cuando cambia el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 shadow-md py-2' : 'bg-transparent py-2 sm:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', overflow: 'visible' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {/* Logo */}
            <div className="h-12 sm:h-16 flex items-center">
              <Image
                src="/images/logo.png"
                alt="IUTCM Logo"
                width={120}
                height={60}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link 
                href={item.path}
                className={`text-sm lg:text-base font-medium ${
                  pathname === item.path ? 'text-secondary font-bold' : 
                  isScrolled ? 'text-white hover:text-accent' : 'text-white hover:text-secondary'
                } transition-colors`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a 
              href="https://www.iutcm.online/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-secondary text-primary px-3 py-1.5 rounded-md text-sm lg:text-base font-medium hover:bg-accent transition-colors"
            >
              <FaGraduationCap className="mr-1" /> Campus Online
            </a>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-primary shadow-lg w-full absolute left-0 right-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-white hover:text-accent py-3 px-2 transition-colors text-lg border-b border-gray-700 ${pathname === item.path ? 'text-secondary font-bold' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.iutcm.online/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-secondary text-primary py-3 px-4 rounded-md text-lg font-medium hover:bg-accent transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                <FaGraduationCap className="mr-2" /> Campus Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
