import Nav from "../components/layouts/Nav";
import Hero from "../components/sections/Hero";
import StatsBar from "../components/layouts/Statsbar";
import About from "../components/sections/About";
import MenuSection from "../components/sections/MenuSection";
import ChefSection from "../components/sections/ChefSection";
import CookbookSection from "../components/sections/CookbookSection";
import Reservations from "../components/sections/Reservations";
import Footer from "../components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <MenuSection />
      <ChefSection />
      <CookbookSection />
      <Reservations />
      <Footer />
    </>
  );
}