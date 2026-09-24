import type { PluginClientContext } from "@getpaseo/plugin/client";

// halcyon for Paseo, ported from the Obsidian theme `dbarenholz/halcyon-obsidian` by dbarenholz.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "halcyon",
		name: "halcyon",
		appearance: "dark",
		colors: {
			background: "#1d2433",
			foreground: "#d7dce2",
			raised: "#171c28",
			control: "#2f3b54",
			border: "#6679a4",
			accent: "#ffcc66",
			mutedForeground: "#a2aabc",
			ring: "#ffd580",
		},
	});

	client.addTheme({
		id: "halcyon-light",
		name: "halcyon Light",
		appearance: "light",
		colors: {
			background: "#1d2433",
			foreground: "#d7dce2",
			raised: "#171c28",
			control: "#2f3b54",
			border: "#6679a4",
			accent: "#ffcc66",
			mutedForeground: "#a2aabc",
			ring: "#ffd580",
		},
	});

	return () => {};
}
