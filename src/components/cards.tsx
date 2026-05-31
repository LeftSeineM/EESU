import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type IconCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  className?: string;
};

export function IconCard({ title, description, icon: Icon, tags, className }: IconCardProps) {
  return (
    <article
      className={cn(
        "terminal-panel group rounded-md p-5 transition hover:-translate-y-1 hover:border-thu-neon/60 hover:shadow-glow",
        className
      )}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm border border-thu-neon/35 bg-thu-neon/10 text-thu-neon">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-mono text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      {tags ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border border-thu-neon/20 bg-thu-neon/5 px-2.5 py-1 font-mono text-xs text-thu-acid">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

type StatCardProps = {
  value: string;
  label: string;
  hint: string;
};

export function StatCard({ value, label, hint }: StatCardProps) {
  return (
    <div className="terminal-panel rounded-md p-4">
      <div className="font-mono text-3xl font-semibold text-thu-neon">{value}</div>
      <div className="mt-2 font-mono text-sm font-medium text-white">{label}</div>
      <p className="mt-1 text-xs leading-5 text-slate-400">{hint}</p>
    </div>
  );
}

type ResourceCardProps = {
  name: string;
  type: string;
  description: string;
  scenario: string;
};

export function ResourceCard({ name, type, description, scenario }: ResourceCardProps) {
  return (
    <article className="terminal-panel rounded-md p-5 transition hover:border-thu-neon/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="border border-thu-neon/25 bg-thu-neon/10 px-2.5 py-1 font-mono text-xs text-thu-acid">{type}</span>
          <h3 className="mt-4 font-mono text-lg font-semibold text-white">{name}</h3>
        </div>
        <button aria-label={`查看${name}详情`} className="rounded-sm border border-white/10 p-2 text-slate-300 transition hover:border-thu-neon/50 hover:text-thu-neon">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-5 border border-white/10 bg-black/35 px-3 py-2 font-mono text-xs text-slate-400">
        使用场景：{scenario}
      </div>
    </article>
  );
}

type CompanyCardProps = {
  category: string;
  companies: string[];
};

export function CompanyCard({ category, companies }: CompanyCardProps) {
  return (
    <article className="terminal-panel rounded-md p-5">
      <h3 className="font-mono text-base font-semibold text-white">{category}</h3>
      <div className="mt-4 grid gap-2">
        {companies.map((company) => (
          <div key={company} className="border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-300">
            {company}
          </div>
        ))}
      </div>
    </article>
  );
}
