import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { archiveTimeline, featureStories } from "@/data/student-union";
import { sitePath } from "@/lib/paths";

export default function ActivitiesPage() {
  return (
    <PageShell
      eyebrow="activity archive"
      title="活动档案"
      description="把电子系学生会公开资料中的文艺、体育、联络和权益活动整理为展示型记录。当前版本先以官网信息为主，后续可继续补入无线之声公众号文章和原图。"
      aside={<ActivitiesAside />}
    >
      <section className="grid gap-4 lg:grid-cols-4">
        {archiveTimeline.map((item, index) => (
          <article key={item.title} className="terminal-panel rounded-md p-5">
            <div className="flex items-center justify-between">
              <span className="border border-thu-neon/25 bg-thu-neon/10 px-2.5 py-1 font-mono text-xs text-thu-acid">
                {item.time}
              </span>
              <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
            </div>
            <item.icon className="mt-5 h-6 w-6 text-thu-neon" />
            <h2 className="mt-4 font-mono text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        {featureStories.map((story) => (
          <article key={story.title} className="terminal-panel overflow-hidden rounded-md">
            <div className="relative flex aspect-[16/9] items-end overflow-hidden border-b border-thu-neon/15 bg-black">
              <img
                src={sitePath(story.image)}
                alt={story.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="relative p-5">
                <div className="inline-flex items-center gap-2 border border-thu-neon/30 bg-black/45 px-3 py-1 font-mono text-xs uppercase text-thu-neon">
                  <story.icon className="h-4 w-4" />
                  {story.type}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{story.title}</h2>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-6 text-slate-300">{story.description}</p>
              <div className="mt-5 flex items-start gap-2 border border-white/10 bg-black/35 p-4 text-sm leading-6 text-slate-400">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-thu-neon" />
                {story.sourceCaption}
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function ActivitiesAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">records</div>
      <div className="mt-4 text-3xl font-semibold text-white">{featureStories.length} scenes</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        这是面向展示的活动索引，不再承载报名、资源申请等实用功能。
      </p>
    </>
  );
}
