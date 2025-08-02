import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Apartment Visitor Management System (AVMS)",
      description: "A PHP-based system to manage apartment visitors securely. Includes check-in/check-out, visitor logs, admin panel, and report generation with PDF export functionality.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      technologies: ["PHP", "MySQL", "Bootstrap", "CRUD", "PDF Export"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Hospital Management System",
      description: "Complete hospital web application to manage patients, staff, appointments, billing, and medical reports with comprehensive admin dashboard and authentication.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop",
      technologies: ["PHP", "MySQL", "Admin Dashboard", "Authentication"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Student Management System",
      description: "Comprehensive school management platform that tracks students, grades, attendance, parent information, and classroom data with secure authentication and responsive admin portal.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      technologies: ["React", "Express.js", "MySQL", "Secure Auth", "Admin Portal"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "News Portal",
      description: "Dynamic Laravel-based content management system for posting news, categorizing content, managing user comments, and providing interactive user experience.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop",
      technologies: ["Laravel", "PHP", "MySQL", "Admin Panel", "User Interaction"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Car Rental Platform – Mufasa Business Group",
      description: "Full-stack car rental platform with booking management, user authentication, and payment processing. Built for Mufasa Business Group with modern UI and secure backend.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MySQL", "Authentication", "Booking Logic"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "UNITED CHRISTIAN CHURCH Website",
      description: "Modern church website with event calendar, sermon video streaming, member dashboard, and integrated donation system featuring responsive design and content management.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&h=300&fit=crop",
      technologies: ["ReactJS", "NodeJS", "MySQL", "Custom Theme"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "EchoX – The Super App",
      description: "All-in-One digital platform combining social interaction, news feeds, payment systems, and multiple services in a single comprehensive application with modern UI.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Investment Solutions Platform",
      description: "Financial platform for investment tracking, portfolio management, and market analysis with real-time data integration and secure transactions.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      technologies: ["React", "Express", "MySQL", "Financial APIs", "Charts"],
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
            Real-world applications solving business problems across various industries
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