"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">Cuquis</p>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-col">
          <p className="footer-label">{t.footer.whereLabel}</p>
          {t.footer.where.map((line) => (
            <p className="footer-text" key={line}>
              {line}
            </p>
          ))}
        </div>

        <div className="footer-col">
          <p className="footer-label">{t.footer.contactLabel}</p>
          {t.footer.contact.map((line) => (
            <p className="footer-text" key={line}>
              {line}
            </p>
          ))}
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-copy">{t.footer.copy}</p>
    </footer>
  );
}
