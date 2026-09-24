import type { PluginClientContext } from "@getpaseo/plugin/client";

// Blue Topaz for Paseo, ported from the Obsidian theme `pkm-er/Blue-Topaz_Obsidian-css` by pkm-er.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "blue-topaz",
		name: "Blue Topaz",
		appearance: "dark",
		colors: {
			background: "#1f1f1f",
			foreground: "#c6c6c6",
			raised: "#000000",
			control: "#2b2b2b",
			border: "#343434",
			accent: "#95a503",
			mutedForeground: "#8a8a8a",
			ring: "#95a503",
		},
	});

	client.addTheme({
		id: "blue-topaz-light",
		name: "Blue Topaz Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#0e0e0e",
			raised: "#ffffff",
			control: "#efefef",
			border: "#dddddd",
			accent: "#42a1fa",
			mutedForeground: "#7f7f7f",
			ring: "#42a1fa",
		},
	});

	return () => {};
}
