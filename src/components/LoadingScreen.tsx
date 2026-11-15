import { useEffect, useRef, useState } from "react";
import { Terminal, ArrowUpRight } from "lucide-react";

const bootLines = [
  "Initializing Gad Ishimwe portfolio...",
  "Loading developer profile",
  "Mounting selected projects",
  "Connecting ideas to solutions",
  "All systems ready",
];

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const onLoadingCompleteRef = useRef(onLoadingComplete);

  // Keep the latest callback without restarting the boot sequence on re-renders.
  useEffect(() => {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => onLoadingCompleteRef.current(), 450);
      return () => window.clearTimeout(timer);
    }

    const timers = bootLines.map((_, index) =>
      window.setTimeout(() => setVisibleLines(index + 1), 500 + index * 1800)
    );
    const finish = window.setTimeout(() => setIsExiting(true), 9400);
    const complete = window.setTimeout(() => onLoadingCompleteRef.current(), 10000);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(finish);
      window.clearTimeout(complete);
    };
  }, []);

  const skipIntro = () => {
    setIsExiting(true);
    window.setTimeout(() => onLoadingCompleteRef.current(), 220);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#090b0a] px-5 text-[#e8eee8] transition-all duration-500 ${isExiting ? "pointer-events-none opacity-0 scale-[1.02]" : "opacity-100 scale-100"}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative w-full max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-white/40 sm:text-xs">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" /> GAD OS <span className="text-white/20">/</span> BOOT SEQUENCE</span>
          <span>v1.0.26</span>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d110f]/95 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.035] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6259]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffc04d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#35c96b]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-white/40"><Terminal className="h-3.5 w-3.5" /> welcome.sh</div>
            <span className="w-10" />
          </div>

          <div className="min-h-[310px] px-5 py-6 font-mono sm:min-h-[330px] sm:px-8 sm:py-8">
            <div className="mb-7">
              <div className="text-xs text-emerald-400/80">gad@portfolio:~$ <span className="text-white/80">./start-portfolio.sh</span></div>
              <h1 className="mt-4 text-3xl font-bold tracking-[-0.07em] text-white sm:text-5xl">GAD <span className="text-amber-300">ISHIMWE</span><span className="animate-pulse text-emerald-400">_</span></h1>
              <p className="mt-2 font-sans text-sm text-white/45 sm:text-base">Full-Stack Developer <span className="text-amber-300/80">·</span> Digital Builder <span className="text-amber-300/80">·</span> Kigali, Rwanda</p>
            </div>

            <div className="space-y-3 text-[11px] sm:text-sm">
              {bootLines.map((line, index) => (
                <div key={line} className={`flex items-start gap-3 transition-all duration-300 ${index < visibleLines ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}>
                  <span className="shrink-0 text-emerald-400">{index < visibleLines ? "✓" : "·"}</span>
                  <span className={index === 4 ? "text-amber-200" : "text-white/65"}>{line}</span>
                  {index === 4 && index < visibleLines && <span className="text-emerald-400">[OK]</span>}
                </div>
              ))}
              {visibleLines < bootLines.length && <div className="flex items-center gap-2 pt-1 text-emerald-400"><span>›</span><span className="h-4 w-2 animate-pulse bg-emerald-400/80" /></div>}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3 sm:px-8">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all duration-500" style={{ width: `${(visibleLines / bootLines.length) * 100}%` }} />
            </div>
            <span className="ml-4 font-mono text-[10px] text-white/40">{Math.round((visibleLines / bootLines.length) * 100)}%</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-wide text-white/30">BUILDING DIGITAL EXPERIENCES THAT MATTER</p>
          <button onClick={skipIntro} className="group flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/55 transition-all hover:border-amber-300/50 hover:text-amber-200">
            Skip intro <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
