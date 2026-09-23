import type { PluginClientContext } from "@getpaseo/plugin/client";

// Shiba Inu for Paseo, ported from the Obsidian theme `faroukx/Obsidian-shiba-inu-theme` by faroukx.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "shiba-inu",
		name: "Shiba Inu",
		appearance: "dark",
		colors: {
			background: "#141414",
			foreground: "#d4d4d4",
			raised: "#191a1d",
			control: "#191a1d",
			border: "#302d41",
			accent: "#ebbcba",
			mutedForeground: "#a79cb0",
			ring: "#ebbcba",
		},
	});

	client.addTheme({
		id: "shiba-inu-light",
		name: "Shiba Inu Light",
		appearance: "light",
		colors: {
			background: "#f8ebe0",
			foreground: "#56647a",
			raised: "#f7e3d5",
			control: "#f7e3d5",
			border: "#d1c9c2",
			accent: "#d06d6c",
			mutedForeground: "#56647a",
			ring: "#d06d6c",
		},
	});

	return () => {};
}
