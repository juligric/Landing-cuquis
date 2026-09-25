"use client";

import { createContext, useContext, useState } from "react";
import { dictionary } from "../i18n/dictionary";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = () => setLang((current) => (current === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
