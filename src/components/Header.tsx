import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1128]/80 backdrop-blur-xl border-b border-[#1261A0]/20 shadow-lg shadow-[#1261A0]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="relative group">
            <span className="text-2xl tracking-tight">
              <span className="text-white">Abmael</span>
              <span className="text-[#1261A0]">.</span>
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1261A0] to-[#0A1128] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative text-[#E2E8F0] hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1261A0] to-transparent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block relative px-6 py-2.5 bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 rounded-lg overflow-hidden group"
          >
            <span className="relative z-10">Vamos Conversar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1261A0] to-[#0A1128] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A1128]/95 backdrop-blur-xl border-t border-[#1261A0]/20"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#E2E8F0] hover:text-white py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-[#1261A0] to-[#1261A0]/80 rounded-lg text-center"
              >
                Vamos Conversar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
