"use client";
// Cal.com inline booking. The script loads only when the section nears the viewport;
// the plain link below it is always in the HTML, so booking never depends on the embed.
import { useEffect, useRef } from "react";
import { CAL_LINK, CAL_URL } from "../content/routing.js";
import { CalIcon } from "./ui/Icons.jsx";

function loadCal() {
  // Cal.com's published embed loader, unchanged apart from formatting.
  (function (C, A, L) {
    const p = (a, ar) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

export default function CalEmbed() {
  const box = useRef(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        loadCal();
        window.Cal("init", "intro", { origin: "https://app.cal.com" });
        window.Cal.ns.intro("inline", {
          elementOrSelector: "#cal-inline",
          calLink: CAL_LINK,
          config: { layout: "month_view", theme: "light" },
        });
        window.Cal.ns.intro("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <div ref={box} id="cal-inline" className="min-h-[120px] overflow-hidden rounded-xl border border-rule bg-white" />
      <p className="mt-4 flex flex-wrap items-center gap-3 text-[15px] text-body">
        Calendar not showing?
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-[14px] font-medium text-ink hover:border-ink hover:bg-ink hover:text-paper"
        >
          <CalIcon />
          Book a 15-minute call on Cal.com
        </a>
      </p>
    </div>
  );
}
