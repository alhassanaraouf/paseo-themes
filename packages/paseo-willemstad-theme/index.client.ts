import type { PluginClientContext } from "@getpaseo/plugin/client";

// Willemstad for Paseo, ported from the Obsidian theme `tingmelvin/willemstad-x` by tingmelvin.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "willemstad",
		name: "Willemstad",
		appearance: "dark",
		colors: {
			background: "#070707",
			foreground: "#f8f8f8",
			raised: "#141414",
			control: "#141414",
			border: "#2e2e2e",
			accent: "#483699",
			mutedForeground: "#989898",
			ring: "#483699",
		},
	});

	client.addTheme({
		id: "willemstad-light",
		name: "Willemstad Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#000000",
			raised: "#eeeeee",
			control: "#eeeeee",
			border: "#bebebe",
			accent: "#7b6cd9",
			mutedForeground: "#2e2e2e",
			ring: "#7b6cd9",
		},
	});

	return () => {};
}
