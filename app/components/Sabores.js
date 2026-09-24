import "./Sabores.css";

const FLAVORS = [
  { title: "Común", desc: "Chocolate semiamargo y sal marina", img: "cookie-card-comun.png" },
  { title: "Limón", desc: "Glaseado, ralladura y chocolate blanco.", img: "cookie-card-limon.png" },
  { title: "Frambuesa", desc: "Cacao, frambuesas y chocolate blanco y negro.", img: "cookie-card-frambuesa.png" },
  { title: "Pistacho", desc: "Pistacho molido y chocolate blanco.", img: "cookie-card-pistacho.png" },
  { title: "Triple chocolate", desc: "Negro, con leche y blanco.", img: "cookie-card-triple-chocolate.png" },
  { title: "Red velvet", desc: "Cacao rojo y chocolate blanco.", img: "cookie-card-red-velvet.png" },
  { title: "Kinder", desc: "Relleno cremoso de avellana con pedacitos de kinder.", img: "cookie-card-kinder.png" },
  { title: "Caramelo", desc: "Con caramelo salado dentro.", img: "cookie-card-caramelo.png" },
];

export default function Sabores() {
  return (
    <section id="sabores" className="sabores">
      <div className="sabores-inner">
        <div className="sabores-header">
          <h2 className="sabores-title">Los sabores</h2>
          <p className="sabores-subtitle">Una amplia variedad de sabores para cualquier antojo que se te cruce.</p>
        </div>

        <div className="sabores-grid">
          {FLAVORS.map((flavor) => (
            <div className="sabor-card" key={flavor.title}>
              <img className="sabor-photo" src={`/images/${flavor.img}`} alt={flavor.title} loading="lazy" />
              <h3 className="sabor-title">{flavor.title}</h3>
              <p className="sabor-desc">{flavor.desc}</p>
            </div>
          ))}

          <a
            className="sabor-card sabor-card-cta"
            href="https://wa.me/5491156433282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="sabor-cta-title">Inventá el tuyo</h3>
            <p className="sabor-cta-desc">Contanos qué se te ocurre y lo probamos!</p>
          </a>
        </div>
      </div>
    </section>
  );
}
