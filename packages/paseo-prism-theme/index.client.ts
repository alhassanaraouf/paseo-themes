import type { PluginClientContext } from "@getpaseo/plugin/client";

// Prism for Paseo, ported from the Obsidian theme `damiankorcz/Prism-Theme` by damiankorcz.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "prism",
		name: "Prism",
		appearance: "dark",
		colors: {
			background: "#481b19",
			foreground: "#f6e5e5",
			raised: "#2d1110",
			control: "#2d1110",
			border: "#6d2926",
			accent: "#af4841",
			mutedForeground: "#efd3d2",
			ring: "#af4841",
		},
	});

	client.addTheme({
		id: "prism-light",
		name: "Prism Light",
		appearance: "light",
		colors: {
			background: "#fdf7f7",
			foreground: "#3b1311",
			raised: "#f7e4e3",
			control: "#fdf7f7",
			border: "#e19c98",
			accent: "#f3a59b",
			mutedForeground: "#4f1a17",
			ring: "#f3a59b",
		},
	});

	return () => {};
}
