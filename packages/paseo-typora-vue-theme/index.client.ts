import type { PluginClientContext } from "@getpaseo/plugin/client";

// Typora-Vue for Paseo, ported from the Obsidian theme `zekunc/Obsidian-Typora-Vue-Theme` by zekunc.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "typora-vue",
		name: "Typora-Vue",
		appearance: "dark",
		colors: {
			background: "#202020",
			foreground: "#eeeeee",
			raised: "#161616",
			control: "#2a2a2a",
			border: "#333333",
			accent: "#42b883",
			mutedForeground: "#999999",
			ring: "#42b883",
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
			control: "#f2f3f5",
			border: "#dddddd",
			accent: "#42b883",
			mutedForeground: "#888888",
			ring: "#42b883",
		},
	});

	return () => {};
}
