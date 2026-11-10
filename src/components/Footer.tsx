import { ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border">
    <div className="pointer-events-none absolute inset-0 aurora opacity-70" />
    <div className="relative container mx-auto px-6 max-w-6xl py-20">
      <p className="text-sm text-muted-foreground mb-4">Have a project in mind?</p>
      <a href="mailto:gadyishimwe1@gmail.com" className="group inline-flex items-center gap-4 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tracking-tighter">
        <span className="gradient-hero">Let's talk</span>
        <ArrowUpRight className="w-[0.7em] h-[0.7em] text-accent group-hover:rotate-45 transition-transform" />
      </a>
      <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Gad Ishimwe</span>
        <span>Built in Kigali, Rwanda</span>
      </div>
    </div>
  </footer>
);

export default Footer;
