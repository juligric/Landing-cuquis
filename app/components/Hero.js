import "./Hero.css";

const BANNER_ITEMS = ["UNA POR UNA", "RECETAS CASERAS", "SIN PROCESOS INDUSTRIALES", "RECIÉN HORNEADAS"];
const bannerItems = [...BANNER_ITEMS, ...BANNER_ITEMS];

export default function Hero() {
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
          <p className="hero-label">COOKIES ARTESANALES · CABA & NORDELTA</p>
          <h1 className="hero-title">Cuquis</h1>
          <p className="hero-description">
            Hacemos cuquis artesanales una por una, con recetas caseras y mucho amor. Horneamos como en casa, con
            paciencia y dedicación.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hacé tu pedido
            </a>
            <a className="btn btn-outline" href="#sabores">
              Ver los sabores
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
