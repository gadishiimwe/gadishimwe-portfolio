import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
  detailId?: string;
}

const WorkCard = ({ title, description, image, tags, category, liveUrl, githubUrl, detailId }: Props) => (
  <article className="ring-gradient group rounded-3xl border border-border bg-card p-2.5 flex flex-col hover:-translate-y-1 transition-transform duration-500">
    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-secondary">
      <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      {category && (
        <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs font-medium">{category}</span>
      )}
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        {liveUrl && liveUrl !== "#" && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`} className="shrink-0 w-9 h-9 rounded-full bg-secondary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">{t}</span>
        ))}
      </div>
      <div className="mt-auto pt-5 flex gap-2">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="h-9 px-4 rounded-full bg-secondary text-sm font-medium flex items-center gap-2 hover:bg-muted transition-colors">
            <Github className="w-4 h-4" /> Code
          </a>
        )}
        {detailId && (
          <Link to={`/project/${detailId}#top`} className="h-9 px-4 rounded-full text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            Case study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
        {!githubUrl && liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="h-9 px-4 rounded-full bg-foreground text-background text-sm font-medium flex items-center gap-2 hover:opacity-90">
            Visit website <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default WorkCard;
