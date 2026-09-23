import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obsidian Boom for Paseo, ported from the Obsidian theme `sainadhx/obsidian-boom` by sainadhx.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsidian-boom",
		name: "Obsidian Boom",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#fafafa",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#2d8b62",
			mutedForeground: "#bcbcbc",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "obsidian-boom-light",
		name: "Obsidian Boom Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#1a1a1e",
			raised: "#f5f5f5",
			control: "#e8e8e8",
			border: "#e0e0e0",
			accent: "#2d8b62",
			mutedForeground: "#1a1a1e",
			ring: "#287d58",
		},
	});

	return () => {};
}
