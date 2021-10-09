import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LanguageContext } from './contexts/LanguageContext';
import { LanguageMenu } from './components/LanguageMenu';

function App() {
  const [language, setLanguage] = React.useState<string>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <h2>current language: {language}</h2>
      <LanguageMenu />
    </LanguageContext.Provider>
  );
}

export default App;
