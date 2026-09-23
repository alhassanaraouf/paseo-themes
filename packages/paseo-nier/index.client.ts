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
			control: "#aca793",
			border: "#424958",
			accent: "#6e695b",
			mutedForeground: "#696868",
			ring: "#2d5eb9",
		},
	});

	client.addTheme({
		id: "nier-light",
		name: "Nier Light",
		appearance: "light",
		colors: {
			background: "#fafafa",
			foreground: "#383a42",
			raised: "#eaeaeb",
			control: "#eaeaeb",
			border: "#dbdbdc",
			accent: "#1592ff",
			mutedForeground: "#8e8e90",
			ring: "#4f67e3",
		},
	});

	return () => {};
}
