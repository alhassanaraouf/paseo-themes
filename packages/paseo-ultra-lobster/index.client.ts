import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ultra Lobster for Paseo, ported from the Obsidian theme `7368697661/Ultra-Lobster` by kneecaps.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ultra-lobster",
		name: "Ultra Lobster",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#565f89",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#ffd91a",
			mutedForeground: "#3b4261",
			ring: "#ffd91a",
		},
	});

	client.addTheme({
		id: "ultra-lobster-light",
		name: "Ultra Lobster Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#696c77",
			raised: "#f9f9f9",
			control: "#f9f9f9",
			border: "#e0e0e0",
			accent: "#c18401",
			mutedForeground: "#9a9b9c",
			ring: "#ae7701",
		},
	});

	return () => {};
}
