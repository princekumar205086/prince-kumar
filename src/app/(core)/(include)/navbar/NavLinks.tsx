import React from 'react';
import Link from 'next/link';

const NavLinks: React.FC = () => {
    return (
        <nav className="flex space-x-4">
            <Link href="#home" aria-label="Home" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Home
            </Link>
            <Link href="#about" aria-label="About" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                About
            </Link>
            <Link href="#skills" aria-label="Skills" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Skills
            </Link>
            <Link href="#projects" aria-label="Projects" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Projects
            </Link>
            <Link href="#contact" aria-label="Contact" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Contact
            </Link>
        </nav>
    );
};

export default NavLinks;