import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers3, Wrench, ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that feel clear, fast, and intuitive.",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Application logic, APIs, and server-side development.",
    icon: Layers3,
    skills: ["Node.js", "Express.js", "PHP", "REST APIs"],
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with structured data and application storage.",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "The tools I use to build, collaborate, and ship.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Heroku"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              01 / My toolkit
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Technical <span className="gradient-hero">Skills</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A practical toolkit for taking ideas from interface to database — and getting them ready for the real world.
            </p>
          </div>
          <div className="flex items-center gap-3 border-l border-hairline pl-5 md:mb-1">
            <span className="text-3xl font-semibold tracking-tight">04</span>
            <span className="max-w-24 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
              Areas of focus
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.number}
                className="group relative overflow-hidden rounded-2xl border border-hairline bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-card/90 md:p-8"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-hairline bg-secondary/70 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                    {group.number}
                  </span>
                </div>

                <div className="mb-5">
                  <h3 className="text-2xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors duration-200 group-hover:bg-secondary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <ArrowUpRight className="pointer-events-none absolute bottom-7 right-7 h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-[0.16em]">Build mindset</span>
          <span className="h-px w-8 bg-accent" />
          <span>Learn continuously. Build thoughtfully. Ship reliably.</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
