import { motion } from 'framer-motion';
import { ChevronDown, Download, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Android • Java • IA • Sistemas Web';
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    setParticlesVisible(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#0A1128] to-[#050505]">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(#1261A0 1px, transparent 1px), linear-gradient(90deg, #1261A0 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated Particles */}
        {particlesVisible && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.5, 1, 0.5],
                  x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                  y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-2 h-2 bg-[#1261A0] rounded-full blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </>
        )}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1261A0]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1261A0]/10 border border-[#1261A0]/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-[#1261A0]" />
              <span className="text-sm text-[#E2E8F0]">Disponível para novos projetos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="block text-[#E2E8F0] mb-2">Olá, eu sou</span>
              <span className="block bg-gradient-to-r from-white via-[#E2E8F0] to-[#1261A0] bg-clip-text text-transparent">
                Abmael Ribeiro
              </span>
              <span className="block text-[#E2E8F0] mt-2">Desenvolvedor & Criador de</span>
              <span className="block bg-gradient-to-r from-[#1261A0] to-[#E2E8F0] bg-clip-text text-transparent">
                Soluções Inteligentes
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 h-8 flex items-center justify-center lg:justify-start"
            >
              <span className="text-[#1261A0] border-r-2 border-[#1261A0] pr-1 animate-pulse">
                {typedText}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#E2E8F0]/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transformando ideias em experiências digitais incríveis. Especialista em
              desenvolvimento mobile, sistemas web e inteligência artificial.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 rounded-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Ver Projetos
                  <ChevronDown size={20} className="group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1261A0] to-[#0A1128] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/5 border border-[#1261A0]/30 rounded-lg overflow-hidden backdrop-blur-sm hover:border-[#1261A0] transition-colors"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Baixar CV
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Avatar/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full max-w-md lg:max-w-lg"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-[#1261A0]/30 rounded-full"
                style={{ padding: '20px' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-[#1261A0]/20 rounded-full border-dashed"
                style={{ padding: '40px' }}
              />

              {/* Avatar Container */}
              <div className="relative aspect-square rounded-full bg-gradient-to-br from-[#1261A0]/20 to-[#0A1128] border border-[#1261A0]/30 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1261A0]/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-[#1261A0] to-[#0A1128] rounded-full flex items-center justify-center">
                    <div className="text-8xl">💻</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-[#1261A0]/90 backdrop-blur-sm rounded-lg border border-[#1261A0]/50 shadow-lg shadow-[#1261A0]/50"
              >
                <span className="text-sm">Android Dev</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#1261A0]/90 backdrop-blur-sm rounded-lg border border-[#1261A0]/50 shadow-lg shadow-[#1261A0]/50"
              >
                <span className="text-sm">Full Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#1261A0]"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
