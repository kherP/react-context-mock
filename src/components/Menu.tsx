import { FC, useContext } from "react";
import { LanguageContext, LanguageContextProps } from "../contexts/LanguageContext";
import { ThemeContext, ThemeContextProps } from "../contexts/ThemeContext";

const Menu: FC = () => {
  const { setLanguage }: LanguageContextProps = useContext(LanguageContext);
  const { setTheme }: ThemeContextProps = useContext(ThemeContext);

  return <div role="menu">
    <button role="button" onClick={() => setLanguage("en")}>English</button>
    <button role="button" onClick={() => setLanguage("sw")}>Swedish</button>
    <button role="button" onClick={() => setTheme("light")}>Light</button>
    <button role="button" onClick={() => setTheme("dark")}>Dark</button>
  </div>;
};

export { Menu };
