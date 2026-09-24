import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ultra Lobster for Paseo, ported from the Obsidian theme `7368697661/Ultra-Lobster` by kneecaps.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ultra-lobster",
		name: "Ultra Lobster",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#bababa",
			raised: "#28282c",
			control: "#1a1a1a",
			border: "#434346",
			accent: "#027aff",
			mutedForeground: "#666666",
			ring: "#027aff",
		},
	});

	client.addTheme({
		id: "ultra-lobster-light",
		name: "Ultra Lobster Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#5a5a5a",
			raised: "#f9f9f9",
			control: "#ffffff",
			border: "#e0e0e0",
			accent: "#5bcefa",
			mutedForeground: "#ababab",
			ring: "#5bcefa",
		},
	});

	return () => {};
}
