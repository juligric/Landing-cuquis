import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="header-logo">
          Cuquis
        </a>

        <div className="header-right">
          <nav className="header-nav">
            <a href="#sabores">Sabores</a>
            <a href="#cajas">Cajas</a>
            <a href="#nosotras">Nosotras</a>
            <a href="https://wa.me/5491156433282" target="_blank" rel="noopener noreferrer">
              Pedir
            </a>
          </nav>

          <a
            className="btn btn-primary header-cta"
            href="https://wa.me/5491156433282"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
