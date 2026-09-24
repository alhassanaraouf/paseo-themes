import type { PluginClientContext } from "@getpaseo/plugin/client";

// Underwater for Paseo, ported from the Obsidian theme `seniblue/Underwater` by seniblue.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "underwater",
		name: "Underwater",
		appearance: "dark",
		colors: {
			background: "#19192e",
			foreground: "#e0def4",
			raised: "#19192e",
			control: "#212037",
			border: "#303e55",
			accent: "#ebbcba",
			mutedForeground: "#6e6a86",
			ring: "#ebbcba",
		},
	});

	client.addTheme({
		id: "underwater-light",
		name: "Underwater Light",
		appearance: "light",
		colors: {
			background: "#f5efee",
			foreground: "#575279",
			raised: "#f5efee",
			control: "#e6dad7",
			border: "#d1c9c1",
			accent: "#d7827e",
			mutedForeground: "#9893a5",
			ring: "#d7827e",
		},
	});

	return () => {};
}
