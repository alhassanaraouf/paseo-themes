import type { PluginClientContext } from "@getpaseo/plugin/client";

// GDCT Dark for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-GDCT_Dark` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "gdct-dark",
		name: "GDCT Dark",
		appearance: "dark",
		colors: {
			background: "#313030",
			foreground: "#fffdf9",
			raised: "#313030",
			control: "#000000",
			border: "#6f6f6f",
			accent: "#000000",
			mutedForeground: "#6f6f6f",
			ring: "#fafafa",
		},
	});

	client.addTheme({
		id: "gdct-dark-light",
		name: "GDCT Dark Light",
		appearance: "light",
		colors: {
			background: "#313030",
			foreground: "#fffdf9",
			raised: "#313030",
			control: "#000000",
			border: "#6f6f6f",
			accent: "#000000",
			mutedForeground: "#6f6f6f",
			ring: "#fafafa",
		},
	});

	return () => {};
}
