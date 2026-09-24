import type { PluginClientContext } from "@getpaseo/plugin/client";

// Flexoki for Paseo, ported from the Obsidian theme `kepano/flexoki-obsidian` by kepano.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "flexoki",
		name: "Flexoki",
		appearance: "dark",
		colors: {
			background: "#100f0f",
			foreground: "#cecdc3",
			raised: "#1c1b1a",
			control: "#282726",
			border: "#282726",
			accent: "#3aa99f",
			mutedForeground: "#6f6e69",
			ring: "#5cc4ba",
		},
	});

	client.addTheme({
		id: "flexoki-light",
		name: "Flexoki Light",
		appearance: "light",
		colors: {
			background: "#fffcf0",
			foreground: "#100f0f",
			raised: "#f2f0e5",
			control: "#e6e4d9",
			border: "#e6e4d9",
			accent: "#24837b",
			mutedForeground: "#878580",
			ring: "#1d6b64",
		},
	});

	return () => {};
}
