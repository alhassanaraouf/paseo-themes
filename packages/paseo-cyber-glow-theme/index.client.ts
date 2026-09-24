import type { PluginClientContext } from "@getpaseo/plugin/client";

// Cyber Glow for Paseo, ported from the Obsidian theme `thepharaohart/Obsidian-CyberGlow` by thepharaohart.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "cyber-glow",
		name: "Cyber Glow",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#fafafa",
			raised: "#1e1e1e",
			control: "#1e1e1e",
			border: "#2e2e2e",
			accent: "#4cadd6",
			mutedForeground: "#bcbcbc",
			ring: "#61b7db",
		},
	});

	client.addTheme({
		id: "cyber-glow-light",
		name: "Cyber Glow Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#1a1a1e",
			raised: "#c2c2c2",
			control: "#c2c2c2",
			border: "#cacaca",
			accent: "#4cadd6",
			mutedForeground: "#b3b3b3",
			ring: "#3f94b9",
		},
	});

	return () => {};
}
