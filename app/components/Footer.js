import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">Cuquis</p>
          <p className="footer-tagline">Cookies artesanales, una por una.</p>
        </div>

        <div className="footer-col">
          <p className="footer-label">DÓNDE</p>
          <p className="footer-text">CABA - Belgrano</p>
          <p className="footer-text">Nordelta</p>
        </div>

        <div className="footer-col">
          <p className="footer-label">CONTACTO</p>
          <p className="footer-text">+54 9 11 5643-3282</p>
          <p className="footer-text">@__cuquis</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-copy">© 2026 Cuquis</p>
    </footer>
  );
}
