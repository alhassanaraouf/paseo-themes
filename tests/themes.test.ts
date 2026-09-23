import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "packages");
const HEX = /^#[0-9a-fA-F]{6}$/;
const pkgs = readdirSync(root).filter((d) => d.startsWith("paseo-"));

describe("theme packages", () => {
	it("has 100 packages", () => {
		expect(pkgs.length).toBe(94);
	});

	it("each package has required files with matching ids", () => {
		for (const pkg of pkgs) {
			const dir = join(root, pkg);
			const manifest = JSON.parse(
				readFileSync(join(dir, "paseo-plugin.json"), "utf8"),
			);
			expect(manifest.id).toBe(pkg);
			const pkgJson = JSON.parse(
				readFileSync(join(dir, "package.json"), "utf8"),
			);
			expect(pkgJson.files).toContain("index.client.ts");
			const src = readFileSync(join(dir, "index.client.ts"), "utf8");
			const ids = [...src.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
			expect(ids.length).toBe(2);
			expect(new Set(ids).size).toBe(2);
			const colors = [...src.matchAll(/"#[0-9a-fA-F]{6}"/g)].map((m) => m[0]);
			expect(colors.length).toBe(16);
			for (const c of colors) expect(c.slice(1, -1)).toMatch(HEX);
			expect(src).toContain('appearance: "dark"');
			expect(src).toContain('appearance: "light"');
		}
	});

	it("theme ids are globally unique", () => {
		const all: string[] = [];
		for (const pkg of pkgs) {
			const src = readFileSync(join(root, pkg, "index.client.ts"), "utf8");
			all.push(...[...src.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]));
		}
		expect(all.length).toBe(188);
		expect(new Set(all).size).toBe(188);
	});
});
