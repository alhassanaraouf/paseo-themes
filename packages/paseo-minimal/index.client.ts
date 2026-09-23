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
			accent: "#163241",
			mutedForeground: "#8f8e88",
			ring: "#133344",
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
			accent: "#163241",
			mutedForeground: "#7d7f84",
			ring: "#18313e",
		},
	});

	return () => {};
}
