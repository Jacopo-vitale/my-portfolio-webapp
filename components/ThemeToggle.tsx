import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent-dark transition-colors border border-slate-200 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <Sun className="w-5 h-5 absolute inset-0 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all duration-300" />
        <Moon className="w-5 h-5 absolute inset-0 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-300" />
      </div>
    </motion.button>
  );
};