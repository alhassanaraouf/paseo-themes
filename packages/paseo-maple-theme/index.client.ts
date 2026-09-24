import type { PluginClientContext } from "@getpaseo/plugin/client";

// Maple for Paseo, ported from the Obsidian theme `subframe7536/obsidian-theme-maple` by subframe7536.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "maple",
		name: "Maple",
		appearance: "dark",
		colors: {
			background: "#202122",
			foreground: "#e8f0f7",
			raised: "#141414",
			control: "#202122",
			border: "#48494a",
			accent: "#d9a441",
			mutedForeground: "#aeb4b9",
			ring: "#e5b45c",
		},
	});

	client.addTheme({
		id: "maple-light",
		name: "Maple Light",
		appearance: "light",
		colors: {
			background: "#f0f0ef",
			foreground: "#1a1a1a",
			raised: "#f7f7f7",
			control: "#f0f0ef",
			border: "#d3d3d2",
			accent: "#b07e2a",
			mutedForeground: "#6e6e6e",
			ring: "#c08f3a",
		},
	});

	return () => {};
}
