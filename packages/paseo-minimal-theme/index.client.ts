import type { PluginClientContext } from "@getpaseo/plugin/client";

// Minimal for Paseo, ported from the Obsidian theme `kepano/obsidian-minimal` by kepano.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "minimal",
		name: "Minimal",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#bfbdb6",
			raised: "#24262a",
			control: "#24262a",
			border: "#002b36",
			accent: "#7992a0",
			mutedForeground: "#8f8e88",
			ring: "#889eaa",
		},
	});

	client.addTheme({
		id: "minimal-light",
		name: "Minimal Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#26272b",
			raised: "#ffffff",
			control: "#f5f6f8",
			border: "#e6e8ec",
			accent: "#7c95a2",
			mutedForeground: "#7d7f84",
			ring: "#6a8695",
		},
	});

	return () => {};
}
