import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dracula Official for Paseo, ported from the Obsidian theme `dracula/obsidian` by dracula.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dracula-official",
		name: "Dracula Official",
		appearance: "dark",
		colors: {
			background: "#282a36",
			foreground: "#f8f8f2",
			raised: "#20212b",
			control: "#44475a",
			border: "#363636",
			accent: "#50fa7b",
			mutedForeground: "#999999",
			ring: "#65fa8a",
		},
	});

	client.addTheme({
		id: "dracula-official-light",
		name: "Dracula Official Light",
		appearance: "light",
		colors: {
			background: "#282a36",
			foreground: "#f8f8f2",
			raised: "#20212b",
			control: "#44475a",
			border: "#363636",
			accent: "#50fa7b",
			mutedForeground: "#999999",
			ring: "#65fa8a",
		},
	});

	return () => {};
}
