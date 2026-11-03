import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, ArrowDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CVRequestDialog from "@/components/CVRequestDialog";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

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
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-glass shadow-nav py-3" : "py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="w-11 h-11 rounded-lg bg-accent text-accent-foreground border-[1.5px] border-foreground shadow-brutal grid place-items-center font-bold tracking-tight hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          GI
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="relative text-[15px] text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full after:transition-all">
              {l.label}
            </button>
          ))}
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="w-10 h-10 rounded-full border-[1.5px] border-foreground grid place-items-center hover:bg-accent hover:text-accent-foreground transition-colors">
            {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button onClick={() => setCvOpen(true)} className="px-4 h-10 rounded-full border-[1.5px] border-foreground bg-card shadow-brutal font-medium text-sm flex items-center gap-1 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            CV <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="w-10 h-10 rounded-full border-[1.5px] border-foreground grid place-items-center">
            {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <nav className="flex flex-col gap-6 mt-10">
                {links.map((l, i) => (
                  <button key={l.id} onClick={() => go(l.id)} className="text-left text-3xl font-bold tracking-tight hover:text-muted-foreground">
                    <span className="font-mono text-xs text-muted-foreground mr-3">0{i + 1}</span>{l.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CVRequestDialog open={cvOpen} onOpenChange={setCvOpen} />
    </nav>
  );
};

export default Navigation;
