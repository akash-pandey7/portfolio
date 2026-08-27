import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      subtitle="The tools I reach for across the ML lifecycle — from experimentation to production."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 80}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-border-strong">
              <h3 className="font-mono text-sm text-accent">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
