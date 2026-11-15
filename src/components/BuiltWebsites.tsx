import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe } from "lucide-react";
import bohoRestaurantPreview from "@/assets/boho-restaurant-preview.webp";
import deltaTwoConstructionPreview from "@/assets/delta-two-construction-preview.webp";

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
      image: bohoRestaurantPreview,
      technologies: ["React", "Node.js", "Payment Integration", "CMS"],
      liveUrl: "https://www.boho.rw/",
      category: "Restaurant"
    },
    {
      id: "delta-2-construction",
      title: "Delta 2 Construction Company",
      description: "Professional construction company website showcasing services, projects, and contact information.",
      image: deltaTwoConstructionPreview,
      technologies: ["React", "Responsive Design"],
      liveUrl: "https://delta2constract.vercel.app/",
      category: "Construction"
    },
  ];

  return (
    <section id="built-websites" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-accent/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built Websites</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional websites I've built for clients across various industries, from spas to e-commerce platforms
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:pb-1">
            <span className="text-2xl font-medium tracking-tight text-foreground">0{websites.length}</span>
            <span>Live websites</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((website) => (
            <Card
              key={website.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-hairline bg-card transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-accent/70 focus-within:border-accent/70"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-secondary">
                {website.images ? (
                  <div className="relative w-full h-full">
                    {website.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${website.title} - Image ${imgIndex + 1}`}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-500 ${
                          imgIndex === 0 ? "opacity-100" : "opacity-0 hover:opacity-100"
                        } group-hover:scale-[1.025]`}
                        style={{ zIndex: website.images.length - imgIndex }}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={website.image}
                    alt={`${website.title} website preview`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                )}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="rounded-full border-hairline bg-background/90 text-foreground backdrop-blur-sm">
                    {website.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full border-hairline bg-background/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent/70 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
              <CardHeader className="flex-1 pb-4">
                <CardTitle className="text-xl leading-snug transition-colors duration-300 group-hover:text-foreground">
                  {website.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground">
                  {website.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-5">
                  {website.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full border-hairline bg-secondary/60 text-xs font-normal text-secondary-foreground transition-colors duration-200 hover:bg-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="hero-outline" className="h-11 w-full justify-between rounded-full border-hairline px-5" asChild>
                  <a href={website.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${website.title}`}>
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Visit Website
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
