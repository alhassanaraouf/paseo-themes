import type { PluginClientContext } from "@getpaseo/plugin/client";

// Kanagawa for Paseo, ported from the Obsidian theme `sspaeti/obsidian_kanagawa` by Simon Späti.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "kanagawa",
		name: "Kanagawa",
		appearance: "dark",
		colors: {
			background: "#1f1f28",
			foreground: "#dcd7ba",
			raised: "#181820",
			control: "#1f1f28",
			border: "#658594",
			accent: "#658594",
			mutedForeground: "#a5a18c",
			ring: "#658594",
		},
	});

	client.addTheme({
		id: "kanagawa-light",
		name: "Kanagawa Light",
		appearance: "light",
		colors: {
			background: "#f2efe9",
			foreground: "#545464",
			raised: "#f8f8f8",
			control: "#e7dba0",
			border: "#9fb5c9",
			accent: "#9fb5c9",
			mutedForeground: "#8a8980",
			ring: "#9fb5c9",
		},
	});

	return () => {};
}
