import type { PluginClientContext } from "@getpaseo/plugin/client";

// Tokyo Night Storm for Paseo, ported from the Obsidian theme `arozx/obsidian_tokyo-night-storm` by arozx.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "tokyo-night-storm",
		name: "Tokyo Night Storm",
		appearance: "dark",
		colors: {
			background: "#24283b",
			foreground: "#c0caf5",
			raised: "#24283b",
			control: "#24283b",
			border: "#414868",
			accent: "#2d8b62",
			mutedForeground: "#a9b1d6",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "tokyo-night-storm-light",
		name: "Tokyo Night Storm Light",
		appearance: "light",
		colors: {
			background: "#24283b",
			foreground: "#c0caf5",
			raised: "#24283b",
			control: "#24283b",
			border: "#414868",
			accent: "#2d8b62",
			mutedForeground: "#a9b1d6",
			ring: "#287d58",
		},
	});

	return () => {};
}
