import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { sourceNotes } from "@/data/student-union";

export default function SourcesPage() {
  return (
    <PageShell
      eyebrow="sources"
      title="资料来源"
      description="本页记录当前版本使用的信息来源和后续可补充的素材入口。公开文字已改写为展示文案；图片素材需在继续补充公众号原图时同步记录来源。"
    >
      <section className="grid gap-4">
        {sourceNotes.map((source) => (
          <a key={source.url} href={source.url} className="terminal-panel rounded-md p-5 transition hover:border-thu-neon/60">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">{source.title}</h2>
              <ExternalLink className="h-5 w-5 text-thu-neon" />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{source.note}</p>
            <div className="mt-4 break-all font-mono text-xs text-slate-500">{source.url}</div>
          </a>
        ))}
      </section>
    </PageShell>
  );
}
