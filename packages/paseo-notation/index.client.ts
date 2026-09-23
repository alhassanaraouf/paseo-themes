import type { PluginClientContext } from "@getpaseo/plugin/client";

// Notation for Paseo, ported from the Obsidian theme `deathau/Notation-for-Obsidian` by deathau.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "notation",
		name: "Notation",
		appearance: "dark",
		colors: {
			background: "#2f3437",
			foreground: "#ffffff",
			raised: "#363c3f",
			control: "#3d4448",
			border: "#ffffff",
			accent: "#2eaadc",
			mutedForeground: "#ffffff",
			ring: "#2eaadc",
		},
	});

	client.addTheme({
		id: "notation-light",
		name: "Notation Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#37352f",
			raised: "#f4f5f6",
			control: "#f4f5f6",
			border: "#37352f",
			accent: "#2eaadc",
			mutedForeground: "#37352f",
			ring: "#2eaadc",
		},
	});

	return () => {};
}
