import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obsidian Nord for Paseo, ported from the Obsidian theme `insanum/obsidian_nord` by insanum.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsidian-nord",
		name: "Obsidian Nord",
		appearance: "dark",
		colors: {
			background: "#2e3440",
			foreground: "#eceff4",
			raised: "#3b4252",
			control: "#2e3440",
			border: "#434c5e",
			accent: "#d08770",
			mutedForeground: "#e5e9f0",
			ring: "#81a1c1",
		},
	});

	client.addTheme({
		id: "obsidian-nord-light",
		name: "Obsidian Nord Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#434c5e",
			raised: "#eceff4",
			control: "#ffffff",
			border: "#e5e9f0",
			accent: "#d08770",
			mutedForeground: "#3b4252",
			ring: "#81a1c1",
		},
	});

	return () => {};
}
