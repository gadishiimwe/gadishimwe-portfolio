import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProfessionalJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
