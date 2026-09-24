import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ono Sendai for Paseo, ported from the Obsidian theme `cannibalox/ono-sendai_obsdn` by cannibalox.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ono-sendai",
		name: "Ono Sendai",
		appearance: "dark",
		colors: {
			background: "#17191a",
			foreground: "#dcddde",
			raised: "#0f5172",
			control: "#2a2a2a",
			border: "#000000",
			accent: "#20abe9",
			mutedForeground: "#898b85",
			ring: "#1da3d6",
		},
	});

	client.addTheme({
		id: "ono-sendai-light",
		name: "Ono Sendai Light",
		appearance: "light",
		colors: {
			background: "#d1cabf",
			foreground: "#2e3338",
			raised: "#eeb157",
			control: "#f2f3f5",
			border: "#4b6e8b",
			accent: "#e24822",
			mutedForeground: "#694f3a",
			ring: "#f3bf14",
		},
	});

	return () => {};
}
