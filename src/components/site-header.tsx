import { CircuitBoard } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/mock";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-thu-neon/20 bg-thu-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-thu-neon/40 bg-thu-neon/10 text-thu-neon">
            <CircuitBoard className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-mono text-sm font-semibold text-white">EE CONTACT CENTER</span>
            <span className="block text-xs text-slate-400">联络中心资源服务平台</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 font-mono text-xs uppercase text-slate-300 transition hover:bg-thu-neon/10 hover:text-thu-neon"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/resources"
          className="hidden rounded-sm border border-thu-neon/40 bg-thu-neon/10 px-4 py-2 font-mono text-xs font-medium text-thu-neon transition hover:bg-thu-neon/20 sm:inline-flex"
        >
          RESOURCES
        </Link>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-thu-neon/10 px-4 py-2 lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-sm px-3 py-2 font-mono text-xs text-slate-300 hover:bg-thu-neon/10">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
