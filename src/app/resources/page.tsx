import { ResourceCard } from "@/components/cards";
import { PageShell } from "@/components/page-shell";
import { resourceWallItems } from "@/data/mock";

export default function ResourcesPage() {
  return (
    <PageShell
      eyebrow="resource wall"
      title="资源展示墙"
      description="这里不是内部资料库，而是面向同学展示联络中心能够提供、协调或沉淀的资源。"
      aside={<ResourcesAside />}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resourceWallItems.map((item) => (
          <ResourceCard key={item.name} {...item} />
        ))}
      </div>
    </PageShell>
  );
}

function ResourcesAside() {
  return (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">resource index</div>
      <div className="mt-4 text-3xl font-semibold text-white">{resourceWallItems.length} items</div>
      <p className="mt-3 text-sm leading-6 text-slate-400">按资源类型、使用场景和后续详情页入口组织，方便逐步扩充。</p>
    </>
  );
}
