import type { PluginClientContext } from "@getpaseo/plugin/client";

// LYT Mode for Paseo, ported from the Obsidian theme `nickmilo/LYT-Mode` by nickmilo.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "lyt-mode",
		name: "LYT Mode",
		appearance: "dark",
		colors: {
			background: "#2d3039",
			foreground: "#b9c3df",
			raised: "#1e1f24",
			control: "#17181c",
			border: "#646464",
			accent: "#585f74",
			mutedForeground: "#a0a7bb",
			ring: "#9fa7bc",
		},
	});

	client.addTheme({
		id: "lyt-mode-light",
		name: "LYT Mode Light",
		appearance: "light",
		colors: {
			background: "#2d3039",
			foreground: "#b9c3df",
			raised: "#1e1f24",
			control: "#23242a",
			border: "#646464",
			accent: "#585f74",
			mutedForeground: "#a0a7bb",
			ring: "#9fa7bc",
		},
	});

	return () => {};
}
