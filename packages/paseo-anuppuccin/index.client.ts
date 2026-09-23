import type { PluginClientContext } from "@getpaseo/plugin/client";

// AnuPpuccin for Paseo, ported from the Obsidian theme `anubisnekhet/AnuPpuccin` by anubisnekhet.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "anuppuccin",
		name: "AnuPpuccin",
		appearance: "dark",
		colors: {
			background: "#1e1e2e",
			foreground: "#1e1e2e",
			raised: "#181825",
			control: "#c6d0f5",
			border: "#313244",
			accent: "#b4befe",
			mutedForeground: "#8e95b3",
			ring: "#b4befe",
		},
	});

	client.addTheme({
		id: "anuppuccin-light",
		name: "AnuPpuccin Light",
		appearance: "light",
		colors: {
			background: "#eff1f5",
			foreground: "#4c4f69",
			raised: "#e6e9ef",
			control: "#4c4f69",
			border: "#bcc0cc",
			accent: "#7287fd",
			mutedForeground: "#7c7f93",
			ring: "#7287fd",
		},
	});

	return () => {};
}
