"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();
  const bannerItems = [...t.hero.banner, ...t.hero.banner];

  return (
    <section id="hero" className="hero">
      <div className="hero-stage">
        <img
          className="hero-cookie hero-cookie-tl"
          src="/images/cookie-frambuesa.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="hero-cookie hero-cookie-tr"
          src="/images/cookie-pistacho-hero.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="hero-cookie hero-cookie-bl"
          src="/images/cookie-limon.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="hero-cookie hero-cookie-br"
          src="/images/cookie-triple-chocolate.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />

        <div className="hero-content">
          <p className="hero-label">{t.hero.label}</p>
          <h1 className="hero-title">Cuquis</h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn-outline" href="#sabores">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="hero-banner">
        <div className="hero-banner-track">
          {bannerItems.map((item, i) => (
            <span className="hero-banner-item" key={i}>
              {item}
              <span className="hero-banner-star" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
