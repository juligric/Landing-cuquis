"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Pistacho.css";

export default function Pistacho() {
  const { t } = useLanguage();
  const photoRef = useRef(null);
  const lastScrollY = useRef(0);
  const rotation = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      rotation.current += delta * 0.15;

      if (photoRef.current) {
        photoRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="pistacho" className="pistacho">
      <div className="pistacho-inner">
        <div className="pistacho-photo-wrap">
          <img
            ref={photoRef}
            className="pistacho-photo"
            src="/images/cookie-pistacho.png"
            alt="Cookie de pistacho"
          />
          <div className="pistacho-badge">
            <span>{t.pistacho.badge}</span>
          </div>
        </div>

        <div className="pistacho-content">
          <p className="pistacho-label">{t.pistacho.label}</p>
          <h2 className="pistacho-title">{t.pistacho.title}</h2>
          <p className="pistacho-description">{t.pistacho.description}</p>
          <div className="pistacho-actions">
            <a
              className="btn btn-dark"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.pistacho.ctaPrimary}
            </a>
            <a
              className="btn btn-outline"
              href="https://instagram.com/juli_gric"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.pistacho.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
