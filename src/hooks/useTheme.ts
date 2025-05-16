"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
  // Start with a default theme but don't apply until we check the user's preference
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  
  // This effect runs once on component mount
  useEffect(() => {
    // Check for theme in localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial theme
    let initialTheme: Theme;
    if (storedTheme) {
      initialTheme = storedTheme;
    } else if (prefersDark) {
      initialTheme = 'dark';
    } else {
      initialTheme = 'light';
    }
    
    // Set theme state
    setTheme(initialTheme);
    
    // Apply theme to document
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Mark as mounted to avoid hydration mismatch
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update state
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update document class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { theme, toggleTheme, mounted };
}