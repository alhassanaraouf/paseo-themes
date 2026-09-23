import type { PluginClientContext } from "@getpaseo/plugin/client";

// Panic Mode for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-Panic_Mode` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "panic-mode",
		name: "Panic Mode",
		appearance: "dark",
		colors: {
			background: "#151e2d",
			foreground: "#e0e2d5",
			raised: "#151e2d",
			control: "#0e141e",
			border: "#a1a1a1",
			accent: "#000000",
			mutedForeground: "#a1a1a1",
			ring: "#506682",
		},
	});

	client.addTheme({
		id: "panic-mode-light",
		name: "Panic Mode Light",
		appearance: "light",
		colors: {
			background: "#151e2d",
			foreground: "#e0e2d5",
			raised: "#151e2d",
			control: "#0e141e",
			border: "#a1a1a1",
			accent: "#000000",
			mutedForeground: "#a1a1a1",
			ring: "#506682",
		},
	});

	return () => {};
}
