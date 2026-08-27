import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

function initials(name: string) {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? "")
      .join("") || "•"
  );
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
          color: "#0b0410",
          fontSize: 30,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        {initials(profile.name)}
      </div>
    ),
    { ...size },
  );
}
