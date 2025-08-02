import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const skillCategories = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 98 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Bootstrap", level: 92 },
      { name: "Sass", level: 91 },
      { name: "WordPress", level: 92 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 87 },
      { name: "REST APIs", level: 92 },
      { name: "Authentication", level: 89 },
    ],
    database: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "Database Design", level: 87 },
      { name: "CRUD Operations", level: 95 },
    ],
    emerging: [
      { name: "AI Integration", level: 75 },
      { name: "Blockchain", level: 70 },
      { name: "Machine Learning", level: 65 },
      { name: "Cloud Services", level: 80 },
    ],
    advanced: [
      { name: "Git & GitHub", level: 95 },
      { name: "Project Management", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Payment Integration", level: 82 },
      { name: "Performance Optimization", level: 86 },
    ]
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise from intuitive frontends to secure backends and intelligent systems
          </p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database & Tools</TabsTrigger>
            <TabsTrigger value="emerging">Emerging Tech</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Skills</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="gradient-card p-8 rounded-xl shadow-card">
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;