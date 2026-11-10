interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

const SectionHeader = ({ eyebrow, title, subtitle }: Props) => (
  <div className="mb-14 max-w-3xl">
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {eyebrow}
    </span>
    <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.02]">{title}</h2>
    {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeader;
