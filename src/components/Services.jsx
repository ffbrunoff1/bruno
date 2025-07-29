import React from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  HardHat,
  ClipboardList,
  DraftingCompass,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="h-10 w-10 text-brand-blue" />,
      title: 'Construção Residencial e Comercial',
      description:
        'Executamos projetos de construção do zero, desde residências unifamiliares a complexos comerciais, garantindo estrutura sólida e acabamento impecável.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-brand-blue" />,
      title: 'Reformas e Ampliações',
      description:
        'Modernizamos e expandimos espaços existentes, otimizando a funcionalidade e valorizando seu imóvel com soluções criativas e eficientes.',
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-brand-blue" />,
      title: 'Gestão Completa de Obras',
      description:
        'Oferecemos gerenciamento total do seu projeto, cuidando do planejamento, cronograma, orçamento e da coordenação de todas as equipes envolvidas.',
    },
    {
      icon: <DraftingCompass className="h-10 w-10 text-brand-blue" />,
      title: 'Projetos e Planejamento',
      description:
        'Desenvolvemos projetos arquitetônicos e de engenharia detalhados, assegurando a viabilidade técnica e a conformidade com as normas vigentes.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="servicos" className="section-padding bg-brand-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-brand-dark">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender a todas as
            fases do seu projeto de construção com a máxima competência.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-brand-light-gray p-8 rounded-xl shadow-subtle flex flex-col md:flex-row items-start gap-6"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-shrink-0 bg-brand-white p-4 rounded-lg shadow-sm">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
