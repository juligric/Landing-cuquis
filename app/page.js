import Header from "./components/Header";
import Hero from "./components/Hero";
import Pistacho from "./components/Pistacho";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pistacho />
      </main>
    </>
  );
}
