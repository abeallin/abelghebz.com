/* eslint-disable @next/next/no-img-element -- next/og (satori) renders plain <img>; next/image does not exist there. */
// Link-preview cards and the AG monogram icons, drawn with next/og.
// satori can't read woff2, so this uses the woff copies fetch-fontshare.mjs saves beside them; images are inlined
// as data URIs read from public/ at build time.
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "../content/profile.js";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const INK = "#151515";
const PAPER = "#F6F4EF";
const font = (file) => readFile(path.join(process.cwd(), "src", "fonts", file));

async function dataUri(publicPath) {
  const buf = await readFile(path.join(process.cwd(), "public", publicPath));
  const type = publicPath.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${type};base64,${buf.toString("base64")}`;
}

async function fonts() {
  const [erode, author, author600] = await Promise.all([font("erode-400.woff"), font("author-500.woff"), font("author-600.woff")]);
  return [
    { name: "Erode", data: erode, weight: 400, style: "normal" },
    { name: "Author", data: author, weight: 500, style: "normal" },
    { name: "Author", data: author600, weight: 600, style: "normal" },
  ];
}

// AG in Erode on ink, as on the brand page. Used for the favicon and the Apple touch icon.
export async function monogram(size, radius) {
  const erode = await font("erode-400.woff");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: INK,
          color: PAPER,
          borderRadius: radius,
          fontFamily: "Erode",
          fontSize: Math.round(size.width * 0.5),
          letterSpacing: "-0.02em",
          paddingTop: Math.round(size.width * 0.04),
        }}
      >
        AG
      </div>
    ),
    { ...size, fonts: [{ name: "Erode", data: erode, weight: 400, style: "normal" }] },
  );
}

function Frame({ eyebrow, title, titleSize, subtitle, right }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", background: PAPER, color: INK, fontFamily: "Author" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 56px 56px 72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: 12, background: INK, color: PAPER, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Erode", fontSize: 26 }}>
            AG
          </div>
          <div style={{ fontSize: 24, color: "#B83A12", fontWeight: 600 }}>{eyebrow}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Erode", fontSize: titleSize, lineHeight: 1.04, letterSpacing: "-0.015em" }}>{title}</div>
          {subtitle && <div style={{ marginTop: 22, fontSize: 28, lineHeight: 1.35, color: "#3C3C3C" }}>{subtitle}</div>}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6A6A6A" }}>abelghebz.com</div>
      </div>
      {right}
    </div>
  );
}

// Home: the photo beside the name, role and the hero headline.
export async function ogHome() {
  const photo = await dataUri(profile.photo);
  return new ImageResponse(
    (
      <Frame
        eyebrow={`${profile.role} · ${profile.location}`}
        title={profile.name}
        titleSize={84}
        subtitle="Lead engineer for backends and products, ten years in."
        right={
          <div style={{ width: 420, display: "flex", alignItems: "center", justifyContent: "center", padding: "56px 64px 56px 0" }}>
            <img src={photo} width={356} height={445} style={{ objectFit: "cover", borderRadius: 28 }} alt="" />
          </div>
        }
      />
    ),
    { ...ogSize, fonts: await fonts() },
  );
}

// Case study: the outcome headline beside two real screens on the project's cover colour.
export async function ogCase({ name, headline, cover, screens }) {
  const [a, b] = screens;
  const [srcA, srcB] = await Promise.all([dataUri(a.src), dataUri(b.src)]);
  const phone = a.ratio === "phone";
  const right = phone ? (
    <div style={{ width: 460, display: "flex", position: "relative", background: cover }}>
      <img src={srcA} width={180} height={402} style={{ position: "absolute", left: 50, top: 70, borderRadius: 22, objectFit: "cover", objectPosition: "top" }} alt="" />
      <img src={srcB} width={180} height={402} style={{ position: "absolute", left: 240, top: 120, borderRadius: 22, objectFit: "cover", objectPosition: "top" }} alt="" />
    </div>
  ) : (
    <div style={{ width: 500, display: "flex", position: "relative", background: cover }}>
      <img src={srcA} width={400} height={225} style={{ position: "absolute", left: 40, top: 90, borderRadius: 12, objectFit: "cover", objectPosition: "top" }} alt="" />
      <img src={srcB} width={400} height={225} style={{ position: "absolute", left: 80, top: 300, borderRadius: 12, objectFit: "cover", objectPosition: "top" }} alt="" />
    </div>
  );
  return new ImageResponse(
    <Frame eyebrow={`Case study · ${name}`} title={headline} titleSize={headline.length > 80 ? 46 : 54} right={right} />,
    { ...ogSize, fonts: await fonts() },
  );
}
