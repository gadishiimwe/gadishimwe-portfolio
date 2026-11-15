import { BriefcaseBusiness, Building2, CalendarDays, CheckCircle2, Code2, GraduationCap, MapPin } from "lucide-react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Full-Stack Developer (Freelance & Personal Projects)",
      company: "Independent",
      location: "Remote",
      period: "2022 – Present",
      type: "Current",
      icon: Code2,
      description: "Building and deploying web applications with React, Node.js, PHP, and MySQL. Focused on practical digital products, thoughtful user experiences, and solving real-world problems through software.",
      achievements: [
        "Developed 7+ applications across business, education, healthcare, and productivity use cases.",
        "Deployed projects using platforms including Vercel, Netlify, and Heroku.",
        "Built features such as authentication, database-backed workflows, CRUD operations, and responsive interfaces.",
        "Used Git and GitHub to manage code, track changes, and share development work."
      ]
    },
    {
      title: "Web Developer (Learning & Freelance Work)",
      company: "Freelance",
      location: "Rwanda",
      period: "2021 – 2022",
      type: "Freelance",
      icon: BriefcaseBusiness,
      description: "Developed practical websites and small applications while strengthening core web-development skills through independent projects and online learning.",
      achievements: [
        "Built personal and client websites using WordPress, HTML, CSS, and PHP.",
        "Practiced MySQL database design and connected applications to CRUD workflows.",
        "Worked on responsive layouts and user-friendly website experiences.",
        "Completed online learning and certification programmes in web development."
      ]
    },
    {
      title: "Self-Learner (Programming Foundations)",
      company: "Independent Learning",
      location: "Rwanda",
      period: "2020 – 2021",
      type: "Learning",
      icon: GraduationCap,
      description: "Started the journey into software development by learning programming fundamentals, problem-solving, and the building blocks of the web through structured online study and hands-on practice.",
      achievements: [
        "Earned certificates in web design, programming, and AI fundamentals.",
        "Created foundational projects including calculators, portfolio websites, and simple applications.",
        "Built a foundation in software development through coursework and consistent independent practice."
      ]
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-section-bg py-24 md:py-28">
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            The path so far
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Professional <span className="gradient-hero">Journey</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A journey shaped by curiosity, continuous learning, and building real software — from programming foundations to full-stack development.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-primary/70 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isCurrent = experience.type === "Current";
              return (
                <article key={experience.title} className={`relative grid grid-cols-1 md:grid-cols-2 md:gap-16 ${index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                  <div className={`absolute left-5 top-7 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-2xl border bg-background shadow-sm md:left-1/2 ${isCurrent ? "border-primary/40 text-primary ring-4 ring-primary/10" : "border-border text-muted-foreground"}`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className={`pl-14 md:pl-0 ${index % 2 === 0 ? "md:col-start-1 md:pr-2 md:text-right" : "md:col-start-2 md:pl-2"}`}>
                    <div className={`group rounded-2xl border border-hairline bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl md:p-7 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${isCurrent ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`}>
                          {isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                          {experience.type}
                        </span>
                        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {experience.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">{experience.title}</h3>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" />{experience.company}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{experience.location}</span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground">{experience.description}</p>

                      <div className="mt-6 border-t border-hairline pt-5">
                        <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Highlights & experience</h4>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-3 text-left text-sm leading-relaxed text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
