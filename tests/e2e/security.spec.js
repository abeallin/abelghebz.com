import { test, expect } from "@playwright/test";

test.describe("security headers and info disclosure", () => {
  test("home page returns expected security headers and no X-Powered-By", async ({ request }) => {
    const res = await request.get("/");
    expect(res.status()).toBe(200);
    const headers = res.headers();

    expect(headers["x-powered-by"]).toBeUndefined();
    expect(headers["strict-transport-security"]).toBe("max-age=63072000; includeSubDomains; preload");
    expect(headers["x-frame-options"]).toBe("SAMEORIGIN");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toBe("camera=(), microphone=(), geolocation=()");
  });

  test("case study pages return security headers", async ({ request }) => {
    const res = await request.get("/work/betmate");
    expect(res.status()).toBe(200);
    const headers = res.headers();

    expect(headers["x-powered-by"]).toBeUndefined();
    expect(headers["x-frame-options"]).toBe("SAMEORIGIN");
    expect(headers["x-content-type-options"]).toBe("nosniff");
  });

  test("requests to www.abelghebz.com redirect permanently to apex", async ({ request }) => {
    const res = await request.get("/", {
      headers: { host: "www.abelghebz.com" },
      maxRedirects: 0,
    });
    expect([301, 308]).toContain(res.status());
    expect(["https://abelghebz.com", "https://abelghebz.com/"]).toContain(res.headers()["location"]);
  });

  test("email links are wrapped with email_off comments to protect against Cloudflare 404 rewrite", async ({ request }) => {
    const res = await request.get("/");
    const body = await res.text();
    expect(body).toContain("<!--email_off-->");
    expect(body).toContain("<!--/email_off-->");
    expect(body).not.toContain("/cdn-cgi/l/email-protection");
  });
});
