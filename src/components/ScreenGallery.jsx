"use client";
// Screen strip based on Mobbin flows and App Store captioned screenshots; viewer on Radix Dialog.
// The strip is server-rendered as plain links to each image, so it works with JS off; JS opens them in the viewer.
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Dialog } from "radix-ui";

export default function ScreenGallery({ screens, name }) {
  const [index, setIndex] = useState(null);
  const opener = useRef(null);
  const open = index !== null;
  const count = screens.length;
  const move = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  const phone = screens[0].ratio === "phone";

  return (
    <>
      <ul aria-label="Screens" className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {screens.map((s, i) => (
          <li key={s.src} className={`reveal-on-scroll shrink-0 ${phone ? "w-[170px]" : "w-[min(520px,82vw)]"}`}>
            <figure>
              <figcaption className="mb-2 text-[14px] font-semibold text-ink">{s.caption}</figcaption>
              <a
                href={s.src}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                  e.preventDefault();
                  opener.current = e.currentTarget;
                  setIndex(i);
                }}
                className={`relative block overflow-hidden shadow-float ${phone ? "aspect-[917/2048] rounded-[18px]" : "aspect-[16/9] rounded-lg"}`}
              >
                <Image src={s.src} alt={s.caption} fill sizes={phone ? "170px" : "(min-width: 640px) 520px, 82vw"} className="object-cover object-top" />
              </a>
            </figure>
          </li>
        ))}
      </ul>

      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/85" />
          <Dialog.Content
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 focus:outline-none sm:p-8"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") move(1);
              if (e.key === "ArrowLeft") move(-1);
            }}
            onCloseAutoFocus={(e) => {
              e.preventDefault();
              opener.current?.focus();
            }}
            aria-describedby={undefined}
          >
            {open && (
              <>
                <div className="flex w-full max-w-5xl items-baseline justify-between gap-4 text-paper">
                  <Dialog.Title className="text-[17px] font-semibold">
                    {name}: {screens[index].caption}
                  </Dialog.Title>
                  <p className="font-mono text-[13px]" aria-live="polite">
                    {index + 1} of {count}
                  </p>
                </div>
                <div className={`relative w-full max-w-5xl ${phone ? "h-[min(78vh,820px)]" : "aspect-[16/9] max-h-[74vh]"}`}>
                  <Image src={screens[index].src} alt={screens[index].caption} fill sizes="100vw" className="object-contain" />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => move(-1)} className="rounded-md border border-paper/40 px-4 py-2 text-[15px] text-paper hover:bg-paper/10">
                    Previous screen
                  </button>
                  <button type="button" onClick={() => move(1)} className="rounded-md border border-paper/40 px-4 py-2 text-[15px] text-paper hover:bg-paper/10">
                    Next screen
                  </button>
                  <Dialog.Close className="rounded-md bg-paper px-4 py-2 text-[15px] font-medium text-ink hover:bg-tile">Close</Dialog.Close>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
