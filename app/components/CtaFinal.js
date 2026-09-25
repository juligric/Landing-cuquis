"use client";

import { useLanguage } from "../context/LanguageContext";
import "./CtaFinal.css";

export default function CtaFinal() {
  const { t } = useLanguage();

  return (
    <section id="armamos" className="cta-final">
      <img className="cta-decor cta-decor-left" src="/images/cookie-caramelo.png" alt="" aria-hidden="true" />
      <img className="cta-decor cta-decor-right" src="/images/cookie-red-velvet.png" alt="" aria-hidden="true" />

      <div className="cta-final-inner">
        <h2 className="cta-final-title">{t.ctaFinal.title}</h2>

        <div className="cta-final-actions">
          <a
            className="btn btn-dark"
            href="https://wa.me/5491156433282"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.ctaFinal.whatsapp}
          </a>
          <a
            className="btn btn-dark"
            href="https://instagram.com/juli_gric"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.ctaFinal.instagram}
          </a>
          <a className="btn btn-dark" href="#hero">
            {t.ctaFinal.online}
          </a>
        </div>
      </div>
    </section>
  );
}
