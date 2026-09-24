import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ayu for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-Ayu` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ayu",
		name: "Ayu",
		appearance: "light",
		colors: {
			background: "#f9f9fb",
			foreground: "#595371",
			raised: "#fbf9f9",
			control: "#f9f9fb",
			border: "#b1b4b9",
			accent: "#000000",
			mutedForeground: "#b1b4b9",
			ring: "#e3eef2",
		},
	});

	return () => {};
}
