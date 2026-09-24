import type { PluginClientContext } from "@getpaseo/plugin/client";

// Gitsidian for Paseo, ported from the Obsidian theme `ismailgunacar/gitsidian` by ismailgunacar.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "gitsidian",
		name: "Gitsidian",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#fafafa",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#0366d6",
			mutedForeground: "#bcbcbc",
			ring: "#0366d6",
		},
	});

	client.addTheme({
		id: "gitsidian-light",
		name: "Gitsidian Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#1a1a1e",
			raised: "#f5f5f5",
			control: "#e8e8e8",
			border: "#e0e0e0",
			accent: "#0366d6",
			mutedForeground: "#1a1a1e",
			ring: "#0366d6",
		},
	});

	return () => {};
}
