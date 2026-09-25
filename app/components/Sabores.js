"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Sabores.css";

export default function Sabores() {
  const { t } = useLanguage();

  return (
    <section id="sabores" className="sabores">
      <div className="sabores-inner">
        <div className="sabores-header">
          <h2 className="sabores-title">{t.sabores.title}</h2>
          <p className="sabores-subtitle">{t.sabores.subtitle}</p>
        </div>

        <div className="sabores-grid">
          {t.sabores.flavors.map((flavor) => (
            <div className="sabor-card" key={flavor.img}>
              <img className="sabor-photo" src={`/images/${flavor.img}`} alt={flavor.title} loading="lazy" />
              <h3 className="sabor-title">{flavor.title}</h3>
              <p className="sabor-desc">{flavor.desc}</p>
            </div>
          ))}

          <a
            className="sabor-card sabor-card-cta"
            href="https://wa.me/5491156433282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="sabor-cta-title">{t.sabores.ctaTitle}</h3>
            <p className="sabor-cta-desc">{t.sabores.ctaDesc}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
