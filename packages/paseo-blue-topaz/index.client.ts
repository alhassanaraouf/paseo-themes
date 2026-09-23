import type { PluginClientContext } from "@getpaseo/plugin/client";

// Blue Topaz for Paseo, ported from the Obsidian theme `pkm-er/Blue-Topaz_Obsidian-css` by pkm-er.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "blue-topaz",
		name: "Blue Topaz",
		appearance: "dark",
		colors: {
			background: "#1f1f1f",
			foreground: "#d4d4d4",
			raised: "#000000",
			control: "#000000",
			border: "#151a1e",
			accent: "#95a503",
			mutedForeground: "#828fa6",
			ring: "#95a503",
		},
	});

	client.addTheme({
		id: "blue-topaz-light",
		name: "Blue Topaz Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#212121",
			raised: "#ffffff",
			control: "#edf2f8",
			border: "#bfbfbf",
			accent: "#42a1fa",
			mutedForeground: "#525252",
			ring: "#3b91e1",
		},
	});

	return () => {};
}
