import type { PluginClientContext } from "@getpaseo/plugin/client";

// Comfort color dark for Paseo, ported from the Obsidian theme `obsidian-ezs/obsidian-comfort-color-dark` by obsidian-ezs.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "comfort-color-dark",
		name: "Comfort color dark",
		appearance: "dark",
		colors: {
			background: "#2f3136",
			foreground: "#bbc0c5",
			raised: "#202225",
			control: "#36393f",
			border: "#92a1a1",
			accent: "#92a1a1",
			mutedForeground: "#8c9094",
			ring: "#92a1a1",
		},
	});

	return () => {};
}
