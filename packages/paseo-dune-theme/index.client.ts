import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dune for Paseo, ported from the Obsidian theme `jopp-gh/Obsidian-Dune84` by jopp-gh.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dune",
		name: "Dune",
		appearance: "dark",
		colors: {
			background: "#283037",
			foreground: "#dcddde",
			raised: "#232529",
			control: "#283037",
			border: "#77736a",
			accent: "#ff8c00",
			mutedForeground: "#999999",
			ring: "#ff8c00",
		},
	});

	client.addTheme({
		id: "dune-light",
		name: "Dune Light",
		appearance: "light",
		colors: {
			background: "#e9a791",
			foreground: "#2e3338",
			raised: "#899aac",
			control: "#e9a791",
			border: "#8b8b8b",
			accent: "#ff8c00",
			mutedForeground: "#6c6c6c",
			ring: "#ff8c00",
		},
	});

	return () => {};
}
