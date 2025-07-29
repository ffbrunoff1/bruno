import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753792072243_0.png';

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="mb-4">
              <img
                src={logoUrl}
                alt="Logo NTC Brasil"
                className="h-14 w-auto object-contain bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-brand-gray mt-2 max-w-xs">
              Construindo o futuro com excelência e confiabilidade.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold text-brand-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-gray hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold text-brand-white mb-4">
              Contato
            </h3>
            <ul className="space-y-2 text-brand-gray">
              <li>+55 44 99104-0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>Padre Lebret, 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-brand-gray text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bruno Construções. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
