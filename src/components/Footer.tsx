import { navLinks, profile, socials } from "@/lib/content";
import { socialIcons } from "@/components/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  const links = socials.filter((s) => s.url);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
            <p className="mt-2 text-sm text-muted">{profile.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-subtle">
            © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-1">
            {links.map((social) => {
              const Icon = socialIcons[social.key];
              return (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
                >
                  {Icon ? <Icon className="h-[1.15rem] w-[1.15rem]" /> : null}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
