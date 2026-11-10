const Footer = () => {
  return (
    <footer className="border-t-[1.5px] border-foreground bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-6xl py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Have a project in mind?</p>
        <a href="mailto:gadyishimwe1@gmail.com" className="block text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tracking-tighter hover:text-accent transition-colors">
          Let's talk →
        </a>
        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between gap-3 font-mono text-xs opacity-70">
          <span>© {new Date().getFullYear()} GAD ISHIMWE</span>
          <span>Built in Kigali, Rwanda</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
