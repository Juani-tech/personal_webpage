"use client";

"use client";

import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b" style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-secondary)'
      }}>
      <style jsx>{`
        .dark nav {
          background-color: rgba(15, 23, 42, 0.8);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Juani Perez Di Chiazza
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
              <Github size={20} />
            </a>
            <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
              <Linkedin size={20} />
            </a>
            <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
              <Mail size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-primary)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors z-10"
              style={{
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-primary)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 z-10 transition-colors hover:opacity-80"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-4 pt-4" style={{ borderTop: '1px solid var(--border-secondary)' }}>
                <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
                  <Github size={20} />
                </a>
                <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}