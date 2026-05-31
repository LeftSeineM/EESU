import { ArrowRight, GalleryHorizontalEnd, MessageSquareQuote } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { companyVisits } from "@/data/mock";

export default function CompanyVisitPage() {
  return (
    <PageShell
      eyebrow="company micro visit"
      title="名企微体验"
      description={companyVisits.intro}
      aside={<VisitAside />}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="terminal-panel rounded-md p-6">
          <h2 className="font-mono text-xl font-semibold text-white">活动流程</h2>
          <div className="mt-6 grid gap-3">
            {companyVisits.flow.map((step, index) => (
              <div key={step} className="flex items-center gap-3 border border-white/10 bg-black/45 p-3">
                <span className="flex h-8 w-8 items-center justify-center border border-thu-neon/30 bg-thu-neon/10 font-mono text-sm text-thu-neon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-slate-200">{step}</span>
              </div>
            ))}
          </div>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-thu-neon px-4 py-2 font-mono text-sm font-semibold text-black transition hover:bg-thu-acid">
            报名入口占位
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        <div className="grid gap-6">
          <section className="terminal-panel rounded-md p-6">
            <h2 className="font-mono text-xl font-semibold text-white">往期企业</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {companyVisits.companies.map((company) => (
                <span key={company} className="border border-thu-neon/25 bg-thu-neon/10 px-3 py-1 font-mono text-sm text-thu-acid">
                  {company}
                </span>
              ))}
            </div>
          </section>
          <div className="grid gap-4 sm:grid-cols-3">
            {companyVisits.photos.map((photo) => (
              <div key={photo} className="flex aspect-[4/3] items-end border border-thu-neon/20 bg-[linear-gradient(135deg,rgba(163,255,18,.14),rgba(130,49,142,.2),rgba(0,0,0,.75))] p-4">
                <div className="flex items-center gap-2 font-mono text-sm text-white">
                  <GalleryHorizontalEnd className="h-4 w-4 text-thu-neon" />
                  {photo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {companyVisits.feedback.map((text) => (
          <blockquote key={text} className="terminal-panel rounded-md p-5">
            <MessageSquareQuote className="h-5 w-5 text-thu-neon" />
            <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
          </blockquote>
        ))}
      </section>
    </PageShell>
  );
}

function VisitAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">visit archive</div>
      <div className="mt-4 text-3xl font-semibold text-white">{companyVisits.companies.length}+</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">往期企业占位展示，后续可接入报名状态、照片归档和反馈表。</p>
    </>
  );
}
