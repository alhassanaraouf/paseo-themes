import type { PluginClientContext } from "@getpaseo/plugin/client";

// Adwaita for Paseo, ported from the Obsidian theme `birneee/obsidian-adwaita-theme` by birneee.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "adwaita",
		name: "Adwaita",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#ffffff",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#2d8b62",
			mutedForeground: "#bfbfbf",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "adwaita-light",
		name: "Adwaita Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#000000",
			raised: "#f5f5f5",
			control: "#e8e8e8",
			border: "#e0e0e0",
			accent: "#2d8b62",
			mutedForeground: "#000000",
			ring: "#287d58",
		},
	});

	return () => {};
}
