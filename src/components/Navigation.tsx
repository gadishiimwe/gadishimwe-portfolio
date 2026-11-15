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
    <nav className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${isScrolled ? "backdrop-blur-glass border-hairline py-3" : "border-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Gad Ishimwe — home"
          className="group relative grid h-12 w-12 place-items-center rounded-[15px] bg-gradient-to-br from-[#ffe28a] via-[#f4bd3f] to-[#c98716] p-[1px] shadow-[0_5px_18px_rgba(210,153,35,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(210,153,35,0.36)]"
        >
          <span className="absolute inset-[1px] rounded-[14px] border border-white/35" />
          <span className="absolute inset-[4px] rounded-[11px] border border-black/10" />
          <span className="relative flex items-baseline gap-[1px] text-[#211806] drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]">
            <span className="text-[25px] font-black leading-none tracking-[-0.09em]">G</span>
            <span className="text-[22px] font-extrabold leading-none tracking-[-0.08em]">I</span>
          </span>
          <span className="absolute bottom-[7px] right-[8px] h-[4px] w-[4px] rounded-full bg-[#fff8df] shadow-[0_0_7px_rgba(255,255,255,0.9)]" />
          <span className="pointer-events-none absolute inset-0 rounded-[15px] bg-gradient-to-br from-white/25 via-transparent to-black/10 opacity-80 transition-opacity group-hover:opacity-100" />
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
          <button onClick={() => setCvOpen(true)} className="px-4 h-10 rounded-full border border-hairline bg-card font-medium text-sm flex items-center gap-1 hover:bg-secondary transition-colors">
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
