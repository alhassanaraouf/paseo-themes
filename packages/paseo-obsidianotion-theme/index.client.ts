import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obsidianotion for Paseo, ported from the Obsidian theme `diegoeis/obsidianotion` by Diego Eis.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsidianotion",
		name: "Obsidianotion",
		appearance: "dark",
		colors: {
			background: "#1f1f1f",
			foreground: "#e6e6e4",
			raised: "#191919",
			control: "#2a2a2a",
			border: "#2c2c2c",
			accent: "#4dabf7",
			mutedForeground: "#9b9a97",
			ring: "#74c0fc",
		},
	});

	client.addTheme({
		id: "obsidianotion-light",
		name: "Obsidianotion Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#31302e",
			raised: "#f9f8f7",
			control: "#ffffff",
			border: "#e6e6e6",
			accent: "#0075de",
			mutedForeground: "#615d59",
			ring: "#005bab",
		},
	});

	return () => {};
}
