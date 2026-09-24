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
			control: "#1e2537",
			border: "#1e2537",
			accent: "#ff475a",
			mutedForeground: "#9093a2",
			ring: "#ff475a",
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
			control: "#1e2537",
			border: "#1e2537",
			accent: "#ff475a",
			mutedForeground: "#9093a2",
			ring: "#ff475a",
		},
	});

	return () => {};
}
