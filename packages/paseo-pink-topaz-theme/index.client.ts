import type { PluginClientContext } from "@getpaseo/plugin/client";

// Pink Topaz for Paseo, ported from the Obsidian theme `shaggyfeng/obsidian-Pink-topaz-theme` by shaggyfeng.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "pink-topaz",
		name: "Pink Topaz",
		appearance: "dark",
		colors: {
			background: "#212121",
			foreground: "#efe9d9",
			raised: "#242424",
			control: "#f39ba0",
			border: "#191919",
			accent: "#f39ba0",
			mutedForeground: "#efe9d9",
			ring: "#f93759",
		},
	});

	client.addTheme({
		id: "pink-topaz-light",
		name: "Pink Topaz Light",
		appearance: "light",
		colors: {
			background: "#efe9d9",
			foreground: "#37291a",
			raised: "#efe9d9",
			control: "#f39ba0",
			border: "#000000",
			accent: "#f5a7a2",
			mutedForeground: "#37291a",
			ring: "#fd355a",
		},
	});

	return () => {};
}
