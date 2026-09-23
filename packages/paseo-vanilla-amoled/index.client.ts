import type { PluginClientContext } from "@getpaseo/plugin/client";

// Vanilla AMOLED for Paseo, ported from the Obsidian theme `sakuraisayeki/vanilla-amoled-theme` by sakuraisayeki.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "vanilla-amoled",
		name: "Vanilla AMOLED",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#ffffff",
			raised: "#080808",
			control: "#222222",
			border: "#333333",
			accent: "#2d8b62",
			mutedForeground: "#999999",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "vanilla-amoled-light",
		name: "Vanilla AMOLED Light",
		appearance: "light",
		colors: {
			background: "#000000",
			foreground: "#ffffff",
			raised: "#080808",
			control: "#222222",
			border: "#333333",
			accent: "#2d8b62",
			mutedForeground: "#999999",
			ring: "#287d58",
		},
	});

	return () => {};
}
