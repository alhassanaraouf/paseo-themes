import type { PluginClientContext } from "@getpaseo/plugin/client";

// Wasp for Paseo, ported from the Obsidian theme `santiyounger/Wasp-Obsidian-Theme` by Santi Younger.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "wasp",
		name: "Wasp",
		appearance: "dark",
		colors: {
			background: "#242424",
			foreground: "#faf2d6",
			raised: "#191919",
			control: "#242424",
			border: "#f8c537",
			accent: "#f8c537",
			mutedForeground: "#bdae93",
			ring: "#d49335",
		},
	});

	client.addTheme({
		id: "wasp-light",
		name: "Wasp Light",
		appearance: "light",
		colors: {
			background: "#faf6f0",
			foreground: "#2c2419",
			raised: "#e8dfd0",
			control: "#fffcf7",
			border: "#c87628",
			accent: "#d4922a",
			mutedForeground: "#5c5044",
			ring: "#9b4218",
		},
	});

	return () => {};
}
