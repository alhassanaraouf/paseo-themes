import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dune for Paseo, ported from the Obsidian theme `jopp-gh/Obsidian-Dune84` by jopp-gh.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dune",
		name: "Dune",
		appearance: "dark",
		colors: {
			background: "#283037",
			foreground: "#000000",
			raised: "#232529",
			control: "#283037",
			border: "#77736a",
			accent: "#2d8b62",
			mutedForeground: "#000000",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "dune-light",
		name: "Dune Light",
		appearance: "light",
		colors: {
			background: "#e9a791",
			foreground: "#000000",
			raised: "#899aac",
			control: "#e9a791",
			border: "#8b8b8b",
			accent: "#2d8b62",
			mutedForeground: "#000000",
			ring: "#287d58",
		},
	});

	return () => {};
}
