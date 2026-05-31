import { Music4 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { artsHighlights, featureStories } from "@/data/student-union";

export default function ArtsPage() {
  const stories = featureStories.filter((story) => story.type === "文艺中心");

  return (
    <PageShell
      eyebrow="student arts center"
      title="学生文艺中心"
      description="文艺中心负责电子系内的文艺氛围建设、文艺平台搭建、文艺活动举办及文艺骨干培养。这里把学生节、系歌赛、舞会和摄影赛事整理为展示档案。"
      aside={<ArtsAside />}
    >
      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="terminal-panel rounded-md p-5">
          <Music4 className="h-8 w-8 text-thu-neon" />
          <h2 className="mt-5 text-2xl font-semibold text-white">共同文化记忆</h2>
          <div className="mt-5 grid gap-3">
            {artsHighlights.map((item) => (
              <p key={item} className="border border-white/10 bg-black/35 p-4 text-sm leading-6 text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {stories.map((story) => (
            <article key={story.title} className="terminal-panel overflow-hidden rounded-md">
              <div className="relative aspect-[16/10]">
                <img src={story.image} alt={story.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">{story.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ArtsAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">arts</div>
      <div className="mt-4 text-3xl font-semibold text-white">Stage</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">学生节、系歌赛、新生舞会、毕业舞会、摄影赛事。</p>
    </>
  );
}
