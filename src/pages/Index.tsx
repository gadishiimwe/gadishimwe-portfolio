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
      {/* Vertical Menu Icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center justify-center w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              <div className="absolute left-full ml-4 px-3 py-1 bg-primary text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

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
