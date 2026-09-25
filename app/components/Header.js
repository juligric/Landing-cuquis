"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="header-logo">
          Cuquis
        </a>

        <div className="header-right">
          <nav className="header-nav">
            <a href="#sabores">{t.header.sabores}</a>
            <a href="#cajas">{t.header.cajas}</a>
            <a href="#nosotras">{t.header.nosotras}</a>
            <a href="https://wa.me/5491156433282" target="_blank" rel="noopener noreferrer">
              {t.header.pedir}
            </a>
          </nav>

          <button type="button" className="header-lang" onClick={toggleLang}>
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            className="btn btn-primary header-cta"
            href="https://wa.me/5491156433282"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
