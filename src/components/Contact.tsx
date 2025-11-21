import { CheckCircle2, Github, Linkedin, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+55 (11) 1194720-4991',
      href: 'https://wa.me/5511947204991',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'abmaelribeiro@outlook.com',
      href: 'mailto:abmaelribeiro@outlook.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Taboão da Serra, SP',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AbmaelRibeiro',
      color: 'hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abmael-ribeiro',
      color: 'hover:text-[#0077B5]',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/5511947204991',
      color: 'hover:text-[#25D366]',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A1128] to-[#050505]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#1261A0 1px, transparent 1px), linear-gradient(90deg, #1261A0 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1261A0]/10 border border-[#1261A0]/30 rounded-full text-sm text-[#1261A0] mb-4">
            Contato
          </span>
          <h2 className="mb-6">
            <span className="bg-gradient-to-r from-white to-[#1261A0] bg-clip-text text-transparent">
              Vamos Trabalhar Juntos
            </span>
          </h2>
          <p className="text-[#E2E8F0]/70 max-w-2xl mx-auto">
            Disponível para novos projetos e oportunidades. Entre em contato para conversarmos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-[#E2E8F0]">Disponível para novos projetos</span>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-xl backdrop-blur-sm hover:border-[#1261A0]/60 transition-all"
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#E2E8F0]/70 text-sm mb-1">{info.label}</div>
                        <div className="text-white group-hover:text-[#1261A0] transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-xl backdrop-blur-sm">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#E2E8F0]/70 text-sm mb-1">{info.label}</div>
                        <div className="text-white">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#1261A0]/30">
              <h3 className="text-white mb-6">Conecte-se comigo</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-gradient-to-br from-[#1261A0]/20 to-transparent border border-[#1261A0]/30 rounded-xl flex items-center justify-center text-[#E2E8F0] ${social.color} transition-all hover:border-[#1261A0]/60`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-2xl backdrop-blur-xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1261A0] to-transparent opacity-20 blur-xl" />

              <div className="relative">
                <h3 className="text-white mb-6">Envie uma mensagem</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6"
                    >
                      <CheckCircle2 size={40} className="text-white" />
                    </motion.div>
                    <h4 className="text-white mb-2">Mensagem enviada!</h4>
                    <p className="text-[#E2E8F0]/70">
                      Obrigado pelo contato. Responderei em breve!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[#E2E8F0] mb-2 text-sm">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1128] border border-[#1261A0]/30 rounded-lg text-white placeholder-[#E2E8F0]/50 focus:outline-none focus:border-[#1261A0] focus:ring-2 focus:ring-[#1261A0]/20 transition-all"
                        placeholder="Seu nome"
                        aria-label="Nome completo"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#E2E8F0] mb-2 text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1128] border border-[#1261A0]/30 rounded-lg text-white placeholder-[#E2E8F0]/50 focus:outline-none focus:border-[#1261A0] focus:ring-2 focus:ring-[#1261A0]/20 transition-all"
                        placeholder="seu@email.com"
                        aria-label="Endereço de email"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#E2E8F0] mb-2 text-sm">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1128] border border-[#1261A0]/30 rounded-lg text-white placeholder-[#E2E8F0]/50 focus:outline-none focus:border-[#1261A0] focus:ring-2 focus:ring-[#1261A0]/20 transition-all resize-none"
                        placeholder="Conte-me sobre seu projeto..."
                        aria-label="Mensagem"
                        aria-required="true"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 rounded-lg group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#1261A0] focus:ring-offset-2 focus:ring-offset-[#0A1128]"
                      aria-label="Enviar mensagem"
                    >
                      <span className="relative z-10">Enviar Mensagem</span>
                      <Send
                        size={20}
                        className="relative z-10 group-hover:translate-x-1 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1261A0] to-[#0A1128] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
