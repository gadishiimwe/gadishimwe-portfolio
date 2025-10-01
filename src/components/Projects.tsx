import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GadBot",
      description: "AI chatbot built with React & Node.js, deployed on Vercel.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "AI API", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "GadVoiceAI",
      description: "Speech-to-text web app using Web Speech API.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&h=300&fit=crop",
      technologies: ["React", "Web Speech API", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Student Management System",
      description: "Full-stack CRUD app with authentication and MySQL.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MySQL", "Authentication"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "News Portal",
      description: "Dynamic CMS with admin panel and responsive design.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      technologies: ["PHP", "MySQL", "CMS", "Admin Panel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Hospital Management System",
      description: "PHP-based system managing patients, doctors, and appointments.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop",
      technologies: ["PHP", "MySQL", "CRUD", "Admin Dashboard"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Car Rental System",
      description: "Rental booking platform with authentication and SQL database.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MySQL", "Booking System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AVMS",
      description: "Apartment Visitor Management System for secure visitor logging.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      technologies: ["PHP", "MySQL", "Authentication", "Logs"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            7+ real-world projects including chatbots, management systems, and dynamic platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="hero" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="hero-outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
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