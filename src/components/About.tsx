import profileImage from "@/assets/gad-profile-main.jpg";
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building real-world applications that solve actual problems with clean, scalable code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-card">
                <img
                  src={profileImage}
                  alt="Gad ISHIMWE - Full Stack Developer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h3 className="text-2xl font-bold">Gad ISHIMWE</h3>
              <p className="text-lg text-primary font-semibold">Full Stack Developer</p>
              <p className="text-muted-foreground">Kigali, Rwanda 🇷🇼</p>
            </div>
          </div>

          <div className="space-y-6 lg:pt-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Gad Ishimwe, a <span className="font-semibold text-foreground">full-stack developer from Rwanda</span> passionate about creating functional and user-friendly
                web applications. As a skilled web developer in Rwanda, I specialize in <span className="text-primary font-medium">React, Node.js, PHP, and MySQL</span> with additional experience
                deploying apps on Vercel, Netlify, and Heroku.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past <span className="font-semibold text-foreground">2+ years</span> of self-learning and project building, I've developed applications like 
                <span className="text-accent font-medium"> GadBot (AI chatbot), Student Management System, News Portal, Car Rental Platform,</span> and <span className="text-accent font-medium">Hospital 
                Management System</span>.
              </p>
              <div className="p-6 rounded-xl bg-gradient-card border border-border mt-6">
                <p className="text-lg font-semibold text-foreground leading-relaxed">
                  💡 I focus on building real-world applications that solve actual problems with clean, scalable code.
                </p>
              </div>
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