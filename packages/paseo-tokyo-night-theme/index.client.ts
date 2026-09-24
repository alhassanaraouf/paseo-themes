import type { PluginClientContext } from "@getpaseo/plugin/client";

// Tokyo Night for Paseo, ported from the Obsidian theme `tcmmichaelb139/obsidian-tokyonight` by tcmmichaelb139.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "tokyo-night",
		name: "Tokyo Night",
		appearance: "dark",
		colors: {
			background: "#1a1b26",
			foreground: "#c0caf5",
			raised: "#16161e",
			control: "#16161e",
			border: "#292e42",
			accent: "#80d0ff",
			mutedForeground: "#a9b1d6",
			ring: "#7aa2f7",
		},
	});

	client.addTheme({
		id: "tokyo-night-light",
		name: "Tokyo Night Light",
		appearance: "light",
		colors: {
			background: "#d5d6db",
			foreground: "#343b58",
			raised: "#cbccd1",
			control: "#cbccd1",
			border: "#dcdee2",
			accent: "#0f87cc",
			mutedForeground: "#272e4b",
			ring: "#34548a",
		},
	});

	return () => {};
}
