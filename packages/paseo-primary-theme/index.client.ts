import type { PluginClientContext } from "@getpaseo/plugin/client";

// Primary for Paseo, ported from the Obsidian theme `primary-theme/obsidian` by primary-theme.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "primary",
		name: "Primary",
		appearance: "dark",
		colors: {
			background: "#2e261f",
			foreground: "#d7c0a3",
			raised: "#26211c",
			control: "#26211c",
			border: "#3b3026",
			accent: "#4e3e2d",
			mutedForeground: "#ab916d",
			ring: "#6c4f38",
		},
	});

	client.addTheme({
		id: "primary-light",
		name: "Primary Light",
		appearance: "light",
		colors: {
			background: "#f8f5f1",
			foreground: "#593e22",
			raised: "#eee7dd",
			control: "#f2ece3",
			border: "#e4d7c3",
			accent: "#9d8062",
			mutedForeground: "#836b49",
			ring: "#b79678",
		},
	});

	return () => {};
}
