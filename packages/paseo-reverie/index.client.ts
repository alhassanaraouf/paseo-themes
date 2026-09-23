import type { PluginClientContext } from "@getpaseo/plugin/client";

// Reverie for Paseo, ported from the Obsidian theme `santiyounger/Reverie-Obsidian-Theme` by Santi Younger.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "reverie",
		name: "Reverie",
		appearance: "dark",
		colors: {
			background: "#1a2023",
			foreground: "#faf2d6",
			raised: "#222b2f",
			control: "#1a2023",
			border: "#95c1bb",
			accent: "#0b797d",
			mutedForeground: "#bcb6a0",
			ring: "#83a598",
		},
	});

	client.addTheme({
		id: "reverie-light",
		name: "Reverie Light",
		appearance: "light",
		colors: {
			background: "#e7e7e7",
			foreground: "#1a2023",
			raised: "#e3e3e3",
			control: "#e7e7e7",
			border: "#0a4a44",
			accent: "#0c5249",
			mutedForeground: "#1a2023",
			ring: "#084540",
		},
	});

	return () => {};
}
