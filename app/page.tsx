import Nav from "./components/Nav";
import Hero from "./components/Hero";
import IntroStatement from "./components/IntroStatement";
import WhyAI from "./components/WhyAI";
import SelectedWork from "./components/SelectedWork";
import ProjectShowcase from "./components/ProjectShowcase";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <IntroStatement />
        <WhyAI />
        <SelectedWork />
        <ProjectShowcase />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
