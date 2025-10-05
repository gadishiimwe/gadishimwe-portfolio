import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileImage from "@/assets/gad-profile.jpg";
import { useTypewriter } from "@/hooks/use-typewriter";
import CVRequestDialog from "@/components/CVRequestDialog";

const Hero = () => {
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const { displayText: titleText, isComplete: titleComplete } = useTypewriter({
    text: "Full-Stack Developer | React • Node.js • PHP • MySQL",
    speed: 50,
    delay: 1000
  });

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
            <div className="text-xl md:text-2xl text-muted-foreground font-light min-h-[3rem]">
              <span className="font-mono">
                {titleText}
                {!titleComplete && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a junior full-stack developer from Rwanda with hands-on experience building and deploying real-world applications. I've completed 7+ projects, including chatbots, management systems, and dynamic platforms. I love solving problems through clean, scalable code and I'm eager to contribute to remote teams worldwide.
            </p>
          </div>

          <div className={`flex justify-center space-x-4 transition-opacity duration-500 ${titleComplete ? 'opacity-100' : 'opacity-0'}`}>
            <Button
              size="lg"
              className="bg-card border border-border rounded-full p-3 hover:bg-project-hover transition-colors"
              variant="ghost"
              asChild
            >
              <a href="https://github.com/gadishiimwe" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-card border border-border rounded-full p-3 hover:bg-project-hover transition-colors"
              variant="ghost"
              asChild
            >
              <a href="https://www.linkedin.com/in/gad-ishimwe/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
          </div>

          <div className={`flex flex-col md:flex-row items-center justify-center gap-4 transition-opacity duration-500 ${titleComplete ? 'opacity-100' : 'opacity-0'}`}>
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
              onClick={() => setCvDialogOpen(true)}
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

      <CVRequestDialog open={cvDialogOpen} onOpenChange={setCvDialogOpen} />
    </section>
  );
};

export default Hero;