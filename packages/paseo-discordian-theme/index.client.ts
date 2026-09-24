import type { PluginClientContext } from "@getpaseo/plugin/client";

// Discordian for Paseo, ported from the Obsidian theme `radekkozak/discordian` by radekkozak.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "discordian",
		name: "Discordian",
		appearance: "dark",
		colors: {
			background: "#2e3035",
			foreground: "#d0d1d2",
			raised: "#2b2d31",
			control: "#44475a",
			border: "#212326",
			accent: "#b088e7",
			mutedForeground: "#8d9196",
			ring: "#b996ea",
		},
	});

	client.addTheme({
		id: "discordian-light",
		name: "Discordian Light",
		appearance: "light",
		colors: {
			background: "#2e3035",
			foreground: "#d0d1d2",
			raised: "#2b2d31",
			control: "#44475a",
			border: "#212326",
			accent: "#b088e7",
			mutedForeground: "#8d9196",
			ring: "#9e7ad0",
		},
	});

	return () => {};
}
