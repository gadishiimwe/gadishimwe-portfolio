import WorkCard from "./WorkCard";
import SectionHeader from "./SectionHeader";

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
    <section id="built-websites" className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader eyebrow="Client websites" title={<>Built for <span className="gradient-hero">real businesses</span>.</>} subtitle="Professional websites I've built for clients across various industries." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {websites.map((w) => (
            <WorkCard key={w.id} title={w.title} description={w.description} image={(w as any).images ? (w as any).images[0] : (w as any).image} tags={w.technologies} category={w.category} liveUrl={w.liveUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltWebsites;
