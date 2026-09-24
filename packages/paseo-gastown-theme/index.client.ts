import type { PluginClientContext } from "@getpaseo/plugin/client";

// Gastown for Paseo, ported from the Obsidian theme `dogwaddle/obsidian-gastown-theme.md` by dogwaddle.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "gastown",
		name: "Gastown",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#000000",
			raised: "#eceff2",
			control: "#f2f3f5",
			border: "#dddddd",
			accent: "#020f2b",
			mutedForeground: "#808080",
			ring: "#8273e6",
		},
	});

	return () => {};
}
