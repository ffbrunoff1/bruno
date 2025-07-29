import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: 'Precisão e Qualidade',
      description:
        'Compromisso com os mais altos padrões de qualidade em cada detalhe do projeto, do início à entrega.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: 'Segurança em Primeiro Lugar',
      description:
        'Implementamos rigorosos protocolos de segurança para garantir um ambiente de trabalho seguro para todos.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-blue" />,
      title: 'Soluções Inovadoras',
      description:
        'Utilizamos tecnologias e métodos construtivos de ponta para otimizar prazos e custos.',
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: 'Foco no Cliente',
      description:
        'Trabalhamos em estreita colaboração com nossos clientes para garantir que suas expectativas sejam superadas.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="sobre" className="section-padding bg-brand-light-gray">
      <div className="container-custom">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl text-brand-dark">
              Nossa Missão é Construir com Confiança
            </h2>
            <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
              Na Bruno Construções, acreditamos que cada projeto é uma parceria.
              Combinamos experiência, paixão e inovação para entregar resultados
              que não apenas atendem, mas definem novos padrões de excelência no
              setor da construção.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-brand-white p-6 rounded-lg shadow-subtle text-center flex flex-col items-center"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-gray flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
