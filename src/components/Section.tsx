import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

/** Standard section shell: anchor id, mono index label, heading, and content. */
export function Section({ id, index, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 font-mono text-sm text-accent">
              <span>{index}</span>
              <span className="h-px w-8 bg-border-strong" aria-hidden />
              <span className="text-muted">{title}</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
