import { useState } from "react";
import { Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";
import CVRequestDialog from "@/components/CVRequestDialog";
import TextType from "./TextType";
import profileImage from "@/assets/gad-profile-main.jpg";

const stats = [
  { value: "7+", label: "Projects shipped" },
  { value: "2+", label: "Years building" },
  { value: "3", label: "Client websites" },
];

const stack = ["React", "Node.js", "PHP", "MySQL", "TypeScript", "Tailwind", "REST APIs", "Vercel", "Git"];

const Hero = () => {
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-0 bg-dots [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full glass px-3 py-1.5 text-xs font-medium animate-rise">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              Available for remote work
              <span className="h-3 w-px bg-border" />
              <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="w-3 h-3" /> Kigali, Rwanda</span>
            </div>

            <h1 className="mt-7 font-bold leading-[0.95] text-[clamp(3rem,7.5vw,6.25rem)] animate-rise" style={{ animationDelay: "0.1s" }}>
              Hi, I'm Gad.
              <br />
              I build <span className="gradient-hero">real-world</span> web apps.
            </h1>

            <div className="mt-6 font-mono text-sm md:text-base text-muted-foreground min-h-[1.5rem] animate-rise" style={{ animationDelay: "0.2s" }}>
              <span className="text-accent">→</span>{" "}
              <TextType text={["Full-Stack Developer | React • Node.js • PHP • MySQL"]} typingSpeed={60} pauseDuration={4000} showCursor cursorCharacter="▍" />
            </div>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: "0.3s" }}>
              I'm a Full-stack developer from Rwanda with hands-on experience building and deploying real-world applications. As a skilled web developer in Rwanda, I've completed 7+ projects, including chatbots, management systems, and dynamic platforms. I love solving problems through clean, scalable code and I'm eager to contribute to remote teams worldwide.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 animate-rise" style={{ animationDelay: "0.4s" }}>
              <button onClick={() => go("projects")} className="group h-12 pl-6 pr-2 rounded-full gradient-button text-accent-foreground font-semibold flex items-center gap-3 shadow-glow hover:brightness-110 transition-all">
                View my work
                <span className="w-8 h-8 rounded-full bg-accent-foreground/90 text-accent grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
              <button onClick={() => setCvDialogOpen(true)} className="h-12 px-6 rounded-full glass font-medium hover:bg-secondary transition-colors">
                Request resume
              </button>
              <div className="flex gap-2 ml-1">
                {[
                  { href: "https://github.com/gadishiimwe", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/gad-ishimwe/", icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 rounded-full glass grid place-items-center text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-rise" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-6 rounded-[2.5rem] gradient-button opacity-30 blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card shadow-card aspect-[4/5]">
              <img src={profileImage} alt="Gad Ishimwe, full-stack developer in Rwanda" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-x-3 bottom-3 rounded-2xl glass p-4 flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold">Gad Ishimwe</p>
                  <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent text-accent-foreground">2026</span>
              </div>
            </div>
            <div className="hidden md:flex absolute -left-10 top-10 glass rounded-2xl px-4 py-3 items-center gap-3 shadow-card animate-float">
              <span className="font-display text-2xl font-bold gradient-hero">7+</span>
              <span className="text-xs text-muted-foreground leading-tight">projects<br />shipped</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl animate-rise" style={{ animationDelay: "0.5s" }}>
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass p-5">
              <div className="font-display text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden py-5 border-y border-border [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[...stack, ...stack, ...stack, ...stack].map((t, i) => (
            <span key={i} className="mx-8 font-display text-2xl font-semibold text-muted-foreground flex items-center gap-8">
              {t} <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      <CVRequestDialog open={cvDialogOpen} onOpenChange={setCvDialogOpen} />
    </section>
  );
};

export default Hero;
