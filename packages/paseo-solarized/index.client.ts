import type { PluginClientContext } from "@getpaseo/plugin/client";

// Solarized for Paseo, ported from the Obsidian theme `harmtemolder/obsidian-solarized` by harmtemolder.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "solarized",
		name: "Solarized",
		appearance: "dark",
		colors: {
			background: "#002b36",
			foreground: "#839496",
			raised: "#002b36",
			control: "#073642",
			border: "#073642",
			accent: "#2d8b62",
			mutedForeground: "#657b83",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "solarized-light",
		name: "Solarized Light",
		appearance: "light",
		colors: {
			background: "#fdf6e3",
			foreground: "#657b83",
			raised: "#fdf6e3",
			control: "#eee8d5",
			border: "#eee8d5",
			accent: "#2d8b62",
			mutedForeground: "#839496",
			ring: "#287d58",
		},
	});

	return () => {};
}
