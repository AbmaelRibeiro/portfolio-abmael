import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-[#1261A0]/20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-[#050505]">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1261A0]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#E2E8F0]/70">
              <span>© 2025 Abmael Ribeiro</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Feito com <Heart size={14} className="text-[#1261A0] fill-current" />
              </span>
            </div>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato'].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-[#E2E8F0]/70 hover:text-[#1261A0] transition-colors text-sm"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-br from-[#1261A0]/20 to-transparent border border-[#1261A0]/30 rounded-xl flex items-center justify-center text-[#1261A0] hover:border-[#1261A0]/60 transition-all group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-[#1261A0]/20 text-center text-[#E2E8F0]/50 text-sm"
        >
          <p>Desenvolvedor Full Stack • Mobile • IA • Sistemas Web</p>
        </motion.div>
      </div>
    </footer>
  );
}
