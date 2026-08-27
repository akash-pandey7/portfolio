import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { certifications } from "@/lib/content";
import { ArrowUpRight } from "@/components/Icons";

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="04"
      title="Certifications & Achievements"
      subtitle="Coursework, credentials, and competitions that back up the projects."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 2) * 90}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition duration-200 hover:-translate-y-0.5 hover:border-border-strong">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight">{cert.title}</h3>
                {cert.year ? (
                  <span className="shrink-0 rounded-full border border-border bg-background/60 px-2 py-0.5 text-[0.7rem] font-medium text-subtle">
                    {cert.year}
                  </span>
                ) : null}
              </div>

              <p className="mt-1.5 font-mono text-xs text-accent">{cert.issuer}</p>

              {cert.detail ? (
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{cert.detail}</p>
              ) : null}

              {cert.link ? (
                <div className="mt-5 border-t border-border pt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    View credential
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
