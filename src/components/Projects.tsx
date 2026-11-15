import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Eye, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "gadbot",
      title: "GadBot",
      description: "AI chatbot built with React & Node.js, deployed on Vercel.",
      image: ["https://www.revechat.com/wp-content/uploads/2020/01/what-is-a-chatbot.webp"],
      technologies: ["React", "Node.js", "AI API", "Vercel"],
      liveUrl: "https://gadbot.vercel.app/",
      githubUrl: "https://github.com/gadishiimwe/nextjs-ai-chatbot",
      type: "AI & Automation",
    },
    {
      id: "gadvoiceai",
      title: "GadVoiceAI",
      description: "Speech-to-text web app using Web Speech API.",
      image: ["https://i.pinimg.com/736x/c4/30/c0/c430c000a63623f5edb4170820a796db.jpg"],
      technologies: ["React", "Web Speech API", "JavaScript"],
      liveUrl: "https://gadvoiceai.vercel.app/",
      githubUrl: "https://github.com/gadishiimwe/gadvoiceai",
      type: "AI & Voice",
    },
    {
      id: "student-management-system",
      title: "Student Management System",
      description: "Full-stack CRUD app with authentication and MySQL.",
      image: ["https://i.pinimg.com/736x/13/21/11/132111de59de8ba651398c23e2ec97a3.jpg"],
      technologies: ["React", "Node.js", "MySQL", "Authentication"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/student-management-system",
      type: "Education",
    },
    {
      id: "news-portal",
      title: "News Portal",
      description: "Dynamic CMS with admin panel and responsive design.",
      image: ["https://i.pinimg.com/1200x/90/b8/d4/90b8d46ef5de9c3fae4c8ee425f2833c.jpg"],
      technologies: ["PHP", "MySQL", "CMS", "Admin Panel"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/newsportal",
      type: "Web Platform",
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      description: "PHP-based system managing patients, doctors, and appointments.",
      image: ["https://i.pinimg.com/1200x/0c/70/3f/0c703f47d0b1cdcb4d7216807b646997.jpg"],
      technologies: ["PHP", "MySQL", "CRUD", "Admin Dashboard"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/Hospital-Management-System-PHP",
      type: "Healthcare",
    },
    {
      id: "car-rental-system",
      title: "Car Rental System",
      description: "Rental booking platform with authentication and SQL database.",
      image: ["https://i.pinimg.com/736x/f6/8d/97/f68d9788c99bf3664aca7b6743e5b845.jpg"],
      technologies: ["React", "Node.js", "MySQL", "Booking System"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/carrental",
      type: "Booking Platform",
    },
    {
      id: "avms",
      title: "AVMS",
      description: "Apartment Visitor Management System for secure visitor logging.",
      image: ["https://i.pinimg.com/736x/f9/a8/d3/f9a8d387c2c5170c85739c31ec0122e4.jpg"],
      technologies: ["PHP", "MySQL", "Authentication", "Logs"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/avms",
      type: "Management System",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-section-bg py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              02 / Selected work
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Featured <span className="gradient-hero">Projects</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A selection of products and practical systems I've built — exploring AI, automation, and solutions to everyday problems.
            </p>
          </div>
          <div className="flex items-center gap-3 border-l border-hairline pl-5 md:mb-1">
            <span className="text-3xl font-semibold tracking-tight">07</span>
            <span className="max-w-24 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
              Projects showcased
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/70"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                {project.image.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      imgIndex === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{ zIndex: project.image.length - imgIndex }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute left-4 top-4 z-10">
                  <Badge className="rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md hover:bg-black/65">
                    {project.type}
                  </Badge>
                </div>
                <span className="absolute bottom-4 left-4 z-10 font-mono text-xs tracking-[0.16em] text-white/75">
                  PROJECT / 0{index + 1}
                </span>
                <div className="absolute bottom-3 right-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <CardHeader className="flex-1 space-y-3 px-5 pb-3 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg leading-snug tracking-tight transition-colors duration-300 group-hover:text-foreground">
                    {project.title}
                  </CardTitle>
                  {index < 2 && (
                    <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      <Sparkles className="h-3 w-3 text-accent-foreground" />
                      Featured
                    </span>
                  )}
                </div>
                <CardDescription className="min-h-[3rem] text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-5 pb-5">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full border border-hairline bg-secondary/60 px-2.5 py-1 text-[10px] font-normal text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 border-t border-hairline pt-4">
                  {project.liveUrl !== "#" ? (
                    <Button size="sm" variant="hero" className="h-10 flex-1 rounded-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        Live demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="h-10 flex-1 rounded-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3.5 w-3.5" />
                        View code
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="hero-outline" className="h-10 rounded-full px-4" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`}>
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="h-10 rounded-full px-4" asChild>
                    <Link to={`/project/${project.id}#top`} aria-label={`Read more about ${project.title}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
