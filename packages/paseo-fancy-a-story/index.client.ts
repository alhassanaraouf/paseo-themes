import type { PluginClientContext } from "@getpaseo/plugin/client";

// Fancy-a-Story for Paseo, ported from the Obsidian theme `elsatam/obsidian-fancy-a-story` by elsatam.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "fancy-a-story",
		name: "Fancy-a-Story",
		appearance: "dark",
		colors: {
			background: "#272b34",
			foreground: "#000000",
			raised: "#393d46",
			control: "#575a61",
			border: "#61646b",
			accent: "#2d8b62",
			mutedForeground: "#a1a3a8",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "fancy-a-story-light",
		name: "Fancy-a-Story Light",
		appearance: "light",
		colors: {
			background: "#e9f5dd",
			foreground: "#000000",
			raised: "#dfead3",
			control: "#cdd9c2",
			border: "#c7d2bd",
			accent: "#2d8b62",
			mutedForeground: "#9ca593",
			ring: "#287d58",
		},
	});

	return () => {};
}
