import { motion } from 'framer-motion';
import { Award, Code2, GraduationCap, Sparkles } from 'lucide-react';

export function About() {
  const timeline = [
    {
      year: '2019',
      title: 'Administração',
      institution: 'UNINOVE',
      icon: GraduationCap,
      description: 'Formação em Administração de Empresas',
    },
    {
      year: '2023',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'FIAP',
      icon: Code2,
      description: 'Especialização em desenvolvimento de software',
    },
    {
      year: '2024',
      title: 'IA Recepcionista Atma',
      institution: 'Projeto Destaque',
      icon: Sparkles,
      description: 'Sistema inteligente de atendimento automatizado',
    },
    {
      year: '2024',
      title: 'MoneyCare Fintech',
      institution: 'Aplicativo Mobile',
      icon: Award,
      description: 'Solução completa de gestão financeira',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A1128] to-[#050505]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1261A0]/10 border border-[#1261A0]/30 rounded-full text-sm text-[#1261A0] mb-4">
            Sobre Mim
          </span>
          <h2 className="mb-6">
            <span className="bg-gradient-to-r from-white to-[#1261A0] bg-clip-text text-transparent">
              Transformando Ideias em Realidade
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative p-8 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-2xl backdrop-blur-xl overflow-hidden">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-white/5" />

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1261A0] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1261A0] to-[#0A1128] rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-[#1261A0]/50 shadow-lg shadow-[#1261A0]/50">
                    <span className="text-5xl">👨‍💻</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2">Abmael Ribeiro</h3>
                    <p className="text-[#1261A0]">Desenvolvedor Full Stack & Mobile</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[#E2E8F0]/90">
                    Formado em <span className="text-[#1261A0]">Administração</span> pela UNINOVE e
                    estudante de
                    <span className="text-[#1261A0]">
                      {' '}
                      Análise e Desenvolvimento de Sistemas
                    </span>{' '}
                    pela FIAP, sou um desenvolvedor apaixonado por criar soluções inteligentes e
                    inovadoras.
                  </p>
                  <p className="text-[#E2E8F0]/90">
                    Especializado em{' '}
                    <span className="text-[#1261A0]">desenvolvimento mobile (Android)</span>,
                    <span className="text-[#1261A0]"> sistemas web</span> e{' '}
                    <span className="text-[#1261A0]">inteligência artificial</span>, já desenvolvi
                    projetos que vão desde apps nativos até sistemas corporativos complexos.
                  </p>
                  <p className="text-[#E2E8F0]/90">
                    Com domínio em{' '}
                    <span className="text-[#1261A0]">Java, Kotlin, Python, Django, React</span> e
                    diversas outras tecnologias, busco sempre entregar soluções que unem
                    <span className="text-[#1261A0]"> tecnologia de ponta</span>,{' '}
                    <span className="text-[#1261A0]">experiência do usuário</span> e
                    <span className="text-[#1261A0]"> resultados reais</span>.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#1261A0]/30">
                  <div className="text-center">
                    <div className="text-2xl text-[#1261A0] mb-1">15+</div>
                    <div className="text-sm text-[#E2E8F0]/70">Projetos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#1261A0] mb-1">5+</div>
                    <div className="text-sm text-[#E2E8F0]/70">Anos Exp.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#1261A0] mb-1">10+</div>
                    <div className="text-sm text-[#E2E8F0]/70">Tecnologias</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-white mb-8 flex items-center gap-3">
              <Sparkles className="text-[#1261A0]" size={24} />
              Jornada & Conquistas
            </h3>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="relative group"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1261A0] to-[#1261A0]/50 rounded-lg flex items-center justify-center border border-[#1261A0]/50 group-hover:shadow-lg group-hover:shadow-[#1261A0]/50 transition-shadow">
                      <item.icon size={20} className="text-white" />
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#1261A0]/50 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="inline-block px-3 py-1 bg-[#1261A0]/20 rounded-full text-sm text-[#1261A0] mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-white mb-1">{item.title}</h4>
                    <p className="text-[#1261A0] text-sm mb-2">{item.institution}</p>
                    <p className="text-[#E2E8F0]/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Mobile', tech: 'Android • Kotlin', icon: '📱' },
            { label: 'Backend', tech: 'Java • Python • C#', icon: '⚙️' },
            { label: 'Frontend', tech: 'React • Tailwind', icon: '🎨' },
            { label: 'Database', tech: 'Oracle • PostgreSQL', icon: '🗄️' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative group p-6 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-xl backdrop-blur-sm hover:border-[#1261A0]/60 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1261A0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-white mb-1">{item.label}</div>
                <div className="text-[#E2E8F0]/70 text-sm">{item.tech}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
