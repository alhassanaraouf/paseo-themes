import type { PluginClientContext } from "@getpaseo/plugin/client";

// Aura for Paseo, ported from the Obsidian theme `shadowash8/obsidian-aura` by shadowash8.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "aura",
		name: "Aura",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#e27aff",
			raised: "#020202",
			control: "#020202",
			border: "#2c1931",
			accent: "#bb9af7",
			mutedForeground: "#e27aff",
			ring: "#bb9af7",
		},
	});

	client.addTheme({
		id: "aura-light",
		name: "Aura Light",
		appearance: "light",
		colors: {
			background: "#d5d6db",
			foreground: "#16161d",
			raised: "#cbccd1",
			control: "#d3d4d9",
			border: "#cecacd",
			accent: "#bb9af7",
			mutedForeground: "#16161d",
			ring: "#bb9af7",
		},
	});

	return () => {};
}
