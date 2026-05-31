import Link from "next/link";
import { ArrowRight, ExternalLink, RadioTower, ShieldCheck } from "lucide-react";
import { StatCard } from "@/components/cards";
import { SiteHeader } from "@/components/site-header";
import { heroEntrances, stats } from "@/data/mock";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-mask pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
      <SiteHeader />
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-thu-neon/35 bg-thu-neon/10 px-3 py-1 font-mono text-sm text-thu-neon">
              <RadioTower className="h-4 w-4" />
              CONNECT / SERVICE / SHOWCASE
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              电子系学生会联络中心
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              连接资源，服务同学，搭建电子系学生与企业、校友、班级和校园资源之间的桥梁。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/freshman"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-thu-neon px-5 py-3 font-mono text-sm font-semibold text-black transition hover:bg-thu-acid"
              >
                ENTER PLATFORM
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-thu-neon/35 px-5 py-3 font-mono text-sm font-semibold text-thu-neon transition hover:bg-thu-neon/10"
              >
                RESOURCE WALL
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="terminal-panel rounded-md p-4">
            <div className="flex items-center justify-between border-b border-thu-neon/20 pb-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">service console</div>
                <div className="mt-1 text-sm text-slate-300">联络中心资源运行面板</div>
              </div>
              <span className="border border-thu-neon/30 bg-thu-neon/10 px-2.5 py-1 font-mono text-xs text-thu-neon">
                ONLINE
              </span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
            <div className="noise mt-4 border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <ShieldCheck className="h-4 w-4 text-thu-neon" />
                面向同学的资源服务平台
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                首页只做总览，每个业务模块已经拆成独立页面，适合后续真实上线和逐页扩展。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {heroEntrances.map((item) => (
            <Link key={item.title} href={item.href} className="terminal-panel group rounded-md p-5 transition hover:-translate-y-1 hover:border-thu-neon/60">
              <item.icon className="h-6 w-6 text-thu-neon" />
              <h2 className="mt-4 font-mono text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
