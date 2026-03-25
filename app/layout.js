import "../src/index.css";

export const metadata = {
  title: "Abel Ghebrezadik | Lead/Senior Software Engineer",
  description:
    "Lead/Senior Software Engineer with 9 years' experience across Finance, Property, Health, and Gambling. Portfolio showcasing projects, experience, and skills.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
