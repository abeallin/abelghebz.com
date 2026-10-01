import { test } from "node:test";
import assert from "node:assert/strict";
import { buildEnquiry, NEEDS, fieldsFor } from "../../src/lib/mailto.js";

const base = { name: "Sam Taylor", email: "sam@example.com", message: "Hello there" };

test("hiring goes to the work address with role and company in the subject", () => {
  const r = buildEnquiry({ ...base, who: "hiring", company: "Acme", role: "Lead Engineer" });
  assert.equal(r.to, "abelghebz@gmail.com");
  assert.equal(r.subject, "[Hiring] Lead Engineer at Acme: Sam Taylor");
  assert.match(r.body, /Company: Acme/);
  assert.match(r.body, /Role: Lead Engineer/);
});

test("a project goes to the private-work address with the need in the subject", () => {
  const r = buildEnquiry({ ...base, who: "project", need: "backend", timeline: "Next month" });
  assert.equal(r.to, "2percentcargoltd@gmail.com");
  assert.equal(r.subject, `[Project] ${NEEDS.backend}: Sam Taylor`);
  assert.match(r.body, /Timeline: Next month/);
});

test("something else goes to the work address", () => {
  const r = buildEnquiry({ ...base, who: "other" });
  assert.equal(r.to, "abelghebz@gmail.com");
  assert.equal(r.subject, "[Enquiry] Sam Taylor");
});

test("fields from another route never leak into the body", () => {
  const r = buildEnquiry({ ...base, who: "project", need: "new", company: "Stale Co", role: "Stale role" });
  assert.doesNotMatch(r.body, /Stale/);
  const h = buildEnquiry({ ...base, who: "hiring", company: "Acme", role: "CTO", need: "new", budget: "£5k", timeline: "soon" });
  assert.doesNotMatch(h.body, /£5k|soon|Need:/);
});

test("an empty optional budget is left out", () => {
  const r = buildEnquiry({ ...base, who: "project", need: "new", timeline: "Q1", budget: "  " });
  assert.doesNotMatch(r.body, /Budget/);
});

test("the body carries name, email and message for every route", () => {
  for (const who of ["hiring", "project", "other"]) {
    const r = buildEnquiry({ ...base, who, need: "new", company: "A", role: "B" });
    assert.match(r.body, /Name: Sam Taylor/);
    assert.match(r.body, /Email: sam@example.com/);
    assert.match(r.body, /Hello there/);
  }
});

test("href encodes spaces as %20, never +", () => {
  const r = buildEnquiry({ ...base, who: "other" });
  assert.ok(r.href.startsWith("mailto:abelghebz@gmail.com?subject="));
  assert.ok(r.href.includes("%5BEnquiry%5D%20Sam%20Taylor"));
  assert.equal(r.href.includes("+"), false);
});

test("fieldsFor names the extra fields each route shows", () => {
  assert.deepEqual(fieldsFor("hiring"), ["company", "role"]);
  assert.deepEqual(fieldsFor("project"), ["need", "timeline", "budget"]);
  assert.deepEqual(fieldsFor("other"), []);
});
