import "./CtaFinal.css";

export default function CtaFinal() {
  return (
    <section id="armamos" className="cta-final">
      <div className="cta-decor cta-decor-left" />
      <div className="cta-decor cta-decor-right" />

      <div className="cta-final-inner">
        <h2 className="cta-final-title">¿Armamos tu caja?</h2>

        <div className="cta-final-actions">
          <a
            className="btn btn-dark"
            href="https://wa.me/5491156433282"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn btn-dark"
            href="https://instagram.com/juli_gric"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram DM
          </a>
          <a className="btn btn-dark" href="#hero">
            Comprar online
          </a>
        </div>
      </div>
    </section>
  );
}
