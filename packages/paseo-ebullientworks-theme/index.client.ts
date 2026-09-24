import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ebullientworks for Paseo, ported from the Obsidian theme `ebullient/obsidian-theme-ebullientworks` by ebullient.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ebullientworks",
		name: "Ebullientworks",
		appearance: "dark",
		colors: {
			background: "#1e1e1e",
			foreground: "#cdcdcd",
			raised: "#2f2f2f",
			control: "#3f3f3f",
			border: "#1b1b1b",
			accent: "#6b4c65",
			mutedForeground: "#b8b8b8",
			ring: "#8c6585",
		},
	});

	client.addTheme({
		id: "ebullientworks-light",
		name: "Ebullientworks Light",
		appearance: "light",
		colors: {
			background: "#f8f8f8",
			foreground: "#484848",
			raised: "#e3e3e3",
			control: "#ebebeb",
			border: "#cdcdcd",
			accent: "#8c6585",
			mutedForeground: "#5d5d5d",
			ring: "#ae7fa5",
		},
	});

	return () => {};
}
