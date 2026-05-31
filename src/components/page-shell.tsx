import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { siteName } from "@/data/student-union";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function PageShell({ eyebrow, title, description, children, aside }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-mask pointer-events-none absolute inset-x-0 top-0 h-[620px]" />
      <SiteHeader />
      <section className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-thu-neon">{eyebrow}</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <aside className="terminal-panel rounded-md p-5">
          {aside ?? (
            <>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-thu-neon">page status</div>
              <div className="mt-4 text-2xl font-semibold text-white">Archive</div>
              <p className="mt-3 text-sm leading-6 text-slate-400">展示型静态页面，资料来自电子系官网公开页面与已整理活动素材。</p>
            </>
          )}
        </aside>
      </section>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">{children}</section>
      <footer className="border-t border-thu-neon/15 px-4 py-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
        {siteName} · Activity Archive · 2026
      </footer>
    </main>
  );
}
