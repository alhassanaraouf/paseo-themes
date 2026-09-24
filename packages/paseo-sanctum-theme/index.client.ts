import type { PluginClientContext } from "@getpaseo/plugin/client";

// Sanctum for Paseo, ported from the Obsidian theme `jdanielmourao/obsidian-sanctum` by jdanielmourao.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "sanctum",
		name: "Sanctum",
		appearance: "dark",
		colors: {
			background: "#161616",
			foreground: "#f4f4f0",
			raised: "#262625",
			control: "#262625",
			border: "#3a3838",
			accent: "#669961",
			mutedForeground: "#c7c5c2",
			ring: "#669961",
		},
	});

	client.addTheme({
		id: "sanctum-light",
		name: "Sanctum Light",
		appearance: "light",
		colors: {
			background: "#f4f4f0",
			foreground: "#161616",
			raised: "#fdfefe",
			control: "#fdfefe",
			border: "#e2e0dc",
			accent: "#f68d45",
			mutedForeground: "#545151",
			ring: "#f68d45",
		},
	});

	return () => {};
}
