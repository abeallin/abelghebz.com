"use client";
// Cal.com pop-up (Abel's pick, 2 Oct 2026): every link marked data-cal-link opens the booking overlay instead of
// leaving the site. Cal's script loads only on the first click, so pages carry no calendar weight; without JavaScript
// the same links simply go to the Cal.com page.
import { useEffect } from "react";

function ensureCal() {
  if (window.Cal) return;
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
  window.Cal("init", "intro", { origin: "https://app.cal.com" });
  window.Cal.ns.intro("ui", { theme: "light", layout: "month_view", cssVarsPerTheme: { light: { "cal-brand": "#151515" } } });
}

export default function CalPopup() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.("a[data-cal-link]");
      if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      ensureCal();
      window.Cal.ns.intro("modal", { calLink: link.dataset.calLink, config: { layout: "month_view", theme: "light" } });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
