import type { PluginClientContext } from "@getpaseo/plugin/client";

// Charcoal for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-Charcoal` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "charcoal",
		name: "Charcoal",
		appearance: "dark",
		colors: {
			background: "#222527",
			foreground: "#959595",
			raised: "#1c1e21",
			control: "#222527",
			border: "#6d6d6d",
			accent: "#9bb7c5",
			mutedForeground: "#6d6d6d",
			ring: "#3c444c",
		},
	});

	client.addTheme({
		id: "charcoal-light",
		name: "Charcoal Light",
		appearance: "light",
		colors: {
			background: "#222527",
			foreground: "#959595",
			raised: "#1c1e21",
			control: "#222527",
			border: "#6d6d6d",
			accent: "#9bb7c5",
			mutedForeground: "#6d6d6d",
			ring: "#3c444c",
		},
	});

	return () => {};
}
