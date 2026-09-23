import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obsidianite for Paseo, ported from the Obsidian theme `bennyxguo/Obsidian-Obsidianite` by bennyxguo.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsidianite",
		name: "Obsidianite",
		appearance: "dark",
		colors: {
			background: "#100e17",
			foreground: "#bebebe",
			raised: "#191621",
			control: "#0d0b12",
			border: "#0ed2f7",
			accent: "#0ed2f7",
			mutedForeground: "#8e8e8e",
			ring: "#0ed2f7",
		},
	});

	client.addTheme({
		id: "obsidianite-light",
		name: "Obsidianite Light",
		appearance: "light",
		colors: {
			background: "#100e17",
			foreground: "#bebebe",
			raised: "#191621",
			control: "#0d0b12",
			border: "#0ed2f7",
			accent: "#0ed2f7",
			mutedForeground: "#bebebe",
			ring: "#0ed2f7",
		},
	});

	return () => {};
}
