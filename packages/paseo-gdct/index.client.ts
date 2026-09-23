import type { PluginClientContext } from "@getpaseo/plugin/client";

// GDCT for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-GDCT` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "gdct",
		name: "GDCT",
		appearance: "dark",
		colors: {
			background: "#fefefe",
			foreground: "#27384b",
			raised: "#fefefe",
			control: "#000000",
			border: "#828282",
			accent: "#000000",
			mutedForeground: "#828282",
			ring: "#e8a7a5",
		},
	});

	client.addTheme({
		id: "gdct-light",
		name: "GDCT Light",
		appearance: "light",
		colors: {
			background: "#fefefe",
			foreground: "#27384b",
			raised: "#fefefe",
			control: "#000000",
			border: "#828282",
			accent: "#000000",
			mutedForeground: "#828282",
			ring: "#e8a7a5",
		},
	});

	return () => {};
}
