import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753792072243_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-brand-white shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <a href="#inicio" aria-label="Página inicial da Bruno Construções">
          <img
            src={logoUrl}
            alt="Logo NTC Brasil"
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-dark font-medium hover:text-brand-blue transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-dark" />
            ) : (
              <Menu className="h-6 w-6 text-brand-dark" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-brand-white pb-4"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-dark font-medium text-lg hover:text-brand-blue transition-colors duration-300"
                variants={menuItemVariants}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
