import type { PluginClientContext } from "@getpaseo/plugin/client";

// Cupertino for Paseo, ported from the Obsidian theme `svnaxis/obsidian-cupertino` by Alexis C.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "cupertino",
		name: "Cupertino",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#ffffff",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#0a84ff",
			mutedForeground: "#bfbfbf",
			ring: "#0a84ff",
		},
	});

	client.addTheme({
		id: "cupertino-light",
		name: "Cupertino Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#000000",
			raised: "#f5f5f5",
			control: "#e8e8e8",
			border: "#e0e0e0",
			accent: "#0a84ff",
			mutedForeground: "#6e6e73",
			ring: "#0a84ff",
		},
	});

	return () => {};
}
