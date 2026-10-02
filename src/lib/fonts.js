import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

// Erode and General Sans come from Fontshare (ITF Free Font License); scripts/fetch-fontshare.mjs puts them in src/fonts.
export const erode = localFont({
  // Only 400 is used anywhere; one file keeps the headline's font download (the LCP) small.
  src: [{ path: "../fonts/erode-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-erode",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const generalSans = localFont({
  src: [
    { path: "../fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/general-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/general-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains",
  display: "swap",
  // Preloaded: the first screen has mono labels, and loading it late re-renders them (live speed index 1.8s to 3.0s).
});

export const fontVariables = `${erode.variable} ${generalSans.variable} ${mono.variable}`;
