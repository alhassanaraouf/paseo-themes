import type { PluginClientContext } from "@getpaseo/plugin/client";

// Typora-Vue for Paseo, ported from the Obsidian theme `zekunc/Obsidian-Typora-Vue-Theme` by zekunc.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "typora-vue",
		name: "Typora-Vue",
		appearance: "dark",
		colors: {
			background: "#ffffff",
			foreground: "#eeeeee",
			raised: "#ffffff",
			control: "#ffffff",
			border: "#ffffff",
			accent: "#2d8b62",
			mutedForeground: "#b2b2b2",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "typora-vue-light",
		name: "Typora-Vue Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#34495e",
			raised: "#ffffff",
			control: "#ffffff",
			border: "#e0e0e0",
			accent: "#2d8b62",
			mutedForeground: "#34495e",
			ring: "#287d58",
		},
	});

	return () => {};
}
