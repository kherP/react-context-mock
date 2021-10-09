import React from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import { Menu } from './components/Menu';
import { ThemeContext } from './contexts/ThemeContext';

import './App.css';

function App() {
  const [theme, setTheme] = React.useState<string>("light");
  const [language, setLanguage] = React.useState<string>("en");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <h2>current language: {language}</h2>
        <h3>current theme: {theme}</h3>
        <Menu />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
