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
			accent: "#f1cb83",
			mutedForeground: "#818184",
			ring: "#f1cb83",
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
			border: "#dddddd",
			accent: "#f1cb83",
			mutedForeground: "#818184",
			ring: "#f1cb83",
		},
	});

	return () => {};
}
