import React from "react";

export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: "",
  setTheme: () => {}
});

export { ThemeContext };
