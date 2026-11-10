import profileImage from "@/assets/gad-profile-main.jpg";
import { Code, Database, Globe, Brain } from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  { icon: Code, title: "Full-Stack Development", description: "React frontends + Node.js/PHP backends for complete web applications" },
  { icon: Database, title: "Database & CRUD Systems", description: "MySQL, SQL, authentication, and secure data management" },
  { icon: Globe, title: "Real-World Apps", description: "School, hospital, rental, and visitor management systems" },
  { icon: Brain, title: "Emerging Tech", description: "Exploring AI APIs and modern deployment tools" },
];

const About = () => (
  <section id="about" className="py-28">
    <div className="container mx-auto px-6 max-w-6xl">
      <SectionHeader eyebrow="About me" title={<>Clean code for <span className="gradient-hero">real problems</span>.</>} />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">
        <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-card min-h-[420px]">
          <img src={profileImage} alt="Gad ISHIMWE - Full Stack Developer" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/70 to-transparent">
            <h3 className="text-2xl font-bold">Gad ISHIMWE</h3>
            <p className="text-muted-foreground">Full Stack Developer · Kigali, Rwanda</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-card flex flex-col justify-between gap-8">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Gad Ishimwe, a <span className="text-foreground font-semibold">full-stack developer from Rwanda</span> passionate about creating functional and user-friendly web applications. I specialize in <span className="text-foreground font-semibold">React, Node.js, PHP, and MySQL</span>, with experience deploying apps on Vercel, Netlify, and Heroku.
            </p>
            <p>
              Over the past <span className="text-foreground font-semibold">2+ years</span> of self-learning and project building, I've developed GadBot (AI chatbot), a Student Management System, a News Portal, a Car Rental Platform and a Hospital Management System.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-5 flex gap-4 items-start">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-glow" />
            <p className="font-medium text-foreground">I focus on building real-world applications that solve actual problems with clean, scalable code.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="ring-gradient group rounded-3xl border border-border bg-card p-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <s.icon className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-lg mb-1.5">{s.title}</h4>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
