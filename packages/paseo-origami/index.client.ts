import type { PluginClientContext } from "@getpaseo/plugin/client";

// Origami for Paseo, ported from the Obsidian theme `7368697661/Origami` by kneecaps.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "origami",
		name: "Origami",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#c5c5c5",
			raised: "#424242",
			control: "#000000",
			border: "#ffffff",
			accent: "#e17c60",
			mutedForeground: "#a7a7a7",
			ring: "#e99888",
		},
	});

	client.addTheme({
		id: "origami-light",
		name: "Origami Light",
		appearance: "light",
		colors: {
			background: "#fbf1c7",
			foreground: "#3c3836",
			raised: "#ebdbb2",
			control: "#e4d7ae",
			border: "#bdae93",
			accent: "#e17c60",
			mutedForeground: "#504945",
			ring: "#e99888",
		},
	});

	return () => {};
}
