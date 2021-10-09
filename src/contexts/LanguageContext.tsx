import React from "react";

export interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = React.createContext<LanguageContextProps>({
  language: "",
  setLanguage: () => {}
});

export { LanguageContext };
