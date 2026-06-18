import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand to-[oklch(0.22_0.10_260)] text-brand-foreground">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="container-page py-20 lg:py-28 relative">
        {eyebrow && <div className="text-[11px] tracking-[0.25em] text-brand-accent font-semibold uppercase mb-4">{eyebrow}</div>}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 text-white/80 max-w-2xl text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
