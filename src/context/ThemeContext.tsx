import React, { createContext, useState } from 'react';
import { darkTheme, lightTheme } from '../themes/light';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => setTheme(prev => (prev.mode === 'light' ? darkTheme : lightTheme));
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};