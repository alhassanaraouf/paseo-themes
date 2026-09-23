import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obsidian gruvbox for Paseo, ported from the Obsidian theme `insanum/obsidian_gruvbox` by insanum.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsidian-gruvbox",
		name: "Obsidian gruvbox",
		appearance: "dark",
		colors: {
			background: "#282828",
			foreground: "#fbf1c7",
			raised: "#1d2021",
			control: "#282828",
			border: "#3c3836",
			accent: "#d65d0e",
			mutedForeground: "#d5c4a1",
			ring: "#8ec07c",
		},
	});

	client.addTheme({
		id: "obsidian-gruvbox-light",
		name: "Obsidian gruvbox Light",
		appearance: "light",
		colors: {
			background: "#f9f5d7",
			foreground: "#282828",
			raised: "#ebdbb2",
			control: "#f9f5d7",
			border: "#d5c4a1",
			accent: "#d65d0e",
			mutedForeground: "#504945",
			ring: "#8ec07c",
		},
	});

	return () => {};
}
