import type { PluginClientContext } from "@getpaseo/plugin/client";

// Everblush for Paseo, ported from the Obsidian theme `everblush/Obsidian` by everblush.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "everblush",
		name: "Everblush",
		appearance: "dark",
		colors: {
			background: "#0f1619",
			foreground: "#d5d5d5",
			raised: "#0a1114",
			control: "#1e2528",
			border: "#0f1619",
			accent: "#bab3e5",
			mutedForeground: "#d0d0d0",
			ring: "#bab3e5",
		},
	});

	client.addTheme({
		id: "everblush-light",
		name: "Everblush Light",
		appearance: "light",
		colors: {
			background: "#dadada",
			foreground: "#141b1e",
			raised: "#d5d5d5",
			control: "#d5d5d5",
			border: "#d0d0d0",
			accent: "#454c4e",
			mutedForeground: "#1e2528",
			ring: "#454c4e",
		},
	});

	return () => {};
}
