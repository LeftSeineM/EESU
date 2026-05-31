import { Archive, CheckCircle2, GalleryHorizontalEnd } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { activityRecords, activityTimeline } from "@/data/mock";

export default function ActivitiesPage() {
  return (
    <PageShell
      eyebrow="activity archive"
      title="活动档案"
      description="这里集中展示联络中心参与支持过的典型活动：电子系学生节、新生舞会、毕业游园会，以及面向同学的讲座交流。"
      aside={<ActivitiesAside />}
    >
      <section className="grid gap-4 lg:grid-cols-4">
        {activityTimeline.map((item, index) => (
          <article key={item.title} className="terminal-panel rounded-md p-5">
            <div className="flex items-center justify-between">
              <span className="border border-thu-neon/25 bg-thu-neon/10 px-2.5 py-1 font-mono text-xs text-thu-acid">
                {item.time}
              </span>
              <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
            </div>
            <h2 className="mt-5 font-mono text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        {activityRecords.map((activity) => (
          <article key={activity.title} className="terminal-panel overflow-hidden rounded-md">
            <div className="relative flex aspect-[16/9] items-end overflow-hidden border-b border-thu-neon/15 bg-black">
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="relative p-5">
                <div className="inline-flex items-center gap-2 border border-thu-neon/30 bg-black/45 px-3 py-1 font-mono text-xs uppercase text-thu-neon">
                  <GalleryHorizontalEnd className="h-4 w-4" />
                  activity photo
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{activity.title}</h2>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="border border-thu-neon/25 bg-thu-neon/10 px-2.5 py-1 font-mono text-xs text-thu-acid">
                  {activity.type}
                </span>
                <span className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300">
                  {activity.season}
                </span>
              </div>
              <div className="mt-5 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-thu-neon/35 bg-thu-neon/10 text-thu-neon">
                  <activity.icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-slate-300">{activity.description}</p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {activity.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 border border-white/10 bg-black/35 px-3 py-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-thu-neon" />
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-5 border border-thu-neon/15 bg-thu-neon/[0.04] p-4">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-thu-neon">archive output</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{activity.outcomes}</p>
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
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">work records</div>
      <div className="mt-4 text-3xl font-semibold text-white">{activityRecords.length} scenes</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        用活动记录展示联络中心的真实工作：资源连接、现场支持、同学服务和经验沉淀。
      </p>
      <div className="mt-6 border border-white/10 bg-black/35 p-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-thu-neon">
          <Archive className="h-4 w-4" />
          records
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">后续可以继续加照片、活动年份、负责人占位、复盘文档链接和报名数据。</p>
      </div>
    </>
  );
}
