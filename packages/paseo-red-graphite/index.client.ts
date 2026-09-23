import type { PluginClientContext } from "@getpaseo/plugin/client";

// Red Graphite for Paseo, ported from the Obsidian theme `seanwcom/Red-Graphite-for-Obsidian` by seanwcom.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "red-graphite",
		name: "Red Graphite",
		appearance: "dark",
		colors: {
			background: "#1e232f",
			foreground: "#1e232f",
			raised: "#1e232f",
			control: "#1e232f",
			border: "#000000",
			accent: "#2d8b62",
			mutedForeground: "#000000",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "red-graphite-light",
		name: "Red Graphite Light",
		appearance: "light",
		colors: {
			background: "#292c2e",
			foreground: "#292c2e",
			raised: "#292c2e",
			control: "#e9ebec",
			border: "#dcdee0",
			accent: "#2d8b62",
			mutedForeground: "#8b9398",
			ring: "#287d58",
		},
	});

	return () => {};
}
