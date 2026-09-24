import type { PluginClientContext } from "@getpaseo/plugin/client";

// obsidian_ia for Paseo, ported from the Obsidian theme `rcvd/obsidian_ia` by rcvd.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsidian-ia",
		name: "obsidian_ia",
		appearance: "dark",
		colors: {
			background: "#191a19",
			foreground: "#cbcccc",
			raised: "#141514",
			control: "#191a19",
			border: "#424342",
			accent: "#00c1ff",
			mutedForeground: "#ecebea",
			ring: "#00b1ef",
		},
	});

	client.addTheme({
		id: "obsidian-ia-light",
		name: "obsidian_ia Light",
		appearance: "light",
		colors: {
			background: "#f7f7f7",
			foreground: "#191919",
			raised: "#fcfcfc",
			control: "#f7f7f7",
			border: "#d9d9d9",
			accent: "#00b1ef",
			mutedForeground: "#101010",
			ring: "#00c1ff",
		},
	});

	return () => {};
}
