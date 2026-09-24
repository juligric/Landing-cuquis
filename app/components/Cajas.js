import "./Cajas.css";

export default function Cajas() {
  return (
    <section id="cajas" className="cajas">
      <div className="cajas-inner">
        <h2 className="cajas-title">Cajas y combos</h2>

        <div className="cajas-bar">
          <div className="cajas-item">
            <span className="cajas-number">01</span>
            <h3 className="cajas-item-title">Por unidad</h3>
            <p className="cajas-item-desc">Elegís el sabor que quieras, sin mínimo.</p>
          </div>

          <div className="cajas-item">
            <span className="cajas-number">06</span>
            <h3 className="cajas-item-title">Caja de 6</h3>
            <p className="cajas-item-desc">Combinalas de la forma que mas quieras.</p>
          </div>

          <div className="cajas-item">
            <span className="cajas-number">12</span>
            <h3 className="cajas-item-title">Caja de 12</h3>
            <p className="cajas-item-desc">Para compartir con quien quieras.</p>
          </div>

          <div className="cajas-item cajas-item-dark">
            <span className="cajas-plus">+</span>
            <h3 className="cajas-item-title">Catering</h3>
            <p className="cajas-item-desc">Eventos y pedidos grandes, armados a medida.</p>
            <a
              className="cajas-link"
              href="https://wa.me/5491156433282"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
