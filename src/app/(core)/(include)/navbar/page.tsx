"use client";

import React from 'react';
import Header from './Header';

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Content for testing the navbar */}
      <main className="container mx-auto px-4 py-20">
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Hello, World!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">This is the home section with dark mode support.</p>
        </section>
        
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">This is the about section with dark mode support.</p>
        </section>
        
        <section id="skills" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Skills Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">This is the skills section with dark mode support.</p>
        </section>
        
        <section id="projects" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Projects Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">This is the projects section with dark mode support.</p>
        </section>
        
        <section id="contact" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">This is the contact section with dark mode support.</p>
        </section>
      </main>
    </div>
  );
}
