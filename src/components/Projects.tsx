import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink, Clock3 } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: string;
  featured?: boolean;
  clientPreview?: boolean;
  status?: string;
};

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects: Project[] = [
    { id: "bamboo-rooftop", title: "Bamboo Rooftop", description: "A rooftop restaurant at Kigali’s 2000 Hotel, bringing together Asian-fusion, Chinese, Western, and Rwandan cuisine with city views and table reservations.", image: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/bf/49/d3/our-night-view.jpg?h=1800&s=1&w=2400"], technologies: ["React", "Responsive Design", "Web Development"], liveUrl: "https://bamboorooftop.vercel.app/", type: "Hospitality Website", clientPreview: true, featured: true },
    { id: "employipay", title: "EmployiPay", description: "A payroll and HR automation platform designed to simplify salary administration and everyday workforce operations, with a focused digital experience for managing people and payroll.", image: ["https://i.pinimg.com/736x/5b/c3/ce/5bc3ceda613b418cf8a829899b1fc54f.jpg"], technologies: ["TypeScript", "React", "Payroll", "Business Software"], liveUrl: "https://employipay.vercel.app/", type: "Business Platform", featured: true },
    { id: "akuni", title: "Akuni", description: "A faith-based online university website for Apostolic Kingdom University, introducing its Theology, IT, Business, and Leadership learning pathways and the institution’s mission to combine faith with knowledge.", image: ["https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "TypeScript", "Supabase", "University Management"], liveUrl: "https://akuni.vercel.app/", type: "Website", clientPreview: true, featured: true },
    { id: "bethesda-holy-church", title: "Bethesda Holy Church", description: "A Kigali church website introducing the Bethesda community, its Sunday worship gatherings, biblical teaching, fellowship, and opportunities to connect and grow in faith.", image: ["https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Responsive Design", "Web Development"], liveUrl: "https://bethesdaholychurch.vercel.app/", type: "Church Website", clientPreview: true, featured: true },
    { id: "vsky-spa", title: "V&SKY SPA", description: "A premium spa website presenting treatments, services, memberships, and appointment information.", image: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Booking UX", "Responsive Design"], liveUrl: "https://vskyspa.com/", type: "Wellness Website" },
    { id: "zavora-safaris", title: "Zavora Safaris", description: "A travel and safari experience featuring destinations, itineraries, tours, car hire, and booking journeys.", image: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"], technologies: ["TypeScript", "React", "PostgreSQL"], liveUrl: "https://www.zavorasafaris.com/", type: "Travel Platform" },
    { id: "tung-chinese", title: "Tung Chinese", description: "A Kigali restaurant website presenting Tung Chinese Cuisine, with authentic Chinese food, dim sum, noodles, seafood, and options to order online or reserve a table.", image: ["https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Responsive Design", "Web Development"], liveUrl: "https://tungchinese.vercel.app/", type: "Restaurant Website", clientPreview: true },
    { id: "delta-two", title: "Delta Two Construction", description: "A corporate website for a Rwanda-based construction and engineering company, highlighting its construction and infrastructure services, project experience, and ISO 9001:2015 certification.", image: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"], technologies: ["React", "Business Website", "Responsive UI"], liveUrl: "https://delta2constract.vercel.app/", type: "Corporate Website", clientPreview: true },
    { id: "boho-restaurant", title: "Boho Restaurant", description: "A restaurant website for Boho, designed to introduce the dining experience, showcase its atmosphere, and help visitors explore the venue.", image: ["https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85"], technologies: ["Web Design", "Responsive Design"], liveUrl: "https://www.boho.rw/", type: "Restaurant Website" },
    { id: "gadbot", title: "GadBot", description: "A browser-based AI chat assistant with a conversational interface for asking questions and getting help. The app includes chat history, model selection, and a code-friendly environment.", image: ["https://i.pinimg.com/1200x/df/25/63/df25639a85f757a1cc5439f4c2dcb1c0.jpg"], technologies: ["React", "Node.js", "AI API", "Vercel"], liveUrl: "https://gadbot.vercel.app/", githubUrl: "https://github.com/gadishiimwe/nextjs-ai-chatbot", type: "AI & Automation", featured: true },
    { id: "gadvoiceai", title: "GadVoice AI", description: "A real-time voice assistant experience powered by conversational voice technology, bringing spoken interaction and AI responses together in a browser-based interface.", image: ["https://i.pinimg.com/originals/c1/c4/09/c1c4092a1aad131cb186b0a49a61afd9.gif"], technologies: ["React", "Web Speech API", "JavaScript"], liveUrl: "https://gadvoiceai.vercel.app/", githubUrl: "https://github.com/gadishiimwe/gadvoiceai", type: "AI & Voice" },
    { id: "student-management-system", title: "Student Management System", description: "A student administration system concept for organizing learner records and core school information through a centralized, database-backed application.", image: ["https://i.pinimg.com/736x/e2/85/ff/e285ff6940853fb2342e1fc2c088ed7d.jpg"], technologies: ["React", "Node.js", "MySQL", "Authentication"], githubUrl: "https://github.com/gadishiimwe/student-management-system", type: "Education" },
    { id: "news-portal", title: "News Portal", description: "A web publishing project for organizing articles and news content, with a content-management workflow and an administrative interface.", image: ["https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85"], technologies: ["PHP", "MySQL", "CMS", "Admin Panel"], githubUrl: "https://github.com/gadishiimwe/newsportal", type: "Web Platform" },
    { id: "hospital-management-system", title: "Hospital Management System", description: "A healthcare administration project built to manage patient information, doctor records, and appointment data in one organized system.", image: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"], technologies: ["PHP", "MySQL", "CRUD", "Admin Dashboard"], githubUrl: "https://github.com/gadishiimwe/Hospital-Management-System-PHP", type: "Healthcare" },
    { id: "gad-vision-ai", title: "Gad Vision AI", description: "An experimental camera-powered creative tool that explores turning what the camera sees and how a person moves into on-screen drawing and visual interactions.", image: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85"], technologies: ["AI", "Computer Vision", "Camera Interaction"], type: "In Development", status: "In development" },
    { id: "ikinyarai", title: "IkinyarAI", description: "A Kinyarwanda-first AI assistant concept aimed at helping people ask questions, understand information, and use AI naturally in their own language.", image: ["https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85"], technologies: ["AI", "Kinyarwanda", "Language Technology"], type: "In Development", status: "In development" },
    { id: "queueless", title: "QueueLess", description: "A digital queue concept for clinics, banks, and service centers: visitors take a remote queue number, track their position, and arrive closer to their turn instead of waiting in a crowded line.", image: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"], technologies: ["Web App", "Queue Management", "Notifications"], type: "In Development", status: "In development" },
    { id: "gad-ai-desktop", title: "GAD AI Desktop Assistant", description: "A planned Windows assistant designed to help users control everyday computer tasks through natural-language commands, quick actions, and practical desktop automation.", image: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"], technologies: ["AI Assistant", "Windows", "Automation"], type: "In Development", status: "In development" },
    { id: "rwanda-china-trade", title: "Rwanda–China Trade Platform", description: "A cross-border sourcing concept connecting Rwanda-based buyers with Chinese suppliers, with product discovery, supplier comparison, order visibility, shipment tracking, and richer product previews.", image: ["https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"], technologies: ["E-commerce", "Trade", "Product Discovery"], type: "In Development", status: "In development" },
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
              {project.clientPreview && <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"><Clock3 className="h-3 w-3" />Client preview</span>}
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
                <Button size="sm" variant="hero" className="h-10 flex-1 rounded-full" asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-3.5 w-3.5" />{project.clientPreview ? "Preview website" : "Open project"}</a></Button>
              ) : project.githubUrl ? (
                <Button size="sm" variant="outline" className="h-10 flex-1 rounded-full" asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-3.5 w-3.5" />View code</a></Button>
              ) : project.status ? (
                <Button size="sm" variant="hero" className="h-10 flex-1 rounded-full" asChild>
                  <Link to={`/projects/${project.id}`}>Explore project <ArrowUpRight className="ml-2 h-3.5 w-3.5" /></Link>
                </Button>
              ) : (
                <div className="flex h-10 flex-1 items-center justify-center rounded-full border border-dashed border-hairline text-xs text-muted-foreground">Details coming soon</div>
              )}
              {project.githubUrl && project.liveUrl && <Button size="sm" variant="hero-outline" className="h-10 rounded-full px-4" asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={"View " + project.title + " source code"}><Github className="h-4 w-4" /></a></Button>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Custom-domain client websites are presented in the dedicated Built Websites section.
  const customDomainWebsiteIds = new Set(["vsky-spa", "zavora-safaris", "boho-restaurant"]);
  const featuredProjects = projects.filter((project) => !customDomainWebsiteIds.has(project.id) && project.id !== "portfolio" && !/gadishimwe\\.vercel\\.app/i.test(project.liveUrl ?? ""));
  const clientPreviewProjects = featuredProjects.filter((project) => project.clientPreview);
  const liveProjects = featuredProjects.filter((project) => !project.status && !project.clientPreview);
  const inDevelopmentProjects = featuredProjects.filter((project) => project.status);

  return (
    <section id="projects" className="relative overflow-hidden bg-section-bg py-24 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-10 bg-accent" />02 / Selected work</div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Selected <span className="gradient-hero">Work</span></h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">A mix of client website previews, deployed software, and independent experiments — with each project clearly labelled.</p>
          </div>
          <div className="flex items-center gap-3 border-l border-hairline pl-5 md:mb-1">
            <span className="text-3xl font-semibold tracking-tight">{String(featuredProjects.length).padStart(2, "0")}</span>
            <span className="max-w-24 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">Selected work</span>
          </div>
        </div>
        {clientPreviewProjects.length > 0 && (
          <div className="mb-12">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div><h3 className="text-2xl font-semibold tracking-tight">Client website previews</h3><p className="mt-2 text-sm text-muted-foreground">Website builds shared for client review while feedback and final publication are pending.</p></div>
              <span className="font-mono text-xs text-muted-foreground">{String(clientPreviewProjects.length).padStart(2, "0")} items</span>
            </div>
            <ProjectsGrid items={clientPreviewProjects} />
          </div>
        )}
        <div className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><h3 className="text-2xl font-semibold tracking-tight">Deployed apps & platforms</h3><p className="mt-2 text-sm text-muted-foreground">Independent apps and platforms hosted online.</p></div>
            <span className="font-mono text-xs text-muted-foreground">{String(liveProjects.length).padStart(2, "0")} items</span>
          </div>
          <ProjectsGrid items={showAllProjects ? liveProjects : liveProjects.slice(0, 6)} />
        </div>
        <div className="border-t border-hairline pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground"><Clock3 className="h-3.5 w-3.5" />Work in progress</div><h3 className="text-2xl font-semibold tracking-tight">Currently building</h3><p className="mt-2 text-sm text-muted-foreground">Early-stage products and experiments — clearly marked as in development.</p></div>
            <span className="font-mono text-xs text-muted-foreground">{String(inDevelopmentProjects.length).padStart(2, "0")} items</span>
          </div>
          <ProjectsGrid items={showAllProjects ? inDevelopmentProjects : inDevelopmentProjects.slice(0, 3)} startIndex={liveProjects.length} />
          {(liveProjects.length > 6 || inDevelopmentProjects.length > 3) && (
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="rounded-full px-7" onClick={() => setShowAllProjects((current) => !current)}>
                {showAllProjects ? "Show fewer projects" : `View all ${featuredProjects.length} projects`}
                <ArrowUpRight className={`ml-2 h-4 w-4 transition-transform ${showAllProjects ? "rotate-[-45deg]" : ""}`} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
