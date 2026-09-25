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
            <a
              className="header-nav-pedir"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <svg className="header-cta-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.33.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.34z" />
              <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.95 9.95 0 0012.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2zm0 18.13c-1.7 0-3.28-.5-4.61-1.35l-.33-.2-3 .79.8-2.93-.21-.3A8.1 8.1 0 013.92 12c0-4.47 3.63-8.1 8.1-8.1 4.47 0 8.1 3.63 8.1 8.1 0 4.47-3.63 8.13-8.1 8.13z" />
            </svg>
            <span className="header-cta-text">{t.header.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
