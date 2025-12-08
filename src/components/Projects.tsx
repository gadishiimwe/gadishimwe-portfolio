import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import studentManagementImage from "@/assets/student-management-system.jpg";

const Projects = () => {
  const projects = [
    {
      id: "gadbot",
      title: "GadBot",
      description: "AI chatbot built with React & Node.js, deployed on Vercel.",
      image: ["https://www.revechat.com/wp-content/uploads/2020/01/what-is-a-chatbot.webp"],
      technologies: ["React", "Node.js", "AI API", "Vercel"],
      liveUrl: "https://gadbot.vercel.app/",
      githubUrl: "https://github.com/gadishiimwe/nextjs-ai-chatbot"
    },
    {
      id: "gadvoiceai",
      title: "GadVoiceAI",
      description: "Speech-to-text web app using Web Speech API.",
      image: ["https://i.pinimg.com/736x/c4/30/c0/c430c000a63623f5edb4170820a796db.jpg"],
      technologies: ["React", "Web Speech API", "JavaScript"],
      liveUrl: "https://gadvoiceai.vercel.app/",
      githubUrl: "https://github.com/gadishiimwe/gadvoiceai"
    },
    {
      id: "student-management-system",
      title: "Student Management System",
      description: "Full-stack CRUD app with authentication and MySQL.",
      image: ["https://i.pinimg.com/736x/13/21/11/132111de59de8ba651398c23e2ec97a3.jpg"],
      technologies: ["React", "Node.js", "MySQL", "Authentication"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/student-management-system"
    },
    {
      id: "news-portal",
      title: "News Portal",
      description: "Dynamic CMS with admin panel and responsive design.",
      image: ["https://i.pinimg.com/1200x/90/b8/d4/90b8d46ef5de9c3fae4c8ee425f2833c.jpg"],
      technologies: ["PHP", "MySQL", "CMS", "Admin Panel"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/newsportal"
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      description: "PHP-based system managing patients, doctors, and appointments.",
      image: ["https://i.pinimg.com/1200x/0c/70/3f/0c703f47d0b1cdcb4d7216807b646997.jpg"],
      technologies: ["PHP", "MySQL", "CRUD", "Admin Dashboard"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/Hospital-Management-System-PHP"
    },
    {
      id: "car-rental-system",
      title: "Car Rental System",
      description: "Rental booking platform with authentication and SQL database.",
      image: ["https://i.pinimg.com/736x/f6/8d/97/f68d9788c99bf3664aca7b6743e5b845.jpg"],
      technologies: ["React", "Node.js", "MySQL", "Booking System"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/carrental"
    },
    {
      id: "avms",
      title: "AVMS",
      description: "Apartment Visitor Management System for secure visitor logging.",
      image: ["https://i.pinimg.com/736x/f9/a8/d3/f9a8d387c2c5170c85739c31ec0122e4.jpg"],
      technologies: ["PHP", "MySQL", "Authentication", "Logs"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/avms"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            7+ real-world projects by a full stack developer in Rwanda, including chatbots, management systems, and dynamic platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden group relative"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="aspect-video overflow-hidden relative">
                {project.image ? (
                  <div className="relative w-full h-full">
                    {project.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          imgIndex === 0 ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                        } hover:scale-105`}
                        style={{ zIndex: project.image.length - imgIndex }}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
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
                      className="text-xs hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mb-3">
                  {project.liveUrl !== "#" && (
                    <Button size="sm" variant="hero" className="flex-1 hover:scale-105 transition-transform duration-200" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="hero-outline" className="flex-1 hover:scale-105 transition-transform duration-200" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
                <Link to={`/project/${project.id}#top`}>
                  <Button size="sm" variant="outline" className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 group/btn">
                    <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;