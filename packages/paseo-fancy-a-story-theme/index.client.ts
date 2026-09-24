import type { PluginClientContext } from "@getpaseo/plugin/client";

// Fancy-a-Story for Paseo, ported from the Obsidian theme `elsatam/obsidian-fancy-a-story` by elsatam.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "fancy-a-story",
		name: "Fancy-a-Story",
		appearance: "dark",
		colors: {
			background: "#1f1f1f",
			foreground: "#d9d9d9",
			raised: "#2f2f2f",
			control: "#373737",
			border: "#505050",
			accent: "#2d8b62",
			mutedForeground: "#9c9c9c",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "fancy-a-story-light",
		name: "Fancy-a-Story Light",
		appearance: "light",
		colors: {
			background: "#e7e7e7",
			foreground: "#000000",
			raised: "#dcdcdc",
			control: "#d7d7d7",
			border: "#c5c5c5",
			accent: "#2d8b62",
			mutedForeground: "#868686",
			ring: "#287d58",
		},
	});

	return () => {};
}
