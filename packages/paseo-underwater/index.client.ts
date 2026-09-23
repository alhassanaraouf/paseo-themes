import type { PluginClientContext } from "@getpaseo/plugin/client";

// Underwater for Paseo, ported from the Obsidian theme `seniblue/Underwater` by seniblue.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "underwater",
		name: "Underwater",
		appearance: "dark",
		colors: {
			background: "#19192e",
			foreground: "#000000",
			raised: "#19192e",
			control: "#212037",
			border: "#303e55",
			accent: "#bba379",
			mutedForeground: "#a09a79",
			ring: "#bba379",
		},
	});

	client.addTheme({
		id: "underwater-light",
		name: "Underwater Light",
		appearance: "light",
		colors: {
			background: "#f5efee",
			foreground: "#000000",
			raised: "#f5efee",
			control: "#e6dad7",
			border: "#d1c9c1",
			accent: "#8c2333",
			mutedForeground: "#7f8284",
			ring: "#8c2333",
		},
	});

	return () => {};
}
