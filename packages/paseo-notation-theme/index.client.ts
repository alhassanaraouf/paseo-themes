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
			control: "#2a2a2a",
			border: "#4c5053",
			accent: "#2eaadc",
			mutedForeground: "#8d8f91",
			ring: "#2e92bb",
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
			control: "#f2f3f5",
			border: "#e3e3e2",
			accent: "#2eaadc",
			mutedForeground: "#a5a4a1",
			ring: "#58bbe3",
		},
	});

	return () => {};
}
