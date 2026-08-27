import { socials } from "@/lib/content";
import { socialIcons } from "@/components/Icons";
import { cn } from "@/lib/cn";

/** Row of social icon links, reused in the hero and contact section. */
export function SocialLinks({ className }: { className?: string }) {
  const links = socials.filter((s) => s.url);
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((social) => {
        const Icon = socialIcons[social.key];
        return (
          <a
            key={social.key}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground"
          >
            {Icon ? <Icon className="h-5 w-5" /> : null}
          </a>
        );
      })}
    </div>
  );
}
