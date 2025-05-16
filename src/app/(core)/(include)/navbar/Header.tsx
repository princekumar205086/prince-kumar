"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import useTheme from '@/hooks/useTheme';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event to add background blur
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Set up intersection observer to detect active sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Section needs to be at least 60% visible
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection((entry.target as HTMLElement).id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all sections
    navLinks.forEach(({ href }) => {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  
  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Only show theme once mounted to avoid hydration mismatch
  const themeIcon = mounted ? (theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />) : null;

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-white dark:bg-slate-900'
      } transition-all duration-300`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center"
          >
            <Link 
              href="#home" 
              onClick={() => setActiveSection('home')}
              className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              PK
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                label={link.label} 
                isActive={activeSection === link.href.replace('#', '')}
                onClick={handleLinkClick} 
              />
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {themeIcon}
            </motion.button>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg md:hidden bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className={`block py-3 px-4 text-lg font-medium rounded-md transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Improved NavLink component with active state and animations
function NavLink({ 
  href, 
  label, 
  isActive, 
  onClick 
}: { 
  href: string; 
  label: string; 
  isActive: boolean;
  onClick: () => void 
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href={href} 
        className={`font-medium transition-colors relative ${
          isActive 
            ? 'text-blue-600 dark:text-blue-400' 
            : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
        onClick={onClick}
      >
        {label}
      </Link>
      
      {/* Animated underline */}
      <span 
        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`} 
      />
    </motion.div>
  );
}