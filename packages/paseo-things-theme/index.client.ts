import type { PluginClientContext } from "@getpaseo/plugin/client";

// Things for Paseo, ported from the Obsidian theme `colineckert/obsidian-things` by colineckert.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "things",
		name: "Things",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#dadada",
			raised: "#282c34",
			control: "#35393e",
			border: "#35393e",
			accent: "#4c8ce6",
			mutedForeground: "#bec6cf",
			ring: "#afcbf4",
		},
	});

	client.addTheme({
		id: "things-light",
		name: "Things Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#222222",
			raised: "#f6f7f8",
			control: "#fcfcfc",
			border: "#ebedf0",
			accent: "#4c8ce6",
			mutedForeground: "#555e68",
			ring: "#2070df",
		},
	});

	return () => {};
}
