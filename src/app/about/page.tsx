import { CheckCircle2 } from "lucide-react";
import { IconCard } from "@/components/cards";
import { PageShell } from "@/components/page-shell";
import { centerProjects } from "@/data/mock";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="about contact center"
      title="关于联络中心"
      description="联络中心不是单纯“拉赞助”的部门，而是电子系学生会中负责资源连接、活动支持和同学服务的重要枢纽。"
      aside={<AboutAside />}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {centerProjects.map((project) => (
            <IconCard key={project.title} {...project} />
          ))}
        </div>
        <section className="terminal-panel rounded-md p-6">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">join us</div>
          <h2 className="mt-4 text-2xl font-semibold text-white">加入我们，一起把资源变成服务</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            如果你对企业交流、资源整合、活动执行或信息服务感兴趣，联络中心会是一个能接触真实需求、也能沉淀方法论的地方。
          </p>
          <div className="mt-6 grid gap-3">
            {["资源意识", "沟通协作", "活动执行", "复盘沉淀"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-thu-neon" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 aspect-[16/8] border border-white/10 bg-white/[0.06] p-4">
            <div className="flex h-full items-end border border-dashed border-thu-neon/25 p-4 font-mono text-sm text-slate-300">
              部门活动照片占位
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function AboutAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">department profile</div>
      <div className="mt-4 text-3xl font-semibold text-white">Hub</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">连接企业、校友、班级和校园资源，把外联能力转化为同学服务。</p>
    </>
  );
}
