import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

// Erode and Author come from Fontshare (ITF Free Font License); scripts/fetch-fontshare.mjs puts them in src/fonts.
export const erode = localFont({
  src: [
    { path: "../fonts/erode-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/erode-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-erode",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const author = localFont({
  src: [
    { path: "../fonts/author-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/author-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/author-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-author",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains",
  display: "swap",
});

export const fontVariables = `${erode.variable} ${author.variable} ${mono.variable}`;
