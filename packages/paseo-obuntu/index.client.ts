import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obuntu for Paseo, ported from the Obsidian theme `dmytrodubinin/Obuntu-theme-for-Obsidian` by dmytrodubinin.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obuntu",
		name: "Obuntu",
		appearance: "dark",
		colors: {
			background: "#343434",
			foreground: "#dcddde",
			raised: "#2c2c2c",
			control: "#2c2c2c",
			border: "#303030",
			accent: "#df4a16",
			mutedForeground: "#999999",
			ring: "#df7a16",
		},
	});

	client.addTheme({
		id: "obuntu-light",
		name: "Obuntu Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#03050b",
			raised: "#dedede",
			control: "#dedede",
			border: "#f7f7f7",
			accent: "#df4a16",
			mutedForeground: "#555555",
			ring: "#df7a16",
		},
	});

	return () => {};
}
