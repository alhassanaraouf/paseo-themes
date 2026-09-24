import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dark Graphite for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-Graphite` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dark-graphite",
		name: "Dark Graphite",
		appearance: "dark",
		colors: {
			background: "#161719",
			foreground: "#d5d5d5",
			raised: "#202123",
			control: "#161719",
			border: "#949594",
			accent: "#3c95fa",
			mutedForeground: "#949594",
			ring: "#2a3038",
		},
	});

	return () => {};
}
