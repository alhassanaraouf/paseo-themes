import type { PluginClientContext } from "@getpaseo/plugin/client";

// Shiba Inu for Paseo, ported from the Obsidian theme `faroukx/Obsidian-shiba-inu-theme` by faroukx.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "shiba-inu",
		name: "Shiba Inu",
		appearance: "dark",
		colors: {
			background: "#2a2d3d",
			foreground: "#c6ceef",
			raised: "#262a3a",
			control: "#414559",
			border: "#414559",
			accent: "#ebbcba",
			mutedForeground: "#949bb7",
			ring: "#ebbcba",
		},
	});

	client.addTheme({
		id: "shiba-inu-light",
		name: "Shiba Inu Light",
		appearance: "light",
		colors: {
			background: "#fcfcfc",
			foreground: "#4c4f69",
			raised: "#f3ecf3",
			control: "#dde1ee",
			border: "#bcc0cc",
			accent: "#de9584",
			mutedForeground: "#4c4f69",
			ring: "#de9584",
		},
	});

	return () => {};
}
