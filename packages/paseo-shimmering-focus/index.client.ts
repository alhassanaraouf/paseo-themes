import type { PluginClientContext } from "@getpaseo/plugin/client";

// Shimmering Focus for Paseo, ported from the Obsidian theme `chrisgrieser/shimmering-focus` by Chris Grieser.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "shimmering-focus",
		name: "Shimmering Focus",
		appearance: "dark",
		colors: {
			background: "#292929",
			foreground: "#ebdbb2",
			raised: "#292929",
			control: "#292929",
			border: "#505050",
			accent: "#fe811b",
			mutedForeground: "#b0a486",
			ring: "#d85f0e",
		},
	});

	client.addTheme({
		id: "shimmering-focus-light",
		name: "Shimmering Focus Light",
		appearance: "light",
		colors: {
			background: "#f2e5bb",
			foreground: "#292929",
			raised: "#f2e5bb",
			control: "#f2e5bb",
			border: "#d5caa5",
			accent: "#b03a03",
			mutedForeground: "#292929",
			ring: "#d85f0e",
		},
	});

	return () => {};
}
