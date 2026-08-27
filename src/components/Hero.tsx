import { profile } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowDown, ArrowRight, MapPin } from "@/components/Icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative backdrop: blueprint grid + drifting color glows. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
        <div className="animate-float-slow absolute -top-24 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
        <div className="animate-float absolute right-[4%] top-[20%] h-[260px] w-[260px] rounded-full bg-accent-2/15 blur-[110px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
          {profile.availableForWork ? (
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availabilityText}
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={60}>
            <p className="mt-6 font-mono text-sm text-accent">Hello, world. I&apos;m</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-2 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-gradient mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-contrast shadow-lg shadow-accent/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-accent/40"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition duration-200 hover:bg-accent-soft"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <SocialLinks />
              <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-subtle transition-colors hover:text-foreground sm:flex"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
