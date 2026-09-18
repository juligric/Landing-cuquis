"use client";

import { useEffect, useRef } from "react";
import "./Pistacho.css";

export default function Pistacho() {
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
          <div className="pistacho-plate" />
          <div className="pistacho-frame">
            <img
              ref={photoRef}
              className="pistacho-photo"
              src="/images/cookie-pistacho.png"
              alt="Cookie de pistacho"
            />
          </div>
          <div className="pistacho-badge">
            <span>SABOR DEL MES</span>
          </div>
        </div>

        <div className="pistacho-content">
          <p className="pistacho-label">EDICIÓN LIMITADA</p>
          <h2 className="pistacho-title">Pistacho</h2>
          <p className="pistacho-description">
            Masa de manteca con pistacho molido, trozos de chocolate blanco y un toque de sal. La horneamos en tandas
            chicas y se agota rápido.
          </p>
          <div className="pistacho-actions">
            <a
              className="btn btn-dark"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero una
            </a>
            <a
              className="btn btn-outline"
              href="https://instagram.com/juli_gric"
              target="_blank"
              rel="noopener noreferrer"
            >
              @__cuquis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
