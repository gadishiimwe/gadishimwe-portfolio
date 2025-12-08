import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Home, User, Code, Briefcase, Award, Phone } from "lucide-react";
import profileImage from "@/assets/gad-profile.jpg";
import { useTypewriter } from "@/hooks/use-typewriter";
import CVRequestDialog from "@/components/CVRequestDialog";
import TextType from "./TextType";
import ScrollFloat from "./ScrollFloat";
import ProfileCard from "./ProfileCard";
import TextPressure from "./TextPressure";

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

  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: Award, label: "Experience" },
    { id: "contact", icon: Phone, label: "Contact" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 md:pt-15 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />


      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-hero text-glow">
                GAD ISHIMWE
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground font-light min-h-[3rem]">
              <TextType
                text={["Full-Stack Developer | React • Node.js • PHP • MySQL", "Passionate Coder", "Problem Solver", "Tech Enthusiast"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-stack developer from Rwanda with hands-on experience building and deploying real-world applications. As a skilled web developer in Rwanda, I've completed 7+ projects, including chatbots, management systems, and dynamic platforms. I love solving problems through clean, scalable code and I'm eager to contribute to remote teams worldwide.
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

          <div className={`flex flex-col md:flex-row items-center justify-center gap-4 transition-opacity duration-500 ${titleComplete ? 'opacity-100' : 'opacity-0'} relative z-20`}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("projects")}
              className="min-w-[200px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Explore My Work
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="min-w-[200px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => setCvDialogOpen(true)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Resume
            </Button>
          </div>
        </div>
      </div>

      <CVRequestDialog open={cvDialogOpen} onOpenChange={setCvDialogOpen} />
    </section>
  );
};

export default Hero;
