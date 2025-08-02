import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileImage from "@/assets/gad-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-hero text-glow">
                GAD ISHIMWE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Young & Affordable Full-Stack Developer
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <strong>Gad ISHIMWE</strong>, a full-stack developer from Rwanda with{" "}
              <strong>3 years of experience</strong> specializing in MERN stack development. 
              I'm passionate about building modern digital experiences that blend beautiful 
              design with powerful functionality — all at a budget-friendly cost. I create 
              scalable solutions that make a real impact without breaking the bank.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-card border border-border rounded-full p-3 hover:bg-project-hover transition-colors"
              variant="ghost"
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              size="lg"
              className="bg-card border border-border rounded-full p-3 hover:bg-project-hover transition-colors"
              variant="ghost"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="min-w-[200px]"
            >
              Explore My Work
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="min-w-[200px]"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;