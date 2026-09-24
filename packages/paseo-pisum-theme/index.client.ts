import type { PluginClientContext } from "@getpaseo/plugin/client";

// Pisum for Paseo, ported from the Obsidian theme `guangluwu/obsidian-pisum` by guangluwu.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "pisum",
		name: "Pisum",
		appearance: "dark",
		colors: {
			background: "#364549",
			foreground: "#fbf1c7",
			raised: "#415358",
			control: "#2c383a",
			border: "#f2e5bc",
			accent: "#b57614",
			mutedForeground: "#d5c4a1",
			ring: "#fe8019",
		},
	});

	return () => {};
}
