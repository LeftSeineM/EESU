import Link from "next/link";
import { ArrowRight, ExternalLink, RadioTower, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { featureStories, officialStudentUnionUrl, siteName, unionCenters, unionStats } from "@/data/student-union";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-mask pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
      <SiteHeader />

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-thu-neon/35 bg-thu-neon/10 px-3 py-1 font-mono text-sm text-thu-neon">
              <RadioTower className="h-4 w-4" />
              ACTIVITY / MEMORY / STUDENT UNION
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              {siteName}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              电子系学生会活动记录与展示网站。这里把文艺舞台、体育赛场、联络现场和权益声音整理成可浏览、可继续补充的公共档案。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/activities"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-thu-neon px-5 py-3 font-mono text-sm font-semibold text-black transition hover:bg-thu-acid"
              >
                VIEW ARCHIVE
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={officialStudentUnionUrl}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-thu-neon/35 px-5 py-3 font-mono text-sm font-semibold text-thu-neon transition hover:bg-thu-neon/10"
              >
                OFFICIAL SOURCE
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="terminal-panel overflow-hidden rounded-md">
            <div className="relative aspect-[4/3]">
              <img src="/activities/festival-roadshow.webp" alt="学生会活动展示" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-2 border border-thu-neon/30 bg-black/55 px-3 py-1 font-mono text-xs uppercase text-thu-neon">
                  <ShieldCheck className="h-4 w-4" />
                  public activity archive
                </div>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200">
                  主体信息来自清华大学电子工程系官网公开页面；图片先使用已整理活动素材，后续可继续补入无线之声公众号原图与授权说明。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {unionStats.map((stat) => (
            <div key={stat.label} className="terminal-panel rounded-md p-4">
              <div className="font-mono text-3xl font-semibold text-thu-neon">{stat.value}</div>
              <div className="mt-2 font-mono text-sm font-medium text-white">{stat.label}</div>
              <p className="mt-1 text-xs leading-5 text-slate-400">{stat.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {unionCenters.map((center) => (
            <Link key={center.title} href={center.href} className="terminal-panel group grid overflow-hidden rounded-md transition hover:-translate-y-1 hover:border-thu-neon/60 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[220px]">
                <img src={center.image} alt={center.zhTitle} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
              </div>
              <div className="p-5">
                <center.icon className="h-7 w-7 text-thu-neon" />
                <div className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-thu-neon">{center.title}</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">{center.zhTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{center.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {center.tags.map((tag) => (
                    <span key={tag} className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">selected records</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">活动切片</h2>
          </div>
          <Link href="/sources" className="hidden font-mono text-xs uppercase text-thu-neon hover:text-thu-acid sm:inline-flex">
            sources
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureStories.map((story) => (
            <article key={story.title} className="terminal-panel overflow-hidden rounded-md">
              <div className="relative aspect-[16/10]">
                <img src={story.image} alt={story.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <story.icon className="h-6 w-6 text-thu-neon" />
                </div>
              </div>
              <div className="p-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-thu-neon">{story.type}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{story.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{story.description}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-slate-500">{story.sourceCaption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
