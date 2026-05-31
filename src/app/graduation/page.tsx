import { CalendarDays } from "lucide-react";
import { IconCard } from "@/components/cards";
import { PageShell } from "@/components/page-shell";
import { graduationServices, secondHandItems } from "@/data/mock";

export default function GraduationPage() {
  return (
    <PageShell
      eyebrow="graduation support"
      title="毕业生服务"
      description="围绕毕业季高频需求，把拍摄、活动和闲置流转集中到一个入口。"
      aside={<GraduationAside />}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {graduationServices.map((service) => (
          <IconCard key={service.title} {...service} />
        ))}
      </div>

      <section className="terminal-panel mt-8 rounded-md p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">second-hand board</div>
            <h2 className="mt-2 text-xl font-semibold text-white">二手交易展示</h2>
            <p className="mt-1 text-sm text-slate-400">静态卡片示例，后续可接入发布、审核、搜索与状态更新。</p>
          </div>
          <CalendarDays className="hidden h-6 w-6 text-thu-neon sm:block" />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {secondHandItems.map((item) => (
            <article key={item.name} className="border border-white/10 bg-black/45 p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <span className="border border-white/10 bg-white/10 px-2 py-1 font-mono text-xs text-slate-300">{item.date}</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400">{item.category}</span>
                <span className="font-mono text-thu-neon">{item.status}</span>
              </div>
              <div className="mt-4 font-mono text-2xl font-semibold text-white">{item.price}</div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function GraduationAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">graduation ops</div>
      <div className="mt-4 text-3xl font-semibold text-white">May-Jun</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">毕业摄影、毕业 Party、攻略与二手交易是毕业季优先服务。</p>
    </>
  );
}
