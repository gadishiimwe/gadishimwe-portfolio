import WorkCard from "./WorkCard";
import SectionHeader from "./SectionHeader";

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
    <section id="projects" className="py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader eyebrow="Selected work" title={<>Projects that <span className="gradient-hero">ship</span>.</>} subtitle="7+ real-world projects by a full stack developer in Rwanda, including chatbots, management systems, and dynamic platforms." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <WorkCard key={p.id} title={p.title} description={p.description} image={p.image[0]} tags={p.technologies} liveUrl={p.liveUrl} githubUrl={p.githubUrl} detailId={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
