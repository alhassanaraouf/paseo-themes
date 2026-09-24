import type { PluginClientContext } from "@getpaseo/plugin/client";

// Firefly for Paseo, ported from the Obsidian theme `lazercaveman/obsidian-firefly-theme` by lazercaveman.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "firefly",
		name: "Firefly",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#fafafa",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#2d8b62",
			mutedForeground: "#bcbcbc",
			ring: "#469975",
		},
	});

	return () => {};
}
