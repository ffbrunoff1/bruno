import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-brand-light-gray">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-brand-dark">
            Vamos Conversar sobre seu Projeto
          </h2>
          <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
            Preencha o formulário ou entre em contato pelos nossos canais.
            Estamos prontos para transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-brand-white p-8 rounded-lg shadow-strong space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-brand-gray"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-brand-gray"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brand-gray"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin h-5 w-5" />
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-brand-dark">
                  Telefone
                </h3>
                <a
                  href="tel:+5544991040774"
                  className="text-brand-gray hover:text-brand-blue transition"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-brand-dark">
                  E-mail
                </h3>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-brand-gray hover:text-brand-blue transition"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-brand-dark">
                  Endereço
                </h3>
                <p className="text-brand-gray">
                  Padre Lebret, 801, G05 Bloco 03
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
