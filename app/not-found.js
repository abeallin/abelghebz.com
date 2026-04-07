import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-bg text-text">
      <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4">
        404
      </span>
      <h1 className="text-[clamp(36px,6vw,80px)] leading-[1.05] tracking-[-0.03em] mb-4 text-center">
        <span className="font-body font-800">Page not </span>
        <span className="font-display italic text-accent">found</span>
        <span className="font-body font-800">.</span>
      </h1>
      <p className="text-[15px] text-text-dim leading-[1.8] mb-10 text-center max-w-[440px]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-[13px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-text hover:text-bg transition-all duration-300"
      >
        <span className="rotate-180">→</span>
        Back Home
      </Link>
    </main>
  );
}
