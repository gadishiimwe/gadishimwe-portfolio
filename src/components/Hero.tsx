import { useState } from "react";
import { Github, Linkedin, ArrowRight, MapPin } from "lucide-react";
import CVRequestDialog from "@/components/CVRequestDialog";
import TextType from "./TextType";

const stats = [
  { value: "7+", label: "Projects shipped" },
  { value: "2+", label: "Years building" },
  { value: "4", label: "Core technologies" },
];

const stack = ["React", "Node.js", "PHP", "MySQL", "TypeScript", "Tailwind", "REST APIs", "Vercel", "Git"];

const Hero = () => {
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-8 animate-rise">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> Kigali, Rwanda
          </span>
          <span className="h-px flex-1 max-w-md bg-foreground/20" />
          <span className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-accent border border-foreground" />
            </span>
            Open to work
          </span>
        </div>

        <h1 className="font-bold uppercase leading-[0.85] tracking-[-0.05em] text-[clamp(4rem,14vw,11rem)] animate-rise" style={{ animationDelay: "0.1s" }}>
          Gad
          <br />
          <span className="text-stroke">Ishimwe</span>
          <span className="inline-block w-[0.18em] h-[0.18em] bg-accent rounded-full ml-2 border-2 border-foreground align-baseline" />
        </h1>

        <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div className="animate-rise" style={{ animationDelay: "0.25s" }}>
            <div className="font-mono text-sm md:text-base text-muted-foreground mb-4 min-h-[1.5rem]">
              <span className="text-foreground">$</span>{" "}
              <TextType text={["Full-Stack Developer | React • Node.js • PHP • MySQL"]} typingSpeed={60} pauseDuration={4000} showCursor cursorCharacter="▌" />
            </div>
            <p className="text-2xl md:text-4xl leading-[1.15] tracking-tight">
              Full-stack developer from Rwanda building{" "}
              <span className="font-bold gradient-hero">real-world applications</span> with clean, scalable code — ready for remote teams worldwide.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: "0.35s" }}>
            I'm a Full-stack developer from Rwanda with hands-on experience building and deploying real-world applications. As a skilled web developer in Rwanda, I've completed 7+ projects, including chatbots, management systems, and dynamic platforms. I love solving problems through clean, scalable code and I'm eager to contribute to remote teams worldwide.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "0.45s" }}>
          <button onClick={() => go("projects")} className="group flex items-center gap-4 pl-6 pr-2 h-14 rounded-full bg-card border-[1.5px] border-foreground shadow-brutal font-medium hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
            See the work
            <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground grid place-items-center border-[1.5px] border-foreground group-hover:rotate-[-45deg] transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          <button onClick={() => setCvDialogOpen(true)} className="h-14 px-6 rounded-full border-[1.5px] border-dashed border-foreground/50 hover:border-foreground hover:bg-card transition-colors font-medium">
            Request resume
          </button>
          <div className="flex gap-2 ml-auto">
            {[
              { href: "https://github.com/gadishiimwe", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/gad-ishimwe/", icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 rounded-full border-[1.5px] border-foreground grid place-items-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-[1.5px] border-foreground grid grid-cols-3 gap-6 animate-rise" style={{ animationDelay: "0.55s" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter">{s.value}</div>
              <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y-[1.5px] border-foreground bg-accent text-accent-foreground overflow-hidden py-4 -rotate-1 scale-105">
        <div className="flex w-max animate-marquee">
          {[...stack, ...stack, ...stack, ...stack].map((t, i) => (
            <span key={i} className="mx-6 text-xl font-bold uppercase tracking-tight flex items-center gap-6">
              {t} <span className="text-base">✦</span>
            </span>
          ))}
        </div>
      </div>

      <CVRequestDialog open={cvDialogOpen} onOpenChange={setCvDialogOpen} />
    </section>
  );
};

export default Hero;
