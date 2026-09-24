import Header from "./components/Header";
import Hero from "./components/Hero";
import Pistacho from "./components/Pistacho";
import Sabores from "./components/Sabores";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pistacho />
        <Sabores />
      </main>
    </>
  );
}
