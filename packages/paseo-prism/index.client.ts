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
			raised: "#1e0b0b",
			control: "#6d2926",
			border: "#6d2926",
			accent: "#696969",
			mutedForeground: "#efd3d2",
			ring: "#696969",
		},
	});

	client.addTheme({
		id: "prism-light",
		name: "Prism Light",
		appearance: "light",
		colors: {
			background: "#fdf7f7",
			foreground: "#3b1311",
			raised: "#fdf7f7",
			control: "#f9eceb",
			border: "#e19c98",
			accent: "#bababa",
			mutedForeground: "#4f1a17",
			ring: "#bababa",
		},
	});

	return () => {};
}
