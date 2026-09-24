import type { PluginClientContext } from "@getpaseo/plugin/client";

// Origami for Paseo, ported from the Obsidian theme `7368697661/Origami` by kneecaps.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "origami",
		name: "Origami",
		appearance: "dark",
		colors: {
			background: "#202020",
			foreground: "#b3b3b3",
			raised: "#555555",
			control: "#202020",
			border: "#555555",
			accent: "#8a5cf5",
			mutedForeground: "#999999",
			ring: "#a68af9",
		},
	});

	client.addTheme({
		id: "origami-light",
		name: "Origami Light",
		appearance: "light",
		colors: {
			background: "#f8f5f3",
			foreground: "#222222",
			raised: "#e9e9e9",
			control: "#f8f5f3",
			border: "#d3d3d3",
			accent: "#8a5cf5",
			mutedForeground: "#6b6b6b",
			ring: "#a68af9",
		},
	});

	return () => {};
}
