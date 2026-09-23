import type { PluginClientContext } from "@getpaseo/plugin/client";

// Material Ocean for Paseo, ported from the Obsidian theme `dragonwocky/obsidian-material-ocean` by dragonwocky.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "material-ocean",
		name: "Material Ocean",
		appearance: "dark",
		colors: {
			background: "#0f111a",
			foreground: "#b6b7be",
			raised: "#0b0d13",
			control: "#0b0d13",
			border: "#1e2537",
			accent: "#2d8b62",
			mutedForeground: "#697086",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "material-ocean-light",
		name: "Material Ocean Light",
		appearance: "light",
		colors: {
			background: "#0f111a",
			foreground: "#b6b7be",
			raised: "#0b0d13",
			control: "#0b0d13",
			border: "#1e2537",
			accent: "#2d8b62",
			mutedForeground: "#697086",
			ring: "#287d58",
		},
	});

	return () => {};
}
