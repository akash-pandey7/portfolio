import type { ReactElement, SVGProps } from "react";

/* A small hand-rolled icon set (no icon dependency). Stroke icons inherit
   `currentColor`; size them with Tailwind (e.g. `className="h-5 w-5"`). */

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: "1em",
  height: "1em",
  "aria-hidden": true,
};

const solid = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "1em",
  height: "1em",
  "aria-hidden": true,
};

/* --- UI icons ------------------------------------------------------------- */

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Copy(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M6 15a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function Sun(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function Moon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Cpu(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v2.5M15 2v2.5M9 19.5V22M15 19.5V22M2 9h2.5M2 15h2.5M19.5 9H22M19.5 15H22" />
    </svg>
  );
}

/* --- Brand / social icons ------------------------------------------------- */

export function GitHub(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function XTwitter(props: IconProps) {
  return (
    <svg {...solid} {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Scholar(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
      <path d="M6 11.5V16c0 1.2 2.7 2.6 6 2.6s6-1.4 6-2.6v-4.5" />
      <path d="M21.5 9v4.5" />
    </svg>
  );
}

export function HuggingFace(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5s1.4 2 3.5 2 3.5-2 3.5-2" />
      <path d="M8.5 9.5h.01M15.5 9.5h.01" strokeWidth={2.2} />
    </svg>
  );
}

export function Kaggle(props: IconProps) {
  // Kaggle wordmark "K" — needs its own viewBox, so it doesn't spread `solid`.
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <path d="M304.2 501.5L158.4 320.3 298 185.6c2.6-2.3 1.7-10.5-5.8-10.5h-46.5c-3.8 0-7.6 1.7-10.5 4.7L146.4 316V11.2C146.4 5 141.5 0 135.3 0H90.5C84.3 0 79.4 5 79.4 11.2v489.6c0 6.2 4.9 11.2 11.1 11.2h44.8c6.2 0 11.1-5 11.1-11.2v-90.5l24.7-23.4 74.4 111.9c2.9 4.1 7.4 5.7 12.1 5.7h47.8c6.2 0 8.9-5.8 5.8-10.5z" />
    </svg>
  );
}

/* Map social `key` (from content.ts) -> icon component. */
export const socialIcons: Record<string, (props: IconProps) => ReactElement> = {
  github: GitHub,
  linkedin: LinkedIn,
  twitter: XTwitter,
  x: XTwitter,
  scholar: Scholar,
  huggingface: HuggingFace,
  kaggle: Kaggle,
  mail: Mail,
};
