import Link from "next/link";

export const metadata = { title: "Page not found | Abel Ghebrezadik" };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <p className="mb-4 font-mono text-[13px] text-muted">404</p>
      <h1 className="mb-4 font-display text-[clamp(40px,7vw,72px)] leading-[1.02] tracking-[-0.015em]">Page not found</h1>
      <p className="mb-8 max-w-md text-body">That page doesn&apos;t exist or has moved.</p>
      <Link href="/" className="link-underline w-fit font-medium">
        Back to the home page
      </Link>
    </main>
  );
}
