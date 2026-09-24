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

	return () => {};
}
