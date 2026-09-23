import type { PluginClientContext } from "@getpaseo/plugin/client";

// Emerald for Paseo, ported from the Obsidian theme `gracejoseph1236/obsidian-emerald` by gracejoseph1236.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "emerald",
		name: "Emerald",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#fafafa",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#237052",
			mutedForeground: "#bcbcbc",
			ring: "#237052",
		},
	});

	client.addTheme({
		id: "emerald-light",
		name: "Emerald Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#1a1a1e",
			raised: "#f5f5f5",
			control: "#e8e8e8",
			border: "#e0e0e0",
			accent: "#237052",
			mutedForeground: "#1a1a1e",
			ring: "#237052",
		},
	});

	return () => {};
}
