import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Database, Globe, Brain, Sparkles, Star, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const projects = [
    {
      id: "gadbot",
      title: "GadBot",
      description: "AI chatbot built with React & Node.js, deployed on Vercel.",
      fullDescription: "GadBot is an intelligent AI chatbot that provides conversational AI capabilities. Built with modern web technologies, it features natural language processing, context-aware responses, and a sleek user interface. The application demonstrates advanced integration with AI APIs and real-time communication patterns.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "AI API", "Vercel", "WebSocket", "Express"],
      liveUrl: "https://gadbot.vercel.app/",
      githubUrl: "https://github.com/gadishiimwe/nextjs-ai-chatbot",
      features: [
        "Natural language processing",
        "Real-time chat interface",
        "Context-aware responses",
        "Responsive design",
        "AI API integration",
        "Modern UI/UX"
      ],
      challenges: [
        "Implementing real-time communication",
        "AI API integration and optimization",
        "Maintaining conversation context",
        "Ensuring responsive performance"
      ],
      date: "2024",
      gallery: [
        "https://i.pinimg.com/736x/89/b6/cb/89b6cb388a1ea5ea64ca88ad35cc7579.jpg",
        "https://i.pinimg.com/1200x/2a/55/f5/2a55f58ad046f8fb4befd29a81344b84.jpg",
        "https://i.pinimg.com/736x/9b/32/fa/9b32fa6a2c4c9e07645c18aa829992fb.jpg",
        "https://i.pinimg.com/736x/e8/ad/0f/e8ad0fc6c8e52574d4139f930585b6b8.jpg"
      ]
    },
    {
      id: "gadvoiceai",
      title: "GadVoiceAI",
      description: "Speech-to-text web app using Web Speech API.",
      fullDescription: "GadVoiceAI is a cutting-edge speech-to-text application that leverages the Web Speech API to provide accurate voice recognition capabilities. The app features real-time transcription, voice commands, and accessibility features for users with different needs.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
      technologies: ["React", "Web Speech API", "JavaScript", "HTML5", "CSS3"],
      liveUrl: "https://gadvoiceai.vercel.app/",
      githubUrl: "https://github.com/gadishiimwe/gadvoiceai",
      features: [
        "Real-time speech recognition",
        "Voice command processing",
        "Multiple language support",
        "Accessibility features",
        "Offline capability",
        "Mobile responsive"
      ],
      challenges: [
        "Browser compatibility issues",
        "Accuracy optimization",
        "Privacy considerations",
        "Performance optimization"
      ],
      date: "2024",
      gallery: [
        "https://i.pinimg.com/736x/7e/75/a8/7e75a850cac85ff827bddcebe8896690.jpg",
        "https://i.pinimg.com/736x/0f/a4/50/0fa450c87aecc7d9d77754c411fecb8c.jpg",
        "https://i.pinimg.com/1200x/bd/55/57/bd55573630c44a0d3f732b6a7b771b70.jpg",
        "https://i.pinimg.com/1200x/61/47/d2/6147d2243788f5a114d60c2daf88796d.jpg"
      ]
    },
    {
      id: "student-management-system",
      title: "Student Management System",
      description: "Full-stack CRUD app with authentication and MySQL.",
      fullDescription: "A comprehensive student management system built with modern web technologies. Features include student registration, course management, grade tracking, and administrative dashboards. The system provides a complete solution for educational institutions to manage student data efficiently.",
      image: "/src/assets/student-management-system.jpg",
      technologies: ["React", "Node.js", "MySQL", "Express", "JWT", "bcrypt"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/student-management-system",
      features: [
        "Student registration and profiles",
        "Course and enrollment management",
        "Grade tracking and reporting",
        "Administrative dashboard",
        "User authentication",
        "Data export capabilities"
      ],
      challenges: [
        "Complex database relationships",
        "Security implementation",
        "Scalability considerations",
        "User experience design"
      ],
      date: "2023",
      gallery: [
        "https://i.pinimg.com/1200x/7c/b7/1c/7cb71c8af071a19e2622ebd0fad81caa.jpg",
        "https://i.pinimg.com/736x/a4/4d/31/a44d31105234d2b059a918411aeba961.jpg",
        "https://i.pinimg.com/1200x/a9/39/0a/a9390a71e4bdae34e94e9915119e89e0.jpg",
        "https://i.pinimg.com/736x/65/31/b7/6531b7854eaee308e8ed7e3c2cc54b86.jpg"
      ]
    },
    {
      id: "news-portal",
      title: "News Portal",
      description: "Dynamic CMS with admin panel and responsive design.",
      fullDescription: "A full-featured news portal with content management system capabilities. Includes admin panel for content creation, user management, and analytics. The platform provides a modern, responsive interface for publishing and consuming news content.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/newsportal",
      features: [
        "Content management system",
        "Admin panel",
        "User authentication",
        "Category management",
        "Search functionality",
        "Responsive design"
      ],
      challenges: [
        "Content organization",
        "Performance optimization",
        "SEO implementation",
        "Security hardening"
      ],
      date: "2023",
      gallery: [
        "https://i.pinimg.com/736x/f8/1a/5c/f81a5c14a7b2612658819ff6ba91789d.jpg",
        "https://i.pinimg.com/1200x/81/8e/d6/818ed612c95171d758706be730be0417.jpg",
        "https://i.pinimg.com/1200x/de/76/cd/de76cd7f6674aeab4ca622f507a16288.jpg",
        "https://i.pinimg.com/1200x/01/6e/84/016e8481cdfe3c633486a4d7fa03d36b.jpg"
      ]
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      description: "PHP-based system managing patients, doctors, and appointments.",
      fullDescription: "A comprehensive hospital management system designed to streamline healthcare operations. Features patient management, doctor scheduling, appointment booking, and medical record keeping. Built with PHP and MySQL for reliable performance.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "jQuery"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/Hospital-Management-System-PHP",
      features: [
        "Patient management",
        "Doctor scheduling",
        "Appointment booking",
        "Medical records",
        "Inventory management",
        "Reporting system"
      ],
      challenges: [
        "Healthcare data privacy",
        "Complex workflow management",
        "User role permissions",
        "Data integrity"
      ],
      date: "2023",
      gallery: [
        "https://i.pinimg.com/1200x/bf/40/b5/bf40b5d3f62015aac482a23f7eb31feb.jpg",
        "https://i.pinimg.com/736x/65/e3/42/65e342aa81907bfd887d576978e9a48c.jpg",
        "https://i.pinimg.com/736x/ba/15/e7/ba15e7423c353db986eb8558b09db87a.jpg",
        "https://i.pinimg.com/736x/9b/3c/60/9b3c606bfed8e2dbdcaa4ea8dbd8dd42.jpg"
      ]
    },
    {
      id: "car-rental-system",
      title: "Car Rental System",
      description: "Rental booking platform with authentication and SQL database.",
      fullDescription: "A modern car rental platform that allows users to browse, book, and manage vehicle rentals. Features include user authentication, booking management, vehicle inventory, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MySQL", "Express", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/carrental",
      features: [
        "Vehicle inventory management",
        "Online booking system",
        "User authentication",
        "Payment processing",
        "Booking management",
        "Admin dashboard"
      ],
      challenges: [
        "Payment integration",
        "Inventory synchronization",
        "Booking conflicts",
        "Mobile optimization"
      ],
      date: "2023",
      gallery: [
        "https://i.pinimg.com/736x/5c/fd/8d/5cfd8dfd56441350390e59a21f53e034.jpg",
        "https://i.pinimg.com/736x/bc/0e/1b/bc0e1bf97f18f68782c187678e55dbbf.jpg",
        "https://i.pinimg.com/1200x/19/0a/a7/190aa720e6e898aa47984e7ba9e0146d.jpg",
        "https://i.pinimg.com/736x/06/5b/8c/065b8c187e4f90efe2ddbcd0161540d8.jpg"
      ]
    },
    {
      id: "avms",
      title: "AVMS",
      description: "Apartment Visitor Management System for secure visitor logging.",
      fullDescription: "Apartment Visitor Management System (AVMS) provides secure visitor logging and management for residential complexes. Features include visitor check-in/check-out, resident notifications, and comprehensive reporting.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Ajax"],
      liveUrl: "#",
      githubUrl: "https://github.com/gadishiimwe/avms",
      features: [
        "Visitor check-in/check-out",
        "Resident notifications",
        "Security logging",
        "Reporting dashboard",
        "QR code integration",
        "Mobile responsive"
      ],
      challenges: [
        "Security protocols",
        "Real-time notifications",
        "Data privacy compliance",
        "User experience flow"
      ],
      date: "2023",
      gallery: [
        "https://i.pinimg.com/736x/74/56/72/7456724f58bf981a20d836bc69b0a9fe.jpg",
        "https://i.pinimg.com/736x/93/a2/76/93a27634916f871520409363f2eeb075.jpg",
        "https://i.pinimg.com/1200x/34/ff/21/34ff21ec279c1002cd21abfbc9aa13c7.jpg",
        "https://i.pinimg.com/1200x/77/be/e1/77bee11d4d712fd95a2d04c850515aff.jpg"
      ]
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
  return (
    <div className="min-h-screen bg-background">
      <div id="top"></div>
      <Navigation />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      'React': Code,
      'Node.js': Globe,
      'MySQL': Database,
      'PHP': Code,
      'AI API': Brain,
      'Web Speech API': Globe,
      'JavaScript': Code,
      'Express': Globe,
      'JWT': Globe,
      'bcrypt': Globe,
      'HTML5': Code,
      'CSS3': Code,
      'Bootstrap': Code,
      'jQuery': Code,
      'Stripe': Globe,
      'Ajax': Globe
    };
    return iconMap[tech] || Code;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <Sparkles className="w-20 h-20 text-primary" />
          </div>
          <div className="absolute top-32 right-20">
            <Star className="w-16 h-16 text-accent" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <Zap className="w-12 h-12 text-secondary" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{project.date}</span>
                <Trophy className="w-4 h-4 text-accent ml-2" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="relative mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.technologies.map((tech, index) => {
                const IconComponent = getTechIcon(tech);
                return (
                  <Badge key={index} variant="secondary" className="px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105">
                    <IconComponent className="w-3 h-3 mr-2" />
                    {tech}
                  </Badge>
                );
              })}
            </div>

            <div className="flex justify-center gap-4">
              {project.liveUrl !== "#" && (
                <Button size="lg" className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              )}
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary shadow-lg hover:shadow-xl" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Overview & Features */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Project Description */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Project Overview</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold">Key Features</h3>
                </div>
                <div className="grid gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-200">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            {project.gallery && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold">Project Gallery</h3>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore the visual journey and key moments from this project
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <p className="text-sm font-medium">Screenshot {index + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-3xl font-bold">Technical Challenges</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The obstacles overcome and lessons learned during development
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Trophy className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground leading-relaxed font-medium">{challenge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
