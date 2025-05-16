import { motion } from 'framer-motion';
import { useState } from 'react';
import NavLinks from './NavLinks';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '-100%' }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 z-50 shadow-lg"
      aria-hidden={!isOpen}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} aria-label="Close menu">
          <FaTimes className="text-2xl text-gray-800 dark:text-white" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full">
        <NavLinks />
      </nav>
    </motion.div>
  );
};

export default MobileMenu;