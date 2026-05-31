import { IconCard } from "@/components/cards";
import { PageShell } from "@/components/page-shell";
import { classConnections, freshmanServices } from "@/data/mock";

export default function FreshmanPage() {
  return (
    <PageShell
      eyebrow="freshman service"
      title="新生服务"
      description="面向新生和班长，把班级对接、新生指南、活动报名和学生会信息同步整理成稳定入口。"
      aside={<StatusAside />}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {freshmanServices.map((service) => (
          <IconCard key={service.title} {...service} />
        ))}
      </div>

      <section className="mt-8 overflow-hidden rounded-md border border-thu-neon/20 bg-black/45">
        <div className="border-b border-thu-neon/20 px-5 py-4">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">class interface</div>
          <h2 className="mt-2 text-xl font-semibold text-white">班长对接看板</h2>
          <p className="mt-1 text-sm text-slate-400">真实联系方式暂用占位内容，后续可接入权限与数据库。</p>
        </div>
        <div className="grid divide-y divide-thu-neon/10 md:divide-x md:divide-y-0 md:grid-cols-3">
          {classConnections.map((item) => (
            <article key={item.className} className="p-5">
              <div className="font-mono text-sm text-thu-neon">{item.className}</div>
              <div className="mt-2 text-base font-semibold text-white">{item.leader}</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.tasks}</p>
              <div className="mt-4 border border-white/10 bg-white/[0.04] p-3 font-mono text-xs leading-5 text-slate-400">{item.materials}</div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function StatusAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">freshman ops</div>
      <div className="mt-4 text-3xl font-semibold text-white">4 modules</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">班长对接、新生指南、名企微体验报名、学生会活动同步。</p>
    </>
  );
}
