import type { PluginClientContext } from "@getpaseo/plugin/client";

// Typomagical for Paseo, ported from the Obsidian theme `hungsu/typomagical-obsidian` by hungsu.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "typomagical",
		name: "Typomagical",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#cdd6f4",
			raised: "#000000",
			control: "#181825",
			border: "#45475a",
			accent: "#89b4fa",
			mutedForeground: "#bac2de",
			ring: "#74c7ec",
		},
	});

	client.addTheme({
		id: "typomagical-light",
		name: "Typomagical Light",
		appearance: "light",
		colors: {
			background: "#eff1f5",
			foreground: "#4c4f69",
			raised: "#ffffff",
			control: "#e6e9ef",
			border: "#bcc0cc",
			accent: "#df8e1d",
			mutedForeground: "#5c5f77",
			ring: "#fe640b",
		},
	});

	return () => {};
}
