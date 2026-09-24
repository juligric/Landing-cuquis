import Header from "./components/Header";
import Hero from "./components/Hero";
import Pistacho from "./components/Pistacho";
import Sabores from "./components/Sabores";
import Cajas from "./components/Cajas";
import Nosotras from "./components/Nosotras";
import Testimonios from "./components/Testimonios";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import DevGuideOverlay from "./components/DevGuideOverlay";

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
        <DevGuideOverlay src="/images/dev-guide-cta.png" />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
