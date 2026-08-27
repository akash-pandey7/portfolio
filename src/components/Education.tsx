import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { education } from "@/lib/content";

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="space-y-5">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={(i % 2) * 90}>
            <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border-strong sm:p-7">
              <div className="font-mono text-xs text-muted">
                {entry.period}
                {entry.location ? ` · ${entry.location}` : ""}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{entry.degree}</h3>
              <p className="mt-1 font-medium text-accent">{entry.school}</p>
              {entry.detail ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">{entry.detail}</p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
