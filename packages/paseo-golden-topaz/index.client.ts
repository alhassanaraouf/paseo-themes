import type { PluginClientContext } from "@getpaseo/plugin/client";

// Golden Topaz for Paseo, ported from the Obsidian theme `shaggyfeng/obsidian-Golden-Topaz-theme` by shaggyfeng.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "golden-topaz",
		name: "Golden Topaz",
		appearance: "dark",
		colors: {
			background: "#353231",
			foreground: "#a29c90",
			raised: "#383433",
			control: "#007672",
			border: "#000000",
			accent: "#007672",
			mutedForeground: "#a29c90",
			ring: "#e1b87f",
		},
	});

	client.addTheme({
		id: "golden-topaz-light",
		name: "Golden Topaz Light",
		appearance: "light",
		colors: {
			background: "#dddbc7",
			foreground: "#000000",
			raised: "#dddbc7",
			control: "#fbf0d2",
			border: "#000000",
			accent: "#4c5064",
			mutedForeground: "#4c5064",
			ring: "#e6eff4",
		},
	});

	return () => {};
}
