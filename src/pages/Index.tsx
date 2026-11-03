import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BuiltWebsites from "@/components/BuiltWebsites";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Home, User, Code, Briefcase, Award, Phone } from "lucide-react";


const Index = () => {
  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: Award, label: "Experience" },
    { id: "contact", icon: Phone, label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BuiltWebsites />
      <ProfessionalJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
