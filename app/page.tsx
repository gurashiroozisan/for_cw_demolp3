import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KittenList from "@/components/KittenList";
import HowTo from "@/components/HowTo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <KittenList />
        <HowTo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
