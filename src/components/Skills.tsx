import SectionHeader from "./SectionHeader";

const groups = [
  { title: "Frontend", skills: [["ReactJS", 90], ["JavaScript (ES6+)", 88], ["HTML5", 95], ["CSS3", 92], ["Tailwind CSS", 85]] },
  { title: "Backend", skills: [["Node.js", 85], ["PHP", 80], ["Express", 82]] },
  { title: "Databases", skills: [["MySQL", 88], ["SQL basics", 85]] },
  { title: "Tools & Deploy", skills: [["Git/GitHub", 90], ["REST APIs", 85], ["Vercel", 80], ["Netlify", 80], ["Heroku", 75]] },
] as const;

const Skills = () => (
  <section id="skills" className="py-28 relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <SectionHeader eyebrow="Skills" title={<>The <span className="gradient-hero">stack</span> I ship with.</>} subtitle="Technologies I work with to build modern web applications." />
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((g, gi) => (
          <div key={g.title} className={`ring-gradient rounded-3xl border border-border bg-card p-7 ${gi === 0 ? "md:row-span-2" : ""}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">0{gi + 1}</span>
            </div>
            <div className="space-y-5">
              {g.skills.map(([name, level]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{name}</span>
                    <span className="font-mono text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full rounded-full gradient-button" style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
