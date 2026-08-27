import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/content";
import { SocialLinks } from "@/components/SocialLinks";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Mail } from "@/components/Icons";

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      title="Get in touch"
      subtitle="Have a role, a project, or a question? My inbox is open."
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something <span className="text-gradient">intelligent</span>.
            </h3>
            <p className="mt-3 max-w-xl text-muted">
              Whether you&apos;re hiring, collaborating, or just want to talk shop about ML —
              I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-contrast shadow-lg shadow-accent/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-accent/40"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <CopyEmailButton email={profile.email} />
            </div>

            {/* {profile.phone ? (
              <p className="mt-4 text-sm text-subtle">
                Or call{" "}
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {profile.phone}
                </a>
              </p>
            ) : null} */}

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
