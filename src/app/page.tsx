import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />

      <Contact />
      <Footer />
    </main>
  );
}
