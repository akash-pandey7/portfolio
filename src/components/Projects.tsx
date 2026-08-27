import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";
import { ArrowUpRight } from "@/components/Icons";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="Selected work. Swap these out for your own — each links to a case study, demo, or repo."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 90}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition duration-200 hover:-translate-y-0.5 hover:border-border-strong">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                {project.featured ? (
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 text-[0.7rem] font-medium text-accent">
                    Featured
                  </span>
                ) : null}
              </div>

              {project.period ? (
                <p className="mt-1.5 font-mono text-xs text-subtle">{project.period}</p>
              ) : null}

              {project.metric ? (
                <p className="mt-1.5 font-mono text-sm text-accent-2">{project.metric}</p>
              ) : null}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background/60 px-2 py-0.5 text-xs text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
