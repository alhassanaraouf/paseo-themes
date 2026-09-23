import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dracula Slim for Paseo, ported from the Obsidian theme `blackwew/Dracula-Slim` by blackwew.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dracula-slim",
		name: "Dracula Slim",
		appearance: "dark",
		colors: {
			background: "#282a36",
			foreground: "#f8f8f2",
			raised: "#282a36",
			control: "#44475a",
			border: "#4f505a",
			accent: "#b294bb",
			mutedForeground: "#babab6",
			ring: "#b294bb",
		},
	});

	client.addTheme({
		id: "dracula-slim-light",
		name: "Dracula Slim Light",
		appearance: "light",
		colors: {
			background: "#282a36",
			foreground: "#f8f8f2",
			raised: "#282a36",
			control: "#44475a",
			border: "#232530",
			accent: "#b294bb",
			mutedForeground: "#f8f8f2",
			ring: "#b294bb",
		},
	});

	return () => {};
}
