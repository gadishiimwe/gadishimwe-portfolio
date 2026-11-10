import { MapPin, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Full-Stack Developer (Freelance & Personal Projects)",
      company: "Remote",
      location: "Remote",
      period: "2022 - Present",
      type: "Current",
      description: "Building and deploying web applications using React, Node.js, PHP, and MySQL. Focused on practical projects that solve real-world problems and improve user experience.",
      achievements: [
        "Developed 7+ full-stack applications including car rental, student management, news portal, hospital management, and visitor tracking systems.",
        "Deployed projects on Vercel, Netlify, and Heroku with live demos.",
        "Implemented secure authentication, CRUD operations, and responsive design.",
        "Collaborated via GitHub and shared work with public repositories."
      ]
    },
    {
      title: "Web Developer (Learning & Freelance Work)",
      company: "Rwanda",
      location: "Rwanda",
      period: "2021 - 2022",
      type: "Freelance",
      description: "Gained practical experience building websites and small applications while completing online certifications and practicing coding fundamentals.",
      achievements: [
        "Built personal and client websites using WordPress, HTML, CSS, and PHP.",
        "Learned MySQL database design and integrated CRUD operations.",
        "Delivered responsive, user-friendly designs for local clients.",
        "Completed multiple certifications (FreeCodeCamp, Udacity, Edureka)."
      ]
    },
    {
      title: "Self-Learner (Programming Foundations)",
      company: "Rwanda",
      location: "Rwanda",
      period: "2020 - 2021",
      type: "Learning",
      description: "Focused on mastering programming basics, algorithms, and web development through structured online learning.",
      achievements: [
        "Earned certifications in Web Design, Programming, and AI fundamentals.",
        "Completed foundational projects including calculators, portfolio websites, and simple apps.",
        "Ranked Top 20% in Software Development coursework at Glory Academy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader eyebrow="Journey" title={<>Professional <span className="gradient-hero">Journey</span></>} subtitle="From self-taught learner to full-stack developer — building projects that solve real problems." />
        <div className="space-y-4">
          {experiences.map((e) => (
            <div key={e.period} className="ring-gradient grid md:grid-cols-[220px_1fr] gap-6 rounded-3xl border border-border bg-card p-7 md:p-9">
              <div>
                <p className="font-display text-2xl font-bold">{e.period}</p>
                <span className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${e.type === "Current" ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {e.type === "Current" && <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground animate-pulse" />}
                  {e.type}
                </span>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="w-3.5 h-3.5" />{e.location}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{e.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{e.description}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {e.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-sm text-muted-foreground rounded-2xl bg-secondary/60 p-4">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
