import type { PluginClientContext } from "@getpaseo/plugin/client";

// Catppuccin for Paseo, ported from the Obsidian theme `catppuccin/obsidian` by catppuccin.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "catppuccin",
		name: "Catppuccin",
		appearance: "dark",
		colors: {
			background: "#1e1e2e",
			foreground: "#181825",
			raised: "#181825",
			control: "#181825",
			border: "#313244",
			accent: "#cba6f7",
			mutedForeground: "#a6adc8",
			ring: "#cba6f7",
		},
	});

	client.addTheme({
		id: "catppuccin-light",
		name: "Catppuccin Light",
		appearance: "light",
		colors: {
			background: "#eff1f5",
			foreground: "#e6e9ef",
			raised: "#e6e9ef",
			control: "#e6e9ef",
			border: "#ccd0da",
			accent: "#8839ef",
			mutedForeground: "#6c6f85",
			ring: "#8839ef",
		},
	});

	return () => {};
}
