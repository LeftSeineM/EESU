import Link from "next/link";
import { Anchor, ArrowRight, CalendarDays, Compass, Sparkles } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { yangfanActivities, yangfanGallery, yangfanStats, yangfanTimeline } from "@/data/student-union";
import { sitePath } from "@/lib/paths";

export default function YangfanPage() {
  return (
    <PageShell
      eyebrow="yangfan program"
      title="扬帆计划"
      description="扬帆计划是电子系学生骨干培养项目。这个主页把第十一期总结中的发展历程、培养方案、实践锻炼和集体照片整理成展示型档案，留下每一段成长航迹。"
      aside={<YangfanAside />}
    >
      <section className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="terminal-panel overflow-hidden rounded-md">
          <div className="relative aspect-[16/10] bg-black">
            <img
              src={sitePath("/yangfan/optimized/yangfan-icebreaking.jpg")}
              alt="扬帆计划奥森破冰会合照"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center gap-2 border border-thu-neon/30 bg-black/55 px-3 py-1 font-mono text-xs uppercase text-thu-neon">
                <Anchor className="h-4 w-4" />
                11th cohort archive
              </div>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white">从社工启蒙到实践锻炼，把学生骨干的成长留下来。</h2>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {yangfanStats.map((stat) => (
            <div key={stat.label} className="terminal-panel rounded-md p-5">
              <div className="font-mono text-4xl font-semibold text-thu-neon">{stat.value}</div>
              <h2 className="mt-2 font-mono text-base font-semibold text-white">{stat.label}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{stat.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="terminal-panel rounded-md p-5 lg:col-span-1">
          <Compass className="h-7 w-7 text-thu-neon" />
          <h2 className="mt-5 text-2xl font-semibold text-white">培养内核</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            第十一期扬帆计划强调关注真实需求、注重培养实效，简化活动形式、降低参与负担，同时通过暑期集体实践和寒假带队实践锻炼全面能力。
          </p>
          <p className="mt-4 border-l border-thu-neon/40 pl-4 font-mono text-sm leading-6 text-thu-neon">
            能力 / 责任感 / 奉献精神
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
          {yangfanActivities.map((item) => (
            <article key={item.title} className="terminal-panel rounded-md p-5">
              <Sparkles className="h-5 w-5 text-thu-neon" />
              <h3 className="mt-4 font-mono text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">development timeline</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">发展航迹</h2>
          </div>
          <Link href="/liaison" className="hidden items-center gap-2 font-mono text-xs uppercase text-thu-neon hover:text-thu-acid sm:inline-flex">
            liaison center
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {yangfanTimeline.map((item) => (
            <article key={`${item.time}-${item.title}`} className="terminal-panel rounded-md p-5">
              <div className="flex items-center justify-between">
                <span className="border border-thu-neon/25 bg-thu-neon/10 px-2.5 py-1 font-mono text-xs text-thu-acid">
                  {item.time}
                </span>
                <CalendarDays className="h-5 w-5 text-slate-500" />
              </div>
              <h3 className="mt-4 font-mono text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">photo wall</div>
        <h2 className="mt-3 text-3xl font-semibold text-white">照片墙</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {yangfanGallery.map((item) => (
            <article key={item.src} className="terminal-panel overflow-hidden rounded-md">
              <div className="relative aspect-[4/3] bg-black">
                <img src={sitePath(item.src)} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-mono text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function YangfanAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">sail on</div>
      <div className="mt-4 text-3xl font-semibold text-white">11</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        资料来自《扬帆十一期总结》PPT，页面以荣誉展示墙和成长档案为主。
      </p>
    </>
  );
}
