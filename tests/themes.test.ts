import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "packages");
const HEX = /^#[0-9a-fA-F]{6}$/;
const pkgs = readdirSync(root).filter((d) => d.startsWith("paseo-"));

const SINGLE_VARIANT = new Set([
	"paseo-obsidianite-theme",
	"paseo-cybertron-theme",
	"paseo-terminal-theme",
	"paseo-lyt-mode-theme",
	"paseo-discordian-theme",
	"paseo-nier-theme",
	"paseo-evangelion-theme",
	"paseo-everblush-theme",
	"paseo-ayu-mirage-theme",
	"paseo-charcoal-theme",
	"paseo-comfort-color-dark-theme",
	"paseo-sodalite-theme",
	"paseo-emerald-theme",
	"paseo-firefly-theme",
	"paseo-vanilla-amoled-theme",
	"paseo-noctis-theme",
	"paseo-material-ocean-theme",
	"paseo-tokyo-night-storm-theme",
	"paseo-halcyon-theme",
	"paseo-base2tone-theme",
	"paseo-dark-graphite-theme",
	"paseo-gdct-dark-theme",
	"paseo-hulk-theme",
	"paseo-panic-mode-theme",
	"paseo-pisum-theme",
	"paseo-ayu-theme",
	"paseo-gastown-theme",
	"paseo-gdct-theme",
	"paseo-obsidian-boom-theme",
]);

describe("theme packages", () => {
	it("has 100 packages", () => {
		expect(pkgs.length).toBe(94);
		expect(SINGLE_VARIANT.size).toBe(29);
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
			const single = SINGLE_VARIANT.has(pkg);
			expect(ids.length).toBe(single ? 1 : 2);
			expect(new Set(ids).size).toBe(ids.length);
			const colors = [...src.matchAll(/"#[0-9a-fA-F]{6}"/g)].map((m) => m[0]);
			expect(colors.length).toBe(single ? 8 : 16);
			for (const c of colors) expect(c.slice(1, -1)).toMatch(HEX);
			if (single) {
				expect(
					src.includes('appearance: "dark"') !==
						src.includes('appearance: "light"'),
				).toBe(true);
			} else {
				expect(src).toContain('appearance: "dark"');
				expect(src).toContain('appearance: "light"');
			}
		}
	});

	it("theme ids are globally unique", () => {
		const all: string[] = [];
		for (const pkg of pkgs) {
			const src = readFileSync(join(root, pkg, "index.client.ts"), "utf8");
			all.push(...[...src.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]));
		}
		expect(all.length).toBe(65 * 2 + 29);
		expect(new Set(all).size).toBe(all.length);
	});
});
