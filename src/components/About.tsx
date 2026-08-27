import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-2">
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-border-strong"
                >
                  <div className="text-2xl font-semibold tracking-tight text-foreground">
                    {fact.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted">{fact.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
