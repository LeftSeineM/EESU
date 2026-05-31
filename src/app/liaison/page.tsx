import { ExternalLink, Handshake } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { featureStories, liaisonHighlights, oldArchiveCards, oldLiaisonSiteUrl } from "@/data/student-union";
import { sitePath } from "@/lib/paths";

export default function LiaisonPage() {
  const stories = featureStories.filter((story) => story.type === "联络中心");

  return (
    <PageShell
      eyebrow="student liaison center"
      title="学生联络中心"
      description="联络中心负责学生会各部门间的联络、建设和协调，也承担外部联络、企业合作、生活福利和学代会协助筹办等活动记录。"
      aside={<LiaisonAside />}
    >
      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="terminal-panel rounded-md p-5">
          <Handshake className="h-8 w-8 text-thu-neon" />
          <h2 className="mt-5 text-2xl font-semibold text-white">联络中心工作线</h2>
          <div className="mt-5 grid gap-3">
            {liaisonHighlights.map((item) => (
              <p key={item} className="border border-white/10 bg-black/35 p-4 text-sm leading-6 text-slate-300">
                {item}
              </p>
            ))}
          </div>
          <a
            href={oldLiaisonSiteUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-sm border border-thu-neon/40 px-4 py-2 font-mono text-xs uppercase text-thu-neon hover:bg-thu-neon/10"
          >
            open old EELL site
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {stories.map((story) => (
            <article key={story.title} className="terminal-panel overflow-hidden rounded-md">
              <div className="relative aspect-[16/10]">
                <img src={sitePath(story.image)} alt={story.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">{story.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {oldArchiveCards.map((card) => (
          <a key={card.title} href={card.href.startsWith("/") ? sitePath(card.href) : card.href} className="terminal-panel rounded-md p-5 transition hover:-translate-y-1 hover:border-thu-neon/60">
            <card.icon className="h-6 w-6 text-thu-neon" />
            <h2 className="mt-4 font-mono text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
          </a>
        ))}
      </section>
    </PageShell>
  );
}

function LiaisonAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">liaison</div>
      <div className="mt-4 text-3xl font-semibold text-white">Link</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">旧 EELL 站点已作为联络中心下级归档入口保留。</p>
    </>
  );
}
