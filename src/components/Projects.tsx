import {
  Brain,
  Check,
  ChevronRight,
  DownloadCloud,
  ExternalLink,
  Github,
  Globe,
  Lightbulb,
  Smartphone,
  TrendingUp,
  Wrench,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

// Types moved to module scope so components can be declared outside render
type ProjectStatus = 'producao' | 'desenvolvimento' | 'conceitual';

interface Project {
  id: number;
  title: string;
  category: 'ia' | 'mobile' | 'web';
  description: string;
  image: string;
  technologies: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  status?: ProjectStatus;
  detailedDescription?: string;
  repoUrl?: string;
  zipUrl?: string;
}

// StatusBadge declared at module scope to avoid creating components during render
const StatusBadge = ({ status }: { status: ProjectStatus | undefined }) => {
  const statusConfig = {
    producao: {
      label: 'Em Produção',
      icon: Check,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
    },
    desenvolvimento: {
      label: 'Em Desenvolvimento',
      icon: Wrench,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
    },
    conceitual: {
      label: 'Conceitual',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
    },
  } as const;

  const key = status ?? 'producao';
  const config = statusConfig[key];
  const IconComponent = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 ${config.bgColor} border ${config.borderColor} rounded-full`}
    >
      <IconComponent size={12} className={config.textColor} />
      <span className={`text-xs ${config.textColor}`}>{config.label}</span>
    </div>
  );
};

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
    { id: 'ia', label: 'IA' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'IA Recepcionista Atma Soma',
      category: 'ia',
      status: 'producao',
      description:
        'Sistema inteligente de atendimento automatizado com processamento de linguagem natural e integração WhatsApp.',
      detailedDescription:
        'Sistema inteligente de atendimento automatizado com processamento de linguagem natural, integração com API do WhatsApp e painel de administração para monitoramento e analytics.',
      image:
        'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MzYyMDI5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Python', 'Django', 'IA', 'WhatsApp API', 'NLP'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      repoUrl: 'https://github.com/AbmaelRibeiro/ia-recepcionista-atma',
      zipUrl: '/downloads/ia-recepcionista-atma.zip',
    },
    {
      id: 2,
      title: 'MoneyCare Fintech',
      category: 'mobile',
      status: 'producao',
      description:
        'Aplicativo mobile completo de gestão financeira com dashboard interativo, controle de gastos e análises inteligentes.',
      detailedDescription:
        'Aplicativo mobile com autenticação segura, integrações bancárias, dashboards personalizáveis e recomendações financeiras baseadas em comportamento do usuário.',
      image:
        'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzY0NTE3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material Design'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      repoUrl: 'https://github.com/AbmaelRibeiro/moneycare-fintech',
      zipUrl: '/downloads/moneycare-fintech.zip',
    },
    {
      id: 3,
      title: 'Sistema de Questionário Atma',
      category: 'web',
      status: 'producao',
      description:
        'Plataforma web para criação e gerenciamento de questionários com análise de dados em tempo real.',
      detailedDescription:
        'Plataforma web que permite criar questionários customizados, coletar respostas em tempo real e gerar relatórios analíticos com visualização de métricas e exportação de dados.',
      image:
        'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM2NDMxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Java', 'JSP', 'Servlets', 'Oracle', 'Bootstrap'],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      repoUrl: 'https://github.com/AbmaelRibeiro/sistema-questionario-atma',
      zipUrl: '/downloads/sistema-questionario-atma.zip',
    },
    {
      id: 4,
      title: 'Taboão Flix',
      category: 'web',
      status: 'desenvolvimento',
      description:
        'Aplicativo web de streaming IPTV com interface moderna e sistema de gerenciamento de conteúdo.',
      detailedDescription:
        'Aplicação de streaming com catálogo, integração com players, gerenciamento de assinaturas e painel de conteúdo para administradores.',
      image:
        'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM2MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC'],
      icon: Globe,
      color: 'from-red-500 to-orange-500',
      repoUrl: 'https://github.com/AbmaelRibeiro/taboao-flix',
      zipUrl: '/downloads/taboao-flix.zip',
    },
    {
      id: 5,
      title: 'Adega Tô em Casa',
      category: 'mobile',
      status: 'producao',
      description:
        'E-commerce mobile para delivery de vinhos e bebidas com sistema de recomendação personalizado.',
      detailedDescription:
        'Aplicativo de e-commerce com catálogo dinâmico, carrinho, checkout integrado e sistema de recomendação por perfil do usuário.',
      image:
        'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM2MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Kotlin', 'Android', 'REST API', 'SQLite'],
      icon: Smartphone,
      color: 'from-amber-500 to-yellow-500',
      repoUrl: 'https://github.com/AbmaelRibeiro/adega-to-em-casa',
      zipUrl: '/downloads/adega-to-em-casa.zip',
    },
    {
      id: 6,
      title: 'Apps Android Nativos',
      category: 'mobile',
      status: 'conceitual',
      description:
        'Diversos aplicativos Android desenvolvidos com Kotlin e Jetpack Compose, focados em performance e UX.',
      detailedDescription:
        'Coleção de apps nativos demonstrando padrões de arquitetura, otimização de performance e boas práticas de UX para Android.',
      image:
        'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM2MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Coroutines'],
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      zipUrl: '/downloads/apps-android-nativos.zip',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A1128] to-[#050505]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#1261A0 1px, transparent 1px), linear-gradient(90deg, #1261A0 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#1261A0]/10 border border-[#1261A0]/30 rounded-full text-sm text-[#1261A0] mb-4">
            Portfólio
          </span>
          <h2 className="mb-6">
            <span className="bg-gradient-to-r from-white to-[#1261A0] bg-clip-text text-transparent">
              Projetos em Destaque
            </span>
          </h2>
          <p className="text-[#E2E8F0]/70 max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos em desenvolvimento mobile, web e inteligência
            artificial
          </p>
        </motion.div>

        {/* Modal: project details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                style={{ width: 'min(90vw, 560px)', height: 'min(90vw, 560px)' }}
                className="w-full mx-4 bg-[#0A1128] border border-[#1261A0]/30 rounded-2xl p-6 relative shadow-lg flex flex-col"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                {/* close button: visible on mobile as X (md:hidden) */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fechar"
                  className="absolute top-4 right-4 p-2 rounded-md bg-white/5 hover:bg-white/10 md:hidden"
                >
                  <X size={18} className="text-[#E2E8F0]" />
                </button>

                <div className="flex flex-col overflow-auto max-h-[80vh]">
                  {/* Status badge fixado no canto superior direito do modal */}
                  <div className="absolute top-4 right-4">
                    <StatusBadge status={selectedProject.status} />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="text-white text-lg font-semibold break-words">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-[#E2E8F0]/70 mb-4 text-sm sm:text-base">
                    {selectedProject.detailedDescription ?? selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#1261A0]/20 border border-[#1261A0]/30 rounded-full text-xs sm:text-sm text-[#1261A0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 mt-4">
                    {selectedProject.repoUrl && (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-[#1261A0]/30 rounded-lg hover:border-[#1261A0]"
                      >
                        <Github size={16} />
                        <span>Ver repositório</span>
                      </a>
                    )}

                    {selectedProject.zipUrl && (
                      <a
                        href={selectedProject.zipUrl}
                        download
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 rounded-lg text-white"
                      >
                        <DownloadCloud size={16} />
                        <span>Baixar arquivos (.zip)</span>
                      </a>
                    )}

                    {/* Fechar button ao lado do download (esconde em mobile) */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-[#1261A0]/30 rounded-lg hover:border-[#1261A0]"
                    >
                      <span>Fechar</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 text-white shadow-lg shadow-[#1261A0]/50'
                  : 'bg-white/5 text-[#E2E8F0] border border-[#1261A0]/30 hover:border-[#1261A0]/60'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#1261A0]/60 transition-all">
                  {/* Hover Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1261A0] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1128]/90 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`absolute top-4 right-4 z-20 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <project.icon size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-white flex-1 group-hover:text-[#1261A0] transition-colors">
                        {project.title}
                      </h3>
                      <StatusBadge status={project.status} />
                    </div>
                    <p className="text-[#E2E8F0]/70 text-sm mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#1261A0]/20 border border-[#1261A0]/30 rounded-full text-xs text-[#1261A0]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-[#1261A0]/20 border border-[#1261A0]/30 rounded-full text-xs text-[#1261A0]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 rounded-lg group/btn"
                      >
                        <span className="text-sm">Ver Detalhes</span>
                        <ChevronRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-white/5 border border-[#1261A0]/30 rounded-lg hover:border-[#1261A0] transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>

                  {/* 3D Effect Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(18,97,160,0.3)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/AbmaelRibeiro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-[#1261A0]/30 rounded-lg hover:border-[#1261A0] transition-all group"
          >
            <Github size={20} />
            <span>Ver mais no GitHub</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
