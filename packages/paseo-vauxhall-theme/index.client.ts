import type { PluginClientContext } from "@getpaseo/plugin/client";

// Vauxhall for Paseo, ported from the Obsidian theme `cyanvoxel/vauxhall-obsidian` by cyanvoxel.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "vauxhall",
		name: "Vauxhall",
		appearance: "dark",
		colors: {
			background: "#03030b",
			foreground: "#e8e0ff",
			raised: "#040512",
			control: "#090a24",
			border: "#434346",
			accent: "#483699",
			mutedForeground: "#999999",
			ring: "#483699",
		},
	});

	client.addTheme({
		id: "vauxhall-light",
		name: "Vauxhall Light",
		appearance: "light",
		colors: {
			background: "#f7f7fd",
			foreground: "#200080",
			raised: "#f7f7fd",
			control: "#efeffb",
			border: "#e0e0e0",
			accent: "#7b6cd9",
			mutedForeground: "#888888",
			ring: "#7b6cd9",
		},
	});

	return () => {};
}
