import type { PluginClientContext } from "@getpaseo/plugin/client";

// Retro Windows for Paseo, ported from the Obsidian theme `codeisconfusing/retro-windows-obsidian` by codeisconfusing.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "retro-windows",
		name: "Retro Windows",
		appearance: "dark",
		colors: {
			background: "#1e1e1e",
			foreground: "#e0e0e0",
			raised: "#2d2d2d",
			control: "#3a3a3a",
			border: "#464646",
			accent: "#4f6fb0",
			mutedForeground: "#b0b0b0",
			ring: "#6989d0",
		},
	});

	client.addTheme({
		id: "retro-windows-light",
		name: "Retro Windows Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#000000",
			raised: "#ececec",
			control: "#d4d0c8",
			border: "#e0e0e0",
			accent: "#000080",
			mutedForeground: "#333333",
			ring: "#0000aa",
		},
	});

	return () => {};
}
