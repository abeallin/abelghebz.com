import "../src/index.css";

const siteUrl = "https://abelghebz.com";

export const metadata = {
  title: "Abel Ghebrezadik | Lead/Senior Software Engineer",
  description:
    "Lead/Senior Software Engineer with 10 years' experience across Finance, Property, Health, and Gambling. Portfolio showcasing projects, experience, and skills.",
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Abel Ghebrezadik | Lead/Senior Software Engineer",
    description:
      "Lead/Senior Software Engineer with 10+ years' experience across Finance, Property, Health, and Gambling.",
    url: siteUrl,
    siteName: "Abel Ghebrezadik",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/me.jpg", width: 400, height: 400, alt: "Abel Ghebrezadik" }],
  },
  twitter: {
    card: "summary",
    title: "Abel Ghebrezadik | Lead/Senior Software Engineer",
    description:
      "Lead/Senior Software Engineer with 10+ years' experience across Finance, Property, Health, and Gambling.",
    images: ["/me.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
