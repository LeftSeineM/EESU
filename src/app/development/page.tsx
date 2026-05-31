import { ChartNoAxesCombined } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { developmentHighlights } from "@/data/student-union";
import { sitePath } from "@/lib/paths";

export default function DevelopmentPage() {
  return (
    <PageShell
      eyebrow="holistic development center"
      title="学生全发中心"
      description="全发中心是连接同学成长、权益反馈和长期建设的重要一环。展示页把它作为四个大家庭之一，与文艺、体育、联络共同组成电子系学生会的荣誉展示墙。"
      aside={<DevelopmentAside />}
    >
      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-panel rounded-md p-5">
          <ChartNoAxesCombined className="h-8 w-8 text-thu-neon" />
          <h2 className="mt-5 text-2xl font-semibold text-white">全面发展与权益声音</h2>
          <div className="mt-5 grid gap-3">
            {developmentHighlights.map((item) => (
              <p key={item} className="border border-white/10 bg-black/35 p-4 text-sm leading-6 text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </div>

        <article className="terminal-panel overflow-hidden rounded-md">
          <div className="relative aspect-[16/9]">
            <img
              src={sitePath("/activities/festival-group.webp")}
              alt="学生全发中心展示"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center border border-thu-neon/30 bg-black/45 px-3 py-1 font-mono text-xs uppercase text-thu-neon">
                growth / voice / record
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">让成长和服务都留下痕迹</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
                全发中心页面先以展示定位搭建结构，后续可继续补入权益发展、课程研讨、成长支持、反馈沟通等真实项目照片和活动记录。
              </p>
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
}

function DevelopmentAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">development</div>
      <div className="mt-4 text-3xl font-semibold text-white">Growth</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        全发中心与文艺、体育、联络并列，构成电子系学生会四个大家庭。
      </p>
    </>
  );
}
