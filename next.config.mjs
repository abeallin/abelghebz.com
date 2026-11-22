/** @type {import('next').NextConfig} */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { DEVICE_SIZES, IMAGE_SIZES } from "./src/lib/image-widths.mjs";

// The CV's links carry a tag from the file's contents, so any change to the CV changes the link and no browser,
// phone or proxy can hand back an old copy to someone clicking through from the site.
const version = (file) => createHash("sha1").update(readFileSync(new URL(`./public/assets/${file}`, import.meta.url))).digest("hex").slice(0, 10);

// A static export (decision 0019): every page is built ahead of time, so `npm run build` writes plain files to out/
// and server.mjs serves them. The www -> apex redirect and the security, cache and CV headers that used to live
// here (redirects() and headers()) are in server.mjs, because a static export doesn't run them.
const nextConfig = {
  output: "export",
  poweredByHeader: false,
  env: {
    CV_PDF_VERSION: version("abel_ghebrezadik_cv.pdf"),
    CV_DOCX_VERSION: version("abel_ghebrezadik_cv.docx"),
  },
  images: {
    // No image server: scripts/build-images.mjs pre-resizes every public image to these widths as WebP, and the
    // loader names those files. WebP only: AVIF saved just 7-20% here for 2-3x the encode time (decision 0012).
    loader: "custom",
    loaderFile: "./src/lib/image-loader.js",
    imageSizes: IMAGE_SIZES,
    deviceSizes: DEVICE_SIZES,
  },
};

export default nextConfig;
