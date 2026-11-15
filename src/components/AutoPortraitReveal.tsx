import profileImage from "@/assets/gad-profile-main.jpg";

const AutoPortraitReveal = () => {
  return (
    <div className="portrait-reveal relative isolate">
      <div className="portrait-cord-drop pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2">
        <div className="portrait-cord-pull flex flex-col items-center">
          <span className="h-24 w-px bg-gradient-to-b from-transparent via-accent to-accent shadow-[0_0_8px_hsl(var(--accent)/0.7)]" />
          <span className="portrait-cord-handle -mt-1 h-5 w-5 rounded-full border-2 border-foreground bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.8)]" />
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={profileImage}
          alt="Gad Ishimwe, full-stack developer"
          className="portrait-reveal-image h-full w-full object-cover object-center"
        />
        <div className="portrait-reveal-shutter pointer-events-none absolute inset-0 z-10 bg-[#11110f]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,hsl(var(--accent)/0.18),transparent_58%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-accent shadow-[0_0_24px_5px_hsl(var(--accent)/0.75)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 pt-24 text-white">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">The builder</p>
          <h3 className="mt-1 text-3xl font-bold tracking-tight">Gad Ishimwe</h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Kigali, Rwanda
          </div>
        </div>
      </div>

      <style>{`
        .portrait-cord-drop {
          transform-origin: top center;
          animation: portrait-cord-drop 650ms cubic-bezier(.2,.8,.2,1) 350ms both;
        }
        .portrait-cord-pull {
          transform-origin: top center;
          animation: portrait-cord-pull 620ms cubic-bezier(.22,.75,.25,1) 1.05s both;
        }
        .portrait-reveal-shutter {
          clip-path: inset(0 0 0 0);
          animation: portrait-shutter-open 1150ms cubic-bezier(.76,0,.18,1) 1.72s forwards;
        }
        .portrait-reveal-image {
          transform: scale(1.08);
          filter: saturate(.72) brightness(.78);
          animation: portrait-image-settle 1400ms ease-out 2.05s forwards;
        }
        @keyframes portrait-cord-drop {
          from { transform: translate(-50%, -115%); }
          to { transform: translate(-50%, 0); }
        }
        @keyframes portrait-cord-pull {
          0% { transform: translateY(0); }
          58% { transform: translateY(58px); }
          78% { transform: translateY(48px); }
          100% { transform: translateY(52px); }
        }
        @keyframes portrait-shutter-open {
          from { clip-path: inset(0 0 0 0); }
          to { clip-path: inset(100% 0 0 0); }
        }
        @keyframes portrait-image-settle {
          to { transform: scale(1); filter: saturate(1) brightness(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .portrait-cord-drop, .portrait-cord-pull, .portrait-reveal-shutter, .portrait-reveal-image {
            animation: none !important;
          }
          .portrait-reveal-shutter { clip-path: inset(100% 0 0 0); }
          .portrait-reveal-image { transform: none; filter: none; }
        }
      `}</style>
    </div>
  );
};

export default AutoPortraitReveal;
