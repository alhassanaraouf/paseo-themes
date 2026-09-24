import type { PluginClientContext } from "@getpaseo/plugin/client";

// Everforest Enchanted for Paseo, ported from the Obsidian theme `fireisgood/obsidian-everforest-enchanted` by fireisgood.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "everforest-enchanted",
		name: "Everforest Enchanted",
		appearance: "dark",
		colors: {
			background: "#333c43",
			foreground: "#d3c6aa",
			raised: "#333c43",
			control: "#333c43",
			border: "#5d6b66",
			accent: "#569d79",
			mutedForeground: "#9e9480",
			ring: "#5a93a2",
		},
	});

	client.addTheme({
		id: "everforest-enchanted-light",
		name: "Everforest Enchanted Light",
		appearance: "light",
		colors: {
			background: "#fffbef",
			foreground: "#5c6a72",
			raised: "#fffbef",
			control: "#fffbef",
			border: "#bec5b2",
			accent: "#569d79",
			mutedForeground: "#5c6a72",
			ring: "#5a93a2",
		},
	});

	return () => {};
}
