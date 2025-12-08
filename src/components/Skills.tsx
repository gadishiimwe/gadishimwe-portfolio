import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const skillCategories = {
    frontend: [
      { name: "ReactJS", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 80 },
      { name: "Express", level: 82 },
    ],
    database: [
      { name: "MySQL", level: 88 },
      { name: "SQL basics", level: 85 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Vercel", level: 80 },
      { name: "Netlify", level: 80 },
      { name: "Heroku", level: 75 },
    ]
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium text-foreground">{name}</span>
        <span className="text-lg font-bold text-primary">{level}%</span>
      </div>
      <Progress value={level} className="h-3" />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-hero">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm border border-border/50">
            <TabsTrigger value="frontend" className="data-[state=active]:bg-primary data-[state=active]:text-white">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-primary data-[state=active]:text-white">Backend</TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-primary data-[state=active]:text-white">Databases</TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-primary data-[state=active]:text-white">Other Tools</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;