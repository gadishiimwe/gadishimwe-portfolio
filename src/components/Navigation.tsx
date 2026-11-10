import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Sun, Moon, Download } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CVRequestDialog from "@/components/CVRequestDialog";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? "pt-3" : "pt-5"}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`flex items-center justify-between rounded-full pl-2 pr-2 py-2 transition-all duration-500 ${isScrolled ? "backdrop-blur-glass border border-border shadow-card" : "border border-transparent"}`}>
          <Link to="/" className="flex items-center gap-2.5 pl-1">
            <span className="w-9 h-9 rounded-full gradient-button text-accent-foreground grid place-items-center font-display font-bold text-sm">GI</span>
            <span className="hidden sm:block font-display font-semibold tracking-tight">Gad Ishimwe</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full bg-secondary/60 p-1">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="w-9 h-9 rounded-full grid place-items-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setCvOpen(true)} className="hidden md:flex px-4 h-9 rounded-full bg-foreground text-background font-medium text-sm items-center gap-2 hover:opacity-90 transition-opacity">
              <Download className="w-3.5 h-3.5" /> Resume
            </button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="md:hidden w-9 h-9 rounded-full grid place-items-center hover:bg-secondary"><Menu className="h-5 w-5" /></button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <nav className="flex flex-col gap-5 mt-10">
                  {links.map((l) => (
                    <button key={l.id} onClick={() => go(l.id)} className="text-left font-display text-3xl font-semibold tracking-tight hover:text-accent transition-colors">
                      {l.label}
                    </button>
                  ))}
                  <button onClick={() => { setIsOpen(false); setCvOpen(true); }} className="mt-4 h-11 rounded-full bg-foreground text-background font-medium">Request resume</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <CVRequestDialog open={cvOpen} onOpenChange={setCvOpen} />
    </nav>
  );
};

export default Navigation;
