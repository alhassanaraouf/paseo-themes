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
			accent: "#483699",
			mutedForeground: "#999999",
			ring: "#483699",
		},
	});

	client.addTheme({
		id: "vanilla-amoled-light",
		name: "Vanilla AMOLED Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#2e3338",
			raised: "#f2f3f5",
			control: "#f2f3f5",
			border: "#dddddd",
			accent: "#7b6cd9",
			mutedForeground: "#888888",
			ring: "#7b6cd9",
		},
	});

	return () => {};
}
