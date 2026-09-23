import type { PluginClientContext } from "@getpaseo/plugin/client";

// Sanctum for Paseo, ported from the Obsidian theme `jdanielmourao/obsidian-sanctum` by jdanielmourao.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "sanctum",
		name: "Sanctum",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#c7c5c2",
			raised: "#262625",
			control: "#161616",
			border: "#262625",
			accent: "#669961",
			mutedForeground: "#616161",
			ring: "#669961",
		},
	});

	client.addTheme({
		id: "sanctum-light",
		name: "Sanctum Light",
		appearance: "light",
		colors: {
			background: "#fdfefe",
			foreground: "#161616",
			raised: "#fdfefe",
			control: "#f4f4f0",
			border: "#e2e0dc",
			accent: "#f68d45",
			mutedForeground: "#aabfc9",
			ring: "#f68d45",
		},
	});

	return () => {};
}
