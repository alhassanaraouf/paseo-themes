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

	return () => {};
}
