import { MapPin, Building, Calendar } from "lucide-react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: "Full-Stack Developer (Freelance & Personal Projects)",
      company: "Remote",
      location: "Remote",
      period: "2022 - Present",
      type: "Current",
      description: "Building and deploying web applications using React, Node.js, PHP, and MySQL. Focused on practical projects that solve real-world problems and improve user experience.",
      achievements: [
        "Developed 7+ full-stack applications including car rental, student management, news portal, hospital management, and visitor tracking systems.",
        "Deployed projects on Vercel, Netlify, and Heroku with live demos.",
        "Implemented secure authentication, CRUD operations, and responsive design.",
        "Collaborated via GitHub and shared work with public repositories."
      ]
    },
    {
      title: "Web Developer (Learning & Freelance Work)",
      company: "Rwanda",
      location: "Rwanda",
      period: "2021 - 2022",
      type: "Freelance",
      description: "Gained practical experience building websites and small applications while completing online certifications and practicing coding fundamentals.",
      achievements: [
        "Built personal and client websites using WordPress, HTML, CSS, and PHP.",
        "Learned MySQL database design and integrated CRUD operations.",
        "Delivered responsive, user-friendly designs for local clients.",
        "Completed multiple certifications (FreeCodeCamp, Udacity, Edureka)."
      ]
    },
    {
      title: "Self-Learner (Programming Foundations)",
      company: "Rwanda",
      location: "Rwanda",
      period: "2020 - 2021",
      type: "Learning",
      description: "Focused on mastering programming basics, algorithms, and web development through structured online learning.",
      achievements: [
        "Earned certifications in Web Design, Programming, and AI fundamentals.",
        "Completed foundational projects including calculators, portfolio websites, and simple apps.",
        "Ranked Top 20% in Software Development coursework at Glory Academy."
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
            From self-taught learner to full-stack developer — building projects that solve real problems
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
                        experience.type === 'Freelance' ? 'bg-accent text-white' :
                        experience.type === 'Learning' ? 'bg-secondary text-foreground' :
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