import Header from "./components/Header";
import Hero from "./components/Hero";
import Pistacho from "./components/Pistacho";
import Sabores from "./components/Sabores";
import Cajas from "./components/Cajas";
import Nosotras from "./components/Nosotras";
import Testimonios from "./components/Testimonios";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pistacho />
        <Sabores />
        <Cajas />
        <Nosotras />
        <Testimonios />
      </main>
    </>
  );
}
