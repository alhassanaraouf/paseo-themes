import type { PluginClientContext } from "@getpaseo/plugin/client";

// Nier for Paseo, ported from the Obsidian theme `exloseur3d/nier-theme` by exloseur3d.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "nier",
		name: "Nier",
		appearance: "dark",
		colors: {
			background: "#ddd8c7",
			foreground: "#49463d",
			raised: "#afaa96",
			control: "#a7957d",
			border: "#424958",
			accent: "#6e695b",
			mutedForeground: "#696868",
			ring: "#2d5eb9",
		},
	});

	return () => {};
}
