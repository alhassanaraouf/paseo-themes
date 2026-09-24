import type { PluginClientContext } from "@getpaseo/plugin/client";

// Shimmering Focus for Paseo, ported from the Obsidian theme `chrisgrieser/shimmering-focus` by Chris Grieser.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "shimmering-focus",
		name: "Shimmering Focus",
		appearance: "dark",
		colors: {
			background: "#1a1c23",
			foreground: "#c3c8df",
			raised: "#23252f",
			control: "#1a1c23",
			border: "#272935",
			accent: "#108189",
			mutedForeground: "#b0b3c4",
			ring: "#ed5aa8",
		},
	});

	client.addTheme({
		id: "shimmering-focus-light",
		name: "Shimmering Focus Light",
		appearance: "light",
		colors: {
			background: "#fbfcfd",
			foreground: "#1f295c",
			raised: "#eff0f5",
			control: "#fbfcfd",
			border: "#e6e7f0",
			accent: "#108189",
			mutedForeground: "#434a70",
			ring: "#dc388f",
		},
	});

	return () => {};
}
