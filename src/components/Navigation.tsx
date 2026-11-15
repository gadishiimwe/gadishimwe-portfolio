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

const ThemeToggle = ({ dark, onToggle }: { dark: boolean; onToggle: () => void }) => (
  <button
    type="button"
    role="switch"
    aria-checked={dark}
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    onClick={onToggle}
    className={`group relative flex h-10 w-[76px] items-center rounded-full border p-1 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${dark ? "justify-end border-amber-300/50 bg-[#17130b] shadow-[inset_0_0_14px_rgba(251,191,36,.12),0_0_18px_rgba(251,191,36,.08)]" : "justify-start border-sky-300/70 bg-sky-100 shadow-[inset_0_0_14px_rgba(56,189,248,.12)]"}`}
  >
    <span className={`absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500 ${dark ? "opacity-100" : "opacity-0"}`}>
      <span className="absolute right-3 top-2 h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_7px_2px_rgba(253,230,138,.7)]" />
      <span className="absolute right-7 bottom-2 h-0.5 w-0.5 rounded-full bg-amber-100" />
      <span className="absolute left-4 top-3 h-0.5 w-0.5 rounded-full bg-amber-100" />
    </span>
    <span className={`relative z-10 grid h-7 w-7 place-items-center rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${dark ? "rotate-[360deg] bg-gradient-to-br from-amber-200 to-orange-400 text-[#38210a]" : "rotate-0 bg-gradient-to-br from-white to-sky-200 text-sky-700"}`}>
      <Sun className={`absolute h-4 w-4 transition-all duration-300 ${dark ? "scale-0 rotate-[-90deg] opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-300 ${dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`} />
    </span>
    <span className={`relative z-10 mr-1 text-[9px] font-semibold uppercase tracking-wider transition-colors duration-300 ${dark ? "text-amber-100/70" : "text-sky-800/65"}`}>{dark ? "Night" : "Day"}</span>
  </button>
);

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
    <nav className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${isScrolled ? "backdrop-blur-glass border-hairline py-3" : "border-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" aria-label="Gad Ishimwe home" className="w-11 h-11 rounded-xl overflow-hidden grid place-items-center border border-amber-400/70 bg-[#171717] p-1.5 shadow-[0_3px_14px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:shadow-[0_4px_18px_rgba(212,164,67,0.28)]">
          <img src="/favicon.ico" alt="Gad Ishimwe logo" className="h-[36px] w-[36px] object-contain object-center block" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="relative text-[15px] text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full after:transition-all">
              {l.label}
            </button>
          ))}
          <ThemeToggle dark={dark} onToggle={() => setDark((value) => !value)} />
          <button onClick={() => setCvOpen(true)} className="px-4 h-10 rounded-full border border-hairline bg-card font-medium text-sm flex items-center gap-1 hover:bg-secondary transition-colors">
            CV <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle dark={dark} onToggle={() => setDark((value) => !value)} />
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
