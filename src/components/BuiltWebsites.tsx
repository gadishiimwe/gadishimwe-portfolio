import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Sparkles } from "lucide-react";

const BuiltWebsites = () => {
  const websites = [
    {
      id: "vsky-spa",
      title: "V&SKY SPA",
      description: "Luxury spa website with booking system, service showcase, and professional design.",
      images: [
        "https://lh3.googleusercontent.com/p/AF1QipPMjZAS2N_rVb3JzP864UUaa08F080lPSnC8Hlc=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/p/AF1QipPpgwr513q8lLP49mkvkqn0xnaAuaMoSsLtSyVS=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/p/AF1QipPX0i94JZeMcWoYj3sZndErm7mwHWo4ZXxpoeYN=s680-w680-h510-rw"
      ],
      technologies: ["React", "Node.js", "Booking System", "Responsive Design"],
      liveUrl: "https://vskyspa.com",
      category: "Spa & Wellness"
    },
    {
      id: "restaurant-website",
      title: "BOHO Restaurant",
      description: "Elegant restaurant website with menu display, reservations, and online ordering.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwE9gYq9MbXODyxw4MjgzXUvwl0T7Un23D5c5MBulInolDvVjbLU1s9XAJ3PKqpWzxIBYZP8QxNHFKUutKMJnlAD3wOeSrE7hmYpNNw0J0PbwoQYJzZseKCLHu6Pz6dNObh8S49=s680-w680-h510-rw",
      technologies: ["React", "Node.js", "Payment Integration", "CMS"],
      liveUrl: "https://www.boho.rw/",
      category: "Restaurant"
    },

    {
      id: "delta-2-construction",
      title: "Delta 2 Construction Company",
      description: "Professional construction company website showcasing services, projects, and contact information.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzLf875WoFBz8bpK1Z_6gQwKxzzl4ib8dqVIcHvDnFi-2VZJVhGeF_CAt5j1be6NlY-fjGv32Zmo2mXJakyN0xvl3J0dCd5ecNHgYqtckn4UzvneyeWSnznwh1povmC4Jk94ZA=s680-w680-h510-rw",
      technologies: ["React", "Responsive Design"],
      liveUrl: "https://delta2constract.vercel.app/",
      category: "Construction"
    },

    

  ];

  return (
    <section id="built-websites" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built Websites</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional websites I've built for clients across various industries, from spas to e-commerce platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <Card
              key={index}
              className="gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden group relative"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="aspect-video overflow-hidden relative">
                {website.images ? (
                  <div className="relative w-full h-full">
                    {website.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${website.title} - Image ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          imgIndex === 0 ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                        } hover:scale-105`}
                        style={{ zIndex: website.images.length - imgIndex }}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={website.image}
                    alt={website.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-black/70 text-white border-0">
                    {website.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{website.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {website.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {website.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="hero" className="w-full hover:scale-105 transition-transform duration-200" asChild>
                  <a href={website.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltWebsites;
