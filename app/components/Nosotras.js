"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Nosotras.css";

export default function Nosotras() {
  const { t } = useLanguage();

  return (
    <section id="nosotras" className="nosotras">
      <div className="nosotras-inner">
        <div className="nosotras-content">
          <h2 className="nosotras-title">{t.nosotras.title}</h2>
          <p className="nosotras-text">{t.nosotras.text1}</p>
          <p className="nosotras-text">{t.nosotras.text2}</p>
          <p className="nosotras-byline">{t.nosotras.byline}</p>
        </div>

        <div className="nosotras-photo" />
      </div>
    </section>
  );
}
