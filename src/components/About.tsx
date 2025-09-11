import profileImage from "@/assets/gad-profile-new.jpg";
import { Code, Database, Globe, Brain } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building complete web applications from React frontends to Express/Laravel backends"
    },
    {
      icon: Database,
      title: "Database & CRUD",
      description: "Expert in MySQL with full CRUD operations and secure data management"
    },
    {
      icon: Globe,
      title: "Digital Solutions",
      description: "Creating real-world applications including car rentals, school systems, and news portals"
    },
    {
      icon: Brain,
      title: "Emerging Technologies",
      description: "Exploring AI integration, blockchain, and machine learning for future-ready solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-80 h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-card bg-gradient-card">
              <img
                src={profileImage}
                alt="Gad ISHIMWE - Full Stack Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Gad ISHIMWE - Full Stack Developer</h2>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm <strong>Gad ISHIMWE</strong>, a full-stack developer from Rwanda with{" "}
                <strong>3 years of experience</strong> crafting digital solutions that matter. 
                As the founder of <strong>ViraX</strong>, I focus on building responsive, 
                user-friendly web applications that solve real problems and bring ideas to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 3 years, I've specialized in the MERN stack (MongoDB, Express, React, Node.js) 
                and MySQL, with extensive experience in tools like WordPress, Firebase, Tailwind CSS, and 
                emerging technologies like AI integration and blockchain. From backend APIs to front-end design, 
                I enjoy building systems that are both powerful and easy to use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my 3-year journey, I've successfully delivered projects like car rental platforms, 
                school and church websites, investment systems, and modern news portals. Each line of code I 
                write is aimed at delivering impact, performance, and real-world value.
              </p>
              <p className="text-muted-foreground font-semibold">
                <strong>Always learning, always building</strong> — I'm committed to pushing boundaries 
                and growing as a developer every day.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;