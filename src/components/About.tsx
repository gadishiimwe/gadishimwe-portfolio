import profileImage from "@/assets/gad-profile-new.jpg";
import { Code, Database, Globe, Brain } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React frontends + Node.js/PHP backends for complete web applications"
    },
    {
      icon: Database,
      title: "Database & CRUD Systems",
      description: "MySQL, SQL, authentication, and secure data management"
    },
    {
      icon: Globe,
      title: "Real-World Apps",
      description: "School, hospital, rental, and visitor management systems"
    },
    {
      icon: Brain,
      title: "Emerging Tech",
      description: "Exploring AI APIs and modern deployment tools"
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
                I'm Gad Ishimwe, a full-stack developer passionate about creating functional and user-friendly 
                web applications. I specialize in React, Node.js, PHP, and MySQL with additional experience 
                deploying apps on Vercel, Netlify, and Heroku.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 2+ years of self-learning and project building, I've developed applications like 
                GadBot (AI chatbot), Student Management System, News Portal, Car Rental Platform, and Hospital 
                Management System.
              </p>
              <p className="text-muted-foreground font-semibold">
                I focus on building real-world applications that solve actual problems with clean, scalable code.
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