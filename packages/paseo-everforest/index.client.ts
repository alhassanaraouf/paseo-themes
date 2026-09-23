import type { PluginClientContext } from "@getpaseo/plugin/client";

// Everforest for Paseo, ported from the Obsidian theme `0xglitchbyte/obsidian_everforest` by 0xglitchbyte.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "everforest",
		name: "Everforest",
		appearance: "dark",
		colors: {
			background: "#2f383e",
			foreground: "#d3c6aa",
			raised: "#374247",
			control: "#272f34",
			border: "#525c62",
			accent: "#569d79",
			mutedForeground: "#9aa79d",
			ring: "#83c092",
		},
	});

	client.addTheme({
		id: "everforest-light",
		name: "Everforest Light",
		appearance: "light",
		colors: {
			background: "#fdf6e3",
			foreground: "#5c6a72",
			raised: "#f3efda",
			control: "#f6f1dd",
			border: "#dfdbc8",
			accent: "#6ec398",
			mutedForeground: "#879686",
			ring: "#569d79",
		},
	});

	return () => {};
}
