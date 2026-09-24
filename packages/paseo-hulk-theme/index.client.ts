import type { PluginClientContext } from "@getpaseo/plugin/client";

// Hulk for Paseo, ported from the Obsidian theme `pgalliford/Obsidian-theme-Incredible-Hulk` by pgalliford.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "hulk",
		name: "Hulk",
		appearance: "dark",
		colors: {
			background: "#1a1b24",
			foreground: "#bbc0c5",
			raised: "#1a1b24",
			control: "#282a36",
			border: "#92a1a1",
			accent: "#00ba00",
			mutedForeground: "#8c9094",
			ring: "#00ba00",
		},
	});

	client.addTheme({
		id: "hulk-light",
		name: "Hulk Light",
		appearance: "light",
		colors: {
			background: "#1a1b24",
			foreground: "#bbc0c5",
			raised: "#1a1b24",
			control: "#282a36",
			border: "#92a1a1",
			accent: "#00ba00",
			mutedForeground: "#8c9094",
			ring: "#00ba00",
		},
	});

	return () => {};
}
