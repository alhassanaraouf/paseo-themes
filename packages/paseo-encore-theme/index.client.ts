import type { PluginClientContext } from "@getpaseo/plugin/client";

// Encore for Paseo, ported from the Obsidian theme `carbonateb/obsidian-encore-theme` by carbonateb.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "encore",
		name: "Encore",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#dee3f1",
			raised: "#080808",
			control: "#141419",
			border: "#1a1a20",
			accent: "#9e6ef2",
			mutedForeground: "#a2a5ba",
			ring: "#9e6ef2",
		},
	});

	client.addTheme({
		id: "encore-light",
		name: "Encore Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#1f2937",
			raised: "#fafafa",
			control: "#e4e4e7",
			border: "#d1d5db",
			accent: "#503d8f",
			mutedForeground: "#4b5563",
			ring: "#503d8f",
		},
	});

	return () => {};
}
