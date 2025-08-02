import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Founder & Lead Developer",
      company: "EchoX",
      location: "Rwanda",
      period: "2023 - Present",
      description: "Founded and leading a tech company focused on building digital solutions for businesses across Rwanda. Managing multiple client projects and developing innovative web applications.",
      achievements: [
        "Successfully delivered 10+ full-stack web applications",
        "Built car rental, school management, and news portal systems",
        "Established strong client relationships across various industries",
        "Led development of AI-integrated projects and emerging tech solutions"
      ],
      type: "current"
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Rwanda",
      period: "2022 - Present",
      description: "Developing custom web applications for clients including church websites, business management systems, and investment platforms using modern tech stack.",
      achievements: [
        "Delivered UNITED CHRISTIAN CHURCH website with full CMS",
        "Built Mufasa Business Group car rental platform",
        "Developed ECHOX super app with multiple integrated services",
        "Implemented secure authentication and payment systems"
      ],
      type: "current"
    },
    {
      title: "Web Developer",
      company: "Various Projects",
      location: "Rwanda",
      period: "2021 - 2022",
      description: "Started professional journey building WordPress sites and learning modern web development. Gained expertise in CRUD operations, database management, and API development.",
      achievements: [
        "Mastered WordPress development and custom themes",
        "Learned MySQL database design and optimization",
        "Built first full-stack applications with React and Node.js",
        "Completed multiple certification programs in programming"
      ],
      type: "past"
    },
    {
      title: "Student & Learner",
      company: "Self-Directed Learning",
      location: "Rwanda",
      period: "2020 - 2021",
      description: "Intensive self-learning period focusing on programming fundamentals, web development, and obtaining industry certifications from various platforms.",
      achievements: [
        "Earned certificates from FreeCodeCamp, HubSpot, and UDACITY",
        "Completed Java, C++, and HTML certifications from US Chicago",
        "Built foundational knowledge in multiple programming languages",
        "Participated in EdHeroes Global Forum 2024"
      ],
      type: "learning"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From self-taught developer to tech entrepreneur - building solutions that matter
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                  <div className="ml-16">
                    <Card className="gradient-card border-border hover:shadow-card transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-base">
                              <Building className="w-4 h-4" />
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col lg:items-end gap-1">
                            <Badge
                              variant={exp.type === 'current' ? 'default' : 'secondary'}
                              className="w-fit"
                            >
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.period}
                            </Badge>
                            <Badge variant="outline" className="w-fit">
                              <MapPin className="w-3 h-3 mr-1" />
                              {exp.location}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                {achievement.replace('•', '')}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;