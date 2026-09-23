import type { PluginClientContext } from "@getpaseo/plugin/client";

// Typewriter for Paseo, ported from the Obsidian theme `crashmoney/obsidian-typewriter` by crashmoney.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "typewriter",
		name: "Typewriter",
		appearance: "dark",
		colors: {
			background: "#262626",
			foreground: "#c5b8a1",
			raised: "#3a342e",
			control: "#202020",
			border: "#333333",
			accent: "#6db478",
			mutedForeground: "#999999",
			ring: "#519d5c",
		},
	});

	client.addTheme({
		id: "typewriter-light",
		name: "Typewriter Light",
		appearance: "light",
		colors: {
			background: "#fcf5e4",
			foreground: "#262626",
			raised: "#e4dcc8",
			control: "#fcf5e4",
			border: "#e6e6e6",
			accent: "#6db478",
			mutedForeground: "#595959",
			ring: "#519d5c",
		},
	});

	return () => {};
}
