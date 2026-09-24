import type { PluginClientContext } from "@getpaseo/plugin/client";

// Noctis for Paseo, ported from the Obsidian theme `konnta0/obsidian-noctis-theme` by konnta0.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "noctis",
		name: "Noctis",
		appearance: "dark",
		colors: {
			background: "#052529",
			foreground: "#b2cacd",
			raised: "#041d20",
			control: "#073940",
			border: "#0f1415",
			accent: "#009999",
			mutedForeground: "#87a7ab",
			ring: "#00cccc",
		},
	});

	client.addTheme({
		id: "noctis-light",
		name: "Noctis Light",
		appearance: "light",
		colors: {
			background: "#052529",
			foreground: "#b2cacd",
			raised: "#041d20",
			control: "#073940",
			border: "#0f1415",
			accent: "#009999",
			mutedForeground: "#87a7ab",
			ring: "#00cccc",
		},
	});

	return () => {};
}
