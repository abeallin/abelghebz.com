// Link-preview cards: the headline in Erode on paper, with the name and role underneath.
// satori can't read woff2, so this uses the woff copies fetch-fontshare.mjs saves beside them.
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "../content/profile.js";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const font = (file) => readFile(path.join(process.cwd(), "src", "fonts", file));

export async function ogCard({ eyebrow, headline }) {
  const [erode, author] = await Promise.all([font("erode-400.woff"), font("author-500.woff")]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F4EF",
          padding: "72px 80px",
          fontFamily: "Author",
          color: "#151515",
        }}
      >
        <div style={{ fontSize: 28, color: "#B83A12" }}>{eyebrow}</div>
        <div style={{ fontFamily: "Erode", fontSize: headline.length > 70 ? 64 : 80, lineHeight: 1.05, letterSpacing: "-0.015em" }}>
          {headline}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, borderTop: "2px solid #D9D5CC", paddingTop: 24 }}>
          <span>{profile.name}</span>
          <span style={{ color: "#6A6A6A" }}>abelghebz.com</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Erode", data: erode, weight: 400, style: "normal" },
        { name: "Author", data: author, weight: 500, style: "normal" },
      ],
    },
  );
}
