import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dracula for Obsidian for Paseo, ported from the Obsidian theme `jarodise/Dracula-for-Obsidian.md` by jarodise.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dracula-for-obsidian",
		name: "Dracula for Obsidian",
		appearance: "dark",
		colors: {
			background: "#282a36",
			foreground: "#f8f8f2",
			raised: "#44475a",
			control: "#44475a",
			border: "#f8f8f2",
			accent: "#ffb86c",
			mutedForeground: "#f8f8f2",
			ring: "#ff5555",
		},
	});

	client.addTheme({
		id: "dracula-for-obsidian-light",
		name: "Dracula for Obsidian Light",
		appearance: "light",
		colors: {
			background: "#282a36",
			foreground: "#f8f8f2",
			raised: "#44475a",
			control: "#44475a",
			border: "#f8f8f2",
			accent: "#ffb86c",
			mutedForeground: "#f8f8f2",
			ring: "#ff5555",
		},
	});

	return () => {};
}
