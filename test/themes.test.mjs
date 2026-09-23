import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const HEX = /^#[0-9a-f]{6}$/;
const files = readdirSync(new URL("../themes/", import.meta.url)).filter((f) => f.endsWith(".ts") && !f.startsWith("_") && f !== "index.ts");
const registry = JSON.parse(readFileSync(new URL("../themes/registry.json", import.meta.url)));

test("100 themes", () => assert.equal(files.length, 100));
test("registry matches files", () => {
  assert.equal(registry.length, 100);
  const slugs = new Set(files.map((f) => f.replace(/\.ts$/, "")));
  for (const r of registry) assert.ok(slugs.has(r.slug), r.slug);
});
test("every theme has valid hex palettes", () => {
  for (const f of files) {
    const src = readFileSync(new URL(`../themes/${f}`, import.meta.url), "utf8");
    const colors = [...src.matchAll(/"#[0-9a-fA-F]{6}"/g)].map((m) => m[0].slice(1, -1).toLowerCase());
    assert.ok(colors.length >= 20, `${f}: only ${colors.length} colors`);
    for (const c of colors) assert.match(c, HEX, `${f}: ${c}`);
    assert.ok(src.includes("surface0") && src.includes("accent"), f);
  }
});
