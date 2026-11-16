import profileImage from "@/assets/gad-profile-main.jpg";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Database,
  Globe2,
  Layers3,
  MapPin,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Braces,
    title: "Full-stack development",
    description: "Responsive React interfaces connected to reliable Node.js and PHP backends.",
    tags: ["React", "Node.js", "PHP"],
  },
  {
    number: "02",
    icon: Database,
    title: "Data & systems",
    description: "Thoughtful database design, authentication, dashboards, and business workflows.",
    tags: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Product building",
    description: "Taking an idea from the first screen to a working, deployed application.",
    tags: ["TypeScript", "Tailwind", "Vercel"],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Practical AI",
    description: "Exploring useful AI experiences, automation, and tools that solve real needs.",
    tags: ["AI integrations", "APIs"],
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-section-bg py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-5 border-b border-hairline pb-7 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              A little introduction
            </div>
            <h2 className="text-5xl font-bold tracking-[-0.06em] md:text-7xl">
              Beyond the <span className="text-stroke">code.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
            The person, the mindset, and the craft behind the products I build.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-3 -top-3 h-full w-full border border-foreground/20" />
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={profileImage}
                alt="Gad Ishimwe, full-stack developer"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 pt-24 text-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">The builder</p>
                <h3 className="mt-1 text-3xl font-bold tracking-tight">Gad Ishimwe</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  Kigali, Rwanda
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-y border-hairline py-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Open to opportunities</span>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">RW / 01</span>
            </div>
          </div>

          <div className="lg:pt-2">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Hello, I'm Gad <span className="text-accent">—</span>
            </p>
            <h3 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] md:text-5xl">
              I turn ideas into <span className="gradient-hero">useful digital products</span> that make everyday work simpler.
            </h3>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.9] text-muted-foreground md:text-lg">
              <p>
                I’m a full-stack developer based in Kigali, Rwanda. I help turn business needs and early-stage ideas into useful digital products — combining thoughtful user experiences with the frontend, backend, and data systems that power them.
              </p>
              <p>
                My work spans business websites, management platforms, web applications, and AI-powered experiments. I focus on more than making something look good: I want it to work reliably, make sense to its users, and solve a real problem.
              </p>
              <p>
                I’m comfortable moving from an initial conversation and product requirements through interface design, implementation, database integration, and deployment. I value clear communication, ownership, and steady improvement — and I’m open to roles, client projects, and collaborations where I can contribute and keep growing.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-hairline py-6">
              {[
                { value: "7+", label: "Projects shipped" },
                { value: "3", label: "Custom-domain websites" },
                { value: "RW", label: "Working globally from Rwanda" },
              ].map((item, index) => (
                <div key={item.label} className={index === 1 ? "border-x border-hairline px-4 md:px-6" : index === 2 ? "pl-4 md:pl-6" : "pr-4 md:pr-6"}>
                  <div className="text-3xl font-bold tracking-[-0.05em] md:text-4xl">{item.value}</div>
                  <p className="mt-2 text-[10px] leading-snug text-muted-foreground md:text-xs">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold transition-colors hover:text-muted-foreground"
            >
              Explore what I've built
              <span className="grid h-9 w-9 place-items-center rounded-full border border-hairline transition-all group-hover:border-accent group-hover:bg-accent">
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">What I bring to the table</p>
              <h3 className="text-3xl font-bold tracking-[-0.045em] md:text-4xl">My areas of focus<span className="text-accent">.</span></h3>
            </div>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">01 — 04</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden border border-hairline bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:bg-card md:p-8"
              >
                <div className="mb-9 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{item.number} / 04</span>
                  <item.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <h4 className="text-xl font-semibold tracking-tight">{item.title}</h4>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="absolute bottom-7 right-7 h-4 w-4 text-muted-foreground/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span className="font-mono uppercase tracking-[0.15em]">Curious by nature. Builder by choice.</span>
          <span className="flex items-center gap-2">Made with purpose <Sparkles className="h-3.5 w-3.5 text-accent" /></span>
        </div>
      </div>
    </section>
  );
};

export default About;
