import { motion } from 'framer-motion';
import { Cloud, Code2, Database, GitBranch, Palette, Zap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Back-end',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C#/.NET', level: 75 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      title: 'Mobile',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Kotlin', level: 90 },
        { name: 'Jetpack Compose', level: 85 },
        { name: 'Android SDK', level: 88 },
        { name: 'Flutter', level: 70 },
      ],
    },
    {
      title: 'Front-end',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript/TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 92 },
      ],
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Oracle', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 82 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: 'DevOps & Infra',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Cloud (AWS/Azure)', level: 65 },
      ],
    },
    {
      title: 'Outros',
      icon: GitBranch,
      color: 'from-yellow-500 to-amber-500',
      skills: [
        { name: 'REST APIs', level: 92 },
        { name: 'Django', level: 85 },
        { name: 'IA/ML Básico', level: 70 },
        { name: 'Metodologias Ágeis', level: 85 },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '🧠' },
    { name: 'Android Studio', icon: '📱' },
    { name: 'Git', icon: '🔀' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📮' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Jira', icon: '📊' },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A1128] to-[#050505]">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl" />
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
            Habilidades Técnicas
          </span>
          <h2 className="mb-6">
            <span className="bg-gradient-to-r from-white to-[#1261A0] bg-clip-text text-transparent">
              Tecnologias & Ferramentas
            </span>
          </h2>
          <p className="text-[#E2E8F0]/70 max-w-2xl mx-auto">
            Domínio em múltiplas tecnologias e frameworks modernos para desenvolvimento full stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-2xl backdrop-blur-sm hover:border-[#1261A0]/60 transition-all">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1261A0] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-white">{category.title}</h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#E2E8F0] text-sm">{skill.name}</span>
                          <span className="text-[#1261A0] text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#0A1128] rounded-full overflow-hidden border border-[#1261A0]/20">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-center mb-8">Ferramentas & Ambiente de Desenvolvimento</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative p-6 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-xl backdrop-blur-sm hover:border-[#1261A0]/60 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1261A0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative text-center">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="text-[#E2E8F0] text-xs">{tool.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Anos de Experiência', value: '5+', icon: '⏱️' },
            { label: 'Tecnologias Dominadas', value: '15+', icon: '💻' },
            { label: 'Projetos Concluídos', value: '20+', icon: '✅' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 bg-gradient-to-br from-[#1261A0]/10 to-transparent border border-[#1261A0]/30 rounded-2xl backdrop-blur-sm text-center group hover:border-[#1261A0]/60 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1261A0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl text-[#1261A0] mb-2">{stat.value}</div>
                <div className="text-[#E2E8F0]/70 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
