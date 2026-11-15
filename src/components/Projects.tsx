import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Eye, Sparkles, ExternalLink, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    { id: "bamboo-rooftop", title: "Bamboo Rooftop", description: "A polished digital presence for a rooftop dining destination, showcasing its atmosphere and guest experience.", image: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Responsive Design", "Web Development"], liveUrl: "https://bamboorooftop.vercel.app/", type: "Hospitality Website", featured: true },
    { id: "employipay", title: "EmployiPay", description: "A full-stack payroll and HR platform designed to simplify employee management and business workflows.", image: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85"], technologies: ["TypeScript", "React", "Payroll", "Business Software"], liveUrl: "https://employipay.vercel.app/", type: "Business Platform", featured: true },
    { id: "akuni", title: "Akuni", description: "A responsive website project with a clean, modern presentation across desktop and mobile.", image: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"], technologies: ["Web Design", "Responsive UI", "Development"], liveUrl: "https://akuni.vercel.app/", type: "Website", featured: true },
    { id: "bethesda-holy-church", title: "Bethesda Holy Church", description: "A welcoming online presence for a church community, making its identity and information accessible to visitors.", image: ["https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Responsive Design", "Web Development"], liveUrl: "https://bethesdaholychurch.vercel.app/", type: "Church Website", featured: true },
    { id: "vsky-spa", title: "V&SKY SPA", description: "A premium spa website presenting treatments, services, memberships, and appointment information.", image: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Booking UX", "Responsive Design"], liveUrl: "https://vskyspa.com/", type: "Wellness Website" },
    { id: "zavora-safaris", title: "Zavora Safaris", description: "A travel and safari experience featuring destinations, itineraries, tours, car hire, and booking journeys.", image: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"], technologies: ["TypeScript", "React", "PostgreSQL"], liveUrl: "https://www.zavorasafaris.com/", type: "Travel Platform" },
    { id: "tung-chinese", title: "Tung Chinese", description: "A restaurant website built to introduce the dining experience and make key information easy to find.", image: ["https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Responsive Design", "Web Development"], liveUrl: "https://tungchinese.vercel.app/", type: "Restaurant Website" },
    { id: "delta-two", title: "Delta Two Construction", description: "A corporate web presence for a construction business, presenting its services with a professional layout.", image: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Business Website", "Responsive UI"], liveUrl: "https://delta2constract.vercel.app/", type: "Corporate Website" },
    { id: "boho-restaurant", title: "Boho Restaurant", description: "A restaurant website focused on atmosphere, visual storytelling, and a smooth browsing experience.", image: ["https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85"], technologies: ["Web Design", "Responsive Design"], liveUrl: "https://www.boho.rw/", type: "Restaurant Website" },
    { id: "gadbot", title: "GadBot", description: "An AI chatbot built to provide a conversational interface for asking questions and getting assistance.", image: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Node.js", "AI API", "Vercel"], liveUrl: "https://gadbot.vercel.app/", githubUrl: "https://github.com/gadishiimwe/nextjs-ai-chatbot", type: "AI & Automation", featured: true },
    { id: "gadvoiceai", title: "GadVoice AI", description: "A browser-based voice experience exploring speech recognition and voice-first interaction.", image: ["https://images.unsplash.com/photo-1590602847861-f357a9332reno?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Web Speech API", "JavaScript"], liveUrl: "https://gadvoiceai.vercel.app/", githubUrl: "https://github.com/gadishiimwe/gadvoiceai", type: "AI & Voice" },
    { id: "student-management-system", title: "Student Management System", description: "A full-stack student administration system with authentication and database-backed records.", image: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Node.js", "MySQL", "Authentication"], githubUrl: "https://github.com/gadishiimwe/student-management-system", type: "Education" },
    { id: "news-portal", title: "News Portal", description: "A dynamic publishing platform with a content management system and admin panel.", image: ["https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85"], technologies: ["PHP", "MySQL", "CMS", "Admin Panel"], githubUrl: "https://github.com/gadishiimwe/newsportal", type: "Web Platform" },
    { id: "hospital-management-system", title: "Hospital Management System", description: "A PHP and MySQL system for organizing patient, doctor, and appointment records.", image: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"], technologies: ["PHP", "MySQL", "CRUD", "Admin Dashboard"], githubUrl: "https://github.com/gadishiimwe/Hospital-Management-System-PHP", type: "Healthcare" },
    { id: "gad-vision-ai", title: "Gad Vision AI", description: "An experimental camera-based AI experience exploring visual interaction, recognition, and drawing in real time.", image: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"], technologies: ["AI", "Computer Vision", "Camera Interaction"], type: "In Development", status: "In development" },
    { id: "ikinyarai", title: "IkinyarAI", description: "A Kinyarwanda-focused AI assistant concept designed to make conversational AI more accessible to local users.", image: ["https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=85"], technologies: ["AI", "Kinyarwanda", "Language Technology"], type: "In Development", status: "In development" },
    { id: "queueless", title: "QueueLess", description: "A digital queue concept that lets visitors take a remote number and reduce unnecessary waiting in physical lines.", image: ["https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=85"], technologies: ["Web App", "Queue Management", "Notifications"], type: "In Development", status: "In development" },
    { id: "rwanda-china-trade", title: "Rwanda–China Trade Platform", description: "A developing marketplace concept for discovering products and making cross-border sourcing more transparent.", image: ["https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"], technologies: ["E-commerce", "Trade", "Product Discovery"], type: "In Development", status: "In development" },
  ];

  const ProjectsGrid = ({ items, startIndex = 0 }: { items: typeof projects; startIndex?: number }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <Card key={project.id} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/70">
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
            <img src={project.image[0]} alt={project.title + " visual"} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-4 top-4 z-10">
              <Badge className="rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-md hover:bg-black/65">{project.type}</Badge>
            </div>
            <span className="absolute bottom-4 left-4 z-10 font-mono text-xs tracking-[0.16em] text-white/80">PROJECT / {String(startIndex + index + 1).padStart(2, "0")}</span>
            <div className="absolute bottom-3 right-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-accent-foreground"><ArrowUpRight className="h-4 w-4" /></div>
          </div>
          <CardHeader className="flex-1 space-y-3 px-5 pb-3 pt-5">
            <div className="flex items-start justify-between gap-3">
              <CardTitle className="text-lg leading-snug tracking-tight transition-colors duration-300 group-hover:text-foreground">{project.title}</CardTitle>
              {project.featured && <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"><Sparkles className="h-3 w-3 text-accent-foreground" />Featured</span>}
              {project.status && <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"><Clock3 className="h-3 w-3" />Building</span>}
            </div>
            <CardDescription className="min-h-[3rem] text-sm leading-relaxed text-muted-foreground">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="px-5 pb-5">
            <div className="mb-5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => <Badge key={tech} variant="secondary" className="rounded-full border border-hairline bg-secondary/60 px-2.5 py-1 text-[10px] font-normal text-secondary-foreground">{tech}</Badge>)}
            </div>
            <div className="flex gap-2 border-t border-hairline pt-4">
              {project.liveUrl ? (
                <Button size="sm" variant="hero" className="h-10 flex-1 rounded-full" asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-3.5 w-3.5" />Live website</a></Button>
              ) : project.githubUrl ? (
                <Button size="sm" variant="outline" className="h-10 flex-1 rounded-full" asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-3.5 w-3.5" />View code</a></Button>
              ) : (
                <div className="flex h-10 flex-1 items-center justify-center rounded-full border border-dashed border-hairline text-xs text-muted-foreground">Currently in development</div>
              )}
              {project.githubUrl && project.liveUrl && <Button size="sm" variant="hero-outline" className="h-10 rounded-full px-4" asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={"View " + project.title + " source code"}><Github className="h-4 w-4" /></a></Button>}
              {!project.status && <Button size="sm" variant="outline" className="h-10 rounded-full px-4" asChild><Link to={"/project/" + project.id + "#top"} aria-label={"Read more about " + project.title}><Eye className="h-4 w-4" /></Link></Button>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const liveProjects = projects.filter((project) => !project.status);
  const inDevelopmentProjects = projects.filter((project) => project.status);

  return (
    <section id="projects" className="relative overflow-hidden bg-section-bg py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-10 bg-accent" />02 / Selected work</div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Featured <span className="gradient-hero">Projects</span></h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Websites, platforms, and experiments I've worked on — from business solutions and digital experiences to practical AI products.</p>
          </div>
          <div className="flex items-center gap-3 border-l border-hairline pl-5 md:mb-1">
            <span className="text-3xl font-semibold tracking-tight">{String(projects.length).padStart(2, "0")}</span>
            <span className="max-w-24 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">Projects & experiments</span>
          </div>
        </div>
        <div className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><h3 className="text-2xl font-semibold tracking-tight">Live websites & projects</h3><p className="mt-2 text-sm text-muted-foreground">Selected work you can explore right now.</p></div>
            <span className="font-mono text-xs text-muted-foreground">{String(liveProjects.length).padStart(2, "0")} items</span>
          </div>
          <ProjectsGrid items={liveProjects} />
        </div>
        <div className="border-t border-hairline pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground"><Clock3 className="h-3.5 w-3.5" />Work in progress</div><h3 className="text-2xl font-semibold tracking-tight">Currently building</h3><p className="mt-2 text-sm text-muted-foreground">Early-stage products and experiments — clearly marked as in development.</p></div>
            <span className="font-mono text-xs text-muted-foreground">{String(inDevelopmentProjects.length).padStart(2, "0")} items</span>
          </div>
          <ProjectsGrid items={inDevelopmentProjects} startIndex={liveProjects.length} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
