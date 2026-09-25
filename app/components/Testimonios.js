"use client";

import { useLanguage } from "../context/LanguageContext";
import "./Testimonios.css";

export default function Testimonios() {
  const { t } = useLanguage();
  const track = [...t.testimonios.items, ...t.testimonios.items];

  return (
    <section id="testimonios" className="testimonios">
      <div className="testimonios-inner">
        <h2 className="testimonios-title">{t.testimonios.title}</h2>
      </div>

      <div className="testimonios-marquee">
        <div className="testimonios-track">
          {track.map((item, i) => (
            <div
              className={`testimonio-card testimonio-${item.variant}`}
              key={i}
              style={{ transform: `rotate(${item.rotate}deg)` }}
            >
              <p className="testimonio-quote">&ldquo;{item.quote}&rdquo;</p>
              <p className="testimonio-author">
                {item.name} - {item.place}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
