import type { PluginClientContext } from "@getpaseo/plugin/client";

// Rosé Pine for Paseo, ported from the Obsidian theme `sspaeti/obsidian_rose_pine` by Simon Späti.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ros-pine",
		name: "Rosé Pine",
		appearance: "dark",
		colors: {
			background: "#191724",
			foreground: "#e0def4",
			raised: "#1f1d2e",
			control: "#1f1d2e",
			border: "#26233a",
			accent: "#eb6f92",
			mutedForeground: "#6e6a86",
			ring: "#9ccfd8",
		},
	});

	client.addTheme({
		id: "ros-pine-light",
		name: "Rosé Pine Light",
		appearance: "light",
		colors: {
			background: "#faf4ed",
			foreground: "#575279",
			raised: "#fffaf3",
			control: "#fffaf3",
			border: "#f2e9e1",
			accent: "#b4637a",
			mutedForeground: "#9893a5",
			ring: "#56949f",
		},
	});

	return () => {};
}
