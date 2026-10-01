import "./globals.css";
import { fontVariables } from "../src/lib/fonts.js";
import { seo } from "../src/content/seo.js";

export const metadata = {
  metadataBase: new URL(seo.site),
  title: seo.pages["/"].title,
  description: seo.pages["/"].description,
  icons: { icon: "/favicon.svg" },
  openGraph: { siteName: seo.name, locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={fontVariables}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
