import { CompanyCard, IconCard } from "@/components/cards";
import { PageShell } from "@/components/page-shell";
import { companyCategories, cooperationWork } from "@/data/mock";

export default function CooperationPage() {
  return (
    <PageShell
      eyebrow="external relations"
      title="企业交流与合作"
      description="展示联络中心外联工作成果，也让同学看到这些资源如何回到活动和服务中。"
      aside={<CooperationAside />}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cooperationWork.map((item) => (
          <IconCard key={item.title} {...item} />
        ))}
      </div>
      <section className="mt-8">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">company wall</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {companyCategories.map((category) => (
            <CompanyCard key={category.category} {...category} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function CooperationAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">cooperation map</div>
      <div className="mt-4 text-3xl font-semibold text-white">5 sectors</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">人工智能、集成电路、消费电子、互联网、快消品牌。</p>
    </>
  );
}
