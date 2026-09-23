import type { PluginClientContext } from "@getpaseo/plugin/client";

// Kanagawa Paper for Paseo, ported from the Obsidian theme `sspaeti/obsidian_kanagawa_paper` by Simon Späti.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "kanagawa-paper",
		name: "Kanagawa Paper",
		appearance: "dark",
		colors: {
			background: "#181616",
			foreground: "#c5c9c5",
			raised: "#1d1c19",
			control: "#181616",
			border: "#8ba4b0",
			accent: "#8ba4b0",
			mutedForeground: "#949794",
			ring: "#8ba4b0",
		},
	});

	client.addTheme({
		id: "kanagawa-paper-light",
		name: "Kanagawa Paper Light",
		appearance: "light",
		colors: {
			background: "#f2ecbc",
			foreground: "#545464",
			raised: "#dcd5ac",
			control: "#e7dba0",
			border: "#d5d0a5",
			accent: "#8ba4b0",
			mutedForeground: "#545464",
			ring: "#8ba4b0",
		},
	});

	return () => {};
}
