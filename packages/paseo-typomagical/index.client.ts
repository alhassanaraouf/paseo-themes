import type { PluginClientContext } from "@getpaseo/plugin/client";

// Typomagical for Paseo, ported from the Obsidian theme `hungsu/typomagical-obsidian` by hungsu.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "typomagical",
		name: "Typomagical",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#eceff4",
			raised: "#000000",
			control: "#000000",
			border: "#e8aa99",
			accent: "#89b4fa",
			mutedForeground: "#e5e9f0",
			ring: "#74c7ec",
		},
	});

	client.addTheme({
		id: "typomagical-light",
		name: "Typomagical Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#3a527e",
			raised: "#ffffff",
			control: "#ffffff",
			border: "#beb28e",
			accent: "#df8e1d",
			mutedForeground: "#67799e",
			ring: "#fe640b",
		},
	});

	return () => {};
}
