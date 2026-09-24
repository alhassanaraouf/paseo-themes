import type { PluginClientContext } from "@getpaseo/plugin/client";

// Moonlight for Paseo, ported from the Obsidian theme `kartik-karz/moonlight-obsidian` by kartik-karz.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "moonlight",
		name: "Moonlight",
		appearance: "dark",
		colors: {
			background: "#202020",
			foreground: "#dcddde",
			raised: "#161616",
			control: "#2a2a2a",
			border: "#333333",
			accent: "#5c73f2",
			mutedForeground: "#888888",
			ring: "#5c73f2",
		},
	});

	client.addTheme({
		id: "moonlight-light",
		name: "Moonlight Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#2e3338",
			raised: "#f2f3f5",
			control: "#f2f3f5",
			border: "#dddddd",
			accent: "#5c73f2",
			mutedForeground: "#888888",
			ring: "#5c73f2",
		},
	});

	return () => {};
}
