"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Cajas.css";

export default function Cajas() {
  const { t } = useLanguage();

  return (
    <section id="cajas" className="cajas">
      <div className="cajas-inner">
        <h2 className="cajas-title">{t.cajas.title}</h2>

        <div className="cajas-bar">
          {t.cajas.items.map((item) => (
            <div className="cajas-item" key={item.number}>
              <span className="cajas-number">{item.number}</span>
              <h3 className="cajas-item-title">{item.title}</h3>
              <p className="cajas-item-desc">{item.desc}</p>
            </div>
          ))}

          <div className="cajas-item cajas-item-dark">
            <span className="cajas-plus">+</span>
            <h3 className="cajas-item-title">{t.cajas.catering.title}</h3>
            <p className="cajas-item-desc">{t.cajas.catering.desc}</p>
            <a
              className="cajas-link"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cajas.catering.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
