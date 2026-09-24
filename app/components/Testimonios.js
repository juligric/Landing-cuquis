import "./Testimonios.css";

const TESTIMONIALS = [
  {
    variant: "white",
    quote: "Pedí la caja de 12 para un cumpleaños y no quedó ninguna. La de pistacho es otra cosa",
    name: "CAMI",
    place: "BELGRANO",
    rotate: 1.99,
  },
  {
    variant: "orange",
    quote: "Se siente casera de verdad, no es como las de cadena. Ya es mi rutina de los viernes.",
    name: "NACHO",
    place: "NORDELTA",
    rotate: -1.56,
  },
  {
    variant: "white",
    quote: "Les pedí un sabor inventado para mi casamiento y la clavaron al ángulo",
    name: "FLOR",
    place: "CABA",
    rotate: 1.99,
  },
  {
    variant: "tan",
    quote: "La de limón no la vi en ningún otro lado. Mi favorita lejos",
    name: "JUAN",
    place: "BELGRANO",
    rotate: -0.78,
  },
];

const track = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonios() {
  return (
    <section id="testimonios" className="testimonios">
      <div className="testimonios-inner">
        <h2 className="testimonios-title">Lo que dicen</h2>
      </div>

      <div className="testimonios-marquee">
        <div className="testimonios-track">
          {track.map((t, i) => (
            <div
              className={`testimonio-card testimonio-${t.variant}`}
              key={i}
              style={{ transform: `rotate(${t.rotate}deg)` }}
            >
              <p className="testimonio-quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="testimonio-author">
                {t.name} - {t.place}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
