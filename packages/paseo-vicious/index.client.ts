import type { PluginClientContext } from "@getpaseo/plugin/client";

// Vicious for Paseo, ported from the Obsidian theme `zaheralmajed/vicious-theme-obsidian` by zaheralmajed.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "vicious",
		name: "Vicious",
		appearance: "dark",
		colors: {
			background: "#08090e",
			foreground: "#fbfcfc",
			raised: "#08090e",
			control: "#08090e",
			border: "#292a2f",
			accent: "#2d8b62",
			mutedForeground: "#818184",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "vicious-light",
		name: "Vicious Light",
		appearance: "light",
		colors: {
			background: "#fbfcfc",
			foreground: "#08090e",
			raised: "#fbfcfc",
			control: "#fbfcfc",
			border: "#818184",
			accent: "#2d8b62",
			mutedForeground: "#818184",
			ring: "#287d58",
		},
	});

	return () => {};
}
