import { Dumbbell } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { featureStories, sportsHighlights } from "@/data/student-union";
import { sitePath } from "@/lib/paths";

export default function SportsPage() {
  const stories = featureStories.filter((story) => story.type === "体育中心");

  return (
    <PageShell
      eyebrow="student sports center"
      title="学生体育中心"
      description="体育中心主要负责电子系系内体育活动组织策划，以及系外体育活动对接。展示页聚焦大无限杯、马约翰杯、代表队和赛事后勤。"
      aside={<SportsAside />}
    >
      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        {stories.map((story) => (
          <article key={story.title} className="terminal-panel overflow-hidden rounded-md">
            <div className="relative aspect-[16/8]">
              <img src={sitePath(story.image)} alt={story.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-white">{story.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{story.description}</p>
              <p className="mt-4 text-xs leading-5 text-slate-500">{story.sourceCaption}</p>
            </div>
          </article>
        ))}
        <div className="terminal-panel rounded-md p-5">
          <Dumbbell className="h-8 w-8 text-thu-neon" />
          <h2 className="mt-5 text-2xl font-semibold text-white">体育传统</h2>
          <div className="mt-5 grid gap-3">
            {sportsHighlights.map((item) => (
              <p key={item} className="border border-white/10 bg-black/35 p-4 text-sm leading-6 text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function SportsAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">sports</div>
      <div className="mt-4 text-3xl font-semibold text-white">Field</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">系内运动渠道与校级赛事支持，记录运动风采。</p>
    </>
  );
}
