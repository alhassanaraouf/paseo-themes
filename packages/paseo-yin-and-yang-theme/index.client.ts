import type { PluginClientContext } from "@getpaseo/plugin/client";

// Yin and Yang for Paseo, ported from the Obsidian theme `chetachiezikeuzor/Yin-and-Yang-Theme` by chetachiezikeuzor.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "yin-and-yang",
		name: "Yin and Yang",
		appearance: "dark",
		colors: {
			background: "#0a0d10",
			foreground: "#f2f8fd",
			raised: "#0e1316",
			control: "#141a1f",
			border: "#ecedf1",
			accent: "#ffccf1",
			mutedForeground: "#8ca4b5",
			ring: "#ffb2e9",
		},
	});

	client.addTheme({
		id: "yin-and-yang-light",
		name: "Yin and Yang Light",
		appearance: "light",
		colors: {
			background: "#fcfdfd",
			foreground: "#1d282f",
			raised: "#ecf0f3",
			control: "#eff3f5",
			border: "#e0e6eb",
			accent: "#d9adff",
			mutedForeground: "#5a7487",
			ring: "#e0bdff",
		},
	});

	return () => {};
}
