import { BriefcaseBusiness, Building2, CalendarDays, CheckCircle2, Code2, GraduationCap, MapPin } from "lucide-react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Independent & Client Projects",
      location: "Kigali, Rwanda / Remote",
      period: "Ongoing",
      type: "Current",
      icon: Code2,
      description: "Designing, building, and deploying websites and software products for practical use cases. Work spans user-facing interfaces, application logic, databases, and deployment.",
      achievements: [
        "Built and shipped 7+ software projects across business, education, healthcare, hospitality, and AI experiments.",
        "Delivered websites published on custom domains, including projects in wellness, travel, and hospitality.",
        "Worked across frontend development, backend integration, database-backed workflows, and responsive user experiences.",
        "Open to full-stack roles, freelance projects, and collaborations with teams building useful products."
      ]
    },
    {
      title: "Software Development Intern",
      company: "IDA Technology Rwanda",
      location: "Rwanda",
      period: "Internship",
      type: "Professional experience",
      icon: BriefcaseBusiness,
      description: "Gained practical workplace experience in a technology environment, applying software development knowledge and learning through real project work and collaboration.",
      achievements: [
        "Developed practical experience in a professional technology setting.",
        "Strengthened problem-solving, communication, and software development practices."
      ]
    },
    {
      title: "Data Entry & Digital Marketing",
      company: "FedEx Rwanda (EHS Logistics)",
      location: "Rwanda",
      period: "Previous role",
      type: "Professional experience",
      icon: Building2,
      description: "Supported operational and digital marketing activities, combining accurate information handling with practical business communication and digital content work.",
      achievements: [
        "Supported data entry and day-to-day information management.",
        "Contributed to digital marketing activities and business-facing content."
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
            A mix of independent product work and professional experience — grounded in building, contributing, and solving practical problems.
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
