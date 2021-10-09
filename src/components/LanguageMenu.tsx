import { FC, useContext } from "react";
import { LanguageContext, LanguageContextProps } from "../contexts/LanguageContext";

const LanguageMenu: FC = () => {
  const { setLanguage }: LanguageContextProps = useContext(LanguageContext);
  return <div role="menu">
    <button role="button" onClick={() => setLanguage("en")}>English</button>
    <button role="button" onClick={() => setLanguage("sw")}>Swedish</button>
    <button role="button" onClick={() => setLanguage("jp")}>Japanese</button>
  </div>;
};

export { LanguageMenu };
