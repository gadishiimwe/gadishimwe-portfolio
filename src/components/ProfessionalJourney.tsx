import { MapPin, Building, Calendar } from "lucide-react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Founder & Lead Developer",
      company: "ViraX",
      location: "Remote",
      period: "2022 - Present",
      type: "Current",
      description: "Leading development initiatives and building solutions that matter",
      achievements: [
        "Established startup development company with worldwide clients",
        "Built multiple successful web applications and platforms",
        "Specialized in modern tech stack including React and Node.js",
        "Developed car rentals, school systems, and news portals",
        "Implemented secure authentication and payment systems"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2021 - Present",
      type: "Ongoing",
      description: "Contributing solutions with applications for clients, focusing on React, Node.js databases, APIs, and modern tech stack",
      achievements: [
        "Built robust web applications with React and Express",
        "Integrated MySQL and MongoDB for data management",
        "Created responsive designs with Tailwind CSS",
        "Developed RESTful APIs and third-party integrations",
        "Implemented modern authentication and payment systems",
        "Optimized performance for large-scale applications"
      ]
    },
    {
      title: "Web Developer",
      company: "Various Projects",
      location: "Rwanda",
      period: "2021 - 2022",
      type: "Contract",
      description: "Developed professional portfolio building, specialized website development, UI design, front-end building. Also worked with WordPress, CSS development",
      achievements: [
        "Built professional portfolios and business websites",
        "Specialized in WordPress theme development and customization",
        "Created responsive designs with modern CSS techniques",
        "Collaborated with clients to deliver pixel-perfect designs",
        "Optimized websites for performance and SEO",
        "Gained extensive experience in client communication"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="gradient-hero">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From self-taught developer to tech entrepreneur - building solutions that matter
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-px"></div>
            
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background z-10"></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="gradient-card p-6 rounded-xl shadow-card border border-border/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        experience.type === 'Current' ? 'bg-primary text-white' :
                        experience.type === 'Ongoing' ? 'bg-accent text-white' :
                        'bg-secondary text-foreground'
                      }`}>
                        {experience.type}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="mr-4">{experience.company}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;