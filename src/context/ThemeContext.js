// src/context/ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState('DARK');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
