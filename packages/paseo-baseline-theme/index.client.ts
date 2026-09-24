import type { PluginClientContext } from "@getpaseo/plugin/client";

// Baseline for Paseo, ported from the Obsidian theme `svnaxis/obsidian-baseline` by Alexis C.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "baseline",
		name: "Baseline",
		appearance: "dark",
		colors: {
			background: "#11111b",
			foreground: "#c6d0f5",
			raised: "#181825",
			control: "#1e1e2e",
			border: "#313244",
			accent: "#314f52",
			mutedForeground: "#8e95b3",
			ring: "#39595c",
		},
	});

	client.addTheme({
		id: "baseline-light",
		name: "Baseline Light",
		appearance: "light",
		colors: {
			background: "#fdfcfc",
			foreground: "#333231",
			raised: "#f7f3f0",
			control: "#fdfcfc",
			border: "#eef0f4",
			accent: "#538a8a",
			mutedForeground: "#807974",
			ring: "#5c9e9e",
		},
	});

	return () => {};
}
