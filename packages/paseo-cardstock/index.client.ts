import type { PluginClientContext } from "@getpaseo/plugin/client";

// Cardstock for Paseo, ported from the Obsidian theme `cassidoo/cardstock` by cassidoo.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "cardstock",
		name: "Cardstock",
		appearance: "dark",
		colors: {
			background: "#2f2a27",
			foreground: "#ffffff",
			raised: "#2f2a27",
			control: "#38312e",
			border: "#38312e",
			accent: "#c95454",
			mutedForeground: "#f0eae2",
			ring: "#c95454",
		},
	});

	client.addTheme({
		id: "cardstock-light",
		name: "Cardstock Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#2d2c2c",
			raised: "#ffffff",
			control: "#f0eae2",
			border: "#f0eae2",
			accent: "#c95454",
			mutedForeground: "#949494",
			ring: "#c95454",
		},
	});

	return () => {};
}
