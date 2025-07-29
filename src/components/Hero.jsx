import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-hero.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative bg-brand-white pt-20 md:pt-24 min-h-screen flex items-center"
    >
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-4"
              variants={itemVariants}
            >
              Construindo o Futuro com{' '}
              <span className="text-brand-blue">Excelência</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-brand-gray mb-8"
              variants={itemVariants}
            >
              Qualidade e confiabilidade em cada projeto. Transformamos sua
              visão em realidade com soluções inovadoras e seguras.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contato"
                className="btn btn-primary inline-flex items-center group"
              >
                Entre em Contato
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={heroImageUrl}
              alt="Equipe de construção trabalhando em um projeto moderno"
              className="w-full h-auto rounded-xl shadow-strong object-cover aspect-video"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-blue/20 rounded-xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
